webpackJsonp([1],{4:function(i,t,e){i.exports=e(5)},5:function(i,t,e){"use strict";var a=e(0),s=function(i){return i&&i.__esModule?i:{default:i}}(a),n=new s.default;xtag.register("x-praise",{content:'<div id="thumb"><div class="a"><div class="b"></div><div class="c"></div></div></div><span class="hide" id="animation">+1</span>',methods:{praise:function(){var i=this;n.clickAction();var t=i.querySelector("#animation");t.className="hide num",setTimeout(function(){t.className="hide"},800)}},events:{click:function(i){var t=this;if(i.target.id="thumb"){var e="";e&&clearTimeout(e),e=setTimeout(function(){t.praise()},500)}}}})}},[4]);