(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(4),o=c.n(n),s=c(3),r=c(5),a=c(6),l=c(9),d=c(8),i=c(1),u=c.n(i),j=c(7),b=c.n(j),h=(c(14),c(0)),f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={selectedGoods:[]},e.createBucket=function(e){switch(e.length){case 0:return"No selected goods";case 1:return"".concat(e," is selected");default:return"".concat(e.slice(0,-1).join(", ")," and ").concat(e[e.length-1]," are selected")}},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("h1",{children:["Selected good: -\xa0",this.createBucket(t),"\xa0",Object(h.jsx)("button",{className:"btn-cancel",type:"button",onClick:function(){return e.setState({selectedGoods:[]})},children:"X"})]}),Object(h.jsx)("ol",{className:"goods",children:f.map((function(c){return Object(h.jsxs)("li",{className:"good",children:[Object(h.jsx)("p",{className:"good__name",children:c}),Object(h.jsx)("button",{type:"button",className:b()("good__btn",{checked:c===t.find((function(e){return e===c}))}),onClick:c===t.find((function(e){return e===c}))?function(){return e.setState((function(e){return{selectedGoods:Object(s.a)(e.selectedGoods.filter((function(e){return e!==c})))}}))}:function(){return e.setState((function(e){return{selectedGoods:[].concat(Object(s.a)(e.selectedGoods),[c])}}))},children:"Select"})]},c)}))})]})}}]),c}(u.a.Component),g=p;o.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.58b1d8b6.chunk.js.map