(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["invitationList"],{"480c":function(t,i,n){t.exports=n.p+"img/InvitationListMoney.58e103a1.png"},"6f62":function(t,i,n){},"78a3":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAZCAYAAADe1WXtAAABLUlEQVRIS+2WwU3DQBBF50e2z0kF0AGhg1ABdICRvHslVAAdYK47lnAJdEDoICXQAeG6hx00liw5TiJ5MUKKlLnsYWffzsxffRvGmDkRvQLQNSY+Qwh3VVWt+odgrV0T0bmI6Do4tAgREWae7YPq3gczLwYTicgYUwK4d87hz6DW2iciejweqPd+lqbpBRF9M3Ojiwr1q5m27YcQriaTybvCROSFmZejoVppkiRzADWAM53xaGgrVFe4E3Sc+qeZNoay70mtmfky0qXeAFwfmmlNRLcxwDa3a5lbleZ5Ps2yLBeRmxgwgJX3vqzrerPTfh9UFMUCwKZ1nKEXbVXaPzTWtRpD+S+ozuiLiFTAmMj1A3qo0iURPcfQOrkPzrlyp31N0H8BEZnGgLvi/gDpEk4pY5mhBwAAAABJRU5ErkJggg=="},"82c6":function(t,i,n){t.exports=n.p+"img/InvitationListBg.40e9c9f6.png"},"857a":function(t,i,n){var s=n("1d80"),o=/"/g;t.exports=function(t,i,n,a){var e=String(s(t)),r="<"+i;return""!==n&&(r+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),r+">"+e+"</"+i+">"}},9911:function(t,i,n){"use strict";var s=n("23e7"),o=n("857a"),a=n("af03");s({target:"String",proto:!0,forced:a("link")},{link:function(t){return o(this,"a","href",t)}})},af03:function(t,i,n){var s=n("d039");t.exports=function(t){return s((function(){var i=""[t]('"');return i!==i.toLowerCase()||i.split('"').length>3}))}},c7ff:function(t,i,n){"use strict";n.r(i);var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"InvitationList"},[s("div",{staticClass:"InvitationListBg"}),s("div",{staticClass:"InvitationListTitle"},[s("img",{attrs:{src:n("c590")},on:{click:function(i){return t.$router.back()}}})]),s("div",{staticClass:"InvitationListContent"},[s("div",{staticClass:"title"},[s("span",{domProps:{textContent:t._s(t.$t("invitationList.text1"))}}),s("div",[t._v(t._s(t.$t("invitationList.text2"))),s("span",[t._v("PIN")]),t._v(t._s(t.$t("invitationList.text3")))])]),s("div",{staticClass:"InvitationLink"},[s("img",{staticClass:"bg",attrs:{src:n("82c6")}}),s("img",{staticClass:"money",attrs:{src:n("480c")}}),s("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.link,expression:"link",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onCopyError,expression:"onCopyError",arg:"error"}]},[s("span",[t._v(t._s(t.$t("invitationList.text4"))+t._s(t.link))]),s("div",[s("img",{attrs:{src:n("78a3")}}),s("span",{domProps:{textContent:t._s(t.$t("invitationList.text5"))}},[t._v("复制")])])]),s("div",{on:{click:function(i){t.$refs.card.cardShow=!0}}},[s("span",[t._v(t._s(t.$t("invitationList.text6"))+t._s(t.code))]),s("div",[s("span",{domProps:{textContent:t._s(t.$t("invitationList.text7"))}})])])]),s("div",{staticClass:"invitationStatistics"},[s("div",{domProps:{textContent:t._s(t.$t("invitationList.text8"))}}),s("div",[s("div",[s("span",[t._v(t._s(t.inviteCount)+"人")]),s("span",{domProps:{textContent:t._s(t.$t("invitationList.text9"))}})]),s("div",[s("span",[t._v(t._s(t.shareAward)+" TRX")]),s("span",{domProps:{textContent:t._s(t.$t("invitationList.text10"))}})])])]),s("div",{staticClass:"list"},[s("div",{domProps:{textContent:t._s(t.$t("invitationList.text11"))}}),s("div",{staticClass:"listBox"},t._l(t.list,(function(i,n){return s("div",{key:n,class:{two:(n+1)%2==0}},[s("div",[s("span",[t._v(t._s(t.$t("invitationList.text12"))+t._s(i.name))]),s("span",[t._v(t._s(t.$t("invitationList.text13"))),s("span",{staticClass:"address"},[t._v(t._s(i.address))])])]),s("div",[s("span",[t._v(t._s(t.$t("invitationList.text14"))+t._s(i.id))]),s("span",[t._v(t._s(t.$t("invitationList.text15"))+t._s(i.state))])])])})),0)])]),s("invitation-card",{ref:"card"})],1)},o=[],a=(n("99af"),n("4160"),n("b680"),n("d3b7"),n("25f0"),n("3ca3"),n("9911"),n("159b"),n("ddb0"),n("3835")),e={components:{"invitation-card":function(){return Promise.all([n.e("detail~join-fund-pool~transaction"),n.e("communityManagement~transaction"),n.e("redemption~transaction"),n.e("transaction")]).then(n.bind(null,"6baf"))}},data:function(){return{code:"******",link:"",list:[],shareAward:"",inviteCount:"",doubt:!1}},methods:{init:function(){var t=this;this.$tronWeb.call({contractAddress:this.$pingSwapContracts.Relation.address,method:"recommendInfo"}).then((function(i){t.shareAward=i.shareAward.toString().fromSun().toFixed(2),t.inviteCount=i.inviteCount.toNumber(),parseInt(i.shotCode,16)&&(t.code=i.shotCode.hexToString()),t.$refs.card.code=t.code,t.link="".concat(location.origin,"/#/mining?code=").concat(t.code),i.invites.forEach((function(i){Promise.all([t.$tronWeb.call({contractAddress:t.$pingSwapContracts.Relation.address,method:"addressToShortCode",parameter:[i]}).then(),t.$tronWeb.call({contractAddress:t.$pingSwapContracts.Relation.address,method:"addressToNickName",parameter:[i]}).then()]).then((function(n){var s=Object(a["a"])(n,2),o=s[0],e=s[1],r=window.tronWeb.address.fromHex(i);t.list.push({name:e.toString().hexToString(!0),id:o.toString().hexToString(),address:"".concat(r.substr(0,5),"...").concat(r.substr(-8,8)),state:t.$t("invitationList.text16")})}))}))}))},onCopySuccess:function(){this.$toast.success(this.$t("invitationList.text17"))},onCopyError:function(){this.$toast.fail(this.$t("invitationList.text18"))}},mounted:function(){this.$pingSwapContracts&&this.init()}},r=e,c=r,d=(n("de85"),n("2877")),v=Object(d["a"])(c,s,o,!1,null,"6acb6621",null);i["default"]=v.exports},de85:function(t,i,n){"use strict";n("6f62")}}]);