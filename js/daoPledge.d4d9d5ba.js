(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["daoPledge"],{"4b40":function(t,e,a){"use strict";a("6e07")},"5df1":function(t,e,a){t.exports=a.p+"img/lp.e1e19bab.svg"},"6e07":function(t,e,a){},f7ca:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pledge"},[n("div",{staticClass:"form"},[n("div",{staticClass:"container"},[n("div",{staticClass:"tokens"},[n("img",{attrs:{src:a("5df1")}}),n("div",[n("span",[t._v("USDT-AI/LP")]),n("span",[t._v(t._s(t.lpBalance.toFixed(2)))])])]),n("div",{staticClass:"title"},[t._v(t._s(t.$t("pledge.text1")))]),n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.pledgeNum,expression:"pledgeNum"}],attrs:{type:"number",placeholder:t.title},domProps:{value:t.pledgeNum},on:{input:[function(e){e.target.composing||(t.pledgeNum=e.target.value)},t.input]}}),n("button",{attrs:{disabled:0==t.lpBalance},on:{click:t.allin}},[t._v(t._s(t.$t("pledge.text3")))])]),n("div",{staticClass:"get-power"},[n("span",[t._v(t._s(t.$t("pledge.text4")))]),n("span",[t._v(t._s(t.getPower))])]),n("router-link",{attrs:{to:"/"}},[t._v("获得LP")]),n("button",{attrs:{disabled:0==t.lpBalance},on:{click:t.transition}},[t._v(t._s(t.isApprove?t.$t("pledge.text12"):t.$t("pledge.text13")))])],1)]),n("div",{staticClass:"record"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("pledge.text8")))]),n("div",{staticClass:"list-container"},t._l(t.records,(function(e){return n("div",{key:e,staticClass:"list-item"},[n("div",{staticClass:"pair"},[t._m(0,!0),n("span",[t._v(t._s(e.time))])]),n("div",{staticClass:"amount"},[n("span",[t._v(t._s(t.$t("pledge.text9")))]),n("span",[t._v(t._s(e.amount))])])])})),0)])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{attrs:{src:a("5df1")}}),n("span",[t._v("USDT-AI/LP")])])}],i=(a("99af"),a("fb6a"),a("a9e3"),a("b680"),a("96cf"),a("1da1")),o={data:function(){return{records:[],lpBalance:0,pledgeNum:"",allowance:0,isApprove:!0,gainPower:0,inputing:!1,getPower:0,title:this.$t("pledge.text2"),isStart:!1}},created:function(){this.$daoContracts&&this.init()},methods:{init:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=new t.$web3.BatchRequest,a.add(t.$daoContracts.Pledge.methods.isStart().call.request({from:t.$address})),a.add(t.$daoContracts.Pair.methods.balanceOf(t.$address).call.request({from:t.$address})),a.add(t.$daoContracts.Pair.methods.allowance(t.$address,t.$daoContracts.Pledge._address).call.request({from:t.$address})),a.add(t.$daoContracts.Pledge.methods.getMinerInfo(0).call.request({from:t.$address})),a.requestManager.sendBatch(a.requests,(function(e,a){if(!e){var n=a[3].result.decode([{name:"pledgeLp",type:"uint256"},{name:"gainPower",type:"uint256"}]),s=n.gainPower;t.isStart=("string"===typeof a[0]?a[0]:a[0].result).decode(["bool"]),t.lpBalance=a[1].result.decode(["uint256"]).fromWei(),t.allowance=a[2].result.decode(["uint256"]).fromWei(),t.gainPower=s}})),t.records=[],t.$daoContracts.Pledge.events.DoPledge({fromBlock:0,filter:{owner:t.$address}}).on("data",(function(e){var a=e.returnValues,n=a.time,s=a.amount;t.records.unshift({amount:s.fromWei(),time:t.formatDate(n)})}));case 8:case"end":return e.stop()}}),e)})))()},allin:function(){this.pledgeNum=this.lpBalance,this.input()},input:function(){var t=this;if(Number(this.pledgeNum)<=0)return this.getPower=0,!1;if(this.inputing)return this.isApprove=Number(this.allowance)>=Number(this.pledgeNum),!1;this.inputing=!0,this.isApprove=Number(this.allowance)>=Number(this.pledgeNum);var e=setTimeout((function(){if(Number(t.pledgeNum)<=0)return t.getPower=0,t.inputing=!1,clearTimeout(e),!1;t.$daoContracts.Pledge.methods.predictPower(0,t.pledgeNum.toWei(),!0).call({from:t.$address},(function(a,n){a?console.log(a):(n.toBN().gt(t.gainPower)?t.getPower=n.toBN().minus(t.gainPower).toFixed():t.getPower="-".concat(t.gainPower.toBN().minus(n).toFixed()),t.inputing=!1,clearTimeout(e))}))}),1e3)},approve:function(){var t=this,e=this.$daoContracts.Pair.methods.approve(this.$daoContracts.Pledge._address,(10*Number(this.pledgeNum)).toWei());e.call({from:this.$address},(function(a,n){a||e.send({from:t.$address}).on("transactionHash",(function(e){vant.Toast.loading({message:t.$t("transaction.text6"),forbidClick:!0,duration:0,loadingType:"spinner"})})).on("receipt",(function(e){vant.Toast.clear(),t.init(),t.isApprove=!0,vant.Toast.success(t.$t("pledge.text10"))})).on("error",(function(e){vant.Toast.clear(),vant.Toast.fail(t.$t("transaction.text13"))}))}))},transition:function(){Number(this.gainPower)<0?vant.Dialog.confirm({message:this.$t("pledge.text14",{number:this.gainPower.slice(1)}),confirmButtonText:this.$t("pledge.text15"),cancelButtonText:this.$t("pledge.text16"),confirmButtonColor:"#3C94FF",cancelButtonColor:"#ee0a24"}).then(this.doPledge).catch((function(){})):this.doPledge()},doPledge:function(){var t=this;if(!this.isStart)return vant.Toast.fail("合约暂未生效！");if(Number(this.pledgeNum)<.1)return vant.Toast.fail("最低质押0.1LP！");if(Number(this.pledgeNum)>Number(this.lpBalance))return vant.Toast.fail(this.$t("boardLockout.text11"));if(!this.isApprove)return this.approve();var e=this.$daoContracts.Pledge.methods.doPledge(0,this.pledgeNum.toWei());e.call({from:this.$address},(function(a,n){a?console.log(a):e.send({from:t.$address}).on("transactionHash",(function(e){vant.Toast.loading({message:t.$t("transaction.text7"),forbidClick:!0,duration:0,loadingType:"spinner"})})).on("receipt",(function(e){vant.Toast.clear(),t.init(),t.pledgeNum="",t.getPower=0,vant.Toast.success(t.$t("pledge.text11"))})).on("error",(function(e){vant.Toast.clear(),vant.Toast.fail(t.$t("transaction.text13"))}))}))},formatDate:function(t){var e=new Date(1e3*Number(t)),a=e.getFullYear(),n=e.getMonth()+1,s=e.getDate(),i=e.getHours(),o=e.getMinutes();return"".concat(a,"/").concat(n,"/").concat(s," ").concat(i,":").concat(o)}}},r=o,d=r,l=(a("4b40"),a("2877")),c=Object(l["a"])(d,n,s,!1,null,"62947d4e",null);e["default"]=c.exports}}]);