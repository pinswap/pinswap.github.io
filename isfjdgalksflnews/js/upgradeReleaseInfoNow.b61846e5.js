(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["upgradeReleaseInfoNow"],{"12fb":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inquire-power"},[n("div",{staticClass:"box"},[n("span",[e._v("当前出矿量")]),n("div",{staticClass:"input-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.todayReleaseValue,expression:"todayReleaseValue"}],attrs:{type:"text",readonly:""},domProps:{value:e.todayReleaseValue},on:{input:function(t){t.target.composing||(e.todayReleaseValue=t.target.value)}}})]),n("van-button",{on:{click:e.upgradeReleaseInfoNow}},[e._v("出矿减半")])],1)])},r=[],s=(n("d3b7"),n("25f0"),n("96cf"),n("1da1")),o={data:function(){return{todayReleaseValue:""}},created:function(){this.$utils&&this.init()},methods:{init:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$utils.call({contractAddress:e.$contracts.Mine.address,method:"todayReleaseValue"});case 2:e.todayReleaseValue=t.sent.toString().fromSun();case 3:case"end":return t.stop()}}),t)})))()},upgradeReleaseInfoNow:function(){var e=this,t=86400*Math.floor(new Date/1e3/86400);this.$contracts.Mine.upgradeReleaseInfoNow(t).send().then(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$loading(n);case 2:a=t.sent,a?(e.init(),vant.Toast.success("成功！")):vant.Toast.fail("失败！");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},i=o,u=i,c=(n("17de"),n("2877")),l=Object(c["a"])(u,a,r,!1,null,"31988f34",null);t["default"]=l.exports},"17de":function(e,t,n){"use strict";n("e922")},e922:function(e,t,n){}}]);