/*
 * FluidVids
 * ------------
 * Version : 2.4.1
 * Repo    : https://github.com/toddmotto/fluidvids
 * Author  : @toddmotto
 * License : MIT
 */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t:e.fluidvids=t()}(this,function(){"use strict";var e={selector:["iframe"],players:["www.youtube.com","player.vimeo.com"]},t=[".fluidvids {","width: 100%; max-width: 100%; position: relative;","}",".fluidvids-item {","position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;","}"].join(""),i=document.head||document.getElementsByTagName("head")[0],n=function(t){return new RegExp("^(https?:)?//(?:"+e.players.join("|")+").*$","i").test(t)},d=function(e,t){return parseInt(e,10)/parseInt(t,10)*100+"%"},o=function(e){if(n(e.src)&&!e.getAttribute("data-fluidvids")){var t=document.createElement("div");e.parentNode.insertBefore(t,e),e.className+=(e.className?" ":"")+"fluidvids-item",e.setAttribute("data-fluidvids","loaded"),t.className+="fluidvids",t.style.paddingTop=d(e.height,e.width),t.appendChild(e)}},r=function(){var e=document.createElement("div");e.innerHTML="<p>x</p><style>"+t+"</style>",i.appendChild(e.childNodes[1])};return e.render=function(){for(var t=document.querySelectorAll(e.selector.join()),i=t.length;i--;)o(t[i])},e.init=function(t){for(var i in t)e[i]=t[i];e.render(),r()},e});

/* Custom settings for FluidVids */
    fluidvids.init({
    selector: ['iframe', 'object'],
    players: ['www.youtube.com', 'player.vimeo.com', 'www.dailymotion.com']
    });