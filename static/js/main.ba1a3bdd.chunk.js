(this.webpackJsonpsallary_calc=this.webpackJsonpsallary_calc||[]).push([[0],{117:function(e,t,n){},222:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),i=n.n(c),s=n(247),o=n(248),l=n(44),u=n(58),h=n(14),j=(n(116),n(117),n(99)),p=n.n(j),d=n(243),b=Object(d.a)((function(e){return{header:{padding:e.spacing(3),display:"grid",gridTemplateColumns:"repeat(2, 1fr)",justifyContent:"space-between",alignItems:"center",backgroundColor:e.palette.primary.mint,"@media(max-width: 500px)":{gridTemplateColumns:"auto",padding:"".concat(e.spacing(2)," ").concat(e.spacing(4))}},blackHeader:{backgroundColor:e.palette.primary.teal}}})),x=n(18),m=n(34),f=n(245),g=n(249),O=n(224),v=n(5),y=n.n(v),w=n(19),k=n(6),C=n(8),N=n(10),T=new Map([["200","\u0412\u0441\u0435 \u043c\u044b \u0431\u044b\u043b\u0438 \u0442\u0440\u0435\u0439\u043d\u0438"],["400","\u041f\u0438\u0448\u0438 \u041c\u0430\u0440\u0438\u043d\u0435"],["600","\u041d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e \u0432\u0441\u0435 \u0434\u0435\u043b\u0430\u0435\u0448\u044c"],["800","\u041d\u0430 \u0445\u043e\u0434 \u043d\u043e\u0433\u0438"],["1000","\u0422\u044b \u0447\u0451 \u0442\u0430\u043c? \u0428\u0443\u0442\u043d\u0438\u043a?"]]),A="@Sallary_calc_amount",R=new(function(){function e(){var t=this;Object(k.a)(this,e),this.exchangeRate=null,this.threeMonthAmount=null,this.hryvnaAmount=0,this.getCurrencys=Object(w.a)(y.a.mark((function e(){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5");case 2:return e.next=4,e.sent.json();case 4:n=(n=e.sent).filter((function(e){return"RUR"!==e.ccy})),Object(N.h)((function(){t.exchangeRate=n}));case 7:case"end":return e.stop()}}),e)}))),this.getHistory=Object(w.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.privatbank.ua/p24api/exchange_rates?json&date=01.12.2019");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,console.log("Response : ",t);case 6:case"end":return e.stop()}}),e)}))),this.transformToHryvna=function(e){if(e){var n=localStorage.getItem(A);return n&&n>e?(l.c.success(T.get(e)?T.get(e):"\u041c\u043e\u0438 \u043f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f"),localStorage.setItem(A,e)):n||localStorage.setItem(A,e),Object(N.h)((function(){t.hryvnaAmount=e*t.exchangeRate[0].buy})),e*t.exchangeRate[0].buy}},Object(N.e)(this,{exchangeRate:N.f,hryvnaAmount:N.f}),Object(N.g)(this,"exchangeRate",(function(){return t.getCurrencys()}))}return Object(C.a)(e,[{key:"countThreeMonth",get:function(){return 3*this.hryvnaAmount}},{key:"afterTaxes",get:function(){if(this.hryvnaAmount){var e=this.hryvnaAmount/100*5;return this.hryvnaAmount-1320-e}return null}},{key:"threeMonthAfterTaxes",get:function(){if(this.countThreeMonth){var e=this.countThreeMonth/100*5;return this.countThreeMonth-3960-e}return null}}]),e}()),_=Object(d.a)((function(e){return{checkboxWrapper:{marginTop:20,width:"100%"},checkbox:{"&":{color:e.palette.primary.purple}},infoRow:{padding:"10px 05px",background:e.palette.primary.second,borderBottom:"1px solid ".concat(e.palette.primary.white)}}})),M=n(1),S=function(){var e=Object(a.useState)(!1),t=Object(x.a)(e,2),n=t[0],r=t[1],c=R.countThreeMonth,i=R.threeMonthAfterTaxes,s=_();return Object(M.jsxs)("div",{children:[Object(M.jsx)("div",{className:s.checkboxWrapper,children:Object(M.jsx)(f.a,{control:Object(M.jsx)(g.a,{checked:n,onChange:function(){r(!n)},label:"For 3 months?"}),label:"For 3 months "})}),n&&Object(M.jsx)(m.a,{children:function(){return Object(M.jsxs)("div",{children:[Object(M.jsxs)(O.a,{className:s.infoRow,children:["Three month amount : ",Object(M.jsx)("b",{children:c})]}),Object(M.jsxs)(O.a,{className:s.infoRow,children:["Three month amount after taxes : ",Object(M.jsx)("b",{children:i})]})]})}})]})},H=n(250),z=n(246),F=n(7);var V=function(e){return Object(M.jsx)("svg",Object(F.a)(Object(F.a)({width:36,height:36,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:Object(M.jsx)("path",{d:"M32 0H4C1.8 0 0 1.8 0 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm0 32H4V4h28v28zM8 14h4v14H8V14zm8-6h4v20h-4V8zm8 12h4v8h-4v-8z",fill:"#132C14"})}))};var I=function(e){return Object(M.jsx)("svg",Object(F.a)(Object(F.a)({width:22,height:22,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:Object(M.jsx)("path",{d:"M19.938 0H2.063A2.069 2.069 0 000 2.063v17.875C0 21.072.928 22 2.063 22h17.875A2.069 2.069 0 0022 19.937V2.063A2.069 2.069 0 0019.937 0zM8.25 17.875H5.5V8.25h2.75v9.625zm-1.375-11a1.375 1.375 0 110-2.75 1.375 1.375 0 010 2.75zm11 11h-2.75v-5.5a1.375 1.375 0 00-2.75 0v5.5h-2.75V8.25h2.75v1.706c.566-.778 1.435-1.706 2.406-1.706 1.71 0 3.094 1.539 3.094 3.438v6.187z",fill:"#0E76A8"})}))};var B=function(e){return Object(M.jsx)("svg",Object(F.a)(Object(F.a)({width:28,height:22,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:Object(M.jsx)("path",{d:"M25.2 5.5L14 12.375 2.8 5.5V2.75L14 9.625 25.2 2.75V5.5zm0-5.5H2.8C1.246 0 0 1.224 0 2.75v16.5c0 .73.295 1.429.82 1.945A2.826 2.826 0 002.8 22h22.4c.743 0 1.455-.29 1.98-.805.525-.516.82-1.216.82-1.945V2.75C28 1.224 26.74 0 25.2 0z",fill:"#4F91FF"})}))};var D=function(e){return Object(M.jsx)("svg",Object(F.a)(Object(F.a)({width:27,height:21,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:Object(M.jsx)("path",{d:"M2.473 19.65L13.5 2.497 24.527 19.65H2.473z",stroke:"#0C2146",strokeWidth:2.7})}))};var W=function(e){return Object(M.jsx)("svg",Object(F.a)(Object(F.a)({width:20,height:20,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:Object(M.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.756 1.313c-.516-1.75-2.996-1.75-3.512 0l-.125.425a1.83 1.83 0 01-2.631 1.09L5.1 2.615c-1.604-.873-3.357.881-2.484 2.484l.212.388a1.83 1.83 0 01-1.09 2.632l-.425.125c-1.75.516-1.75 2.996 0 3.512l.425.125a1.83 1.83 0 011.09 2.631l-.213.388c-.873 1.604.881 3.357 2.484 2.484l.388-.212a1.83 1.83 0 012.632 1.09l.125.425c.516 1.75 2.996 1.75 3.512 0l.125-.425a1.829 1.829 0 012.631-1.09l.388.213c1.604.872 3.357-.881 2.484-2.484l-.212-.389a1.83 1.83 0 011.09-2.63l.425-.126c1.75-.516 1.75-2.996 0-3.512l-.425-.125a1.83 1.83 0 01-1.09-2.631l.213-.388c.872-1.604-.881-3.357-2.484-2.484l-.389.212a1.83 1.83 0 01-2.63-1.09l-.126-.425zM10 13.662a3.663 3.663 0 100-7.321 3.663 3.663 0 000 7.318v.002z",fill:"#19191D"})}))},L=Object(d.a)((function(e){return{info:{width:"100%",minHeight:85,display:"flex",flexDirection:"column",justifyContent:"space-around"},title:{display:"flex",alignItems:"center",justifyContent:"flex-start","& svg":{fontSize:"1em",width:e.spacing,fill:e.palette.primary.teal,stroke:e.palette.primary.purple,marginRight:e.spacing(2)}},actionsWrapper:{"@media(max-width: 500px)":{marginTop:e.spacing(4),width:"100%"}},button:{width:"100px",margin:"0px ".concat(e.spacing(4)),background:e.palette.primary.purple,color:"#fff"},input:{height:e.spacing(5),width:"50%",padding:e.spacing,marginRight:e.spacing(4)}}})),E=function(){var e=Object(a.useState)(void 0),t=Object(x.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),i=Object(x.a)(c,2),s=i[0],o=i[1],l=L(),u=R.transformToHryvna,h=R.afterTaxes,j=function(e){e.preventDefault(),o(u(n))};return Object(M.jsx)(m.a,{children:function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)("div",{className:l.info,children:[Object(M.jsxs)(O.a,{className:l.title,variant:"h5",children:[Object(M.jsx)(D,{}),"Without taxes ",s]}),Object(M.jsxs)(O.a,{className:l.title,variant:"h5",children:[Object(M.jsx)(D,{}),"After taxes ",h]})]}),Object(M.jsxs)("div",{className:l.actionsWrapper,children:[Object(M.jsx)(H.a,{type:"number",placeholder:"Sallary",className:l.input,value:n,onChange:function(e){return r(e.target.value)}}),Object(M.jsx)(z.a,{variant:"contained",onClick:j,className:l.button,children:"Count"})]})]})}})},q=function(){var e=b(),t=(new Date).getHours(),n=t<10||t>18;return Object(M.jsxs)("header",{className:p()(e.header,n&&e.blackHeader),children:[Object(M.jsx)(E,{}),Object(M.jsx)(S,{})]})},J=Object(d.a)((function(e){return{wrapper:{display:"grid",padding:"".concat(e.spacing(2),"px"),gridTemplateColumns:"repeat(2,  1fr)",background:e.palette.primary.second,"@media(max-width: 500px)":{gridTemplateColumns:"auto"}},exchangeCard:{border:"".concat(e.spacing(1),"px solid ").concat(e.palette.primary.main),borderRadius:e.borderRadius,margin:e.spacing(1),padding:"1.5em",boxShadow:"5px 5px 2px ".concat(e.palette.primary.purple),"&:hover":{boxShadow:"5px 5px 2px ".concat(e.palette.primary.white)}},currencys:{fontWeight:600,display:"flex",justifyContent:"space-between"},rates:{display:"flex",justifyContent:"space-between"}}})),G=Object(m.b)((function(){var e=R.exchangeRate;(0,R.getHistory)();var t=J();return Object(M.jsx)("div",{className:t.wrapper,children:e&&e.map((function(e){var n=e.ccy,a=e.base_ccy,r=e.buy,c=e.sale;return Object(M.jsxs)("div",{className:t.exchangeCard,children:[Object(M.jsxs)("div",{className:t.currencys,children:[Object(M.jsx)("p",{children:n}),Object(M.jsx)("p",{children:a})]}),Object(M.jsxs)("div",{className:t.rates,children:[Object(M.jsxs)("p",{children:[" \u041f\u0440\u043e\u0434\u0430\u0436\u0430 : ",r]}),Object(M.jsxs)("p",{children:[" \u041f\u043e\u043a\u0443\u043f\u043a\u0430 : ",c]})]})]},n+"_"+a)}))})})),K=function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(q,{}),Object(M.jsx)(G,{})]})},P=n(27),U=n(104),Y=n(60),Q=Y.a({firstName:Y.b(),userName:Y.b().required("Input a field")}),X=[{path:"/currency_exchange",component:K,exact:!0},{path:"/currency_exchange/about",component:function(){var e,t=(e=Q,Object(a.useCallback)(function(){var t=Object(w.a)(y.a.mark((function t(n){var a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.validate(n,{abortEarly:!1});case 3:return a=t.sent,t.abrupt("return",{values:a,errors:{}});case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",{values:{},errors:t.t0.inner.reduce((function(e,t){var n;return Object(F.a)(Object(F.a)({},e),{},Object(P.a)({},t.path,{type:null!==(n=t.type)&&void 0!==n?n:"validation",message:t.message}))}),{})});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),[e])),n=Object(U.a)({resolver:t}),r=n.register,c=n.handleSubmit,i=n.formState.errors;return Object(M.jsxs)("div",{children:[Object(M.jsxs)("h1",{children:[Object(M.jsx)(W,{}),"About page"]}),Object(M.jsx)(O.a,{children:"This app is made only for fun and kinda learning"}),Object(M.jsxs)(u.b,{to:"/",children:[Object(M.jsx)(V,{}),Object(M.jsx)(O.a,{children:"Currency to sallary"})]}),Object(M.jsxs)("form",{onSubmit:c((function(e){return console.log("Submit data : ",e)})),children:[Object(M.jsx)("input",Object(F.a)({},r("firstName"))),Object(M.jsx)("input",Object(F.a)({},r("userName"))),i.userName&&Object(M.jsx)("span",{children:"This field is required"}),Object(M.jsx)("button",{type:"submit",children:"Submit"})]})]})},exact:!0}],Z=Object(d.a)((function(e){return{footer:{position:"fixed",bottom:0,background:e.palette.primary.purple,minHeight:50,display:"flex",width:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:e.spacing(1),paddingBottom:e.spacing(2)},text:{margin:e.spacing,color:e.palette.primary.white,marginBottom:e.spacing},links:{width:"40%",display:"flex",justifyContent:"space-evenly"}}})),$=function(){var e=Z();return Object(M.jsxs)("footer",{className:e.footer,children:[Object(M.jsxs)(O.a,{className:e.text,children:["Build by Kalinin Ivan ",(new Date).getFullYear()]}),Object(M.jsxs)("div",{className:e.links,children:[Object(M.jsx)("a",{target:"__blank",href:"mailto:kalinin_ivan_donetsk@ukr.net",children:Object(M.jsx)(I,{})}),Object(M.jsx)("a",{target:"__blank",href:"mailto:kalinin_ivan_donetsk@ukr.net",children:Object(M.jsx)(B,{})}),Object(M.jsx)(I,{})]})]})},ee=new function e(){Object(k.a)(this,e),this.latitude=null,this.longitude=null,this.timestamp=null,this.getCurrentLocation=function(){var e;console.log("GEt current location");navigator.geolocation.getCurrentPosition((function(t){return console.log("Data : ",t),e=t,t}));console.log("NAv : ",e)},Object(N.d)(this)},te=n(108),ne=Object(te.a)({borderRadius:"1em",palette:{primary:{main:"#50CB93",secondary:"#155d27",first:"#1a7431",second:"#92e6a7",white:"#fff",purple:"#54436B",teal:"#50CB93",light:"#71EFA3",mint:"#ACFFAD"}}}),ae=function(){return(0,ee.getCurrentLocation)(),Object(M.jsxs)(s.a,{theme:ne,children:[Object(M.jsx)(o.a,{}),Object(M.jsx)(l.b,{autoClose:8e3,transition:l.a}),Object(M.jsxs)(u.a,{children:[Object(M.jsxs)(h.d,{children:[X.map((function(e,t){var n=e.path,a=e.exact,r=e.component;return Object(M.jsx)(h.b,{path:n,exact:a,component:r},n+"_"+t)})),Object(M.jsx)(h.a,{from:"/",to:"/currency_exchange"})]}),Object(M.jsx)($,{})]})]})};var re=function(){return Object(M.jsx)(ae,{})};i.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(re,{})}),document.getElementById("root"))}},[[222,1,2]]]);
//# sourceMappingURL=main.ba1a3bdd.chunk.js.map