(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["margin"],{"159b":function(t,e,n){var r=n("da84"),a=n("fdbc"),i=n("17c2"),s=n("9112");for(var o in a){var c=r[o],u=c&&c.prototype;if(u&&u.forEach!==i)try{s(u,"forEach",i)}catch(f){u.forEach=i}}},"17b9":function(t,e,n){},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,a=n("a640"),i=n("ae40"),s=a("forEach"),o=i("forEach");t.exports=s&&o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"17ca":function(t,e,n){},2388:function(t,e,n){"use strict";n("17b9")},4160:function(t,e,n){"use strict";var r=n("23e7"),a=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"4de4":function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").filter,i=n("1dde"),s=n("ae40"),o=i("filter"),c=s("filter");r({target:"Array",proto:!0,forced:!o||!c},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("ade3");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"5bb1":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbarBox"},[n("div",{staticClass:"Margin navChild"},[n("div",{staticClass:"MarginContent"},[n("div",{staticClass:"MarginContentNumber",on:{click:function(e){return t.$router.push({path:"/record",query:{type:1}})}}},[n("span",[t._v(t._s(t.earnestAmount))]),n("div",{staticClass:"line"},t._l(6,(function(t){return n("div",{key:t})})),0)]),n("div",{staticClass:"MarginContentNumberText"},[n("div",[t._v(t._s(t.$t("margin.text1"))+"(USDT)")])]),n("div",{staticClass:"MarginContentInput"},[n("span",[t._v(t._s(t.$t("margin.text3")))]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text",placeholder:"0.00"},domProps:{value:t.value},on:{input:[function(e){e.target.composing||(t.value=e.target.value)},t.input]}}),n("span",[t._v("USDT")])])]),n("div",{staticClass:"selectNumber"},t._l(t.selectNumberList,(function(e,r){return n("div",{key:r,class:{active:t.active===r},on:{click:function(n){t.active=r,t.value=e}}},[t._v(" "+t._s(e)+" ")])})),0),n("div",{staticClass:"balance"},[t._v(" "+t._s(t.$t("margin.text4"))+" "+t._s(t.balance.usdt)+" USDT ")]),n("div",{staticClass:"MarginContentButton"},[n("van-button",{directives:[{name:"ButClickLimit",rawName:"v-ButClickLimit"}],on:{click:t.transferIn}},[t._v(t._s(t.$t("margin.text5")))]),n("van-button",{directives:[{name:"ButClickLimit",rawName:"v-ButClickLimit"}],on:{click:t.transferOut}},[t._v(t._s(t.$t("margin.text6")))])],1),n("div",{staticClass:"MarginText"},[n("span",[t._v(t._s(t.$t("margin.text1")))]),n("p",[t._v(t._s(t.$t("margin.text7")))])])])]),n("self-authorize",{ref:"authorize",staticClass:"marginAuthorize",on:{send:t.transferIn}})],1)},a=[],i=(n("a9e3"),n("b680"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("96cf"),n("1da1")),s=n("5530"),o={components:{"self-authorize":function(){return Promise.all([n.e("tokenInfo"),n.e("communityManagement~transaction"),n.e("transaction")]).then(n.bind(null,"38fc"))}},data:function(){return{active:"",earnestAmount:0,value:"",orderResult:!1,settingShow:!1,maxEarnestAmount:1e3,isMiner:!1,isAuto:!1}},computed:Object(s["a"])({},Vuex.mapState(["balance"])),created:function(){this.$pingSwapContracts&&this.init()},methods:{init:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$tronWeb.call({contractAddress:t.$pingSwapContracts.Pin.address,method:"myAwards"}).then((function(e){t.earnestAmount=e.earnestAmount.toString().fromSun().toFixed(4)})),t.$tronWeb.call({contractAddress:t.$pingSwapContracts.Pin.address,method:"myAwards"}).then((function(e){t.earnestAmount=e.earnestAmount.toString().fromSun().toFixed(4)})),t.$tronWeb.call({contractAddress:t.$pingSwapContracts.Relation.address,method:"myIsMiner",parameter:[t.$address]}).then((function(e){t.isMiner=e})),t.$tronWeb.call({contractAddress:t.$pingSwapContracts.Pin.address,method:"infos",parameter:[!0]}).then((function(e){e.status[0]<4&&(t.orderResult=!0)})).catch((function(t){}));case 4:case"end":return e.stop()}}),e)})))()},input:function(){this.value=this.value.replace(/[^\d]/g,"")},transferIn:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.isAuto?Number(t.value1):Number(t.value),r=Number(t.balance.usdt),e.next=4,t.$tronWeb.call({contractAddress:t.$pingSwapContracts.UsdtToken.address,method:"allowance",parameter:[t.$address,t.$pingSwapContracts.Pin.address]}).then();case 4:if(a=e.sent.toString().fromSun(),""!=n){e.next=9;break}return e.abrupt("return",t.$toast.fail(t.$t("margin.text16")));case 9:if(t.isMiner){e.next=13;break}return e.abrupt("return",t.$toast.fail(t.$t("margin.text17")));case 13:if(!(n>r)){e.next=17;break}return e.abrupt("return",t.$toast.fail(t.$t("margin.text18")));case 17:if(!t.isAuto||!t.orderResult){e.next=21;break}return e.abrupt("return",t.$toast.fail(t.$t("margin.text19")));case 21:if(!t.isAuto||t.lv){e.next=25;break}return e.abrupt("return",t.$toast.fail(t.$t("margin.text20")));case 25:if(!(n>a)){e.next=30;break}return t.$refs.authorize.amount=n,t.$refs.authorize.contractName="UsdtToken",t.$refs.authorize.contractAddress=t.$pingSwapContracts.Pin.address,e.abrupt("return",t.$refs.authorize.toggle());case 30:t.$tronWeb.call({contractAddress:t.$pingSwapContracts.Pin.address,method:"rechargeEarnestAmount",parameter:[n.toSun(),t.isAuto],option:{feeLimit:t.$store.state.generalFeeLimit.toSun()}}).then((function(e){e&&t.$pingSwapContracts.Pin.rechargeEarnestAmount(n.toSun(),t.isAuto).send({feeLimit:t.$store.state.generalFeeLimit.toSun()}).then((function(e){t.$loading(e).then((function(e){e&&(t.settingShow=!1,t.active="",t.value="",t.value1="",t.init(),t.$getBalance(),t.$toast.success(t.$t("margin.text21")))}))}))}));case 31:case"end":return e.stop()}}),e)})))()},transferOut:function(){var t=this,e=Number(this.value),n=Number(this.earnestAmount);return""==e?this.$toast.fail(this.$t("margin.text16")):e>n?this.$toast.fail(this.$t("margin.text22")):this.orderResult?this.$toast.fail(this.$t("margin.text19")):void this.$tronWeb.call({contractAddress:this.$pingSwapContracts.Pin.address,method:"drawEarnestAmount",parameter:[this.value.toSun()],option:{feeLimit:this.$store.state.generalFeeLimit.toSun()}}).then((function(e){e&&t.$pingSwapContracts.Pin.drawEarnestAmount(t.value.toSun()).send({feeLimit:t.$store.state.generalFeeLimit.toSun()}).then((function(e){t.$loading(e).then((function(e){e&&(t.value="",t.init(),t.$getBalance(),t.$toast.success(t.$t("margin.text23")))}))}))}))}}},c=o,u=c,f=(n("8876"),n("2388"),n("2877")),l=Object(f["a"])(u,r,a,!1,null,"b01bdc54",null);e["default"]=l.exports},8876:function(t,e,n){"use strict";n("17ca")},ade3:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},dbb4:function(t,e,n){var r=n("23e7"),a=n("83ab"),i=n("56ef"),s=n("fc6a"),o=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,n,r=s(t),a=o.f,u=i(r),f={},l=0;while(u.length>l)n=a(r,e=u[l++]),void 0!==n&&c(f,e,n);return f}})},e439:function(t,e,n){var r=n("23e7"),a=n("d039"),i=n("fc6a"),s=n("06cf").f,o=n("83ab"),c=a((function(){s(1)})),u=!o||c;r({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return s(i(t),e)}})}}]);