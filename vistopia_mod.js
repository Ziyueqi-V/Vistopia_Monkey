// ==UserScript==
// @name         vistopia mod
// @license      MIT
// @namespace    http://tampermonkey.net/
// @version      0.2.1
// @description  “看理想”界面自定义
// @author       Sherlock-V
// @match        https://www.vistopia.com.cn/*
// @match        https://www.vistopia.com.cn
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vistopia.com.cn
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    const vistopiaCSS = `
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
`;
    GM_addStyle(vistopiaCSS);

    const style = document.createElement('style')
    const hides = [
        // qrcode_wrap
        '#web > div.page-article > div > div.qrcode_wrap',
        // footer
        '#web-footer',
    ].filter(Boolean)

    style.innerHTML = [
        `${hides.join(',')}{ display: none !important; }`,
    ].join('')

    document.body.appendChild(style)
})();
