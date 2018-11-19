<template>
  <div id="myApp">
    <header id="header" class="mui-bar mui-bar-transparent" style="background-color: rgba(5, 166, 240,0);">
      <h1 class="mui-title">我</h1>
    </header>
    <div class="mui-content">
      <div class="content-head-background">
        <div style="text-align: center;">
          <img id="head_image" src="../../styles/images/light.jpg"/>
        </div>
        <div style="text-align: center; padding-top: 10px; color: #fff;font-weight: 600;font-size: 1.3em;">
          <span>健身团钬</span>
        </div>
        <div style="text-align: center; padding-top: 10px; color: #fff;font-weight: 400;font-size: 0.9em;">
          <span>健身会员</span> | <span>男</span> | <span>178cm</span> | <span>73kg</span>
        </div>
      </div>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <span class="mui-icon"><i class="fa fa-shopping-basket" aria-hidden="true"></i></span>
            <div class="mui-media-body" style="color: #646464;">我的收藏</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <span class="mui-icon"><i class="fa fa-street-view" aria-hidden="true"></i></span>
            <div class="mui-media-body" style="color: #646464;">我的体围</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <span class="mui-icon"><i class="fa fa-bullseye" aria-hidden="true"></i></span>
            <div class="mui-media-body" style="color: #646464;">我的目标</div>
          </a>
        </li>
      </ul>
      <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell js-li" id="userInfo">
          <a href="#account" class="mui-navigate-right"><span class=""><i class="fa fa-user-o"
                                                                          aria-hidden="true"></i></span> &nbsp;&nbsp;个人资料
          </a>
        </li>
        <li class="mui-table-view-cell js-li">
          <a href="#account" class="mui-navigate-right"><span class=""><i class="fa fa-chain"
                                                                          aria-hidden="true"></i></span> &nbsp;&nbsp;账号管理
          </a>
        </li>
        <li class="mui-table-view-cell js-li" id="userPrivacy">
          <a href="#account" class="mui-navigate-right"><span class=""><i class="fa fa-lock"
                                                                          aria-hidden="true"></i></span> &nbsp;&nbsp;隐私
          </a>
        </li>
        <li class="mui-table-view-cell js-li">
          <a href="#account" class="mui-navigate-right"><span class=""><i class="fa fa-th-list" aria-hidden="true"></i></span>&nbsp;&nbsp;通用</a>
        </li>
      </ul>
      <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell js-li" id="userMessage">
          <a href="#account" class="mui-navigate-right"><span class=""><i class="fa fa-envelope-open-o"
                                                                          aria-hidden="true"></i></span> &nbsp;&nbsp;消息推送
          </a>
        </li>
        <li class="mui-table-view-cell js-li">
          <a href="#account" class="mui-navigate-right"><span class=""><i class="fa fa-recycle" aria-hidden="true"></i></span>
            &nbsp;&nbsp;缓存管理
          </a>
        </li>
      </ul>
      <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell js-li">
          <a href="#account" class="mui-navigate-right"><span class=""><i class="fa fa-file-text-o"
                                                                          aria-hidden="true"></i></span> &nbsp;&nbsp;意见反馈
          </a>
        </li>
        <li class="mui-table-view-cell js-li">
          <a href="#account" class="mui-navigate-right"><span class=""><i class="fa fa-headphones"
                                                                          aria-hidden="true"></i></span> &nbsp;&nbsp;问题求助
          </a>
        </li>
        <li class="mui-table-view-cell js-li" id="userAbout">
          <a href="#account" class="mui-navigate-right"><span class=""><i class="fa fa-info-circle"
                                                                          aria-hidden="true"></i></span> &nbsp;&nbsp;关于
          </a>
        </li>
      </ul>
      <ul class="mui-table-view" style="margin-bottom: 40px;">
        <li class="mui-table-view-cell" style="text-align: center;">
          注 销
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

</script>

<style>
  .mui-content img {
    width: 100%;
  }

  .hm-description {
    margin: 15px;
  }

  .hm-description > li {
    font-size: 14px;
    color: #8f8f94;
  }

  .mui-table-view {
    margin-top: 20px;
  }

  #header a {
    font-size: 18px;
    padding-top: 13px;
    padding-bottom: 13px;
  }

  .mui-grid-view.mui-grid-9 .mui-media {
    background-color: #fff;
  }

  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
    height: 18px;
    margin-top: 10px;
    font-size: 13px;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    padding: 8px 15px;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border-right: 1px solid #ffffff;
    border-bottom: 1px solid #fff;
  }

  .mui-grid-view.mui-grid-9 .mui-media .mui-icon {
    font-size: 24px;
    position: relative;
  }

  #head_image {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin-top: 110px;
  }

  .mui-table-view-cell {
    color: #797979;
    font-size: 16px;
  }
</style>
