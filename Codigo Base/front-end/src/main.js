import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMask from "v-mask";
import Vuelidate from "vuelidate";

import { BootstrapVue } from "bootstrap-vue";
import { IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueMask);
Vue.use(Vuelidate);

Vue.config.productionTip = false;
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
