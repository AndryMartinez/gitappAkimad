(this.webpackJsonpgitapi=this.webpackJsonpgitapi||[]).push([[0],{63:function(t,e,n){},64:function(t,e,n){},76:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(21),s=n.n(a),i=(n(63),n.p,n(64),n(20)),o=n(7),u=n(14),j=n.n(u),l=n(24),b=n(23),d=n(99),h=n(101),p=n(102),O=n(109),x=n(103),f=n(108),m=n(2),g=Object(d.a)((function(t){return{root:{display:"flex","& > *":{margin:t.spacing(1)}}}}));function v(t){var e=t.src,n=t.style,r=g();return Object(m.jsx)("div",{className:r.root,children:Object(m.jsx)(f.a,{style:n||{},alt:"Remy Sharp",src:e})})}var y=Object(d.a)((function(t){return{root:{width:"100%",maxWidth:360,backgroundColor:t.palette.background.paper}}})),w=function(t){var e=y();return Object(m.jsx)(h.a,{className:e.root,children:t.users.map((function(t){return Object(m.jsx)(i.b,{to:"/user/".concat(t.login),style:{textDecoration:"none",color:"black"},children:Object(m.jsxs)(p.a,{children:[Object(m.jsx)(x.a,{children:Object(m.jsx)(f.a,{children:Object(m.jsx)(v,{src:t.avatar_url})})}),Object(m.jsx)(O.a,{primary:t.login})]},t.login)})}))})},k=n(110),C=n(104);var I=Object(d.a)({root:{minWidth:275,maxWidth:345}}),S=function(t){var e=I();return Object(m.jsx)(k.a,{className:e.root,children:Object(m.jsx)(C.a,{children:t.children})})},N=n(45),D=n(107),R=n(52),L=n.n(R),W=n(22);var B=Object(d.a)((function(t){return{search:Object(N.a)({maxWidth:345,position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(W.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(W.b)(t.palette.common.white,.25)},marginLeft:0,width:345},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(N.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),_=function(t){var e=t.submit,n=t.load,r=t.style,c=B();return Object(m.jsxs)("div",{style:r,className:c.search,children:[Object(m.jsx)("div",{className:c.searchIcon,children:Object(m.jsx)(L.a,{})}),Object(m.jsx)(D.a,{placeholder:"Search\u2026",disabled:!n,onKeyDown:function(t){13==t.keyCode&&n&&e(t.target.value)},classes:{root:c.inputRoot,input:c.inputInput},inputProps:{"aria-label":"search"}})]})},E=n(105),F=Object(d.a)((function(t){return{root:{display:"flex","& > * + *":{marginLeft:t.spacing(4)}}}}));function T(){var t=F();return Object(m.jsx)("div",{className:t.root,children:Object(m.jsx)(E.a,{})})}var P=function(){var t=Object(r.useState)({}),e=Object(b.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(!1),s=Object(b.a)(a,2),i=s[0],o=s[1];function u(){return(u=Object(l.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/users");case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(){return(d=Object(l.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/search/users?q="+e);case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(r.useEffect)((function(){h()}),[]);var h=function(){o(!1),c({}),function(){return u.apply(this,arguments)}().then((function(t){c(t),o(!0)}))},p=function(t){o(!1),c({}),function(t){return d.apply(this,arguments)}(t).then((function(t){c(t.items),o(!0),console.log(t.items)}))};return Object(m.jsxs)("div",{style:{backgroundColor:"#d3d3d3",display:"flex",alignItems:"center",flexDirection:"column"},children:[Object(m.jsx)(_,{load:i,submit:function(t){var e;null!=(e=t)&&e.trim().length?p(t):h()},style:{marginTop:20,marginBottom:20}}),i&&n?Object(m.jsx)(S,{children:Object(m.jsx)(w,{users:n})}):Object(m.jsx)(T,{})]})};var z=Object(d.a)((function(t){return{root:{width:"100%",maxWidth:360,backgroundColor:t.palette.background.paper}}})),J=function(t){var e=z();return Object(m.jsx)(h.a,{className:e.root,children:t.list.map((function(t){return Object(m.jsxs)(p.a,{children:[Object(m.jsx)(x.a,{children:Object(m.jsx)(f.a,{children:Object(m.jsx)(v,{src:t.avatar_url})})}),Object(m.jsx)(O.a,{primary:t.login})]},t.id)}))})},q=n(33),K=n.n(q);var M=Object(d.a)((function(t){return{root:{width:"100%",maxWidth:360,backgroundColor:t.palette.background.paper}}})),U=function(t){var e=M();return Object(m.jsx)(h.a,{className:e.root,children:t.list.map((function(t){return console.log("hola"),Object(m.jsxs)(p.a,{children:[Object(m.jsx)(x.a,{children:Object(m.jsx)(f.a,{children:Object(m.jsx)(K.a,{})})}),Object(m.jsx)(O.a,{primary:t.name})]},t.id)}))})},A=n(106),G=n(53),H=n.n(G),Q=Object(d.a)((function(t){return{menuButton:{marginRight:t.spacing(2)}}}));function V(){var t=Q();return Object(m.jsx)(A.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:Object(m.jsx)(H.a,{})})}var X=function(){var t=Object(o.f)().id,e=Object(r.useState)({}),n=Object(b.a)(e,2),c=n[0],a=n[1],s=Object(r.useState)({}),u=Object(b.a)(s,2),d=u[0],h=u[1],p=Object(r.useState)({}),O=Object(b.a)(p,2),x=O[0],f=O[1],g=Object(r.useState)(!1),y=Object(b.a)(g,2),w=y[0],k=y[1];function C(){return(C=Object(l.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/users/"+e);case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function I(){return(I=Object(l.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(){return(N=Object(l.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(r.useEffect)((function(){D(t)}),[]);var D=function(t){k(!1),a({}),function(t){return C.apply(this,arguments)}(t).then((function(t){a(t),function(t){return I.apply(this,arguments)}(t.repos_url).then((function(e){h(e),function(t){return N.apply(this,arguments)}(t.organizations_url).then((function(t){f(t),k(!0)}))}))}))};return w?Object(m.jsx)("div",{style:{backgroundColor:"#d3d3d3",display:"flex",alignItems:"center",flexDirection:"column",paddingTop:20},children:Object(m.jsxs)(S,{children:[Object(m.jsx)("div",{style:{position:"absolute"},children:Object(m.jsx)(i.b,{to:"/user",style:{textDecoration:"none",color:"black"},children:Object(m.jsx)(V,{})})}),Object(m.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[Object(m.jsx)(v,{style:{width:100,height:100},src:c.avatar_url}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Usuario: "}),c.login]})]}),Object(m.jsx)("h4",{children:"Organization:"}),Object(m.jsx)(J,{list:x}),Object(m.jsx)("h4",{children:"Repositories:"}),Object(m.jsx)(U,{list:d})]})}):Object(m.jsx)(T,{})};var Y=function(){return Object(m.jsx)(i.a,{children:Object(m.jsx)("div",{children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/user/:id",children:Object(m.jsx)(X,{})}),Object(m.jsx)(o.a,{path:"/",children:Object(m.jsx)(P,{})})]})})})},Z=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,112)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),a(t),s(t)}))};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[76,1,2]]]);
//# sourceMappingURL=main.6e99bb3b.chunk.js.map