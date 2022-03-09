import Vue from 'vue'
import Example from './Example.vue'

import ModalService from "./services/ModalService";

Vue.config.productionTip = false

Vue.use(ModalService);

new Vue({
  render: h => h(Example),
}).$mount('#app')
