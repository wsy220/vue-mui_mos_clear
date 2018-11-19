import Vue from 'vue'
import App from './App'
import mui from '../../../static/mui/mui.min';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  mounted: function () {
    var main, menu;//mask = mui.createMask(_closeMenu);
    var showMenu = false, mode = 'main-move';
    //mui初始化
    mui.init();
    var subpages = ['home.html', 'teaching.html', 'contact.html', 'news.html', 'my.html'];
    var subpage_style = {
      top: '0px',
      bottom: '51px'
    };

    var aniShow = {};
    //创建子页面，首个选项卡页面显示，其它均隐藏；
    mui.plusReady(function () {
      plus.navigator.setStatusBarStyle('light');
      var self = plus.webview.currentWebview();
      //读取本地存储，检查是否为首次启动
      for (var i = 0; i < 5; i++) {
        var temp = {};
        var sub = plus.webview.create(subpages[i], subpages[i], subpage_style);
        if (i > 0) {
          sub.hide();
        } else {
          temp[subpages[i]] = "true";
          mui.extend(aniShow, temp);
        }
        self.append(sub);
      }

      main = plus.webview.currentWebview();

      //setTimeout的目的是等待窗体动画结束后，再执行create webview操作，避免资源竞争，导致窗口动画不流畅；
      setTimeout(function () {
        //侧滑菜单默认隐藏，这样可以节省内存；
        menu = mui.preload({
          id: 'subpage/leftmenu.html',
          url: 'subpage/leftmenu.html',
          styles: {
            left: 0,
            width: '80%',
            zindex: 9997
          }
        });
      }, 300);
    });
    //当前激活选项
    var activeTab = subpages[0];
    //var title = document.getElementById("title");
    //选项卡点击事件
    mui('.mui-bar-tab').on('tap', 'a', function (e) {
      var targetTab = this.getAttribute('href');
      if (targetTab == activeTab) {
        return;
      }
      //更换标题
      //title.innerHTML = this.querySelector('.mui-tab-label').innerHTML;
      //显示目标选项卡
      //若为iOS平台或非首次显示，则直接显示
      if (mui.os.ios || aniShow[targetTab]) {
        plus.webview.show(targetTab);
      } else {
        //否则，使用fade-in动画，且保存变量
        var temp = {};
        temp[targetTab] = "true";
        mui.extend(aniShow, temp);
        plus.webview.show(targetTab, "fade-in", 300);
      }
      //隐藏当前;
      plus.webview.hide(activeTab);
      //更改当前活跃的选项卡
      activeTab = targetTab;
    });

  }

})
