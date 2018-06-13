<style lang="less">
@import "./home.less";
@import "~@/assets/css/common.less";
</style>

<template>
  <div class="home-main">
    <Row :gutter="10">
      <Col :md="24" :lg="16">
        <Row :gutter="5">
          <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
            <infor-card id-name="user_created_count" :end-val="count.createUser" iconType="android-person-add" color="#2d8cf0" intro-text="今日新增用户"></infor-card>
          </Col>
          <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
            <infor-card id-name="visit_count" :end-val="count.visit" iconType="ios-eye" color="#64d572" :iconSize="50" intro-text="今日浏览量"></infor-card>
          </Col>
          <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
            <infor-card id-name="collection_count" :end-val="count.collection" iconType="upload" color="#ffd572" intro-text="今日数据采集量"></infor-card>
          </Col>
          <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
            <infor-card id-name="transfer_count" :end-val="count.transfer" iconType="shuffle" color="#f25e43" intro-text="今日服务调用量"></infor-card>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row class="margin-top-10">
      <Card>
        <p slot="title" class="card-title">
          <Icon type="ios-shuffle-strong"></Icon>
          上周每日服务调用量(万)
        </p>
        <div class="line-chart-con">
          <service-requests></service-requests>
        </div>
      </Card>
    </Row>
  </div>
</template>

<script>
import serviceRequests from "@/components/service-requests/ServiceRequests.vue";
import inforCard from "@/components/infor-card/InforCard.vue";

export default {
  name: "home",
  components: {
    serviceRequests,
    inforCard
  },
  data() {
    return {
      count: {
        createUser: 496,
        visit: 3264,
        collection: 24389305,
        transfer: 39503498
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
