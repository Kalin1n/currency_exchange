(this.webpackJsonpsallary_calc=this.webpackJsonpsallary_calc||[]).push([[0],{43:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),s=n.n(r),i=(n(43),n(70)),u=n(71),j=n(26),l=n(69),o=n(73),p=n(72),d=n(67),h=Object(d.a)((function(e){return{header:{width:"100%",padding:"30px",display:"flex",justifyContent:"space-between",alignItems:"center"},actionsWrapper:{width:"50%"},button:{width:"100px",margin:"0px 20px",background:e.palette.primary.secondary,color:"#fff"},input:{height:"30px",width:"50%",padding:"5px"}}})),b=n(25),x=n.n(b),f=n(32),O=n(33),g=n(4),m=new function e(){var t=this;Object(O.a)(this,e),this.exchangeRate=null,this.getCurrencys=Object(f.a)(x.a.mark((function e(){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5");case 2:return e.next=4,e.sent.json();case 4:n=e.sent,Object(g.g)((function(){t.exchangeRate=n}));case 6:case"end":return e.stop()}}),e)}))),this.transformToHryvna=function(e){return e*t.exchangeRate[0].buy},Object(g.d)(this,{exchangeRate:g.e}),Object(g.f)(this,"exchangeRate",(function(){return t.getCurrencys()}))},y=n(3),v=function(){var e=Object(a.useState)(400),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(j.a)(r,2),i=s[0],u=s[1],d=h(),b=m.transformToHryvna;return Object(y.jsxs)("header",{className:d.header,children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(l.a,{variant:"h2",children:"Sallary app"}),i&&i]}),Object(y.jsxs)("div",{className:d.actionsWrapper,children:[Object(y.jsx)(o.a,{type:"number",placeholder:"Sallary",className:d.input,value:n,onChange:function(e){return c(e.target.value)}}),Object(y.jsx)(p.a,{variant:"contained",onClick:function(e){e.preventDefault(),u(b(n))},className:d.button,children:"Count"})]})]})},C=n(36),w=Object(d.a)((function(e){return{wrapper:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)"},exchangeCard:{border:"1px solid ".concat(e.palette.primary.main),margin:"2em",padding:"1.5em"},currencys:{fontWeight:600,display:"flex",justifyContent:"space-between"},rates:{display:"flex",justifyContent:"space-between"}}})),N=Object(C.a)((function(){var e=m.exchangeRate,t=w();return Object(y.jsx)("div",{className:t.wrapper,children:e&&e.map((function(e){var n=e.ccy,a=e.base_ccy,c=e.buy,r=e.sale;return Object(y.jsxs)("div",{className:t.exchangeCard,children:[Object(y.jsxs)("div",{className:t.currencys,children:[Object(y.jsx)("p",{children:n}),Object(y.jsx)("p",{children:a})]}),Object(y.jsxs)("div",{className:t.rates,children:[Object(y.jsxs)("p",{children:[" \u041f\u0440\u043e\u0434\u0430\u0436\u0430 : ",c]}),Object(y.jsxs)("p",{children:[" \u041f\u043e\u043a\u0443\u043f\u043a\u0430 : ",r]})]})]},n+"_"+a)}))})})),k=n(35),R=Object(k.a)({palette:{primary:{main:"#34C329",secondary:"#119507"}}}),S=function(){return Object(y.jsxs)(i.a,{theme:R,children:[Object(y.jsx)(u.a,{}),Object(y.jsx)(v,{}),Object(y.jsx)(N,{})]})};var T=function(){return Object(y.jsx)(S,{})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(T,{})}),document.getElementById("root")),F()}},[[51,1,2]]]);
//# sourceMappingURL=main.7a0a0583.chunk.js.map