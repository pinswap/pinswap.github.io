(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["join-fund-pool"],{1500:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"join-fund-pool"},[s("div",{staticClass:"container-box"},[s("div",{staticClass:"form-container"},[s("div",{staticClass:"tokens"},[s("div",{staticClass:"token"},[t._m(0),s("span",[t._v("余额 "+t._s(t.trx))])]),s("div",{staticClass:"logos"},[s("img",{attrs:{src:n("90bd")}}),s("img",{directives:[{name:"show",rawName:"v-show",value:t.tokenInfo.tokenLogoUrl,expression:"tokenInfo.tokenLogoUrl"}],attrs:{src:t.tokenInfo.tokenLogoUrl}})]),s("div",{staticClass:"token"},[s("div",{staticClass:"symbol select",on:{click:t.openSearch}},[s("span",[t._v(t._s(t.tokenInfo.tokenSymbol||"选择代币"))]),s("img",{attrs:{src:n("716f")}})]),s("span",[t._v("余额 "+t._s(t.token))])])]),s("div",{staticClass:"inputs"},[s("van-field",{attrs:{type:"number",placeholder:"请输入数量"},on:{input:t.inputTRX},model:{value:t.assets1,callback:function(e){t.assets1=e},expression:"assets1"}}),s("span",[t._v("+")]),s("van-field",{attrs:{type:"number",placeholder:"请输入数量"},on:{input:t.inputToken},model:{value:t.assets2,callback:function(e){t.assets2=e},expression:"assets2"}})],1),s("div",{staticClass:"rate"},[s("div",[s("span",{directives:[{name:"show",rawName:"v-show",value:!t.rateChanged,expression:"!rateChanged"}]},[t._v("汇率 1TRX = "+t._s(t.rate)+t._s(t.tokenInfo.tokenSymbol))]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.rateChanged,expression:"rateChanged"}]},[t._v("汇率 1"+t._s(t.tokenInfo.tokenSymbol)+" = "+t._s(t.rate)+"TRX")]),s("img",{attrs:{src:n("1b07")},on:{click:t.switchRate}})]),s("span",[t._v("占资金池比例 "+t._s(t.prop))])]),s("van-button",{attrs:{type:"primary"},on:{click:t.addLiquidity}},[t._v("加入")])],1),t._l(t.list,(function(e){return s("div",{key:e.address,staticClass:"your-share"},[s("div",{staticClass:"title"},[s("div",{staticClass:"text"},[s("span",[t._v("你的份额")]),s("span",[t._v(t._s(e.myShare)+"%")])]),s("div",{staticClass:"collection"},[s("van-icon",{attrs:{name:"star-o"}}),s("span",[t._v("已收藏")])],1)]),s("div",{staticClass:"tokens"},[s("div",{staticClass:"logos"},[s("img",{attrs:{src:n("90bd")}}),s("img",{attrs:{src:e.logo}})]),s("span",[t._v("TRX/"+t._s(e.symbol))])]),s("div",{staticClass:"redemption"},[s("div",{staticClass:"text"},[s("span",[t._v("TRX "+t._s(e.trx))]),s("span",[t._v(t._s(e.symbol)+" "+t._s(e.token))]),s("span",[t._v("LP权益 "+t._s(e.lp))])]),s("van-button",{attrs:{type:"primary"},on:{click:function(n){t.$router.push({path:"/redemption",query:{info:JSON.stringify(e)}})}}},[t._v("赎回")])],1)])}))],2),s("search-tokens",{ref:"searchTokens",on:{select:t.select}})],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"symbol"},[n("span",[t._v("TRX")])])}],r=(n("4de4"),n("d81d"),n("a9e3"),n("b680"),n("d3b7"),n("25f0"),n("96cf"),n("1da1")),o=n("aca7"),i=n("a981"),c=n("3952"),u={components:{"mk-navbar":function(){return Promise.all([n.e("join-fund-pool~transaction"),n.e("join-fund-pool")]).then(n.bind(null,"0861"))},"search-tokens":function(){return Promise.all([n.e("join-fund-pool~transaction"),n.e("join-fund-pool")]).then(n.bind(null,"bab4"))}},data:function(){return{assets1:"",assets2:"",list:[],tokenInfo:{},trx:"--",token:"--",rate:"--",prop:"--",exTrxBalance:0,exTokenBalace:0,totalLiquidity:0,contract:null,trxInputing:!1,tokenInputing:!1,allowance:0,rateChanged:!1}},created:function(){this.$utils&&this.init()},methods:{openSearch:function(){this.$refs.searchTokens.open()},select:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var s,a,r,o,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=t.token,e.tokenInfo=s,e.contract=tronWeb.contract(i,s.address),n.next=5,e.$utils.call({contractAddress:s.tokenAddress,method:"balanceOf(address)",parameter:[{type:"address",value:e.$address}]});case 5:return e.token=n.sent.constant_result[0].decode(["uint256"]).toString().fromSun(s.tokenDecimal),n.next=8,e.$utils.call({contractAddress:"TCNYd8L5hBey9FwPpvgtvDaY2cHjMFVLZu",method:"getSingleInfo(address,address)",parameter:[{type:"address",value:e.$address},{type:"address",value:s.tokenAddress}]});case 8:a=n.sent.constant_result[0].decode(["address","uint256","uint256","uint256","uint256","uint256","uint256","uint256"],["_exchangeAddr","_allowance","_exTokenBalace","_exTrxBalance","_totalLiquidity","_userUniAmount","_userTrxAmount","_userTokenAmount"]),r=a._exTrxBalance,o=a._exTokenBalace,c=a._totalLiquidity,u=a._allowance,e.exTrxBalance=r.toString().toBN(),e.exTokenBalace=o.toString().toBN(),e.totalLiquidity=c.toString().toBN(),e.allowance=u.toString().fromSun(s.tokenDecimal),e.rate="1".toSun().toBN().multipliedBy(e.exTokenBalace).div(e.exTrxBalance).toString().fromSun(e.tokenInfo.tokenDecimal);case 18:case"end":return n.stop()}}),n)})))()},addLiquidity:function(){var t=this;if(this.trx<Number(this.assets1))return vant.Toast.fail("TRX余额不足！");if(this.token<Number(this.assets2))return vant.Toast.fail("".concat(this.tokenInfo.tokenSymbol,"余额不足！"));if(this.allowance<Number(this.assets2))return this.approve();var e=Math.floor((new Date).getTime()/1e3)+600;this.list.length>0&&this.contract.addLiquidity(this.assets1.toSun().toBN().div(this.exTrxBalance.plus(this.assets1.toSun().toBN())).multipliedBy(this.totalLiquidity).toFixed(0),this.assets1.toSun().toBN().multipliedBy(this.exTokenBalace).div(this.exTrxBalance).toFixed(0),e).send({callValue:this.assets1.toSun()}).then((function(e){return t.$loading(e)}))},approve:function(){var t=this,e=tronWeb.contract(c,this.tokenInfo.tokenAddress);e.approve(this.tokenInfo.address,this.assets2.toSun(this.tokenInfo.tokenDecimal)).send().then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$loading(n);case 2:if(s=e.sent,!s){e.next=8;break}return e.next=6,t.$utils.call({contractAddress:t.tokenInfo.tokenAddress,method:"allowance(address,address)",parameter:[{type:"address",value:t.$address},{type:"address",value:t.tokenInfo.address}]});case 6:t.allowance=e.sent.constant_result[0].decode(["uint256"]).toString().fromSun(t.tokenInfo.tokenDecimal),t.addLiquidity();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},switchRate:function(){this.rateChanged=!this.rateChanged,this.rateChanged?this.rate="1".toSun(this.tokenInfo.tokenDecimal).toBN().multipliedBy(this.exTrxBalance).div(this.exTokenBalace).toString().fromSun().toFixed(6):this.rate="1".toSun().toBN().multipliedBy(this.exTokenBalace).div(this.exTrxBalance).toString().fromSun(this.tokenInfo.tokenDecimal)},inputTRX:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.tokenInputing){e.next=2;break}return e.abrupt("return",t.tokenInputing=!1);case 2:if(""!==t.assets1){e.next=6;break}return t.assets2="",t.prop="--",e.abrupt("return",!1);case 6:t.trxInputing=!0,n=setTimeout(Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.assets1.length>0&&(t.assets2=t.assets1.toSun().toBN().multipliedBy(t.exTokenBalace).div(t.exTrxBalance).toString().fromSun(t.tokenInfo.tokenDecimal)),clearTimeout(n);case 2:case"end":return e.stop()}}),e)}))),1e3),s=t.assets1.toSun().toBN(),t.prop="".concat(s.div(t.exTrxBalance.plus(s)).multipliedBy("100".toBN()).toString().toFixed(2),"%");case 10:case"end":return e.stop()}}),e)})))()},inputToken:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.trxInputing){e.next=2;break}return e.abrupt("return",t.trxInputing=!1);case 2:if(""!==t.assets2){e.next=6;break}return t.assets1="",t.prop="--",e.abrupt("return",!1);case 6:t.tokenInputing=!0,n=setTimeout(Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.assets2.length>0&&(t.assets1=t.assets2.toSun(t.tokenInfo.tokenDecimal).toBN().multipliedBy(t.exTrxBalance).div(t.exTokenBalace).toString().fromSun().toFixed(6)),clearTimeout(n);case 2:case"end":return e.stop()}}),e)}))),1e3),s=t.assets1.toSun().toBN(),t.prop="".concat(s.div(t.exTrxBalance.plus(s)).multipliedBy("100".toBN()).toString().toFixed(2),"%");case 10:case"end":return e.stop()}}),e)})))()},init:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,s,a,r,i,c,u,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,tronWeb.trx.getBalance(t.$address);case 2:return t.trx=e.sent.fromSun(),e.next=5,Object(o["c"])(t.$address);case 5:return n=e.sent.data.liquidityList.filter((function(t){return t.jswapBalance>0})),s=n.map((function(t){return t.address})),e.next=9,t.$utils.call({contractAddress:"TCNYd8L5hBey9FwPpvgtvDaY2cHjMFVLZu",method:"getPool(address,address[])",parameter:[{type:"address",value:t.$address},{type:"address[]",value:s}]});case 9:for(a=e.sent.constant_result[0].decode(["uint256[]","uint256[]","uint256[]","uint256[]"],["_token","_trx","_uniToken","_totalsupply"]),r=a._token,i=a._trx,c=a._uniToken,u=a._totalsupply,l=[],d=0;d<s.length;d++)l.push({logo:n[d].tokenLogoUrl,symbol:n[d].tokenSymbol,token:r[d].toString().fromSun(n[d].tokenDecimal),trx:i[d].toString().fromSun(),lp:c[d].toString().fromSun(),myShare:c[d].toString().toBN().div(u[d].toString().toBN()).multipliedBy("100".toBN()).toString().toFixed(2),address:n[d].address,tokenAddress:n[d].tokenAddress,tokenDecimal:n[d].tokenDecimal});t.list=l;case 17:case"end":return e.stop()}}),e)})))()}}},l=u,d=l,p=(n("3e9d"),n("2877")),v=Object(p["a"])(d,s,a,!1,null,"32127ffd",null);e["default"]=v.exports},"303b":function(t,e,n){},"3d50":function(t,e,n){"use strict";n("303b")},"3e9d":function(t,e,n){"use strict";n("ee2e")},4797:function(t,e){},8397:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbarBox"},[n("mkNavbar",{attrs:{title:"关于Pin"}}),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"AboutPin"},[n("div",[n("code",[n("pre",[t._v("    PinSwap Token（简称PIN），是PinSwap 平台代币，是整个系统运行和社区治理不可缺少的组成部分。\n1、总量发行：2100万枚，\n2、创世发行：105万枚用于提供初始流动池（PIN/USDT)\n3、挖矿产出：1995万枚\n4、共识机制：POL\n5、首日开盘价：1 PIN=1USDT\n6、销毁机制：每次拼团55%资金用于回购PIN销毁，销毁至最后21万枚，不再销毁，循环使用。")]),n("table",{attrs:{border:"1",cellspacing:"0"}},[n("tr",[n("th",[t._v("矿池/万枚")]),n("th",[t._v("初日&减半"),n("br"),t._v("日产出/枚")]),n("th",[t._v("约减半周期/日")]),n("th",[t._v("当日产矿/枚")])]),n("tr",[n("td",[t._v("第100")]),n("td",[t._v("1000")]),n("td",[t._v("359")]),n("td",[t._v("4580")])]),n("tr",[n("td",[t._v("第200")]),n("td",[t._v("2290")]),n("td",[t._v("274")]),n("td",[t._v("5020")])]),n("tr",[n("td",[t._v("第300")]),n("td",[t._v("2510")]),n("td",[t._v("263")]),n("td",[t._v("5130")])]),n("tr",[n("td",[t._v("第400")]),n("td",[t._v("2565")]),n("td",[t._v("260")]),n("td",[t._v("5155")])]),n("tr",[n("td",[t._v("第500")]),n("td",[t._v("2580")]),n("td",[t._v("259")]),n("td",[t._v("5160")])]),n("tr",[n("td",[t._v("第600之后")]),n("td",[t._v("2580")]),n("td",[t._v("259")]),n("td",[t._v("5160")])])])])])])}],r=n("4797"),o=n.n(r),i=o.a,c=i,u=(n("3d50"),n("2877")),l=Object(u["a"])(c,s,a,!1,null,"ea389b0a",null);e["default"]=l.exports},ee2e:function(t,e,n){}}]);