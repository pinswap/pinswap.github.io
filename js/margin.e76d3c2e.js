(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["margin"],{"159b":function(t,e,n){var r=n("da84"),a=n("fdbc"),i=n("17c2"),s=n("9112");for(var c in a){var o=r[c],u=o&&o.prototype;if(u&&u.forEach!==i)try{s(u,"forEach",i)}catch(d){u.forEach=i}}},"17b9":function(t,e,n){},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,a=n("a640"),i=n("ae40"),s=a("forEach"),c=i("forEach");t.exports=s&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"17ca":function(t,e,n){},2388:function(t,e,n){"use strict";n("17b9")},4160:function(t,e,n){"use strict";var r=n("23e7"),a=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"4de4":function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").filter,i=n("1dde"),s=n("ae40"),c=i("filter"),o=s("filter");r({target:"Array",proto:!0,forced:!c||!o},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("ade3");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"5bb1":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbarBox"},[n("div",{staticClass:"Margin navChild"},[n("div",{staticClass:"MarginContent"},[n("div",{staticClass:"MarginContentNumber",on:{click:function(e){return t.$router.push({path:"/record",query:{type:1}})}}},[n("span",[t._v(t._s(t.earnestAmount))]),n("div",{staticClass:"line"},t._l(6,(function(t){return n("div",{key:t})})),0)]),n("div",{staticClass:"MarginContentNumberText"},[n("div",[t._v(t._s(t.$t("margin.text1"))+"(USDT)")])]),n("div",{staticClass:"MarginContentInput"},[n("span",[t._v(t._s(t.$t("margin.text3")))]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text",placeholder:"0.00"},domProps:{value:t.value},on:{input:[function(e){e.target.composing||(t.value=e.target.value)},t.input]}}),n("span",[t._v("USDT")])])]),n("div",{staticClass:"selectNumber"},t._l(t.selectNumberList,(function(e,r){return n("div",{key:r,class:{active:t.active===r},on:{click:function(n){t.active=r,t.value=e}}},[t._v(" "+t._s(e)+" ")])})),0),n("div",{staticClass:"balance"},[t._v(" "+t._s(t.$t("margin.text4"))+" "+t._s(t.balance.usdt)+" USDT ")]),n("div",{staticClass:"MarginContentButton"},[n("van-button",{directives:[{name:"ButClickLimit",rawName:"v-ButClickLimit"}],on:{click:t.transferIn}},[t._v(t._s(t.$t("margin.text5")))]),n("van-button",{directives:[{name:"ButClickLimit",rawName:"v-ButClickLimit"}],on:{click:t.transferOut}},[t._v(t._s(t.$t("margin.text6")))])],1),n("div",{staticClass:"MarginText"},[n("span",[t._v(t._s(t.$t("margin.text1")))]),n("p",[t._v(t._s(t.$t("margin.text7")))])])])]),n("self-authorize",{ref:"authorize",staticClass:"marginAuthorize",on:{send:t.transferIn}})],1)},a=[],i=(n("caad"),n("a9e3"),n("b680"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("96cf"),n("1da1")),s=n("5530"),c=n("aca7"),o={components:{"self-authorize":function(){return Promise.all([n.e("tokenInfo"),n.e("communityManagement~transaction"),n.e("transaction")]).then(n.bind(null,"38fc"))}},data:function(){return{active:"",earnestAmount:0,value:"",orderResult:!1,settingShow:!1,maxEarnestAmount:1e3,isMiner:!1,isStart:!1}},computed:Object(s["a"])({},Vuex.mapState(["balance"])),created:function(){this.$pingSwapContracts&&this.init()},methods:{init:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r,a,i,s,o,u,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$tronWeb.call({contractAddress:t.$pingSwapContracts.Pin.address,method:"isStart"});case 2:return t.isStart=e.sent,e.next=5,t.$tronWeb.call({contractAddress:t.$pingSwapContracts.Pin.address,method:"players",parameter:[t.$address]});case 5:return n=e.sent,r=n.earnestAmount,t.earnestAmount=r.toString().fromSun().toFixed(4),e.next=10,t.$tronWeb.call({contractAddress:t.$pingSwapContracts.Relation.address,method:"_recommerMapping",parameter:[t.$address]});case 10:return a=e.sent,t.isMiner=a!==c["k"],e.next=14,t.$tronWeb.call({contractAddress:t.$pingSwapContracts.Pin.address,method:"getMyNewRounds",parameter:[t.$address]});case 14:if(i=e.sent,!(i.length>0)){e.next=25;break}return e.next=18,t.$tronWeb.call({contractAddress:t.$pingSwapContracts.Pin.address,method:"rounds",parameter:[i[0].toString()]});case 18:return s=e.sent,o=s.prepareBlock,u=s.luckyValue,e.next=23,t.getDrawState(o.toNumber(),u);case 23:d=e.sent,t.orderResult=![3,5].includes(d);case 25:case"end":return e.stop()}}),e)})))()},input:function(){this.value=this.value.replace(/[^\d]/g,"")},getDrawState:function(t,e){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(0!==t){r.next=2;break}return r.abrupt("return",1);case 2:return r.next=4,n.$tronWeb.getBlockNumber();case 4:if(a=r.sent,!(a>=t&&a<=t+10)){r.next=9;break}return r.abrupt("return",2);case 9:if(!(a>t+10&&e>=0&&e<10)){r.next=13;break}return r.abrupt("return",3);case 13:if(!(a>t&&a<t+255)){r.next=17;break}return r.abrupt("return",4);case 17:return r.abrupt("return",5);case 18:case"end":return r.stop()}}),r)})))()},transferIn:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isStart){e.next=2;break}return e.abrupt("return",vant.Toast.fail("暂未开放！"));case 2:return n=Number(t.value),r=Number(t.balance.usdt),e.next=6,t.$tronWeb.call({contractAddress:t.$pingSwapContracts.UsdtToken.address,method:"allowance",parameter:[t.$address,t.$pingSwapContracts.Pin.address]}).then();case 6:if(a=e.sent.toString().fromSun(),""!=n){e.next=11;break}return e.abrupt("return",vant.Toast.fail(t.$t("margin.text16")));case 11:if(t.isMiner){e.next=15;break}return e.abrupt("return",vant.Toast.fail(t.$t("margin.text17")));case 15:if(!(n>r)){e.next=19;break}return e.abrupt("return",vant.Toast.fail(t.$t("margin.text18")));case 19:if(!(n>a)){e.next=24;break}return t.$refs.authorize.amount=n,t.$refs.authorize.contractName="UsdtToken",t.$refs.authorize.contractAddress=t.$pingSwapContracts.Pin.address,e.abrupt("return",t.$refs.authorize.toggle());case 24:t.$tronWeb.call({contractAddress:t.$pingSwapContracts.Pin.address,method:"rechargeEarnestAmount",parameter:[n.toSun()],option:{feeLimit:t.$store.state.generalFeeLimit.toSun()}}).then((function(e){e&&t.$pingSwapContracts.Pin.rechargeEarnestAmount(n.toSun()).send({feeLimit:t.$store.state.generalFeeLimit.toSun()}).then((function(e){t.$loading(e).then((function(e){e&&(t.settingShow=!1,t.active="",t.value="",t.init(),t.$getBalance(),vant.Toast.success(t.$t("margin.text21")))}))}))}));case 25:case"end":return e.stop()}}),e)})))()},transferOut:function(){var t=this,e=Number(this.value),n=Number(this.earnestAmount);return this.isStart?""==e?vant.Toast.fail(this.$t("margin.text16")):e>n?vant.Toast.fail(this.$t("margin.text22")):this.orderResult?vant.Toast.fail(this.$t("margin.text19")):void this.$tronWeb.call({contractAddress:this.$pingSwapContracts.Pin.address,method:"drawEarnestAmount",parameter:[this.value.toSun()],option:{feeLimit:this.$store.state.generalFeeLimit.toSun()}}).then((function(e){e&&t.$pingSwapContracts.Pin.drawEarnestAmount(t.value.toSun()).send({feeLimit:t.$store.state.generalFeeLimit.toSun()}).then((function(e){t.$loading(e).then((function(e){e&&(t.value="",t.init(),t.$getBalance(),vant.Toast.success(t.$t("margin.text23")))}))}))})):vant.Toast.fail("暂未开放！")}}},u=o,d=u,p=(n("8876"),n("2388"),n("2877")),f=Object(p["a"])(d,r,a,!1,null,"b01bdc54",null);e["default"]=f.exports},8876:function(t,e,n){"use strict";n("17ca")},aca7:function(t,e,n){"use strict";n.d(e,"f",(function(){return s})),n.d(e,"h",(function(){return c})),n.d(e,"j",(function(){return o})),n.d(e,"i",(function(){return u})),n.d(e,"e",(function(){return d})),n.d(e,"g",(function(){return p})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return m})),n.d(e,"k",(function(){return b})),n.d(e,"d",(function(){return h}));n("d3b7"),n("96cf");var r=n("1da1");function a(t){return i.apply(this,arguments)}function i(){return i=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,{cache:"reload"});case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)}))),i.apply(this,arguments)}var s=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a("https://abc.ablesdxd.link/swap/liquidityuser?userAddress=".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a("https://abc.ablesdxd.link/swap/scan/statusinfo?exchangeAddress=".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a("https://abc.ablesdxd.link/swap/scan/transactions?exchangeAddress=".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a("https://apilist.tronscan.org/api/token_trc20?contract=".concat(e,"&showAll=1"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a("https://apilist.tronscan.org/api/contract?contract=".concat(e,"&type=contract"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a("https://abc.ablesdxd.link/swap/v2/tokenBrief?addr=".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f={tokenAddress:"TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR",tokenDecimal:6,tokenLogoUrl:"https://coin.top/production/logo/trx.png",tokenSymbol:"TRX"},l={address:"TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE",tokenAddress:"TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",tokenDecimal:6,tokenLogoUrl:"https://coin.top/production/logo/usdtlogo.png",tokenName:"Tether USD",tokenSymbol:"USDT"},m={address:"TUAtSJk6bePZ2uxzi7kF2hjeWqmoNAVbRe",tokenAddress:"TJLcHwhLCN3maffsFEzDEFJQaMZuHnCPAU",tokenDecimal:6,tokenLogoUrl:"https://coin.top/production/upload/logo/TJLcHwhLCN3maffsFEzDEFJQaMZuHnCPAU.png",tokenName:"PinSwap",tokenSymbol:"PIN"},b="T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb",h="T9yD14Nj9j7xAB4dbGeiX9h8upfCg3PBbY"},ade3:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},caad:function(t,e,n){"use strict";var r=n("23e7"),a=n("4d64").includes,i=n("44d2"),s=n("ae40"),c=s("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!c},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},dbb4:function(t,e,n){var r=n("23e7"),a=n("83ab"),i=n("56ef"),s=n("fc6a"),c=n("06cf"),o=n("8418");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,n,r=s(t),a=c.f,u=i(r),d={},p=0;while(u.length>p)n=a(r,e=u[p++]),void 0!==n&&o(d,e,n);return d}})},e439:function(t,e,n){var r=n("23e7"),a=n("d039"),i=n("fc6a"),s=n("06cf").f,c=n("83ab"),o=a((function(){s(1)})),u=!c||o;r({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return s(i(t),e)}})}}]);