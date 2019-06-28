(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,a){e.exports=a(84)},53:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(9),c=a.n(l),i=(a(52),a(53),a(14)),m=a(15),o=a(42),u=a(45),s=a(18),d={items:[],loaded:!1},E=Object(m.c)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.type),t.type){case"GET_ITEMS":return Object(s.a)({},e,{items:t.payload,loaded:!1});case"DELETE_ITEM":return Object(s.a)({},e,{items:e.items.filter(function(e){return e._id!==t.payload})});case"ITEMS_LOADING":return Object(s.a)({},e,{loaded:!0});case"ADD_ITEM":return Object(s.a)({},e,{items:[t.payload].concat(Object(u.a)(e.items))});default:return e}}}),f=[o.a],p=Object(m.e)(E,{},Object(m.d)(m.a.apply(void 0,f))),y=a(10),g=a(86),b=a(87),v=a(88),O=a(89),j=a(90),I=a(91),S=a(92),h=a(93),T=function(){var e=Object(n.useState)(!1),t=Object(y.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement(g.a,{color:"dark",dark:!0,expand:"sm",className:"mb-5"},r.a.createElement(b.a,null,r.a.createElement(v.a,{href:"/"},"Shopping List"),r.a.createElement(O.a,{onClick:function(){l(!a)}}),r.a.createElement(j.a,{isOpen:a,navbar:!0},r.a.createElement(I.a,{className:"ml-auto",navbar:!0},r.a.createElement(S.a,null,r.a.createElement(h.a,{href:"/"},"Home")))))))},k=a(100),x=a(101),w=a(102),N=a(103),M=a(104),D=a(107),A=a(106),L=a(105),_=a(94),C=a(95),Q=a(96),q=a(97),z=a(98),G=a(99),B=a(21),W=a.n(B),J=function(e){return function(t){W.a.post("/api/items",e).then(function(e){return t({type:"ADD_ITEM",payload:e.data})})}},R=function(){return{type:"ITEMS_LOADING"}},U=Object(i.b)(function(e){return{item:e.item}},{addItem:J})(function(e){var t=e.addItem,a=e.modal,l=e.SetModal,c=Object(n.useState)(""),i=Object(y.a)(c,2),m=i[0],o=i[1],u=Object(n.useState)(1),s=Object(y.a)(u,2),d=s[0],E=s[1],f=function(){l(!a)};return r.a.createElement("div",null,r.a.createElement(L.a,{isOpen:a,toggle:f,centered:!0},r.a.createElement(_.a,{toggle:f},"Add To List"),r.a.createElement(C.a,null,r.a.createElement(Q.a,{onSubmit:function(e){e.preventDefault(),t({name:m,quantity:d}),f()}},r.a.createElement(q.a,null,r.a.createElement(z.a,{for:"item"},"Item Name"),r.a.createElement(G.a,{type:"text",name:"name",id:"item",placeholder:"Set Item Name",onChange:function(e){o(e.target.value)}}),r.a.createElement(z.a,{for:"item"},"Quantity"),r.a.createElement(G.a,{type:"text",name:"Quantity",id:"quantity",placeholder:"Set Quantity",onChange:function(e){E(e.target.value)}}),r.a.createElement(k.a,{color:"dark",style:{marginTop:"2rem"},block:!0},"Add"))))))}),H=(a(82),a(83),Object(i.b)(function(e){return{item:e.item}},{addItem:J})(function(e){var t=e.addItem,a=e.EditModal,n=e.SetEditModal,l=e.EditName,c=e.EditQuantity,i=e.SetEditQuantity,m=function(){n(!a)};return r.a.createElement("div",null,r.a.createElement(L.a,{isOpen:a,toggle:m,centered:!0},r.a.createElement(_.a,{toggle:m},"Edit Item"),r.a.createElement(C.a,null,r.a.createElement(Q.a,{onSubmit:function(e){e.preventDefault(),t({name:l,quantity:c}),m()}},r.a.createElement(q.a,null,r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(z.a,{style:{textAlign:"center"},for:"item"},l)),r.a.createElement("br",null),r.a.createElement(G.a,{defaultValue:c,type:"text",name:"Quantity",id:"item",onChange:function(e){i(e.target.value)}}),r.a.createElement(k.a,{color:"dark",style:{marginTop:"2rem"},block:!0},"Add"))))))})),P=a(12),V=a.n(P),$=a(44),F=a.n($),K=function(e){var t=e.getItems,a=e.item,l=e.deleteItem,c=Object(n.useState)(!1),i=Object(y.a)(c,2),m=i[0],o=i[1],u=Object(n.useState)(""),s=Object(y.a)(u,2),d=s[0],E=s[1],f=Object(n.useState)(1),p=Object(y.a)(f,2),g=p[0],v=p[1],O=Object(n.useState)(!1),j=Object(y.a)(O,2),I=j[0],S=j[1],h=function(){S(!I)};return Object(n.useState)(function(){t()}),r.a.createElement(b.a,null,r.a.createElement(k.a,{color:"dark",style:{marginBottom:"2rem"},onClick:function(){o(!m)}},"Add Item"),r.a.createElement(H,{EditModal:I,SetEditModal:S,EditName:d,EditQuantity:g,SetEditQuantity:v}),r.a.createElement(U,{modal:m,SetModal:o}),r.a.createElement(x.a,null,r.a.createElement(F.a,{maxDeviceWidth:550},function(e){return e?r.a.createElement(D.a,{className:"shopping-list"},a.items.map(function(e){var t=e._id,a=e.name,n=e.quantity,c=e.date;return r.a.createElement(A.a,{key:t,timeout:500,classNames:"fade"},r.a.createElement(w.a,null,r.a.createElement(N.a,null,r.a.createElement(M.a,{xs:"1"},r.a.createElement(k.a,{style:{marginTop:"1.8rem"},className:"remove-btn",color:"danger",size:"sm",onClick:function(){l(t)}},"\xd7")),r.a.createElement(M.a,{style:{marginTop:"2rem"},xs:"4"},a),r.a.createElement(M.a,{style:{marginTop:"0.2rem",textAlign:"center"},xs:"2"},"Last Update: "+new Date(c).toLocaleString()),r.a.createElement(M.a,{style:{marginTop:"2rem",paddingLeft:"4rem"},xs:"3"},r.a.createElement(k.a,{color:"link",size:"sm",onClick:function(){E(a),v(n),l(t),h()}},n)))))})):r.a.createElement(D.a,{className:"shopping-list"},a.items.map(function(e){var t=e._id,a=e.name,n=e.quantity,c=e.date;return r.a.createElement(A.a,{key:t,timeout:500,classNames:"fade"},r.a.createElement(w.a,null,r.a.createElement(N.a,null,r.a.createElement(M.a,{xs:"1"},r.a.createElement(k.a,{style:{},className:"remove-btn",color:"danger",size:"sm",onClick:function(){l(t)}},"\xd7")),r.a.createElement(M.a,{style:{marginTop:"0.2rem"},xs:"3"},a),r.a.createElement(M.a,{style:{marginTop:"0.2rem",textAlign:"center"},xs:"6"},"Last Update: "+new Date(c).toLocaleString()),r.a.createElement(M.a,{xs:"2"},r.a.createElement(k.a,{color:"link",size:"sm",onClick:function(){E(a),v(n),l(t),h()}},n)))))}))})))};K.PropsTypes={getItems:V.a.func.isRequired,item:V.a.object.isRequired};var X=Object(i.b)(function(e){return{item:e.item}},{getItems:function(){return function(e){e(R()),W.a.get("api/items").then(function(t){return e({type:"GET_ITEMS",payload:t.data})})}},deleteItem:function(e){return function(t){W.a.delete("/api/items/".concat(e)).then(function(a){return t({type:"DELETE_ITEM",payload:e})})}}})(K);var Y=function(){return r.a.createElement(i.a,{store:p},r.a.createElement("div",{className:"App"},r.a.createElement(T,null),r.a.createElement(b.a,null,r.a.createElement(X,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.a51fa520.chunk.js.map