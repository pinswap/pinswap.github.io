(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["destroy"],{7856:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Computingpower"},[n("div",{staticClass:"title"},[n("div",{staticClass:"head"},[n("span",[t._v(t._s(t.$t("destory.text1")))])]),n("div",{staticClass:"middle"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{placeholder:t.$t("destory.text3"),type:"number"},domProps:{value:t.amount},on:{input:[function(e){e.target.composing||(t.amount=e.target.value)},t.input]}}),n("van-button",{on:{click:t.max}},[t._v(t._s(t.$t("destory.text4")))])],1),n("div",{staticClass:"balance"},[n("span",[t._v(t._s(t.$t("destory.text2")))]),n("span",[t._v(t._s(t.balance))])]),n("div",{staticClass:"canGetPower"},[n("span",[t._v(t._s(t.$t("destory.text6")))]),n("span",[t._v(t._s(t.power))])]),n("van-button",{on:{click:t.destroy}},[t._v(t._s(t.btnText))])],1),n("div",{staticClass:"Detail"},[t._v(t._s(t.$t("destory.text8")))]),n("div",{staticClass:"record"},[n("div",{staticClass:"content"},[n("div",[n("span",[t._v(t._s(t.$t("destory.text9")))]),n("span",[t._v(t._s(t.$t("destory.text10")))]),n("span",[t._v(t._s(t.$t("destory.text11")))])]),t._l(t.list,(function(e){return n("div",{key:e},[n("span",[t._v(t._s(e.time))]),n("span",[t._v(t._s(e.amount))]),n("span",{staticClass:"blue"},[t._v("+"+t._s(e.power))])])}))],2)])])},a=[],s=(n("a9e3"),n("d3b7"),n("25f0"),n("96cf"),n("1da1")),i={data:function(){return{balance:0,allowance:0,amount:"",power:0,inputing:!1,list:[],isStart:!1}},computed:{btnText:function(){var t=Number(this.amount)<=this.allowance;return this.$t(t?"destory.text7":"HJZCommunity.text28")}},created:function(){this.$pingSwapContracts&&this.init()},methods:{init:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$tronWeb.call({contractAddress:t.$pingSwapContracts.Community.address,method:"isStart"});case 2:return t.isStart=e.sent,e.next=5,t.$tronWeb.call({contractAddress:t.$pingSwapContracts.PinToken.address,method:"balanceOf",parameter:[t.$address]});case 5:return t.balance=e.sent.toString().fromSun(),e.next=8,t.$tronWeb.call({contractAddress:t.$pingSwapContracts.PinToken.address,method:"allowance",parameter:[t.$address,t.$pingSwapContracts.Community.address]});case 8:t.allowance=e.sent.toString().fromSun(),t.$tronWeb.event({contractAddress:t.$pingSwapContracts.Community.address,method:"Destory"}).then((function(e){for(var n=[],r=0;r<e.length;r++)window.tronWeb.address.fromHex(e[r].result.owner)==t.$address&&n.push({time:t.$toTime(Number(e[r].result.time),"Y/M/D H:i"),amount:e[r].result.amount.toString().fromSun(),power:e[r].result.power.toString()});t.list=n}));case 10:case"end":return e.stop()}}),e)})))()},max:function(){this.amount=this.balance,this.input()},input:function(){var t=this;if(this.inputing&&this.amount<=0)return this.power=0,!1;if(this.inputing)return!1;if(this.amount<=0)return this.power=0,!1;this.inputing=!0;var e=setTimeout(Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!(t.amount<=0)){n.next=4;break}return t.inputing=!1,clearTimeout(e),n.abrupt("return",!1);case 4:return n.next=6,t.$tronWeb.call({contractAddress:t.$pingSwapContracts.Community.address,method:"getDestoryGainPower",parameter:[t.amount.toSun()]});case 6:t.power=n.sent.toString(),t.inputing=!1,clearTimeout(e);case 9:case"end":return n.stop()}}),n)}))),1e3)},destroy:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isStart){e.next=4;break}return e.abrupt("return",vant.Toast.fail("合约暂未生效！"));case 4:if(!(Number(t.amount)<1)){e.next=8;break}return e.abrupt("return",vant.Toast.fail(t.$t("destory.text12")));case 8:if(!(Number(t.amount)>Number(t.balance))){e.next=12;break}return e.abrupt("return",vant.Toast.fail(t.$t("destory.text13")));case 12:if(!(Number(t.amount)>t.allowance)){e.next=14;break}return e.abrupt("return",t.approve());case 14:t.$pingSwapContracts.Community.destory(t.amount.toSun()).send({feeLimit:t.$store.state.generalFeeLimit.toSun()}).then(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$loading(n);case 2:r=e.sent,r&&(t.init(),t.amount="",vant.Toast.success(t.$t("destory.text14")));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 15:case"end":return e.stop()}}),e)})))()},approve:function(){var t=this;this.$pingSwapContracts.PinToken.approve(this.$pingSwapContracts.Community.address,"100000000".toSun()).send({feeLimit:this.$store.state.generalFeeLimit.toSun()}).then(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$loading(n);case 2:if(r=e.sent,!r){e.next=8;break}return e.next=6,t.$tronWeb.call({contractAddress:t.$pingSwapContracts.PinToken.address,method:"allowance",parameter:[t.$address,t.$pingSwapContracts.Community.address]});case 6:t.allowance=e.sent.toString().fromSun(),t.destroy();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},o=i,u=o,c=(n("9a58"),n("2877")),d=Object(c["a"])(u,r,a,!1,null,"7e9fdcae",null);e["default"]=d.exports},"8bdb":function(t,e,n){},"9a58":function(t,e,n){"use strict";n("8bdb")}}]);