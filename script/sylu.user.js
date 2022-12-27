// ==UserScript==
// @name         沈阳理工大学教务系统自动评价
// @namespace    https://github.com/fzf404/tools
// @version      0.1.0
// @description  用于自动完成教师评价，只适配了沈阳理工大学教务系统。
// @author       fzf404
// @homepage     https://tool.fzf404.art/script
// @downloadURL  https://tool.fzf404.art/script/sylu.user.js
// @updateURL    https://tool.fzf404.art/script/sylu.user.js
// @match        https://jxw.sylu.edu.cn/xspjgl/xspj_cxXspjIndex.html*
// @icon         https://www.sylu.edu.cn/images/favicon.ico
// ==/UserScript==

setTimeout(alert('请自行点击下方的提交按钮！'), 500)

setInterval(
  () => document.querySelectorAll('.input-xspj:nth-child(1) input').forEach((element) => element.click()),
  1000
)
