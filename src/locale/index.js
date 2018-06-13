import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from 'iview/src/locale/lang/en-US';
import zh from 'iview/src/locale/lang/zh-CN';
import locales from './locale';

Vue.use(VueI18n);
Vue.locale = () => {};

// 自动设置语言
const navLang = navigator.language;
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false;
const lang = window.localStorage.lang || localLang || 'zh-CN';
Vue.config.lang = lang;

const messages = {
  en: Object.assign(locales['en-US'], en),
  zh: Object.assign(locales['zh-CN'], zh)
};

const i18n = new VueI18n({
  locale: 'zh', // set locale
  messages // set locale messages
});

export default i18n;