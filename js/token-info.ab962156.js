(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["token-info"],{"9f54":function(t,e,n){var s={"./page-next1-disabled1.png":"859a","./page-next1.png":"38ab"};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=o,t.exports=a,a.id="9f54"},bb35:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details"},[s("div",{staticClass:"box"},[s("div",{staticClass:"card info"},[s("div",{staticClass:"acswpalogo"},[s("div",{staticClass:"message"},[s("div",[s("img",{staticClass:"messagei",attrs:{src:t.pair.tokenLogoUrl}}),s("div",[s("span",[t._v(t._s(t.pair.tokenSymbol))]),s("span",[t._v(t._s(t.pair.tokenName))])])]),t._m(0)]),s("div",{staticClass:"info-item"},[s("span",[t._v(t._s(t.$t("tokenInfo.text3")))]),s("div",[s("span",[t._v(t._s(t.pair.tokenAddress.slice(0,12)+"..."+t.pair.tokenAddress.slice(-7)))]),s("img",{staticClass:"contractcopy",attrs:{src:n("1f4e")},on:{click:function(e){return t.copy(t.pair.tokenAddress)}}})])]),s("div",{staticClass:"info-item"},[s("span",[t._v(t._s(t.$t("TokenInfoi.text4")))]),t.verify_status?s("div",[s("span",[t._v(t._s(t.$t("TokenInfoi.text5")))]),s("img",{attrs:{src:n("aef1")}})]):s("span",[t._v(t._s(t.$t("TokenInfoi.text6")))])]),s("div",{staticClass:"info-item"},[s("span",[t._v(t._s(t.$t("TokenInfoi.text7")))]),s("span",[t._v(t._s(t.totalSupply)+" "+t._s(t.pair.tokenSymbol))])]),s("div",{staticClass:"info-item"},[s("span",[t._v(t._s(t.$t("TokenInfoi.text8")))]),s("span",[t._v(t._s(t.holdersCount))])])])]),s("div",{staticClass:"liquidity"},[s("div",{staticClass:"title "},[s("div",[s("span",[t._v(t._s(t.$t("tokenInfo.text7")))])]),s("div",{staticClass:"tokenInfoiadd"},[s("span",[t._v("$ "+t._s(t.totalLiquidity))]),s("van-button",{attrs:{plain:"",type:"info"},on:{click:function(e){return t.go("/join-fund-pool")}}},[t._v(t._s(t.$t("tokenInfo.text8")))])],1)]),s("div",{staticClass:"assets "},[s("div",[s("div",[t._m(1),s("div",{staticClass:"assets2"},[s("span",[t._v(t._s(t.exTrxBalance)+" ")])])]),s("i"),s("div",[s("div",{staticClass:"assets1"},[s("img",{attrs:{src:t.pair.tokenLogoUrl}}),s("span",[t._v(t._s(t.pair.tokenSymbol)+" ")])]),s("div",{staticClass:"assets2"},[s("span",[t._v(t._s(t.exTokenBalance)+" ")])])])])])]),s("div",{staticClass:"turnover"},[s("div",[s("span",[t._v(t._s(t.$t("tokenInfo.text15"))+"/PIN")]),s("span",[t._v(t._s(t.todayAmount))])]),s("i"),s("div",{staticClass:"turnoveri"},[s("span",[t._v(t._s(t.$t("tokenInfo.text13"))+"/PIN")]),s("span",[t._v(t._s(t.minePool))])])]),s("div",{staticClass:"turnover"},[s("div",[s("span",[t._v(t._s(t.$t("TokenInfoi.text21"))+"/PIN")]),s("span",[t._v(t._s(t.circulation))])]),s("i"),s("div",{staticClass:"turnoveri"},[s("span",[t._v(t._s(t.$t("TokenInfoi.text22"))+"/PIN")]),s("span",[t._v(t._s(t.burn.toFixed(0)))])])]),s("div",{staticClass:"turnover"},[s("div",[s("span",[t._v(t._s(t.$t("tokenInfo.text11")))]),s("span",[t._v(t._s(t.transaction24H))])]),s("i"),s("div",{staticClass:"turnoveri"},[s("span",[t._v(t._s(t.$t("tokenInfo.text10"))+"$")]),s("span",[t._v(t._s(t.volume24H))])])]),s("div",{staticClass:"transactions"},[s("div",{staticClass:"header"},[s("span",[t._v(t._s(t.$t("TokenInfoi.text10")))]),s("div",[s("div",{on:{click:function(e){t.showFilter=!t.showFilter}}},[s("img",{attrs:{src:n("8d5b")}}),s("span",[t._v(t._s(t.$t("TokenInfoi.text11")))])]),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.showFilter,expression:"showFilter"}],staticClass:"menus"},[s("li",{on:{click:function(e){return t.filter("all")}}},[t._v(t._s(t.$t("TokenInfoi.text12")))]),s("li",{on:{click:function(e){return t.filter("buy")}}},[t._v(t._s(t.$t("TokenInfoi.text13")))]),s("li",{on:{click:function(e){return t.filter("sell")}}},[t._v(t._s(t.$t("TokenInfoi.text14")))]),s("li",{on:{click:function(e){return t.filter("add")}}},[t._v(t._s(t.$t("TokenInfoi.text15")))]),s("li",{on:{click:function(e){return t.filter("remove")}}},[t._v(t._s(t.$t("TokenInfoi.text16")))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showFilter,expression:"showFilter"}],staticClass:"bg",on:{click:function(e){t.showFilter=!1}}})]),s("div",{on:{click:t.getTransactions}},[s("img",{attrs:{src:n("7086")}}),s("span",[t._v(t._s(t.$t("TokenInfoi.text17")))])])]),s("ul",{staticClass:"content"},t._l(t.transactions[t.currentPage-1],(function(e){return s("li",{key:e},[s("div",["buy"===e.type?s("span",{staticClass:"buy"},[t._v(t._s(t.$t("TokenInfoi.text13")))]):"sell"===e.type?s("span",{staticClass:"sell"},[t._v(t._s(t.$t("TokenInfoi.text14")))]):"add"===e.type?s("span",{staticClass:"add"},[t._v(t._s(t.$t("TokenInfoi.text15")))]):"remove"===e.type?s("span",{staticClass:"remove"},[t._v(t._s(t.$t("TokenInfoi.text16")))]):t._e(),s("span",[t._v(t._s(e.token)+" "+t._s(e.symbol))])]),"buy"===e.type?s("img",{attrs:{src:n("11be")}}):"sell"===e.type?s("img",{attrs:{src:n("36b2")}}):"add"===e.type?s("img",{staticClass:"liquidity",attrs:{src:n("d1da")}}):"remove"===e.type?s("img",{staticClass:"liquidity",attrs:{src:n("546a")}}):t._e(),s("div",[s("span",{domProps:{textContent:t._s(e.time)}}),s("span",[t._v(t._s(e.trx)+" TRX")])])])})),0),s("div",{staticClass:"page-button"},[s("img",{class:t.currentPage>1?"":"disabled",attrs:{src:n("fb03")("./page-prev"+(t.currentPage>1?"":"-disabled")+".png")},on:{click:t.prev}}),s("span",[t._v(t._s(t.currentPage)+"/"+t._s(t.totalPage))]),s("img",{class:t.currentPage<t.totalPage?"":"disabled",attrs:{src:n("9f54")("./page-next1"+(t.currentPage<t.totalPage?"":"-disabled1")+".png")},on:{click:t.next}})])]),s("div",{staticClass:"go-transaction"}),s("van-button",{on:{click:function(e){return t.go("/")}}},[t._v(t._s(t.$t("tokenInfo.text18")))])],1)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"justswaplogo"},[s("img",{attrs:{src:n("973e")}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"assets1"},[s("img",{attrs:{src:n("90bd")}}),s("span",[t._v("TRX")])])}],o=(n("99af"),n("4160"),n("b680"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("159b"),n("96cf"),n("1da1")),i=n("5530"),r=n("aca7"),c=["","buy","sell","add","remove"],u={components:{"mk-navbar":function(){return n.e("tokenInfo").then(n.bind(null,"0861"))}},data:function(){return{trx:0,token:0,exTrxBalance:0,exTokenBalance:0,totalLiquidity:0,liquidityRate24H:0,volume24H:0,volumeRate24H:0,transaction24H:0,transactionRate24H:0,pair:r["a"],transactions:[],transactionsList:[],currentPage:1,type:"all",showFilter:!1,totalSupply:0,holdersCount:0,dollar:0,klineUrl:"",verify_status:!1,circulation:0,burn:0,todayAmount:0,minePool:0}},computed:{totalPage:function(){return this.transactions.length}},created:function(){this.$utils&&this.init()},methods:{copy:function(t){var e=this;this.$copyText(t).then((function(t){vant.Toast.success(e.$t("TokenInfoi.text19"))}),(function(t){vant.Toast.fail(e.$t("TokenInfoi.text20"))}))},browser:function(t){location.href=t},select:function(t){var e=t.token;this.$router.replace({path:"/detail",query:{token:JSON.stringify(e)}}),this.pair=e,this.init()},go:function(t){this.$router.push({path:t,query:{token:JSON.stringify(Object(i["a"])({},this.pair))}})},init:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,s,a,o,i,c,u,l,d,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["g"])(t.pair.address);case 2:return n=e.sent,s=n.data,gsap.to(t.$data,{duration:.5,totalLiquidity:Math.floor(s.totalLiquidity)}),t.liquidityRate24H=(100*s.liquidityRate24H).toFixed(2),gsap.to(t.$data,{duration:.5,volume24H:Math.floor(s.volume24H)}),t.volumeRate24H=(100*s.volumeRate24H).toFixed(2),gsap.to(t.$data,{duration:.5,transaction24H:Math.floor(s.transaction24H)}),t.transactionRate24H=(100*s.transactionRate24H).toFixed(2),e.next=12,Object(r["d"])(t.pair.tokenAddress);case 12:return a=e.sent,t.verify_status=0!==a.data[0].verify_status,e.next=16,t.$utils.call({contractAddress:t.pair.tokenAddress,method:"totalSupply()"});case 16:return t.totalSupply=e.sent.constant_result[0].decode(["uint256"]).toString().fromSun(t.pair.tokenDecimal),e.next=19,Object(r["h"])(t.pair.tokenAddress);case 19:return o=e.sent,t.holdersCount=o.trc20_tokens[0].holders_count,e.next=23,tronWeb.trx.getBalance(t.pair.address);case 23:return t.exTrxBalance=e.sent.toString().fromSun().toFixed(0),e.next=26,t.$utils.call({contractAddress:t.pair.tokenAddress,method:"balanceOf(address)",parameter:[{type:"address",value:t.pair.address}]});case 26:return i=e.sent.constant_result[0].decode(["uint256"]),t.exTokenBalance=i.toString().fromSun(t.pair.tokenDecimal).toFixed(0),e.next=30,t.$utils.call({contractAddress:t.pair.address,method:"getTokenToTrxInputPrice(uint256)",parameter:[{type:"uint256",value:"1".toSun(t.pair.tokenDecimal)}]});case 30:return t.trx=e.sent.constant_result[0].decode(["uint256"]).toString().fromSun(),e.next=33,t.$utils.call({contractAddress:t.pair.address,method:"getTrxToTokenInputPrice(uint256)",parameter:[{type:"uint256",value:"1".toSun()}]});case 33:return c=e.sent.constant_result[0].decode(["uint256"]).toString().fromSun(t.pair.tokenDecimal),gsap.to(t.$data,{duration:.5,token:c}),e.next=37,t.$utils.call({contractAddress:"TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE",method:"getTrxToTokenInputPrice(uint256)",parameter:[{type:"uint256",value:t.trx.toSun()}]});case 37:return t.dollar=e.sent.constant_result[0].decode(["uint256"]).toString().fromSun(),e.next=40,t.$utils.call({contractAddress:t.$pingSwapContracts.Mine.address,method:"todayReleaseValue()"});case 40:return u=e.sent.constant_result[0].decode(["uint"]).toString().fromSun(),gsap.to(t.$data,{duration:.5,todayAmount:u}),e.next=44,t.$utils.call({contractAddress:t.pair.tokenAddress,method:"balanceOf(address)",parameter:[{type:"address",value:t.pair.tokenAddress}]});case 44:return l=e.sent.constant_result[0].decode(["uint256"]).toString().fromSun(),gsap.to(t.$data,{duration:.5,minePool:Math.floor(l)}),e.next=48,t.$utils.call({contractAddress:t.pair.tokenAddress,method:"balanceOf(address)",parameter:[{type:"address",value:"0x000000000000000000000000000000000000dead"}]});case 48:d=e.sent.constant_result[0].decode(["uint256"]).toString().fromSun(),p=21e6-Math.floor(l)-Math.floor(d),gsap.to(t.$data,{duration:.5,burn:Math.floor(d)}),gsap.to(t.$data,{duration:.5,circulation:Math.floor(p)}),t.getTransactions();case 53:case"end":return e.stop()}}),e)})))()},getTokenToUSD:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$utils.call({contractAddress:e.pair.address,method:"getTokenToTrxInputPrice(uint256)",parameter:[{type:"uint256",value:t}]});case 2:return s=n.sent.constant_result[0].decode(["uint256"]),n.next=5,e.$utils.call({contractAddress:"TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE",method:"getTrxToTokenInputPrice(uint256)",parameter:[{type:"uint256",value:s}]});case 5:return n.abrupt("return",n.sent.constant_result[0].decode(["uint256"]).toString().fromSun().toFixed(0));case 6:case"end":return n.stop()}}),n)})))()},getTransactions:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,s,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["i"])(t.pair.address);case 2:n=e.sent,s=n.data.transactionList,a=[],o=[],t.transactionsList=[],s.forEach((function(e,n){o.push({trx:e.trxAmount.fromSun().toFixed(4),token:e.tokenAmount.fromSun(e.tokenDecimal).toFixed(4),symbol:e.tokenSymbol,type:c[e.type],time:t.formatDate(e.blockTime)}),t.transactionsList.push({trx:e.trxAmount.fromSun().toFixed(4),token:e.tokenAmount.fromSun(e.tokenDecimal).toFixed(4),symbol:e.tokenSymbol,type:c[e.type],time:t.formatDate(e.blockTime)}),(n+1)%10===0&&(a.push(o),o=[])})),t.transactions=s.length<10?o:a;case 9:case"end":return e.stop()}}),e)})))()},formatDate:function(t){var e=Math.floor(((new Date).getTime()-t)/1e3);return e<60?"".concat(e).concat(this.$t("TokenInfoi.text1")):Math.floor(e/60)<60?"".concat(Math.floor(e/60)).concat(this.$t("TokenInfoi.text2")):"".concat(Math.floor(e/60/60)).concat(this.$t("TokenInfoi.text3"))},next:function(){this.currentPage<this.totalPage&&this.currentPage++},prev:function(){this.currentPage>1&&this.currentPage--},filter:function(t){if(t===this.type)return this.showFilter=!1,!1;this.type=t;var e=[],n=[],s=0;switch(t){case"all":this.transactionsList.forEach((function(t,s){e.push(t),(s+1)%10===0&&(n.push(e),e=[])})),this.transactions=n;break;case"buy":case"sell":case"add":case"remove":this.transactionsList.forEach((function(a){a.type===t&&(e.push(a),s++,s%10===0&&(n.push(e),e=[]))})),this.transactions=n.length>0?n:[e];break}this.showFilter=!1}}},l=u,d=l,p=(n("f7e3"),n("2877")),f=Object(p["a"])(d,s,a,!1,null,"4ea57f6c",null);e["default"]=f.exports},f7e3:function(t,e,n){"use strict";n("f951")},f951:function(t,e,n){},fb03:function(t,e,n){var s={"./page-prev-disabled.png":"4ea2","./page-prev.png":"94e2"};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=o,t.exports=a,a.id="fb03"}}]);