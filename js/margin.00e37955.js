(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["margin"],{"057f":function(t,e,n){var r=n("fc6a"),a=n("241c").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return a(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?c(t):a(r(t))}},"0cb2":function(t,e,n){var r=n("7b0b"),a=Math.floor,i="".replace,o=/\$([$&'`]|\d\d?|<[^>]*>)/g,c=/\$([$&'`]|\d\d?)/g;t.exports=function(t,e,n,s,u,f){var l=n+t.length,d=s.length,v=c;return void 0!==u&&(u=r(u),v=o),i.call(f,v,(function(r,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(l);case"<":o=u[i.slice(1,-1)];break;default:var c=+i;if(0===c)return r;if(c>d){var f=a(c/10);return 0===f?r:f<=d?void 0===s[f-1]?i.charAt(1):s[f-1]+i.charAt(1):r}o=s[c-1]}return void 0===o?"":o}))}},"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"159b":function(t,e,n){var r=n("da84"),a=n("fdbc"),i=n("17c2"),o=n("9112");for(var c in a){var s=r[c],u=s&&s.prototype;if(u&&u.forEach!==i)try{o(u,"forEach",i)}catch(f){u.forEach=i}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,a=n("a640"),i=n("ae40"),o=a("forEach"),c=i("forEach");t.exports=o&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"17ca":function(t,e,n){},2618:function(t,e,n){},4160:function(t,e,n){"use strict";var r=n("23e7"),a=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},5319:function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),i=n("50c4"),o=n("a691"),c=n("1d80"),s=n("8aa5"),u=n("0cb2"),f=n("14c3"),l=Math.max,d=Math.min,v=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var p=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,h=r.REPLACE_KEEPS_$0,g=p?"$":"$0";return[function(n,r){var a=c(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,r):e.call(String(a),n,r)},function(t,r){if(!p&&h||"string"===typeof r&&-1===r.indexOf(g)){var c=n(e,t,this,r);if(c.done)return c.value}var b=a(t),m=String(this),x="function"===typeof r;x||(r=String(r));var y=b.global;if(y){var S=b.unicode;b.lastIndex=0}var $=[];while(1){var E=f(b,m);if(null===E)break;if($.push(E),!y)break;var w=String(E[0]);""===w&&(b.lastIndex=s(m,i(b.lastIndex),S))}for(var O="",P=0,T=0;T<$.length;T++){E=$[T];for(var C=String(E[0]),_=l(d(o(E.index),m.length),0),R=[],k=1;k<E.length;k++)R.push(v(E[k]));var N=E.groups;if(x){var L=[C].concat(R,_,m);void 0!==N&&L.push(N);var A=String(r.apply(void 0,L))}else A=u(C,m,_,R,N,r);_>=P&&(O+=m.slice(P,_)+A,P=_+C.length)}return O+m.slice(P)}]}))},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("ade3");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"5bb1":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbarBox"},[n("div",{staticClass:"Margin navChild"},[n("div",{staticClass:"MarginContent1"},[n("div",{staticClass:"MarginContent"},[n("div",{staticClass:"MarginContentNumber",on:{click:function(e){return t.$router.push({path:"/record",query:{type:1}})}}},[n("span",[t._v(t._s(t.earnestAmount))]),n("div",{staticClass:"line"},t._l(6,(function(t){return n("div",{key:t})})),0)]),n("div",{staticClass:"MarginContentNumberText"},[n("div",[t._v(t._s(t.$t("margin.text1"))+"(PIN)")])]),n("div",{staticClass:"MarginContentInput"},[n("span",[t._v(t._s(t.$t("margin.text3")))]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text",placeholder:"0.00"},domProps:{value:t.value},on:{input:[function(e){e.target.composing||(t.value=e.target.value)},t.input]}}),n("span",[t._v("PIN")])])]),n("div",{staticClass:"selectNumber"},t._l(t.selectNumberList,(function(e,r){return n("div",{key:r,class:{active:t.active===r},on:{click:function(n){t.active=r,t.value=e}}},[t._v(" "+t._s(e)+" ")])})),0),n("div",{staticClass:"balance"},[t._v(" "+t._s(t.$t("margin.text4"))+" "+t._s(t.balance.pin)+" PIN ")]),n("div",{staticClass:"MarginContentButton"},[n("van-button",{directives:[{name:"ButClickLimit",rawName:"v-ButClickLimit"}],on:{click:t.transferIn}},[t._v(t._s(t.$t("margin.text5")))]),n("van-button",{directives:[{name:"ButClickLimit",rawName:"v-ButClickLimit"}],on:{click:t.transferOut}},[t._v(t._s(t.$t("margin.text6")))])],1),n("div",{staticClass:"MarginText"},[n("span",[t._v(t._s(t.$t("margin.text1")))]),n("p",[t._v(t._s(t.$t("margin.text7")))])])])])]),n("self-authorize",{ref:"authorize",staticClass:"marginAuthorize",on:{send:t.transferIn}})],1)},a=[],i=(n("caad"),n("a9e3"),n("b680"),n("d3b7"),n("ac1f"),n("5319"),n("96cf"),n("1da1")),o=n("5530"),c={components:{"self-authorize":function(){return Promise.all([n.e("communityManagement~transaction"),n.e("transaction")]).then(n.bind(null,"38fc"))}},data:function(){return{active:"",earnestAmount:0,value:"",orderResult:!1,settingShow:!1,maxEarnestAmount:1e3,isStart:!1}},computed:Object(o["a"])({},Vuex.mapState(["balance"])),created:function(){this.$contracts&&this.init()},methods:{init:function(){var t=this,e=new this.$web3.BatchRequest;e.add(this.$contracts.Pin.methods.isStart().call.request({from:this.$address})),e.add(this.$contracts.Pin.methods.players(this.$address).call.request({from:this.$address})),e.add(this.$contracts.Pin.methods.getMyNewRounds(this.$address).call.request({from:this.$address})),e.add(this.$web3.eth.getBlockNumber.request()),e.requestManager.sendBatch(e.requests,function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n,r){var a,i,o,c,s,u,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n){e.next=13;break}if(a=r[1].result.decode([{name:"drawablePower",type:"uint256"},{name:"earnestAmount",type:"uint256"}]),i=a.earnestAmount,o=r[2].result.decode(["uint256[]"]),t.isStart=("string"===typeof r[0]?r[0]:r[0].result).decode(["bool"]),t.earnestAmount=i.fromWei().toFixed(4),!(o.length>0)){e.next=13;break}return e.next=8,t.$contracts.Pin.methods.rounds(o[0]).call({from:t.$address});case 8:c=e.sent,s=c.prepareBlock,u=c.luckyValue,f=t.getDrawState(Number(s),Number(u),Number(r[3].result)),t.orderResult=![3,5].includes(f);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},input:function(){this.value=this.value.replace(/[^\d]/g,"")},getDrawState:function(t,e,n){return 0===t?1:n>=t&&n<=t+10?2:n>t+10&&e>=0&&e<10?3:n>t&&n<t+255?4:5},transferIn:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isStart){e.next=2;break}return e.abrupt("return",vant.Toast.fail("合约暂未生效！"));case 2:return n=Number(t.value),r=Number(t.balance.pin),e.next=6,t.$contracts.PinToken.methods.allowance(t.$address,t.$contracts.Pin._address).call({from:t.$address});case 6:if(a=e.sent.fromWei(),""!=n){e.next=11;break}return e.abrupt("return",vant.Toast.fail(t.$t("margin.text16")));case 11:if(!(n>r)){e.next=15;break}return e.abrupt("return",vant.Toast.fail(t.$t("margin.text18")));case 15:if(!(n>a)){e.next=20;break}return t.$refs.authorize.amount=n,t.$refs.authorize.contractName="PinToken",t.$refs.authorize.contractAddress=t.$contracts.Pin._address,e.abrupt("return",t.$refs.authorize.toggle());case 20:i=t.$contracts.Pin.methods.rechargeEarnestAmount(n.toWei()),i.call({from:t.$address},(function(e,n){e||i.send({from:t.$address}).on("transactionHash",(function(e){vant.Toast.loading({message:t.$t("transaction.text7"),forbidClick:!0,duration:0,loadingType:"spinner"})})).on("receipt",(function(e){vant.Toast.clear(),t.settingShow=!1,t.active="",t.value="",t.init(),t.$getBalance(),vant.Toast.success(t.$t("margin.text21"))})).on("error",(function(e){vant.Toast.clear(),vant.Toast.fail(t.$t("transaction.text13"))}))}));case 22:case"end":return e.stop()}}),e)})))()},transferOut:function(){var t=this,e=Number(this.value),n=Number(this.earnestAmount);if(!this.isStart)return vant.Toast.fail("合约暂未生效！");if(""==e)return vant.Toast.fail(this.$t("margin.text16"));if(e>n)return vant.Toast.fail(this.$t("margin.text22"));if(this.orderResult)return vant.Toast.fail(this.$t("margin.text19"));var r=this.$contracts.Pin.methods.drawEarnestAmount(this.value.toWei());r.call({from:this.$address},(function(e,n){e||r.send({from:t.$address}).on("transactionHash",(function(e){vant.Toast.loading({message:t.$t("transaction.text7"),forbidClick:!0,duration:0,loadingType:"spinner"})})).on("receipt",(function(e){vant.Toast.clear(),t.value="",t.init(),t.$getBalance(),vant.Toast.success(t.$t("margin.text23"))})).on("error",(function(e){vant.Toast.clear(),vant.Toast.fail(t.$t("transaction.text13"))}))}))}}},s=c,u=s,f=(n("8876"),n("7141"),n("2877")),l=Object(f["a"])(u,r,a,!1,null,"f6c5a480",null);e["default"]=l.exports},6547:function(t,e,n){var r=n("a691"),a=n("1d80"),i=function(t){return function(e,n){var i,o,c=String(a(e)),s=r(n),u=c.length;return s<0||s>=u?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===u||(o=c.charCodeAt(s+1))<56320||o>57343?t?c.charAt(s):i:t?c.slice(s,s+2):o-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},7141:function(t,e,n){"use strict";n("2618")},"746f":function(t,e,n){var r=n("428f"),a=n("5135"),i=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});a(e,t)||o(e,t,{value:i.f(t)})}},8876:function(t,e,n){"use strict";n("17ca")},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,c=i,s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],l=s||f||u;l&&(c=function(t){var e,n,a,c,l=this,d=u&&l.sticky,v=r.call(l),p=l.source,h=0,g=t;return d&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),g=String(t).slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==t[l.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,h++),n=new RegExp("^(?:"+p+")",v)),f&&(n=new RegExp("^"+p+"$(?!\\s)",v)),s&&(e=l.lastIndex),a=i.call(d?n:l,g),d?a?(a.input=a.input.slice(h),a[0]=a[0].slice(h),a.index=l.lastIndex,l.lastIndex+=a[0].length):l.lastIndex=0:s&&a&&(l.lastIndex=l.global?a.index+a[0].length:e),f&&a&&a.length>1&&o.call(a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),t.exports=c},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a4d3:function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("d066"),o=n("c430"),c=n("83ab"),s=n("4930"),u=n("fdbf"),f=n("d039"),l=n("5135"),d=n("e8b5"),v=n("861d"),p=n("825a"),h=n("7b0b"),g=n("fc6a"),b=n("c04e"),m=n("5c6c"),x=n("7c73"),y=n("df75"),S=n("241c"),$=n("057f"),E=n("7418"),w=n("06cf"),O=n("9bf2"),P=n("d1e7"),T=n("9112"),C=n("6eeb"),_=n("5692"),R=n("f772"),k=n("d012"),N=n("90e3"),L=n("b622"),A=n("e538"),j=n("746f"),I=n("d44e"),M=n("69f3"),D=n("b727").forEach,B=R("hidden"),U="Symbol",q="prototype",V=L("toPrimitive"),z=M.set,G=M.getterFor(U),F=Object[q],H=a.Symbol,W=i("JSON","stringify"),J=w.f,K=O.f,X=$.f,Y=P.f,Q=_("symbols"),Z=_("op-symbols"),tt=_("string-to-symbol-registry"),et=_("symbol-to-string-registry"),nt=_("wks"),rt=a.QObject,at=!rt||!rt[q]||!rt[q].findChild,it=c&&f((function(){return 7!=x(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=J(F,e);r&&delete F[e],K(t,e,n),r&&t!==F&&K(F,e,r)}:K,ot=function(t,e){var n=Q[t]=x(H[q]);return z(n,{type:U,tag:t,description:e}),c||(n.description=e),n},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},st=function(t,e,n){t===F&&st(Z,e,n),p(t);var r=b(e,!0);return p(n),l(Q,r)?(n.enumerable?(l(t,B)&&t[B][r]&&(t[B][r]=!1),n=x(n,{enumerable:m(0,!1)})):(l(t,B)||K(t,B,m(1,{})),t[B][r]=!0),it(t,r,n)):K(t,r,n)},ut=function(t,e){p(t);var n=g(e),r=y(n).concat(pt(n));return D(r,(function(e){c&&!lt.call(n,e)||st(t,e,n[e])})),t},ft=function(t,e){return void 0===e?x(t):ut(x(t),e)},lt=function(t){var e=b(t,!0),n=Y.call(this,e);return!(this===F&&l(Q,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(Q,e)||l(this,B)&&this[B][e])||n)},dt=function(t,e){var n=g(t),r=b(e,!0);if(n!==F||!l(Q,r)||l(Z,r)){var a=J(n,r);return!a||!l(Q,r)||l(n,B)&&n[B][r]||(a.enumerable=!0),a}},vt=function(t){var e=X(g(t)),n=[];return D(e,(function(t){l(Q,t)||l(k,t)||n.push(t)})),n},pt=function(t){var e=t===F,n=X(e?Z:g(t)),r=[];return D(n,(function(t){!l(Q,t)||e&&!l(F,t)||r.push(Q[t])})),r};if(s||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),n=function(t){this===F&&n.call(Z,t),l(this,B)&&l(this[B],e)&&(this[B][e]=!1),it(this,e,m(1,t))};return c&&at&&it(F,e,{configurable:!0,set:n}),ot(e,t)},C(H[q],"toString",(function(){return G(this).tag})),C(H,"withoutSetter",(function(t){return ot(N(t),t)})),P.f=lt,O.f=st,w.f=dt,S.f=$.f=vt,E.f=pt,A.f=function(t){return ot(L(t),t)},c&&(K(H[q],"description",{configurable:!0,get:function(){return G(this).description}}),o||C(F,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:H}),D(y(nt),(function(t){j(t)})),r({target:U,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=H(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:vt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:f((function(){E.f(1)}))},{getOwnPropertySymbols:function(t){return E.f(h(t))}}),W){var ht=!s||f((function(){var t=H();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));r({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,n){var r,a=[t],i=1;while(arguments.length>i)a.push(arguments[i++]);if(r=e,(v(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ct(e))return e}),a[1]=e,W.apply(null,a)}})}H[q][V]||T(H[q],V,H[q].valueOf),I(H,U),k[B]=!0},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},caad:function(t,e,n){"use strict";var r=n("23e7"),a=n("4d64").includes,i=n("44d2"),o=n("ae40"),c=o("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!c},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),i=n("b622"),o=n("9263"),c=n("9112"),s=i("species"),u=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){return"$0"==="a".replace(/./,"$0")}(),l=i("replace"),d=function(){return!!/./[l]&&""===/./[l]("a","$0")}(),v=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,l){var p=i(t),h=!a((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=h&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!h||!g||"replace"===t&&(!u||!f||d)||"split"===t&&!v){var b=/./[p],m=n(p,""[t],(function(t,e,n,r,a){return e.exec===o?h&&!a?{done:!0,value:b.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),x=m[0],y=m[1];r(String.prototype,t,x),r(RegExp.prototype,p,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}l&&c(RegExp.prototype[p],"sham",!0)}},dbb4:function(t,e,n){var r=n("23e7"),a=n("83ab"),i=n("56ef"),o=n("fc6a"),c=n("06cf"),s=n("8418");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),a=c.f,u=i(r),f={},l=0;while(u.length>l)n=a(r,e=u[l++]),void 0!==n&&s(f,e,n);return f}})},e439:function(t,e,n){var r=n("23e7"),a=n("d039"),i=n("fc6a"),o=n("06cf").f,c=n("83ab"),s=a((function(){o(1)})),u=!c||s;r({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return o(i(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);