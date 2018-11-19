import Vue from 'vue'
import NewsApp from './NewsApp'

/* eslint-disable no-new */
new Vue({
  el: '#newsApp',
  template: '<NewsApp/>',
  components: { NewsApp }
})
