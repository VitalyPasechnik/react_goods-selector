(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c.n(n),o=c(7),a=c(4),r=c(5),d=c(9),l=c(8),i=c(1),u=c.n(i),h=c(6),j=c.n(h),b=(c(14),c(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={selectedGoods:[]},e.createBucket=function(e){switch(e.length){case 0:return"No selected goods";case 1:return"".concat(e," is selected");default:return"".concat(e.slice(0,-1).join(", ")," and ").concat(e[e.length-1]," are selected")}},e.updateGoods=function(t){e.setState((function(e){return e.selectedGoods.includes(t)?{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}:{selectedGoods:[].concat(Object(o.a)(e.selectedGoods),[t])}}))},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("h1",{className:"App-title",children:["Selected good: -\xa0",this.createBucket(t),Object(b.jsx)("button",{className:"btn-cancel",type:"button",onClick:function(){return e.setState({selectedGoods:[]})},children:"X"})]}),Object(b.jsx)("ol",{className:"goods",children:p.map((function(c){return Object(b.jsxs)("li",{className:"good",children:[Object(b.jsx)("p",{className:"good__name",children:c}),Object(b.jsx)("button",{type:"button",className:j()("good__btn",{checked:c===t.find((function(e){return e===c}))}),onClick:function(){return e.updateGoods(c)},children:"Select"})]},c)}))})]})}}]),c}(u.a.Component),g=f;s.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.926fc422.chunk.js.map