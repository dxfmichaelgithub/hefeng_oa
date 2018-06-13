<style lang="less">
@import "./login.less";
</style>

<template>
  <div class="login" @keydown.enter="handleSubmit">
    <div class="login-con">
      <Card class="card" :bordered="false">
        <p class="title" slot="title">
          <img class="logo" src="@/assets/img/logo1.png" style="width: 36px;height: 36px;"></img>
          合峰科技自动化办公系统
        </p>
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules">
            <FormItem prop="userName">
              <Input size="large" v-model="form.userName" placeholder="请输入用户名">
                <span slot="prepend">
                  <Icon :size="18" type="person"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input size="large" type="password" v-model="form.password" placeholder="请输入密码">
                <span slot="prepend">
                  <Icon :size="18" type="locked"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem>
              <Button size="large" @click="handleSubmit" type="primary" long>登录</Button>
            </FormItem>
          </Form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      form: {
        userName: "",
        password: ""
      },
      rules: {
        userName: [
          { required: true, message: "账号不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          Cookies.set("user", this.form.userName);
          Cookies.set("password", this.form.password);
          this.$store.commit(
            "setAvator",
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg"
          );
          if (this.form.userName === "admin") {
            Cookies.set("access", 0);
          } else {
            Cookies.set("access", 1);
          }
          this.$router.push({
            name: "home_index"
          });
        }
      });
    }
  }
};
</script>