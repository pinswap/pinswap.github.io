(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["account"],{"2c36":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAuCAMAAABUHhoZAAAAAXNSR0IArs4c6QAAAJ9QTFRFAAAAAID/IID/KpX/MI//N5D/NZX/OpT/OI//OY7/O5T/OpX/N5L/O5L/PZP/N5D/OJP/OZT/OpL/OZT/O5X/OpP/O5T/PJT/PJX/PJT/PJP/OpX/PJX/OpT/O5P/O5X/O5P/O5T/O5T/O5P/PJT/PJT/O5P/PJP/O5T/O5P/O5T/O5T/PJP/PJT/PJT/PJT/PJP/PJT/PJT/PJP/PJT/XoxgzQAAADR0Uk5TAAQIDBAXGB8gJCswODg7PEBDS0xbXF9rc3d7f3+Dh4uTm5+jp6u7u8vT19/j4+fr7/P3+4hqo24AAADPSURBVEjH7dbJEoIwEATQjguKO7gRd1BUXNDI/P+3eYcqqPRJq+j7u2TSkwD6JZb5xC3MhEiME8M+iBn2xMAQbAG4emObIer8T1SHYl3jUUyyBcVE1hyTSFFMzk2KSeIAAPwwKsu2nWOS9gAsqyqZOjkmxgOq91aQZ5L5qN4JqwITjV2VyvoFtgaUTu5luU7zR5LNmQGkY2ZuN5cZt/UlQVdEQsUUJ6BqOmVq2pjUi/GH0tGRZfYjwH1TT/6B+WA8cOG+M5phR6htaotM1PwCcZyy16tI19oAAAAASUVORK5CYII="},"4ca2":function(t,e,n){"use strict";n("bd0a")},8822:function(t,e,n){"use strict";n("ce4b")},a3f2:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("div",{staticClass:"card"},[n("div",[n("span",[t._v("全网算力")]),n("span",[t._v(t._s(t.networkPower))])]),n("div",[n("span",[t._v("流动资金池")]),n("span",[t._v("$"+t._s(t.totalLiquidity))])])]),n("div",{staticClass:"card"},[n("div",[n("span",[t._v("今日出矿")]),n("span",[t._v(t._s(t.todayReleaseValue))])]),n("div",[n("span",[t._v("矿池合约")]),n("span",[t._v(t._s(t.pinBalance))])])]),n("div",{staticClass:"card"},[n("div",[n("span",[t._v("黑洞地址")]),n("span",[t._v(t._s(t.burnBalance))])]),n("div",[n("span",[t._v("用户")]),n("span",[t._v(t._s(t.totalAddress))])])]),n("div",{staticClass:"card"},[n("div",[n("span",[t._v("保证金")]),n("span",[t._v(t._s(t.margin))])]),n("div",[n("span",[t._v("质押LP")]),n("span",[t._v(t._s(t.pledgeLP))])])]),n("div",{staticClass:"card"},[n("div",[n("span",[t._v("TRX储备量")]),n("span",[t._v(t._s(t.trxReserve))])]),n("div",[n("span",[t._v("PIN储备量")]),n("span",[t._v(t._s(t.pinReserve))])])]),n("div",{staticClass:"card"},[n("div",[n("span",[t._v("24小时成交数")]),n("span",[t._v(t._s(t.transaction24H))])]),n("div",[n("span",[t._v("24小时成交额（$）")]),n("span",[t._v(t._s(t.volume24H))])])])])},r=[],s=(n("b680"),n("d3b7"),n("25f0"),n("96cf"),n("1da1"));function c(t){return i.apply(this,arguments)}function i(){return i=Object(s["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,{cache:"reload"});case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)}))),i.apply(this,arguments)}var o=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c("https://abc.ablesdxd.link/swap/scan/statusinfo?exchangeAddress=".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u={data:function(){return{networkPower:0,totalLiquidity:0,todayReleaseValue:0,pinBalance:0,burnBalance:0,totalAddress:0,margin:0,pledgeLP:0,trxReserve:0,pinReserve:0,transaction24H:0,volume24H:0}},created:function(){this.$utils&&this.init()},methods:{init:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,a,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$utils.call({contractAddress:t.$contracts.Mine.address,method:"netWorkInfo"});case 2:return n=e.sent,a=n.power,t.networkPower=a.toString(),e.next=7,o(t.$contracts.pin_trx.address);case 7:return r=e.sent,c=r.data,t.totalLiquidity=c.totalLiquidity.toFixed(0),t.transaction24H=c.transaction24H,t.volume24H=c.volume24H.toFixed(0),e.next=14,t.$utils.call({contractAddress:t.$contracts.Mine.address,method:"todayReleaseValue"});case 14:return t.todayReleaseValue=e.sent.toString().fromSun(),e.next=17,t.$utils.call({contractAddress:t.$contracts.PinToken.address,method:"balanceOf",parameter:[t.$contracts.PinToken.address]});case 17:return t.pinBalance=e.sent.toString().fromSun().toFixed(0),e.next=20,t.$utils.call({contractAddress:t.$contracts.PinToken.address,method:"balanceOf",parameter:["T9yD14Nj9j7xAB4dbGeiX9h8upfCg3PBbY"]});case 20:return t.burnBalance=e.sent.toString().fromSun().toFixed(0),e.next=23,t.$utils.call({contractAddress:t.$contracts.Relation.address,method:"totalAddresses"});case 23:return t.totalAddress=e.sent,t.$utils.call({contractAddress:t.$contracts.UsdtToken.address,method:"balanceOf",parameter:[t.$contracts.Pin.address]}).then(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$utils.call({contractAddress:t.$contracts.Pin.address,method:"withdraw",parameter:[t.$address]});case 2:a=e.sent,t.margin=n.toString().toBN().minus(a.toString()).toString().fromSun();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=27,t.$utils.call({contractAddress:t.$contracts.pin_trx.address,method:"balanceOf",parameter:[t.$contracts.Pledge.address]});case 27:return t.pledgeLP=e.sent.toString().fromSun().toFixed(0),e.next=30,t.$utils.getBalance(t.$contracts.pin_trx.address);case 30:return t.trxReserve=e.sent.fromSun().toFixed(0),e.next=33,t.$utils.call({contractAddress:t.$contracts.PinToken.address,method:"balanceOf",parameter:[t.$contracts.pin_trx.address]});case 33:t.pinReserve=e.sent.toString().fromSun().toFixed(0);case 34:case"end":return e.stop()}}),e)})))()}}},d=u,l=d,p=(n("4ca2"),n("2877")),v=Object(p["a"])(l,a,r,!1,null,"268ae9a2",null);e["default"]=v.exports},b44e:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"k-header"},[a("img",{attrs:{src:n("2c36")},on:{click:function(e){t.show=!0}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"menus"},[a("span",{on:{click:function(e){return t.nav("/account")}}},[t._v("账户管理")]),a("span",{on:{click:function(e){return t.nav("/community")}}},[t._v("社区管理")]),a("span",{on:{click:function(e){return t.nav("/draw-trx")}}},[t._v("领取TRX")]),a("span",{on:{click:function(e){return t.nav("/draw-usdt")}}},[t._v("领取USDT")]),a("span",{on:{click:function(e){return t.nav("/set-pin")}}},[t._v("拼团设置")]),a("span",{on:{click:function(e){return t.nav("/inquire-power")}}},[t._v("查询算力")]),a("span",{on:{click:function(e){return t.nav("/clear-pin")}}},[t._v("清除PIN")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"overlay",on:{click:function(e){t.show=!1}}})])},r=[],s={data:function(){return{show:!1}},methods:{nav:function(t){this.$router.push(t),this.show=!1}}},c=s,i=c,o=(n("8822"),n("2877")),u=Object(o["a"])(i,a,r,!1,null,"6189e66c",null);e["default"]=u.exports},bd0a:function(t,e,n){},ce4b:function(t,e,n){}}]);