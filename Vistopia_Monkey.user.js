// ==UserScript==
// @name            Vistopia_Monkey
// @name:cn         理想猴
// @version      0.0.6
// @namespace       http://tampermonkey.net/
// @description     This userscript does wonderful things
// @description:cn  看理想网页界面自定义
// @description     一款优化Vistopia体验的油猴脚本
// @author          Sherlock-V
// @match           https://www.vistopia.com.cn
// @match           https://www.vistopia.com.cn/*
// @grant           GM_addStyle
// @run-at          document-body
// @license         MIT
// @homepageURL     https://github.com/Ziyueqi-V/Vistopia_Monkey
// @supportURL      https://github.com/Ziyueqi-V/Vistopia_Monkey
// @updateURL       https://github.com/Ziyueqi-V/Vistopia_Monkey/blob/main/Vistopia_Monkey.user.js
// ==/UserScript==
(function () {
  'use strict';

  // Your code here...
  const cssText = `
  .page-home, .page-home .home-content,
.page-article,
.page-detail .detail-content .tabs_wrap,
.page-detail .detail-content .tabs_wrap .el-tabs .el-tabs__header,
.page-detail {
  background: #000000 !important;
}

.comment-list .item-wrap .articleTitle,
.audioList .part-area ul .li_item {
  background: #141414 !important;
}

#web-header {
  background: #1f1f1f !important;
}

.comment_children .child .name {
  color: rgba(255, 255, 255, 0.85) !important;
}

.page-article .article-content .article {
  color: rgba(255, 255, 255, 0.65) !important;
}

.comment_children .child .replied {
  color: rgba(255, 255, 255, 0.45) !important;
}

.page-article .article-content .article[data-v-0c3a9210] a {
  color: #f0dd71 !important;
}
  `;
  GM_addStyle(cssText);

  const style = document.createElement('style')
  const hides = [
    '#juejin > div.view-container div.sidebar.article-sidebar > ul.sidebar-bd-entry',
    '#juejin > div.view-container div.sidebar.article-sidebar > div.sidebar-block.wechat-sidebar-block.pure',
    '#juejin > div.view-container div.main-area.article-area > div.article-end > div.extension-banner',
    '#juejin > div.view-container li.nav-item.vip-entry',
    '#juejin > div.view-container ul > li.nav-item.link-item.special-activity-item',
  ].filter(Boolean)

  style.innerHTML = [
    `${hides.join(',')}{ display: none !important; }`,
  ].join('')

  document.body.appendChild(style)
})();