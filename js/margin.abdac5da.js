(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["margin"],{"0cb2":function(t,e,n){var r=n("7b0b"),a=Math.floor,i="".replace,s=/\$([$&'`]|\d\d?|<[^>]*>)/g,c=/\$([$&'`]|\d\d?)/g;t.exports=function(t,e,n,o,u,l){var f=n+t.length,d=o.length,v=c;return void 0!==u&&(u=r(u),v=s),i.call(l,v,(function(r,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(f);case"<":s=u[i.slice(1,-1)];break;default:var c=+i;if(0===c)return r;if(c>d){var l=a(c/10);return 0===l?r:l<=d?void 0===o[l-1]?i.charAt(1):o[l-1]+i.charAt(1):r}s=o[c-1]}return void 0===s?"":s}))}},"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"17ca":function(t,e,n){},5319:function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),i=n("50c4"),s=n("a691"),c=n("1d80"),o=n("8aa5"),u=n("0cb2"),l=n("14c3"),f=Math.max,d=Math.min,v=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var p=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=r.REPLACE_KEEPS_$0,h=p?"$":"$0";return[function(n,r){var a=c(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,r):e.call(String(a),n,r)},function(t,r){if(!p&&g||"string"===typeof r&&-1===r.indexOf(h)){var c=n(e,t,this,r);if(c.done)return c.value}var m=a(t),b=String(this),x="function"===typeof r;x||(r=String(r));var $=m.global;if($){var E=m.unicode;m.lastIndex=0}var y=[];while(1){var w=l(m,b);if(null===w)break;if(y.push(w),!$)break;var _=String(w[0]);""===_&&(m.lastIndex=o(b,i(m.lastIndex),E))}for(var P="",T=0,O=0;O<y.length;O++){w=y[O];for(var k=String(w[0]),R=f(d(s(w.index),b.length),0),C=[],S=1;S<w.length;S++)C.push(v(w[S]));var N=w.groups;if(x){var I=[k].concat(C,R,b);void 0!==N&&I.push(N);var A=String(r.apply(void 0,I))}else A=u(k,b,R,C,N,r);R>=T&&(P+=b.slice(T,R)+A,T=R+k.length)}return P+b.slice(T)}]}))},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"5bb1":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbarBox"},[n("div",{staticClass:"Margin navChild"},[n("div",{staticClass:"MarginContent"},[n("div",{staticClass:"MarginContentNumber",on:{click:function(e){return t.$router.push({path:"/record",query:{type:1}})}}},[n("span",[t._v(t._s(t.earnestAmount))]),n("div",{staticClass:"line"},t._l(6,(function(t){return n("div",{key:t})})),0)]),n("div",{staticClass:"MarginContentNumberText"},[n("div",[t._v(t._s(t.$t("margin.text1"))+"(PIN)")])]),n("div",{staticClass:"MarginContentInput"},[n("span",[t._v(t._s(t.$t("margin.text3")))]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text",placeholder:"0.00"},domProps:{value:t.value},on:{input:[function(e){e.target.composing||(t.value=e.target.value)},t.input]}}),n("span",[t._v("PIN")])])]),n("div",{staticClass:"selectNumber"},t._l(t.selectNumberList,(function(e,r){return n("div",{key:r,class:{active:t.active===r},on:{click:function(n){t.active=r,t.value=e}}},[t._v(" "+t._s(e)+" ")])})),0),n("div",{staticClass:"balance"},[t._v(" "+t._s(t.$t("margin.text4"))+" "+t._s(t.balance.pin)+" PIN ")]),n("div",{staticClass:"MarginContentButton"},[n("van-button",{directives:[{name:"ButClickLimit",rawName:"v-ButClickLimit"}],on:{click:t.transferIn}},[t._v(t._s(t.$t("margin.text5")))]),n("van-button",{directives:[{name:"ButClickLimit",rawName:"v-ButClickLimit"}],on:{click:t.transferOut}},[t._v(t._s(t.$t("margin.text6")))])],1),n("div",{staticClass:"MarginText"},[n("span",[t._v(t._s(t.$t("margin.text1")))]),n("p",[t._v(t._s(t.$t("margin.text7")))])])])]),n("self-authorize",{ref:"authorize",staticClass:"marginAuthorize",on:{send:t.transferIn}})],1)},a=[],i=(n("caad"),n("a9e3"),n("b680"),n("d3b7"),n("ac1f"),n("5319"),n("96cf"),n("1da1")),s=n("5530"),c={components:{"self-authorize":function(){return Promise.all([n.e("tokenInfo"),n.e("communityManagement~transaction"),n.e("redemption~transaction"),n.e("transaction")]).then(n.bind(null,"38fc"))}},data:function(){return{active:"",earnestAmount:0,value:"",orderResult:!1,settingShow:!1,maxEarnestAmount:1e3,isStart:!1}},computed:Object(s["a"])({},Vuex.mapState(["balance"])),created:function(){this.$contracts&&this.init()},methods:{init:function(){var t=this,e=new this.$web3.BatchRequest;e.add(this.$contracts.Pin.methods.isStart().call.request({from:this.$address})),e.add(this.$contracts.Pin.methods.players(this.$address).call.request({from:this.$address})),e.add(this.$contracts.Pin.methods.getMyNewRounds(this.$address).call.request({from:this.$address})),e.add(this.$web3.eth.getBlockNumber.request()),e.requestManager.sendBatch(e.requests,function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n,r){var a,i,s,c,o,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n){e.next=13;break}if(a=r[1].result.decode([{name:"drawablePower",type:"uint256"},{name:"earnestAmount",type:"uint256"}]),i=a.earnestAmount,s=r[2].result.decode(["uint256[]"]),t.isStart=r[0].result.decode(["bool"]),t.earnestAmount=i.fromWei().toFixed(4),!(s.length>0)){e.next=13;break}return e.next=8,t.$contracts.Pin.methods.rounds(s[0]).call({from:t.$address});case 8:c=e.sent,o=c.prepareBlock,u=c.luckyValue,l=t.getDrawState(Number(o),Number(u),Number(r[3].result)),t.orderResult=![3,5].includes(l);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},input:function(){this.value=this.value.replace(/[^\d]/g,"")},getDrawState:function(t,e,n){return 0===t?1:n>=t&&n<=t+10?2:n>t+10&&e>=0&&e<10?3:n>t&&n<t+255?4:5},transferIn:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isStart){e.next=2;break}return e.abrupt("return",vant.Toast.fail("合约暂未生效！"));case 2:return n=Number(t.value),r=Number(t.balance.pin),e.next=6,t.$contracts.PinToken.methods.allowance(t.$address,t.$contracts.Pin._address).call({from:t.$address});case 6:if(a=e.sent.fromWei(),""!=n){e.next=11;break}return e.abrupt("return",vant.Toast.fail(t.$t("margin.text16")));case 11:if(!(n>r)){e.next=15;break}return e.abrupt("return",vant.Toast.fail(t.$t("margin.text18")));case 15:if(!(n>a)){e.next=20;break}return t.$refs.authorize.amount=n,t.$refs.authorize.contractName="PinToken",t.$refs.authorize.contractAddress=t.$contracts.Pin._address,e.abrupt("return",t.$refs.authorize.toggle());case 20:i=t.$contracts.Pin.methods.rechargeEarnestAmount(n.toWei()),i.call({from:t.$address},(function(e,n){e||i.send({from:t.$address}).on("transactionHash",(function(e){vant.Toast.loading({message:t.$t("transaction.text7"),forbidClick:!0,duration:0,loadingType:"spinner"})})).on("receipt",(function(e){vant.Toast.clear(),t.settingShow=!1,t.active="",t.value="",t.init(),t.$getBalance(),vant.Toast.success(t.$t("margin.text21"))})).on("error",(function(e){vant.Toast.clear(),vant.Toast.fail(t.$t("transaction.text13"))}))}));case 22:case"end":return e.stop()}}),e)})))()},transferOut:function(){var t=this,e=Number(this.value),n=Number(this.earnestAmount);if(!this.isStart)return vant.Toast.fail("合约暂未生效！");if(""==e)return vant.Toast.fail(this.$t("margin.text16"));if(e>n)return vant.Toast.fail(this.$t("margin.text22"));if(this.orderResult)return vant.Toast.fail(this.$t("margin.text19"));var r=this.$contracts.Pin.methods.drawEarnestAmount(this.value.toWei());r.call({from:this.$address},(function(e,n){e||r.send({from:t.$address}).on("transactionHash",(function(e){vant.Toast.loading({message:t.$t("transaction.text7"),forbidClick:!0,duration:0,loadingType:"spinner"})})).on("receipt",(function(e){vant.Toast.clear(),t.value="",t.init(),t.$getBalance(),vant.Toast.success(t.$t("margin.text23"))})).on("error",(function(e){vant.Toast.clear(),vant.Toast.fail(t.$t("transaction.text13"))}))}))}}},o=c,u=o,l=(n("8876"),n("96b3"),n("2877")),f=Object(l["a"])(u,r,a,!1,null,"4a9555d8",null);e["default"]=f.exports},8876:function(t,e,n){"use strict";n("17ca")},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),i=RegExp.prototype.exec,s=String.prototype.replace,c=i,o=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=o||l||u;f&&(c=function(t){var e,n,a,c,f=this,d=u&&f.sticky,v=r.call(f),p=f.source,g=0,h=t;return d&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),h=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(p="(?: "+p+")",h=" "+h,g++),n=new RegExp("^(?:"+p+")",v)),l&&(n=new RegExp("^"+p+"$(?!\\s)",v)),o&&(e=f.lastIndex),a=i.call(d?n:f,h),d?a?(a.input=a.input.slice(g),a[0]=a[0].slice(g),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:o&&a&&(f.lastIndex=f.global?a.index+a[0].length:e),l&&a&&a.length>1&&s.call(a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),t.exports=c},"96b3":function(t,e,n){"use strict";n("bcff")},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},bcff:function(t,e,n){},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),i=n("b622"),s=n("9263"),c=n("9112"),o=i("species"),u=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),v=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var p=i(t),g=!a((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),h=g&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!g||!h||"replace"===t&&(!u||!l||d)||"split"===t&&!v){var m=/./[p],b=n(p,""[t],(function(t,e,n,r,a){return e.exec===s?g&&!a?{done:!0,value:m.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),x=b[0],$=b[1];r(String.prototype,t,x),r(RegExp.prototype,p,2==e?function(t,e){return $.call(t,this,e)}:function(t){return $.call(t,this)})}f&&c(RegExp.prototype[p],"sham",!0)}},dbb4:function(t,e,n){var r=n("23e7"),a=n("83ab"),i=n("56ef"),s=n("fc6a"),c=n("06cf"),o=n("8418");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,n,r=s(t),a=c.f,u=i(r),l={},f=0;while(u.length>f)n=a(r,e=u[f++]),void 0!==n&&o(l,e,n);return l}})},e439:function(t,e,n){var r=n("23e7"),a=n("d039"),i=n("fc6a"),s=n("06cf").f,c=n("83ab"),o=a((function(){s(1)})),u=!c||o;r({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return s(i(t),e)}})}}]);