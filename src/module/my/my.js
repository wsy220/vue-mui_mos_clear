import Vue from 'vue'
import MyApp from './MyApp'
import mui from '../../../static/mui/mui.min';

new Vue({
  el: '#myApp',
  template: '<MyApp/>',
  components: {MyApp},
  mounted: function () {
    mui.plusReady(function () {
      // 隐藏滚动条
      plus.webview.currentWebview().setStyle({
        scrollIndicator: 'none'
      });
    });
  }
})
