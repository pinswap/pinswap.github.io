(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mining"],{"19ca":function(t,e,n){t.exports=n.p+"img/ja.232e4b1e.svg"},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"5c5c":function(t,e,n){t.exports=n.p+"img/hk.a8b7c6e6.svg"},"7db0":function(t,e,n){"use strict";var i=n("23e7"),a=n("b727").find,s=n("44d2"),r=n("ae40"),c="find",o=!0,u=r(c);c in[]&&Array(1)[c]((function(){o=!1})),i({target:"Array",proto:!0,forced:o||!u},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s(c)},"89b4":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mining"},[i("div",{staticClass:"miningTop"},[i("div",{staticClass:"miningMenus"},[i("div",{staticClass:"miningMenusText"},[t._m(0),i("span",[t._v(t._s(t.$t("mining.text1")))])]),i("div",{staticClass:"lang"},[i("div",{staticClass:"language-container"},[i("img",{attrs:{src:n("f211")},on:{click:function(e){t.showLang=!0}}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showLang,expression:"showLang"}],staticClass:"overlay",on:{click:function(e){t.showLang=!1}}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showLang,expression:"showLang"}],staticClass:"language-options"},[i("div",{class:"en"==t.$i18n.locale?"active":"",on:{click:function(e){return t.changeLanguage("en")}}},[i("img",{attrs:{src:n("bc04")}}),i("span",[t._v("English")])]),i("div",{class:"zh"==t.$i18n.locale?"active":"",on:{click:function(e){return t.changeLanguage("zh")}}},[i("img",{attrs:{src:n("be30")}}),i("span",[t._v("中文")])]),i("div",{class:"ko"==t.$i18n.locale?"active":"",on:{click:function(e){return t.changeLanguage("ko")}}},[i("img",{attrs:{src:n("ed4a")}}),i("span",[t._v("한국어")])]),i("div",{class:"ja"==t.$i18n.locale?"active":"",on:{click:function(e){return t.changeLanguage("ja")}}},[i("img",{attrs:{src:n("19ca")}}),i("span",[t._v("日本語")])]),i("div",{class:"hk"==t.$i18n.locale?"active":"",on:{click:function(e){return t.changeLanguage("hk")}}},[i("img",{attrs:{src:n("5c5c")}}),i("span",[t._v("繁体中文")])])])]),i("img",{attrs:{src:n("88d5")},on:{click:function(e){t.miningMenus=!t.miningMenus}}})]),i("van-overlay",{staticClass:"miningMenusNav",attrs:{show:t.miningMenus},on:{click:function(e){t.miningMenus=!t.miningMenus}}},[i("div",{on:{click:function(t){t.stopPropagation()}}},[i("div",{on:{click:function(e){return t.$router.push("./margin")}}},[i("img",{attrs:{src:n("91cd")}}),i("span",[t._v(t._s(t.$t("mining.text3")))]),i("img",{attrs:{src:n("93cf")}})]),i("div",{on:{click:function(e){return t.$router.push("./communityManagement")}}},[i("img",{attrs:{src:n("d9eb")}}),i("span",[t._v(t._s(t.$t("mining.text6")))]),i("img",{attrs:{src:n("93cf")}})]),i("div",{on:{click:t.stop}},[i("img",{attrs:{src:n("3a4c")}}),i("span",[t._v("DAO")]),i("img",{attrs:{src:n("93cf")}})]),i("div",{on:{click:function(e){return t.$router.push("/transaction-bsc")}}},[i("img",{attrs:{src:n("a3e4")}}),i("span",[t._v("PinSwap")]),i("img",{attrs:{src:n("93cf")}})]),i("div",{on:{click:function(e){return t.$router.push("/token-info-bsc")}}},[i("img",{attrs:{src:n("398a")}}),i("span",[t._v(t._s(t.$t("mining.text8")))]),i("img",{attrs:{src:n("93cf")}})]),i("div",{on:{click:function(e){return t.$router.push("/assets")}}},[i("img",{attrs:{src:n("a7ec")}}),i("span",[t._v(t._s(t.$t("mining.text9")))]),i("img",{attrs:{src:n("93cf")}})]),i("div",{on:{click:t.goV2}},[i("img",{attrs:{src:n("3854")}}),i("span",[t._v(t._s(t.$t("mining.text43")))]),i("img",{attrs:{src:n("93cf")}})])])])],1),i("div",{staticClass:"luckyMining"},[i("span",{staticClass:"title"},[t._v(t._s(t.$t("mining.text39")))]),i("span",[t._v(t._s(t.canDraw.toFixed(6)))]),i("van-button",{directives:[{name:"ButClickLimit",rawName:"v-ButClickLimit"}],on:{click:t.registerClick}},[t._v(t._s(t.$t("mining.text12")))]),i("div",{staticClass:"luckyMiningData"},[i("div",{on:{click:function(e){return t.$router.push("/Computingpower")}}},[i("span",[t._v(t._s(t.$t("mining.text13")))]),i("span",[t._v(t._s(t.myPower))])]),i("div"),i("div",{on:{click:function(e){return t.$router.push({path:"/record",query:{type:3}})}}},[i("span",[t._v(t._s(t.$t("mining.text14")))]),i("span",[t._v(t._s(t.totalMing))])])])],1)]),i("div",{staticClass:"joinGroup"},[i("div",{on:{click:function(e){return t.$refs.fastJoin.swithShow()}}},[i("img",{attrs:{src:n("9b70")}}),i("span",[t._v(t._s(t.$t("mining.text40")))])]),i("div",{on:{click:t.gotoPledge}},[i("img",{attrs:{src:n("19ea6")}}),i("span",[t._v(t._s(t.$t("mining.text41")))])]),i("div",{on:{click:t.gotoDestroy}},[i("img",{attrs:{src:n("dac0")}}),i("span",[t._v(t._s(t.$t("mining.text42")))])])]),i("div",{staticClass:"latest-join"},[i("div",{staticClass:"LatestParticipation"},[i("span",[t._v(t._s(t.$t("mining.text26")))]),i("span",{on:{click:function(e){return t.$router.push("/history")}}},[t._v(t._s(t.$t("mining.text27"))+">")])]),t._l(t.latestJoin,(function(e,a){return i("div",{key:e.id,staticClass:"Matching"},[i("div",{staticClass:"center"},[i("div",{staticClass:"canvas"},[i("div",{class:"pieChart"+a}),i("div",{staticClass:"overlay"}),i("div",{staticClass:"Middlenumber"},[i("div",{staticClass:"up"}),i("i"),i("div",{staticClass:"center-number"},[t._v(t._s(e.luckyNum))]),i("div",{staticClass:"down"})])]),i("div",{staticClass:"Leftinformation"},[i("div",{staticClass:"leftMatching"},[1===e.status?i("img",{directives:[{name:"show",rawName:"v-show",value:"zh"==t.$i18n.locale,expression:"$i18n.locale == 'zh' "}],attrs:{src:n("fb3f")}}):2===e.status?i("img",{directives:[{name:"show",rawName:"v-show",value:"zh"==t.$i18n.locale,expression:"$i18n.locale == 'zh' "}],attrs:{src:n("758e")}}):3===e.status?i("img",{directives:[{name:"show",rawName:"v-show",value:"zh"==t.$i18n.locale,expression:"$i18n.locale == 'zh' "}],attrs:{src:n("fd98")}}):4===e.status?i("img",{directives:[{name:"show",rawName:"v-show",value:"zh"==t.$i18n.locale,expression:"$i18n.locale == 'zh' "}],attrs:{src:n("e49d")}}):i("img",{directives:[{name:"show",rawName:"v-show",value:"zh"==t.$i18n.locale,expression:"$i18n.locale == 'zh' "}],attrs:{src:n("4b7f")}}),1===e.status?i("img",{directives:[{name:"show",rawName:"v-show",value:"en"==t.$i18n.locale,expression:"$i18n.locale == 'en' "}],attrs:{src:n("d93f")}}):2===e.status?i("img",{directives:[{name:"show",rawName:"v-show",value:"en"==t.$i18n.locale,expression:"$i18n.locale == 'en' "}],attrs:{src:n("6a71")}}):3===e.status?i("img",{directives:[{name:"show",rawName:"v-show",value:"en"==t.$i18n.locale,expression:"$i18n.locale == 'en' "}],attrs:{src:n("d99a")}}):4===e.status?i("img",{directives:[{name:"show",rawName:"v-show",value:"en"==t.$i18n.locale,expression:"$i18n.locale == 'en' "}],attrs:{src:n("61a0")}}):i("img",{directives:[{name:"show",rawName:"v-show",value:"en"==t.$i18n.locale,expression:"$i18n.locale == 'en' "}],attrs:{src:n("6eda")}})]),i("span",[t._v(t._s(t.$t("mining.text28"))+t._s(e.id))]),i("span",[t._v(t._s(t.$t("mining.text29"))+t._s(e.awardBlock))]),i("span",[t._v(t._s(t.$t("mining.text30"))+t._s(e.luckyNum))]),i("div",{staticClass:"usdt"},[i("img",{attrs:{src:n("f48e"),alt:""}}),i("span",[t._v(t._s(e.payment)+" PIN")])]),i("div",{staticClass:"Matchdetails"},[i("button",{on:{click:function(n){return t.$router.push({path:"/Piece",query:{id:e.id}})}}},[t._v(t._s(t.$t("mining.text31")))]),e.isPin?i("button",{staticClass:"isJoin",on:{click:function(e){return t.$refs.fastJoin.swithShow()}}},[t._v(t._s(t.$t("mining.text32")))]):[[3,5].includes(e.status)?i("button",{staticClass:"isJoin",attrs:{disabled:1!==e.status},on:{click:function(e){return t.$refs.fastJoin.swithShow()}}},[t._v(t._s(t.$t("mining.text33")))]):i("button",{attrs:{disabled:1!==e.status},on:{click:function(e){return t.$refs.fastJoin.swithShow()}}},[t._v(t._s(t.$t("mining.text33")))])]],2)])])])}))],2),i("upgrade",{ref:"upgrade"}),i("fast-join",{ref:"fastJoin",on:{refreshList:t.refreshList}})],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("i",[i("span",[t._v("Pin")]),t._v("Swap")]),i("img",{attrs:{src:n("fb74")}})])}],s=(n("7db0"),n("4160"),n("fb6a"),n("a9e3"),n("b680"),n("d3b7"),n("159b"),n("96cf"),n("1da1")),r=n("5530"),c=n("d4ec"),o=n("bee2"),u=function(){function t(e){Object(c["a"])(this,t),this.echart=echarts.init(e),this.echart.setOption({tooltip:{show:!1},color:["#2D92FD","#57AEFD","#57AEFD","#1870D9","#1B7AE7","#1E84F5","#2D92FD","#409FFD","#57AEFD","#6BBBFD"],series:[{name:"访问来源",type:"pie",radius:["50%","90%"],avoidLabelOverlap:!1,label:{show:!0,position:"inside",color:"#fff",fontSize:"10"},animation:!1,emphasis:{scaleSize:10},startAngle:109,labelLine:{show:!1},data:[{value:1,name:"0"},{value:1,name:"1"},{value:1,name:"2"},{value:1,name:"3"},{value:1,name:"4"},{value:1,name:"5"},{value:1,name:"6"},{value:1,name:"7"},{value:1,name:"8"},{value:1,name:"9"}]}]})}return Object(o["a"])(t,[{key:"set",value:function(t){this.echart.setOption({color:t})}}]),t}(),l={components:{upgrade:function(){return Promise.all([n.e("tokenInfo"),n.e("communityManagement~transaction"),n.e("redemption~transaction"),n.e("transaction")]).then(n.bind(null,"742c"))},"fast-join":function(){return Promise.all([n.e("tokenInfo"),n.e("communityManagement~transaction"),n.e("redemption~transaction"),n.e("transaction")]).then(n.bind(null,"e531"))}},data:function(){return{miningMenus:!1,canDraw:0,myPower:0,totalMing:0,lv:0,getShiftSwitch:!1,interval:-1,isStart:!1,showLang:!1}},computed:Object(r["a"])({},Vuex.mapState(["latestJoin"])),created:function(){this.$contracts&&this.init()},methods:{stop:function(){return vant.Toast.fail("暂未开放！")},init:function(){var t=this;this.miningMenus=!1,this.latestJoin.length>0&&this.$nextTick((function(){for(var e=0;e<t.latestJoin.length;e++){for(var n=document.querySelector(".pieChart".concat(e)),i=["#10499A","#1155B4","#1666CB","#1870D9","#1B7AE7","#1E84F5","#2D92FD","#409FFD","#57AEFD","#6BBBFD"],a=["#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5"],s=0;s<t.latestJoin[e].players;s++)a[s]=i[s];var r=new u(n);r.set(a),r.echart.dispatchAction({type:"highlight",dataIndex:-1})}}));var e=new this.$web3.BatchRequest,n=[];e.add(this.$contracts.Pin.methods.getWorldNewRound().call.request({from:this.$address})),e.add(this.$contracts.Mine.methods.isStart().call.request({from:this.$address})),e.add(this.$contracts.Mine.methods.mineInfo().call.request({from:this.$address})),e.add(this.$contracts.Mine.methods.drawPin().call.request({from:this.$address})),e.requestManager.sendBatch(e.requests,(function(e,i){if(!e){var a=i[0].result.decode(["uint256[]"]),s=i[2].result.decode([{name:"myPower",type:"uint256"},{name:"mined",type:"uint256"}]),c=s.myPower,o=s.mined;if(t.isStart=i[1].result.decode(["bool"]),t.myPower=c,t.totalMing=o.fromWei().toFixed(4),t.canDraw=i[3].result.decode(["uint256"]).fromWei(),a.length>0){var l=new t.$web3.BatchRequest,d=a.length>3?3:a.length;l.add(t.$web3.eth.getBlockNumber.request());for(var m=0;m<d;m++)l.add(t.$contracts.Pin.methods.rounds(a[m]).call.request({from:t.$address})),l.add(t.$contracts.Pin.methods.getRoundPlayers(a[m]).call.request({from:t.$address}));l.requestManager.sendBatch(l.requests,(function(e,i){if(!e){var s=Number(i[0].result),c=[],o=[];i.slice(1).forEach((function(e,n){if(n%2===0)c.push(e.result.decode([{name:"payment",type:"uint256"},{name:"prepareBlock",type:"uint256"},{name:"power",type:"uint256"},{name:"stallIndex",type:"uint8"},{name:"luckyValue",type:"uint8"},{name:"sender",type:"address"}]));else{var i=e.result.decode(["address[]"]);o.push({isPin:i.find((function(e){return e.toLowerCase()===t.$address.toLowerCase()})),players:i.length})}}));for(var l=0;l<c.length;l++){var m=t.getDrawState(Number(c[l].prepareBlock),Number(c[l].luckyValue),s);n.push(Object(r["a"])(Object(r["a"])({},o[l]),{},{status:m,id:a[l],payment:c[l].payment.fromWei(),awardBlock:c[l].prepareBlock+10,luckyNum:c[l].luckyValue<10?c[l].luckyValue:"?"}))}t.$store.commit("latestJoin",n),t.$nextTick((function(){for(var t=0;t<d;t++){for(var e=document.querySelector(".pieChart".concat(t)),i=["#10499A","#1155B4","#1666CB","#1870D9","#1B7AE7","#1E84F5","#2D92FD","#409FFD","#57AEFD","#6BBBFD"],a=["#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5"],s=0;s<n[t].players;s++)a[s]=i[s];var r=new u(e);r.set(a),r.echart.dispatchAction({type:"highlight",dataIndex:-1})}}))}}))}}})),this.interval=setInterval(Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$contracts.Mine.methods.drawPin().call({from:t.$address});case 2:n=e.sent,t.canDraw=n.fromWei();case 4:case"end":return e.stop()}}),e)}))),5e3)},getDrawState:function(t,e,n){return 0===t?1:n>=t&&n<=t+10?2:n>t+10&&e>=0&&e<10?3:n>t&&n<t+255?4:5},refreshList:function(){return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},drawPin:function(){var t=this;if(!this.isStart)return vant.Toast.fail("合约暂未生效！");if(!Number(this.canDraw))return vant.Toast.fail(this.$t("mining.text19"));var e=this.$contracts.Mine.methods.drawPin();e.call({from:this.$address},(function(n,i){n||e.send({from:t.$address}).on("transactionHash",(function(e){vant.Toast.loading({message:t.$t("transaction.text7"),forbidClick:!0,duration:0,loadingType:"spinner"})})).on("receipt",(function(e){vant.Toast.clear(),t.init(),t.$getBalance(),vant.Toast.success(t.$t("mining.text20"))})).on("error",(function(e){vant.Toast.clear(),vant.Toast.fail(t.$t("transaction.text13"))}))}))},startTeam:function(){this.miningMenus=!1,vant.Toast.fail(this.$t("mining.text21"))},registerClick:function(){this.drawPin()},gotoPledge:function(){this.$router.push("/partake-pledge")},gotoDestroy:function(){this.$router.push("/destroy")},changeLanguage:function(t){this.$i18n.locale=t,localStorage.setItem("language",t),this.showLang=!1},goV2:function(){location.href="https://pinswap.gitee.io/v2/"}},destroyed:function(){clearInterval(this.interval)}},d=l,m=d,v=(n("f623"),n("2877")),g=Object(v["a"])(m,i,a,!1,null,"0988f353",null);e["default"]=g.exports},"8e74":function(t,e,n){},"93cf":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAXCAYAAADZTWX7AAABu0lEQVQ4T3WSsWsUQRTGv/fm9iSChc2hEgyCRSyVoBaBFAFTeNztzuH8DZaaNkVOEUuvPvwPxt2ZwusMGBAEMYE7UghaiMSAjQpi5aw+meMirre+amb48b433/soz/NrSqkHRLSdpulL1BQ55ywR3QJwmGXZ+VqoKIolZn4LoAmgn2XZvX9Big/OubtE9EhEfjSbzTPtdvvr3+AUGg6HJ1ut1jsA54hoZzweb/T7/V/H4BSKVRTFFWbej2el1NVOp/N6DhIR8t4/JaKbIvKxLMtLxpjvEfzTKV6stQtJksR5ThDRZpqmgzloJnuHmQfxE2VZLhtj3lc6Hc/gnDskokUReaK1NrVQURTXmfkFgAYzt2uhmXdviGgZwN7/5NaiX7ETEd2uhbz3R9FYAK8mk8nqHOS93447jJIhhBVjzH4FGo1Gp0MIn+KyReSh1nqr4pO1ViVJsgtgFcC3EMIFY8yXCuS9XwcQhwUz3+h2u88qu5vJfABwCsBBCOGyMeZnBXLOxfhuiUgAcFZr/bmSpzzPV5RS01iIyEBrvTmXTOfcLhGticiR1nqxNuPW2ouNRuO+iDzu9XrP66DfAtetSatIZ0YAAAAASUVORK5CYII="},bc04:function(t,e,n){t.exports=n.p+"img/en.b95b8185.svg"},be30:function(t,e,n){t.exports=n.p+"img/zh.63d0f1e6.svg"},dbb4:function(t,e,n){var i=n("23e7"),a=n("83ab"),s=n("56ef"),r=n("fc6a"),c=n("06cf"),o=n("8418");i({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,n,i=r(t),a=c.f,u=s(i),l={},d=0;while(u.length>d)n=a(i,e=u[d++]),void 0!==n&&o(l,e,n);return l}})},e439:function(t,e,n){var i=n("23e7"),a=n("d039"),s=n("fc6a"),r=n("06cf").f,c=n("83ab"),o=a((function(){r(1)})),u=!c||o;i({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return r(s(t),e)}})},ed4a:function(t,e,n){t.exports=n.p+"img/ko.95cd7094.svg"},f623:function(t,e,n){"use strict";n("8e74")}}]);