(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d346fefc"],{1772:function(t,e,o){"use strict";o("7d84")},"7d84":function(t,e,o){},8065:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("van-overlay",{staticClass:"board-redeem",attrs:{show:t.show},on:{click:function(e){t.show=!1}}},[s("div",{staticClass:"container",on:{click:function(t){t.stopPropagation()}}},[s("span",[t._v(t._s(t.$t("boardRedeem.text1"))+t._s(t.orderInfo.id))]),s("div",{staticClass:"lockout"},[s("div",{staticClass:"lp-info"},[s("span",[t._v(t._s(t.$t("boardRedeem.text2")))]),s("div",[s("span",[t._v(t._s(t.orderInfo.lpNum)+" LP")]),s("span",[t._v("≈$"+t._s(t.orderInfo.usd.toFixed(2)))])])]),s("div",{staticClass:"tokens"},[s("div",[s("img",{attrs:{src:o("086e")}}),s("span",[t._v(t._s(t.orderInfo.usd.toFixed(4))+" USDT")])]),s("div",[s("img",{attrs:{src:o("f48e")}}),s("span",[t._v(t._s(t.orderInfo.pin.toFixed(4))+" PIN")])])])]),s("div",{staticClass:"power"},[s("span",[t._v(t._s(t.$t("boardRedeem.text3")))]),s("span",[t._v(t._s(t.orderInfo.power))])]),s("van-button",{on:{click:t.doRedeem}},[t._v(t._s(t.$t("boardRedeem.text4")))])],1)])},n=[],a={props:{orderInfo:{type:Object,required:!0}},data:function(){return{show:!1}},methods:{display:function(){this.show=!0},doRedeem:function(){var t=this,e=this.$contracts.Shareholders.methods.doRedeem(this.orderInfo.id);e.call({from:this.$address},(function(o,s){!o&&s&&e.send({from:t.$address}).on("transactionHash",(function(e){vant.Toast.loading({message:t.$t("transaction.text7"),forbidClick:!0,duration:0,loadingType:"spinner"})})).on("receipt",(function(e){vant.Toast.clear(),vant.Toast.success(t.$t("boardRedeem.text5")),t.$emit("reload"),t.show=!1})).on("error",(function(e){vant.Toast.clear(),vant.Toast.fail(t.$t("transaction.text13"))}))}))}}},r=a,i=r,d=(o("1772"),o("2877")),c=Object(d["a"])(i,s,n,!1,null,"2fc9dc94",null);e["default"]=c.exports},f48e:function(t,e,o){t.exports=o.p+"img/PinToken.f4bb9f8e.svg"}}]);