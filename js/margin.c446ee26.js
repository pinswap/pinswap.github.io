(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["margin"],{"17ca":function(t,e,n){},"5bb1":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbarBox"},[n("mkNavbar",{attrs:{title:t.$t("margin.text1")}}),n("div",{staticClass:"Margin navChild"},[n("div",{staticClass:"MarginContent"},[n("div",{staticClass:"MarginContentNumber",on:{click:function(e){return t.$router.push({path:"/record",query:{type:1}})}}},[n("span",[t._v(t._s(t.earnestAmount))]),n("div",{staticClass:"line"},t._l(6,(function(t){return n("div",{key:t})})),0)]),n("div",{staticClass:"MarginContentNumberText"},[n("div",[t._v(t._s(t.$t("margin.text1"))+"(USDT)")])]),n("div",{staticClass:"MarginContentInput"},[n("span",[t._v(t._s(t.$t("margin.text3")))]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text",placeholder:"0.00"},domProps:{value:t.value},on:{input:[function(e){e.target.composing||(t.value=e.target.value)},function(e){return t.input(!1)}]}}),n("span",[t._v("USDT")])])]),n("div",{staticClass:"selectNumber"},t._l(t.selectNumberList,(function(e,a){return n("div",{key:a,class:{active:t.active===a},on:{click:function(n){t.active=a,t.value=e}}},[t._v(" "+t._s(e)+" ")])})),0),n("div",{staticClass:"balance"},[t._v(" "+t._s(t.$t("margin.text4"))+" "+t._s(t.balance.usdt)+" USDT ")]),n("div",{staticClass:"MarginContentButton"},[n("van-button",{directives:[{name:"ButClickLimit",rawName:"v-ButClickLimit"}],on:{click:function(e){return t.isAutoIn(!1)}}},[t._v(t._s(t.$t("margin.text5")))]),n("van-button",{directives:[{name:"ButClickLimit",rawName:"v-ButClickLimit"}],on:{click:t.transferOut}},[t._v(t._s(t.$t("margin.text6")))])],1),n("div",{staticClass:"MarginText"},[n("span",[t._v(t._s(t.$t("margin.text1")))]),n("p",[t._v(t._s(t.$t("margin.text7")))])])])]),n("self-authorize",{ref:"authorize",staticClass:"marginAuthorize",on:{send:t.transferIn}})],1)},i=[],r=(n("a9e3"),n("b680"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("96cf"),n("1da1")),s=n("5530"),o={components:{"self-authorize":function(){return Promise.all([n.e("tokenInfo"),n.e("communityManagement~transaction"),n.e("redemption~transaction"),n.e("transaction")]).then(n.bind(null,"38fc"))}},data:function(){return{active:"",earnestAmount:0,value:"",value1:"",orderResult:!1,settingShow:!1,maxEarnestAmount:1e3,lv:0,isAuto:!1,isMiner:!1,checked:!1}},computed:Object(s["a"])({},Vuex.mapState(["balance"])),created:function(){this.$pingSwapContracts&&this.init()},methods:{init:function(){var t=this;this.$tronWeb.call({contractAddress:this.$pingSwapContracts.Pin.address,method:"myAwards"}).then((function(e){t.earnestAmount=e.earnestAmount.toString().fromSun().toFixed(4)})),this.$tronWeb.call({contractAddress:this.$pingSwapContracts.Pin.address,method:"myIsAutoDoPin"}).then((function(e){t.checked=e})),this.$tronWeb.call({contractAddress:this.$pingSwapContracts.Relation.address,method:"myIsMiner",parameter:[this.$address]}).then((function(e){t.isMiner=e})),this.$tronWeb.call({contractAddress:this.$pingSwapContracts.Pin.address,method:"infos",parameter:[!0]}).then((function(e){e.status[0]<4&&(t.orderResult=!0)})).catch((function(t){})),this.$tronWeb.call({contractAddress:this.$pingSwapContracts.Relation.address,method:"recommendInfo"}).then((function(e){t.lv=e.level,t.$store.commit("lv",t.lv)}))},input:function(t){t?(this.value1=this.value1.replace(/[^\d]/g,""),this.value1):(this.value=this.value.replace(/[^\d]/g,""),this.value)},isAutoIn:function(t){this.isAuto=t,this.transferIn()},transferIn:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.isAuto?Number(t.value1):Number(t.value),a=Number(t.balance.usdt),e.next=4,t.$tronWeb.call({contractAddress:t.$pingSwapContracts.UsdtToken.address,method:"allowance",parameter:[t.$address,t.$pingSwapContracts.Pin.address]}).then();case 4:if(i=e.sent.toString().fromSun(),""!=n){e.next=9;break}return e.abrupt("return",t.$toast.fail(t.$t("margin.text16")));case 9:if(t.isMiner){e.next=13;break}return e.abrupt("return",t.$toast.fail(t.$t("margin.text17")));case 13:if(!(n>a)){e.next=17;break}return e.abrupt("return",t.$toast.fail(t.$t("margin.text18")));case 17:if(!t.isAuto||!t.orderResult){e.next=21;break}return e.abrupt("return",t.$toast.fail(t.$t("margin.text19")));case 21:if(!t.isAuto||t.lv){e.next=25;break}return e.abrupt("return",t.$toast.fail(t.$t("margin.text20")));case 25:if(!(n>i)){e.next=30;break}return t.$refs.authorize.amount=n,t.$refs.authorize.contractName="UsdtToken",t.$refs.authorize.contractAddress=t.$pingSwapContracts.Pin.address,e.abrupt("return",t.$refs.authorize.toggle());case 30:t.$tronWeb.call({contractAddress:t.$pingSwapContracts.Pin.address,method:"rechargeEarnestAmount",parameter:[n.toSun(),t.isAuto],option:{feeLimit:t.$store.state.generalFeeLimit.toSun()}}).then((function(e){e&&t.$pingSwapContracts.Pin.rechargeEarnestAmount(n.toSun(),t.isAuto).send({feeLimit:t.$store.state.generalFeeLimit.toSun()}).then((function(e){t.$loading(e).then((function(e){e&&(t.settingShow=!1,t.active="",t.value="",t.value1="",t.init(),t.$getBalance(),t.$toast.success(t.$t("margin.text21")))}))}))}));case 31:case"end":return e.stop()}}),e)})))()},transferOut:function(){var t=this,e=Number(this.value),n=Number(this.earnestAmount);return""==e?this.$toast.fail(this.$t("margin.text16")):e>n?this.$toast.fail(this.$t("margin.text22")):this.orderResult?this.$toast.fail(this.$t("margin.text19")):void this.$tronWeb.call({contractAddress:this.$pingSwapContracts.Pin.address,method:"drawEarnestAmount",parameter:[this.value.toSun()],option:{feeLimit:this.$store.state.generalFeeLimit.toSun()}}).then((function(e){e&&t.$pingSwapContracts.Pin.drawEarnestAmount(t.value.toSun()).send({feeLimit:t.$store.state.generalFeeLimit.toSun()}).then((function(e){t.$loading(e).then((function(e){e&&(t.value="",t.init(),t.$getBalance(),t.$toast.success(t.$t("margin.text23")))}))}))}))}}},u=o,c=u,l=(n("8876"),n("ed15"),n("2877")),d=Object(l["a"])(c,a,i,!1,null,"6a35e573",null);e["default"]=d.exports},8876:function(t,e,n){"use strict";n("17ca")},d42c:function(t,e,n){},ed15:function(t,e,n){"use strict";n("d42c")}}]);