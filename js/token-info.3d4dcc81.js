(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["token-info"],{"2e54":function(t,e,n){},"9f54":function(t,e,n){var s={"./page-next1-disabled1.png":"859a","./page-next1.png":"38ab"};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=o,t.exports=a,a.id="9f54"},bb35:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details"},[s("div",{staticClass:"box"},[s("div",{staticClass:"card"},[s("div",{staticClass:"message"},[s("div",[s("img",{staticClass:"messagei",attrs:{src:t.token.logoURI}}),s("div",[s("span",[t._v(t._s(t.token.symbol))]),s("span",[t._v(t._s(t.token.name))])])])]),s("div",{staticClass:"info-item"},[s("span",[t._v(t._s(t.$t("tokenInfo.text3")))]),s("div",[s("span",[t._v(t._s(t.token.address.slice(0,12)+"..."+t.token.address.slice(-7)))]),s("img",{staticClass:"contractcopy",attrs:{src:n("1f4e")},on:{click:function(e){return t.copy(t.token.address)}}})])]),s("div",{staticClass:"info-item"},[s("span",[t._v(t._s(t.$t("TokenInfoi.text7")))]),s("span",[t._v(t._s(t.totalSupply.toFixed(0))+" "+t._s(t.token.symbol))])])]),s("div",{staticClass:"liquidity"},[s("div",{staticClass:"title"},[s("div",[s("span",[t._v(t._s(t.$t("tokenInfo.text7")))])]),s("div",{staticClass:"tokenInfoiadd"},[s("span",[t._v("$ "+t._s(t.totalLiquidity))]),s("van-button",{attrs:{plain:"",type:"info"},on:{click:function(e){return t.go("/join-fund-pool")}}},[t._v(t._s(t.$t("tokenInfo.text8")))])],1)]),s("div",{staticClass:"assets"},[s("div",[s("div",[s("div",{staticClass:"assets1"},[s("img",{attrs:{src:t.mainCoin.logoURI}}),s("span",[t._v("USDT")])]),s("div",{staticClass:"assets2"},[s("span",[t._v(t._s(t.reserve0.toFixed(0)))])])]),s("i"),s("div",[s("div",{staticClass:"assets1"},[s("img",{attrs:{src:t.token.logoURI}}),s("span",[t._v(t._s(t.token.symbol))])]),s("div",{staticClass:"assets2"},[s("span",[t._v(t._s(t.reserve1.toFixed(0)))])])])])])]),s("div",{staticClass:"turnover"},[s("div",[s("span",[t._v(t._s(t.$t("tokenInfo.text15"))+"/PIN")]),s("span",[t._v(t._s(t.todayAmount))])]),s("i"),s("div",{staticClass:"turnoveri"},[s("span",[t._v(t._s(t.$t("tokenInfo.text13"))+"/PIN")]),s("span",[t._v(t._s(t.minePool))])])]),s("div",{staticClass:"turnover"},[s("div",[s("span",[t._v(t._s(t.$t("TokenInfoi.text21"))+"/PIN")]),s("span",[t._v(t._s(t.circulation))])]),s("i"),s("div",{staticClass:"turnoveri"},[s("span",[t._v(t._s(t.$t("TokenInfoi.text22"))+"/PIN")]),s("span",[t._v(t._s(t.burn))])])]),s("div",{staticClass:"turnover"},[s("div",[s("span",[t._v(t._s(t.$t("tokenInfo.text11")))]),s("span",[t._v(t._s(t.volume24Txns))])]),s("i"),s("div",{staticClass:"turnoveri"},[s("span",[t._v(t._s(t.$t("tokenInfo.text10"))+"$")]),s("span",[t._v(t._s(t.volume24USD))])])]),s("div",{staticClass:"transactions"},[s("div",{staticClass:"header"},[s("span",[t._v(t._s(t.$t("TokenInfoi.text10")))]),s("div",[s("div",{on:{click:function(e){t.showFilter=!t.showFilter}}},[s("img",{attrs:{src:n("8d5b")}}),s("span",[t._v(t._s(t.$t("TokenInfoi.text11")))])]),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.showFilter,expression:"showFilter"}],staticClass:"menus"},[s("li",{on:{click:function(e){return t.filter("all")}}},[t._v(t._s(t.$t("TokenInfoi.text12")))]),s("li",{on:{click:function(e){return t.filter("buy")}}},[t._v(t._s(t.$t("TokenInfoi.text13")))]),s("li",{on:{click:function(e){return t.filter("sell")}}},[t._v(t._s(t.$t("TokenInfoi.text14")))]),s("li",{on:{click:function(e){return t.filter("add")}}},[t._v(t._s(t.$t("TokenInfoi.text15")))]),s("li",{on:{click:function(e){return t.filter("remove")}}},[t._v(t._s(t.$t("TokenInfoi.text16")))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showFilter,expression:"showFilter"}],staticClass:"bg",on:{click:function(e){t.showFilter=!1}}})]),s("div",{on:{click:t.getTransactions}},[s("img",{attrs:{src:n("7086")}}),s("span",[t._v(t._s(t.$t("TokenInfoi.text17")))])])]),s("ul",{staticClass:"content"},t._l(t.latestTrades[t.currentPage-1],(function(e){return s("li",{key:e},[s("div",["buy"===e.type?s("span",{staticClass:"buy"},[t._v(t._s(t.$t("TokenInfoi.text13")))]):"sell"===e.type?s("span",{staticClass:"sell"},[t._v(t._s(t.$t("TokenInfoi.text14")))]):"add"===e.type?s("span",{staticClass:"add"},[t._v(t._s(t.$t("TokenInfoi.text15")))]):"remove"===e.type?s("span",{staticClass:"remove"},[t._v(t._s(t.$t("TokenInfoi.text16")))]):t._e(),s("span",[t._v(t._s(e.amount0)+" "+t._s(t.token.symbol))])]),"buy"===e.type?s("img",{attrs:{src:n("11be")}}):"sell"===e.type?s("img",{attrs:{src:n("36b2")}}):"add"===e.type?s("img",{staticClass:"liquidity",attrs:{src:n("d1da")}}):"remove"===e.type?s("img",{staticClass:"liquidity",attrs:{src:n("546a")}}):t._e(),s("div",[s("span",{domProps:{textContent:t._s(e.time)}}),s("span",[t._v(t._s(e.amount1)+" "+t._s(t.mainCoin.symbol))])])])})),0),s("div",{staticClass:"page-button"},[s("img",{class:t.currentPage>1?"":"disabled",attrs:{src:n("fb03")("./page-prev"+(t.currentPage>1?"":"-disabled")+".png")},on:{click:t.prev}}),s("span",[t._v(t._s(t.currentPage)+"/"+t._s(t.totalPage))]),s("img",{class:t.currentPage<t.totalPage?"":"disabled",attrs:{src:n("9f54")("./page-next1"+(t.currentPage<t.totalPage?"":"-disabled1")+".png")},on:{click:t.next}})])]),s("div",{staticClass:"go-transaction"}),s("van-button",{on:{click:function(e){return t.go("/")}}},[t._v(t._s(t.$t("tokenInfo.text18")))])],1)])},a=[],o=(n("99af"),n("4160"),n("fb6a"),n("a9e3"),n("b680"),n("d3b7"),n("159b"),n("96cf"),n("1da1")),i=n("5530"),r=n("b4e9"),c=n("b9cc"),u={components:{"mk-navbar":function(){return n.e("tokenInfo").then(n.bind(null,"0861"))},"search-tokens":function(){return n.e("tokenInfo").then(n.bind(null,"bab4"))}},data:function(){return{token:r["e"],interval:-1,reserve0:"0",reserve1:"0",volume24Txns:"0",volume24USD:"0",adds:[],buys:[],sells:[],removes:[],type:"all",totalSupply:"0",mainCoin:r["f"],currentPage:1,showFilter:!1,totalLiquidity:"0",todayAmount:0,minePool:0,circulation:0,burn:0}},computed:{latestTrades:function(){for(var t="all"===this.type?this.all:this["".concat(this.type,"s")],e=[],n=0;n<t.length;n+=10)e.push(t.slice(n,n+10));return e},totalPage:function(){return this.latestTrades.length},all:function(){return[].concat(this.adds).concat(this.buys).concat(this.sells).concat(this.removes).sort((function(t,e){return e.timestamp-t.timestamp}))}},created:function(){var t=this;this.$contracts&&(this.init(),this.interval=setInterval((function(){t.init()}),1e4))},methods:{copy:function(t){var e=this;this.$copyText(t).then((function(t){vant.Toast.success(e.$t("TokenInfoi.text19"))}),(function(t){vant.Toast.fail(e.$t("TokenInfoi.text20"))}))},browser:function(t){location.href=t},go:function(t){this.$router.push({path:t,query:{token:JSON.stringify(Object(i["a"])({},this.token))}})},reload:function(){this.currentPage=1,this.init()},filter:function(t){this.type=t,this.showFilter=!1},init:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,s,a,i,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new t.$web3.BatchRequest,s=new t.$web3.eth.Contract(c,t.token.address),n.add(s.methods.totalSupply().call.request({from:t.address})),n.add(t.$contracts.Mine.methods.todayReleaseValue().call.request({from:t.$address})),n.add(t.$contracts.PinToken.methods.balanceOf(t.$contracts.Mine._address).call.request({from:t.$address})),n.add(t.$contracts.PinToken.methods.balanceOf("0x000000000000000000000000000000000000dead").call.request({from:t.$address})),n.add(t.$contracts.USDTMock.methods.balanceOf(t.$contracts.Pair._address).call.request({from:t.$address})),n.add(t.$contracts.PinToken.methods.balanceOf(t.$contracts.Pair._address).call.request({from:t.$address})),n.requestManager.sendBatch(n.requests,function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n,s){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n||(t.totalSupply=("string"===typeof s[0]?s[0]:s[0].result).fromWei(t.token.decimals).toFixed(6),t.todayAmount=s[1].result.decode(["uint256"]).fromWei().toFixed(0),t.minePool=s[2].result.decode(["uint256"]).fromWei().toFixed(0),t.burn=s[3].result.decode(["uint256"]).fromWei().toFixed(0),t.reserve0=s[4].result.decode(["uint256"]).fromWei().toFixed(0),t.reserve1=s[5].result.decode(["uint256"]).fromWei().toFixed(0),t.totalLiquidity=t.reserve0.toBN().times(2).toFixed(),t.circulation=t.totalSupply.toBN().minus(t.minePool).minus(t.burn).toFixed());case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),t.getTransactions(t.$contracts.Pair._address.toLowerCase()),e.next=12,Object(r["g"])(t.$contracts.Pair._address.toLowerCase());case 12:a=e.sent,a&&(i=a.pairHourData,u="0".toBN(),l="0".toBN(),i.forEach((function(t){u=u.plus(t.hourlyTxns),l=l.plus(t.hourlyVolumeUSD)})),t.volume24Txns=u.toFixed(),t.volume24USD=Math.floor(l.toFixed()));case 14:case"end":return e.stop()}}),e)})))()},getTransactions:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var s,a,o,i,c,u,l,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(r["h"])(t);case 2:s=n.sent,a=s.burns,o=s.mints,i=s.swaps,c=[],u=[],l=[],d=[],a.forEach((function(t){u.push({type:"remove",amount0:t.amount1.toFixed(4),amount1:t.amount0.toFixed(4),time:e.formatDate(t.timestamp),timestamp:Number(t.timestamp),text:e.$t("TokenInfoi.text16")})})),o.forEach((function(t){c.push({type:"add",amount0:t.amount1.toFixed(4),amount1:t.amount0.toFixed(4),time:e.formatDate(t.timestamp),timestamp:Number(t.timestamp),text:e.$t("TokenInfoi.text15")})})),i.forEach((function(t){t.amount0In>0?l.push({type:"buy",amount0:t.amount1Out.toFixed(4),amount1:t.amount0In.toFixed(4),time:e.formatDate(t.timestamp),timestamp:Number(t.timestamp),text:e.$t("TokenInfoi.text13")}):d.push({type:"sell",amount0:t.amount1In.toFixed(4),amount1:t.amount0Out.toFixed(4),time:e.formatDate(t.timestamp),timestamp:Number(t.timestamp),text:e.$t("TokenInfoi.text13")})})),e.adds=c,e.removes=u,e.buys=l,e.sells=d;case 14:case"end":return n.stop()}}),n)})))()},formatDate:function(t){var e=Math.floor((new Date).getTime()/1e3)-Number(t);return e<60?"".concat(e).concat(this.$t("TokenInfoi.text1")):Math.floor(e/60)<60?"".concat(Math.floor(e/60)).concat(this.$t("TokenInfoi.text2")):"".concat(Math.floor(e/60/60)).concat(this.$t("TokenInfoi.text3"))},next:function(){this.currentPage!==this.totalPage&&this.currentPage++},prev:function(){1!==this.currentPage&&this.currentPage--}},destroyed:function(){clearInterval(this.interval)}},l=u,d=l,f=(n("c545"),n("2877")),m=Object(f["a"])(d,s,a,!1,null,"5264d0a0",null);e["default"]=m.exports},c545:function(t,e,n){"use strict";n("2e54")},fb03:function(t,e,n){var s={"./page-prev-disabled.png":"4ea2","./page-prev.png":"94e2"};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=o,t.exports=a,a.id="fb03"}}]);