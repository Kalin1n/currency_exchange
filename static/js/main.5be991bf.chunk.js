(this.webpackJsonpsallary_calc=this.webpackJsonpsallary_calc||[]).push([[0],{44:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),s=n.n(c),i=(n(44),n(71)),u=n(72),h=n(26),o=n(70),j=n(74),l=n(73),d=n(68),p=Object(d.a)((function(e){return{header:{width:"100%",padding:"30px",display:"flex",justifyContent:"space-between",alignItems:"center"},actionsWrapper:{width:"50%"},button:{width:"100px",margin:"0px 20px",background:e.palette.primary.secondary,color:"#fff"},input:{height:"30px",width:"50%",padding:"5px"}}})),b=n(25),x=n.n(b),f=n(32),O=n(33),y=n(34),g=n(4),m=new(function(){function e(){var t=this;Object(O.a)(this,e),this.exchangeRate=null,this.hryvnaAmount=0,this.getCurrencys=Object(f.a)(x.a.mark((function e(){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5");case 2:return e.next=4,e.sent.json();case 4:n=e.sent,Object(g.g)((function(){t.exchangeRate=n}));case 6:case"end":return e.stop()}}),e)}))),this.transformToHryvna=function(e){return Object(g.g)((function(){t.hryvnaAmount=e*t.exchangeRate[0].buy})),e*t.exchangeRate[0].buy},Object(g.d)(this,{exchangeRate:g.e,hryvnaAmount:g.e}),Object(g.f)(this,"exchangeRate",(function(){return t.getCurrencys()}))}return Object(y.a)(e,[{key:"afterTaxes",get:function(){if(this.hryvnaAmount){var e=this.hryvnaAmount/100*5;return this.hryvnaAmount-1320-e}return null}}]),e}()),v=n(3),C=function(){var e=Object(a.useState)(400),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),s=Object(h.a)(c,2),i=s[0],u=s[1],d=p(),b=m.transformToHryvna,x=m.afterTaxes;return Object(v.jsxs)("header",{className:d.header,children:[Object(v.jsxs)("div",{children:[Object(v.jsx)(o.a,{variant:"h2",children:"Sallary app"}),Object(v.jsxs)(o.a,{variant:"h5",children:["Without taxes ",i]}),Object(v.jsxs)(o.a,{variant:"h5",children:["After taxes ",x]})]}),Object(v.jsxs)("div",{className:d.actionsWrapper,children:[Object(v.jsx)(j.a,{type:"number",placeholder:"Sallary",className:d.input,value:n,onChange:function(e){return r(e.target.value)}}),Object(v.jsx)(l.a,{variant:"contained",onClick:function(e){e.preventDefault(),u(b(n))},className:d.button,children:"Count"})]})]})},w=n(37),N=Object(d.a)((function(e){return{wrapper:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)"},exchangeCard:{border:"1px solid ".concat(e.palette.primary.main),margin:"2em",padding:"1.5em"},currencys:{fontWeight:600,display:"flex",justifyContent:"space-between"},rates:{display:"flex",justifyContent:"space-between"}}})),k=Object(w.a)((function(){var e=m.exchangeRate,t=N();return Object(v.jsx)("div",{className:t.wrapper,children:e&&e.map((function(e){var n=e.ccy,a=e.base_ccy,r=e.buy,c=e.sale;return Object(v.jsxs)("div",{className:t.exchangeCard,children:[Object(v.jsxs)("div",{className:t.currencys,children:[Object(v.jsx)("p",{children:n}),Object(v.jsx)("p",{children:a})]}),Object(v.jsxs)("div",{className:t.rates,children:[Object(v.jsxs)("p",{children:[" \u041f\u0440\u043e\u0434\u0430\u0436\u0430 : ",r]}),Object(v.jsxs)("p",{children:[" \u041f\u043e\u043a\u0443\u043f\u043a\u0430 : ",c]})]})]},n+"_"+a)}))})})),A=n(36),R=Object(A.a)({palette:{primary:{main:"#34C329",secondary:"#119507"}}}),T=function(){return Object(v.jsxs)(i.a,{theme:R,children:[Object(v.jsx)(u.a,{}),Object(v.jsx)(C,{}),Object(v.jsx)(k,{})]})};var S=function(){return Object(v.jsx)(T,{})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(S,{})}),document.getElementById("root")),F()}},[[52,1,2]]]);
//# sourceMappingURL=main.5be991bf.chunk.js.map