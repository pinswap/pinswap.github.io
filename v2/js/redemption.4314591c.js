(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["redemption"],{"0430":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-popup",{attrs:{round:"",closeable:"",position:"bottom"},on:{"click-close-icon":t.close},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticClass:"trading-setup"},[n("span",{staticClass:"title"},[t._v(t._s(t.$t("tradingSetup.text1")))]),n("div",{staticClass:"slippage-setting"},[n("div",{staticClass:"title"},[n("span",[t._v(t._s(t.$t("tradingSetup.text2")))]),n("div",[n("input",{attrs:{type:"number"},domProps:{value:t.value},on:{input:t.input}}),n("span",[t._v("%")])])]),n("van-slider",{attrs:{min:"1",max:"5",step:"0.5","button-size":"15","active-color":"#3C94FF","inactive-color":"#D8D8D8"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),n("div",{staticClass:"slider-items"},[n("span",[t._v("1%")]),n("span",[t._v("2%")]),n("span",[t._v("3%")]),n("span",[t._v("4%")]),n("span",[t._v("5%")])]),n("span",[t._v(t._s(t.$t("tradingSetup.text3")))])],1),n("div",{staticClass:"deadline"},[n("div",[n("span",[t._v(t._s(t.$t("tradingSetup.text4")))]),n("van-field",{attrs:{type:"number","input-align":"center"},model:{value:t.deadline,callback:function(e){t.deadline=e},expression:"deadline"}}),n("span",[t._v(t._s(t.$t("tradingSetup.text5")))])],1),n("span",[t._v(t._s(t.$t("tradingSetup.text6")))])]),n("van-button",{attrs:{type:"info"},on:{click:t.setSlipPoint}},[t._v(t._s(t.$t("tradingSetup.text7")))])],1)])},a=[],s=(n("a9e3"),{data:function(){return{value:2,deadline:10,show:!1,slipPoint:2}},methods:{open:function(){this.show=!0},setSlipPoint:function(){this.$emit("change",{slipPoint:this.slipPoint,deadline:60*Number(this.deadline)}),this.show=!1},input:function(t){this.slipPoint=t.target.value}}}),o=s,r=o,l=(n("a454"),n("2877")),c=Object(l["a"])(r,i,a,!1,null,"5087dda0",null);e["default"]=c.exports},"1eac":function(t,e,n){"use strict";n("ab2b")},"332e":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"redemption"},[i("div",{staticClass:"box"},[i("div",{staticClass:"logos"},[i("div",[i("img",{attrs:{src:n("90bd")}}),i("img",{attrs:{src:t.info.logo}})]),i("span",[t._v("TRX/"+t._s(t.info.symbol))])]),i("div",{staticClass:"info"},[i("div",[i("span",[t._v("TRX")]),i("span",{domProps:{textContent:t._s(t.info.trx)}})]),i("div",[i("span",[t._v(t._s(t.info.symbol))]),i("span",{domProps:{textContent:t._s(t.info.token)}})]),i("div",[i("span",[t._v(t._s(t.$t("redemption.text2")))]),i("span",{domProps:{textContent:t._s(t.info.lp)}})])]),i("div",{staticClass:"setting"},[i("span",[t._v(t._s(t.$t("redemption.text3")))]),i("span",[t._v(t._s(t.value)+"%")]),i("van-slider",{attrs:{"active-color":"#3C94FF","inactive-color":"#E4E4E4"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),i("div",{staticClass:"buttons"},[i("van-button",{attrs:{type:"info"},on:{click:function(e){t.value=25}}},[t._v("25%")]),i("van-button",{attrs:{type:"info"},on:{click:function(e){t.value=50}}},[t._v("50%")]),i("van-button",{attrs:{type:"info"},on:{click:function(e){t.value=75}}},[t._v("75%")]),i("van-button",{attrs:{type:"info"},on:{click:function(e){t.value=100}}},[t._v(t._s(t.$t("redemption.text4")))])],1)],1),i("div",{staticClass:"rate"},[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.rateToggle,expression:"!rateToggle"}]},[t._v(t._s(t.$t("redemption.text5"))+" 1 TRX ≈ "+t._s(t.rate)+" "+t._s(t.info.symbol))]),i("span",{directives:[{name:"show",rawName:"v-show",value:t.rateToggle,expression:"rateToggle"}]},[t._v(t._s(t.$t("redemption.text5"))+" 1 "+t._s(t.info.symbol)+" ≈ "+t._s(t.rate)+" TRX")]),i("img",{attrs:{src:n("1b07")},on:{click:function(e){t.rateToggle=!t.rateToggle}}})]),i("div",{staticClass:"coin"},[i("img",{attrs:{src:n("90bd")}}),i("span",[t._v(t._s(t.trx)+" TRX")])]),i("div",{staticClass:"coin"},[i("img",{attrs:{src:t.info.logo}}),i("span",[t._v(t._s(t.token)+" "+t._s(t.info.symbol))])]),i("div",{staticClass:"redemption-button"},[i("div",{staticClass:"setting",on:{click:t.openSetting}},[i("img",{attrs:{src:n("b012")}})]),i("van-button",{attrs:{type:"info"},on:{click:t.removeLiquidity}},[t._v(t._s(t.$t("redemption.text6")))])],1)]),i("trading-setup",{ref:"tradingSetup",on:{change:t.changeDeadline}})],1)},a=[],s=(n("c975"),n("fb6a"),n("b680"),n("d3b7"),n("25f0"),n("96cf"),n("1da1")),o=n("a981"),r=(n("3952"),{components:{"mk-navbar":function(){return Promise.all([n.e("join-fund-pool~redemption~transaction"),n.e("redemption")]).then(n.bind(null,"0861"))},"trading-setup":function(){return Promise.all([n.e("join-fund-pool~redemption~transaction"),n.e("redemption")]).then(n.bind(null,"0430"))}},data:function(){return{value:25,info:{logo:"",trx:0,token:0,lp:0,symbol:""},trx:0,token:0,deadline:600,pairAddress:"",lp:0,decimal:0,exTrxBalance:0,exTokenBalance:0,rateToggle:!1}},computed:{rate:function(){return 0!==this.exTrxBalance?this.rateToggle?"1".toSun(this.decimal).toBN().times(this.exTrxBalance).div(this.exTokenBalance).toString().fromSun().toFixed(6):"1".toSun().toBN().times(this.exTokenBalance).div(this.exTrxBalance).toString().fromSun(this.decimal):"--"}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,i,a,s,o,r,l,c,u,d,A,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=JSON.parse(t.$route.query.info),i=n.logo,a=n.lp,s=n.trx,o=n.token,r=n.symbol,l=n.address,c=n.tokenDecimal,u=n.tokenAddress,t.info={logo:i,symbol:r,lp:a.toFixed(4),trx:s.toFixed(4),token:o.toFixed(4)},t.lp=a,t.pairAddress=l,t.decimal=c,t.trx=(s/100*t.value).toFixed(4),t.token=(o/100*t.value).toFixed(4),!t.$utils){e.next=15;break}return e.next=10,t.$utils.call({contractAddress:"TCNYd8L5hBey9FwPpvgtvDaY2cHjMFVLZu",method:"getSingleInfo(address,address)",parameter:[{type:"address",value:t.$address},{type:"address",value:u}]});case 10:d=e.sent.constant_result[0].decode(["address","uint256","uint256","uint256","uint256","uint256","uint256","uint256"],["_exchangeAddr","_allowance","_exTokenBalance","_exTrxBalance","_totalLiquidity","_userUniAmount","_userTrxAmount","_userTokenAmount"]),A=d._exTrxBalance,p=d._exTokenBalance,t.exTrxBalance=A.toString().toBN(),t.exTokenBalance=p.toString().toBN();case 15:case"end":return e.stop()}}),e)})))()},methods:{openSetting:function(){this.$refs.tradingSetup.open()},changeDeadline:function(t){var e=t.deadline;this.deadline=e},removeLiquidity:function(){var t=this,e=tronWeb.contract(o,this.pairAddress),n=(this.lp/100*this.value).toSun(),i=n.indexOf("."),a=Math.floor((new Date).getTime()/1e3)+this.deadline;e.removeLiquidity(i>=0?n.slice(0,i):n,1,1,a).send().then(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$loading(n);case 2:i=e.sent,i?vant.Toast.success("赎回成功！"):vant.Toast.fail("暂无可赎回额度！");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},watch:{value:function(){this.trx=(this.info.trx/100*this.value).toFixed(4),this.token=(this.info.token/100*this.value).toFixed(4)}}}),l=r,c=l,u=(n("1eac"),n("d277"),n("2877")),d=Object(u["a"])(c,i,a,!1,null,"9e8eec88",null);e["default"]=d.exports},6271:function(t,e,n){},"90bd":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAPKADAAQAAAABAAAAPAAAAACoF8tmAAAMMUlEQVRoBeVbCVRU1xn+38zAsIsgAoKKCioaV9QBBZeYNNoobm1OtMnRpEkaU41GRRNbU9fkxO3Y1tajbT0aE9PTNGZxt0k1ggIKajSCgEZc2QVkHZiZ1/+/b+b5ZnizPGaMtr3nDO++++797/3u8m/3h4OHlHImJ/jpyyGZB0gw8aY+HMf14YGPAJ4L5IAPpG554OqA4+s44Ep5ni9QcaoCDiBX2xkyhu3PbXwYQ0P6nkunRo7szBubZyHI6cDzOnx6t4c6DqoFOC4bn/s4tc/eUadPl7eHjlwbjwA+NXLIaJOBS+M5mIBANXIdtbuM4wwcD0dUGn7DqNPnT7abjrmhW4AzdAnjcJuuxu2Y7O5AXGmPxyIDONWKlKycE67Ul6vTLsA5KQmRTS2mTTwPM+WIPuwyjoNPfL1Vi4el55Yo7Usx4IzEYRNNJtMnyHI6KO3Ms/W5WpVKNTM5K+ewEroqJZXTdQmLeZPxwKMHS6PmO9BYaExKMLi0wkUTJ2pLqkq3I+HZSoj/iHV3R4ZG/Cru8GG9sz6dAj6ZkhIG+oYvcUaTnBF7tN+5TND6Txmdnl7haBwOtzSt7H8HWIKIC4ILw8bsALFDwMI2ftxXVoqOTzIfPWmhVd4uYDMzeFzPrBUIm5fZjhiZ7Bkm0UMcEFXDNhPSb9MWUGm8oKGoEOrxR8/GG8UARqNNv4/uFUGZOJV6kpzIagOYlIpGPZ9vT/RETJkGcctXWKExtbZC4/UfGPgHE1EEhtoaq3o/7gtX66fl4m2VkzaA03VD9jrSoFS+vqA7eAw0/v5Ox68vL4eGq0VWE9F08wbOv8lpW09UII0sJfv8LCktK8DpicPG4lY+Lq0gl49dthwip/9M/MTjdi757FOgp39cb/zFgVeHYPG7NGPS66Hhh2viJNCOoEkx1NVJq3ksj1t7nFT3tgasG5ruiiHg36cvDP1wLxuUydDKzrSxuRkK16yEyq+PsXLvsDAz+N4QQJMQGwe+3boDp1bLgtGXlYo8gU1CYSE03b6FJws5iRuJDI6U7HMpFhIi4JNJw8eA0XDC8sHZc/CuPRAY3x/KDnwFvt1jIGjAQNbk5s6/wI3t22Sbq7Ra8OvRC/x7xwmTEStMhiaQ+QPatDE2N0HjtWviRJQd3A+mpqY29ZwWqDVjR2ee/ZbqiYDTRwzdj6beJKeNzRUszKulqgrOzkiF2LR3IPxZoXnliX9Dwe9+CyZcdVeSNjxC3A10JGhH+ERHoyVoLSTuX7oIl9+ar3j7o0flQMqZc5NpLAwweSqMxuY7Sox3Yl6Jh/4Faj8/yHs7DaqOfwNRv3gResxbwAZKIitvyVugL1VswbE5Uvn4QETqVOi5KA2dH+K6QD1u9e/fnAut1dWuzKVQB50IarVPFHlO2BSSW0YJWKJCW6v8qGCZRU6bwQjf+XgPXF68AAz19WyVBu/6CIIGDRY6Vfg3dPRYYfIQbHPJXShcu0qg27s3DNyxE7w7h7tOEb0wDCO2EACTD6odqfSLfaxV8AgdaLt0Yfnq06fgwi9nQ9Otm+DdsSMM+NN2CE+dooh6zNx50HfNe0BnvvbCebgw5wUo2/8lXHzjNWitqQY/ZH6DdvwNt31Xl+ki62MY1eRdNNTzf8SW8uzTAcmWykoISU4BbVhndl5rcs6w2oaaGig/cggC4uPBr2s3oNUixlR9Jssh16VjEv/eeoiYOo3RKf3qC7iyfBkYGwUHZmtVJdw7lQ6hY8aBD577sKeehurM0y5tbzwUkb8eGrVZPbtjl3Em4Oc4wOX0U2jKaPDt2hXu/p0cIYJSQfK2/OgR8ArqAIH9n4CgJwawX1XGSeBbWtrQ1EZEwoCt2yB4aAKT59f/sAWK/4zrYKOktOJkVp04DqEpY4CYXdjTz0BNzlloqXRoFVJ/alMjd1L9cnSX55A7j28zAhcLSI+Oem4mKhodmPhoKr7+oCXKUNriLbgyHROT2FYMHfck1GRnodpZK9ajc05b3zcqGs9pHeQvW4I75KD43TbDm3hoRmYYOmYMaJBpEui6i985ZZDI/PLVc6IiXkGC7eMs2JA3GEAbGYkyuR9oAgLZVrYdYP2VfLh//hzb/rQVO//0WagvKIDmO7chfPIUto1JVaVzf2neXKj7/pJAAsUSKSvBw4ZD2DMTIOr5WRDzxnxkZm9C2PinUBoIp1Dl7Q3e4eFQfsj+JBFBXNjbXLpuaCZqV4m2g1TyHtA3Hobs/hgZPQ9np08G/d27ss2JsfXfuAX8e8WybVudlQkhowQPL4mxW6i0eCM/IK2M1FNSUtQonuQSHRliapRotS+89CK03rsnV1UswxXO4k7qhlxH6DFiaTszJIJolW/t2gnF27bapUJyu8+qtYyR2a0k+cDjGSYVs6EIjZCrZI7i81oRxLw+DzrjqpM29t2rL0NDYYGklZ0sB8UauuuhxXY3kYgiwOGTU6F4xza79jFx3Lyli6Hfhs2M8Uj7bcVzzawrsrDM4BrR0KDVlKbo2S8xsLSjCla+6xpYIoBYNXSx5T5cYEpIzwWLwDu0E1s90rzsJhyoBQRx7ZJ//oMBbalwymkhBLkzyWlKN/+6nWl4dvux+UBYrZVVmwpKXq00r6nO9RgSQ5Sqvj3OZKkrYP169oK+q9cxVbPim68R8A4lQ2R1VezKUnEz+Qai5qVLFDUv+ZoAPpGCZqYvcU3X1qB9TQyPeEB9wRUoXPWuPdJ2ywmriu5n7dZQ+IHED/1I2Y9IFbQlORIcihGvkBD2iTiss8SpNdDvgw3gExWFMr0KLqNRYtK7ZolZ0UasKrqMtip086Xk888YhQjSn9Xy2irJYpoUYjr6sjKnPfZKWwYdhiSACTU0Yngt5c7byBElrCrs1AV+Ltdcvqzi2BGm+zLmhQxGLpGiQqn1XpWsmilt0+Xnz4PFGit6fy0qJRelnxXlCauKwgwUtXJSmcROOYKmFDlNnnlZGFazk/MbPHwE9Fy4iNG6/dGHqEnhPZ4bibDiloZcN2jINi01b+tgXZIs8/Ixr7Aj54APGiN90XLiNBq0kDLg+tbfy/alpJCwqiiABDNtzRcllGzqOmNelhW2x6HV/gGMI3sFBTF/95UV76DS4J62QBgJq4pFy2AAic2Y3X4tMTsH5JiXZYVlOTQaDH3XvQ9+MT2ANK/LixeCsaHB7fEgl8wmrEzxQPSC68J9siKFCnT/0HmWY15aBzK4x/yFEJI0illh+cuXMotKJOpGxoJRAIyhQTgDBjfotWlql3nhCpKHhJLtCodPSoXoWS+wb9c2b4BaNOw9kigSiDBiYoDJm0ehQR4hLiFS+rnF54Wal5lRadH5ZnHGS5lW0MBBEPv2b1jrkn2fspsMCSm3soTNEusl6tIUB+UWVZnG9VfymBpI/uWIKYKIsjAsulqxnE1y1cR/sAlUXl5Qk5sDVzeul6HW/iIpNhEwBX2h9pPRfrLyLUXNC81G0rxEhmWWweR/7oc6sjeqmk3oAclHH7cnr14JkzSgTQRMw0XVS7lGLo9TLGXMC33Y3p3CIDR5NFhWWI++Zkp9Vq6BAPQ1G5AT5yFHNtx/4OsSibiTwUA2aXMrwMnZucdRxUXXo+cSMS9SNylFTp/xYIXRaOj26uvQadx4dHSaoGDFciZzPdczLiBdl9pE7VkBps4owg2renSaS/YJBkXwiEQIGjyEYSLvSPdXXmN5cseSv9mziasVsFhTbQOYbswpwg3lluBgtq7frjcp8/LrHsNoEFemVHb4INzes5vlPfWHxk4YbG//iX4bwFTIYiM41VLKeyqVmEWUlN59dMcWrVstLfJMHscuF99BxGUB04eU7NxN+PDY1FccPQRGyd0u2cF5aYuAx/gQD6fd5rHLkrULmGpTOB+e50zZlgoLpcyLogXyli5i9rBCMk6qc5nCmO1XcwiYxS5iOJ+nQFtkMoVGkEXl2YQLg2N1Fm+J59t58mRwadhPJohiynnPLtfwXHCptEsW4cab1qNl6nBnSNs8zDxxY7xgWurozNr279IKSxv9XwWIE3Bi9xTh5mmNTDqpzvLUN43Bnuhx1F7xCkuJUSAb6oVr0BsoXAFKPz6EPDNuHsU/edhioRgvzmhc8jD/jYdXqzdaYq1s+1fy7tYK23aUpdOFG6B1JjK1/+1/1LIFTu+P67/i/QdE1iM05TrP3gAAAABJRU5ErkJggg=="},a454:function(t,e,n){"use strict";n("6271")},ab2b:function(t,e,n){},b012:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAA7VBMVEUAAABAQEBgYGBqampwcHBmZmZqampxcXFtbW1zc3NwcHBqampvb29sbGxxcXFubm5ycnJwcHBubm5sbGxvb29tbW1wcHBubm5xcXFwcHBubm5tbW1vb29ubm5wcHBvb29xcXFwcHBvb29tbW1vb29ubm5wcHBvb29wcHBvb29ubm5xcXFvb29vb29wcHBwcHBvb29vb29wcHBwcHBvb29wcHBwcHBvb29vb29wcHBwcHBvb29vb29wcHBwcHBvb29vb29wcHBwcHBvb29vb29wcHBwcHBvb29vb29wcHBwcHBvb29vb29wcHBwcHCHo3jSAAAATnRSTlMABAgMEBQYGxwfICQnKCssLzAzNDc4Ozw/QENER0hLTE9QU1RXWFtcYGdob3N3e3+Dh4uPl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/vu9AgEAAADAklEQVQYGZXBi0LaZgCG4e8PkCGsVquzo4cN23Wr46iAJUgggBwCyXv/l7MQzpOofR498Wuld6+t0cPNL3qBdTMAAltrRSDsFvUMqzQj9mAUy0yIjb8oydUYmLcKPehkFDkdQuO6EwL9nI57D345LdkzCNq1uhtC30jZRkiQUYIxAy1lPdbaKUWsgLaStPEVM//0A1h0CorloKYkDr42TC6njRxUlGTMUMeYgLYSfICGjnIJsjrKnhDmddQ1uEYHLn9X5NMU7pTABe9MkvmSU8yMmT50poBjlMB+BEbtro+jWImVsG6UKOWwdqWINcMfzKZePa9n/dYc+ZM+uIrcQEWv1oFzSQPmab3aBTSlN9DSTxjiG1WgoCc+/PBh3DrVExUoqAc9W4fSXVbChtGhywnc6j6Ama196UcI3UbTAxyjfVcLmJcluwue0Z4uuHlF3o+hqj0ZH+7SipgH+Fs7n6BnFLOnBLZ2GlDVih3Q084PwrzWrqGkLWvB0GitTWC05eNqw8zpausCytqoQU5b0NBWn6G2vsJHbdQhqy1oamuAp60/4bM2XBbaGeNpIxXgaOst1LX2JqSjnRZcaa0E37UzZZZSLD2EgnbehoxtxS4XzCztlMAxihQn0Na+BkyLRkqVF/BNe6wR9M6kEdBPaZ9xgHl/EAA1HchPgKYeoGF0yFQDYrNv+h+7C1X9C0U9YZe6Q8/5bumJW7hQNqSjnzBlIqlLmNWrFaEm6Roa1smJXmadnMgjzCrySBhC4Bb1HKvkAQu419JX1tyMEp0+shLkFesHTrXaDuAxrQRnC/Bb1Zob3mkll1bE7oGj46wJNFOK5NM6YDy40FElaOq4c2jpqCEzSwmGDHVMGppK0maqNetd8Y9TreWgpCQdJoplGgsi05KlpRzUlMD4uFq68lkbnWhpgasEfwGdd9LlAoblj5/rM5jYUtGDMK/jcg6RYWUCVaNIyoHu7RQI79JK8t4ldqcV02MpvM/rOedNH+ZprZ0Dk3pWLzGF27K2WtULPfEf9L+5wL6T1UQAAAAASUVORK5CYII="},d277:function(t,e,n){"use strict";n("d74a")},d74a:function(t,e,n){}}]);