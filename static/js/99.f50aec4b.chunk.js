"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[99],{1687:function(t,e,r){r.d(e,{Ex:function(){return i},GN:function(){return p},Hj:function(){return f},qj:function(){return o},z1:function(){return s}});var n=r(5861),a=r(7757),c=r.n(a),u=r(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"ccd726dee91d403c616acd8dbc070a9c"}}),s=function(){var t=(0,n.Z)(c().mark((function t(){var e,r,n,a,s=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:1,r=s.length>1&&void 0!==s[1]?s[1]:"week",t.next=4,u.get("/trending/movie/".concat(r),{params:{page:e}});case 4:return n=t.sent,a=n.data,t.abrupt("return",a.results);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n,a,s=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:1,t.next=3,u.get("/search/movie",{params:{query:e,page:r}});case 3:return n=t.sent,a=n.data,t.abrupt("return",a.results);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e),{});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"/credits"),{});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"/reviews"),{});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},564:function(t,e,r){r.d(e,{X:function(){return c},m:function(){return u}});var n=r(4240),a=r(42),c=function(t){return t?"https://image.tmdb.org/t/p/w500/".concat(t):n},u=function(t){return t?"https://image.tmdb.org/t/p/w500/".concat(t):a}},7099:function(t,e,r){r.r(e),r.d(e,{default:function(){return g}});var n=r(5861),a=r(9439),c=r(7757),u=r.n(c),s=r(2791),i=r(7689),o=r(1687),p=r(9830),f=r(564),d="cast_list__BjE1s",l="cast_item__rFGCo",m="cast_text__UlQf6",v="cast_name__NFLTM",h=r(184),x=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),r=e[0],c=e[1],x=(0,s.useState)(!1),g=(0,a.Z)(x,2),w=g[0],b=g[1],_=(0,s.useState)(null),k=(0,a.Z)(_,2),j=k[0],Z=k[1],y=(0,i.UO)().id;(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(!0),t.prev=1,t.next=4,(0,o.GN)(y);case 4:e=t.sent,c(e.cast),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),Z(t.t0.message);case 11:return t.prev=11,b(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[y,j]);var N=r.map((function(t){var e=t.id,r=t.character,n=t.name,a=t.profile_path;return(0,h.jsxs)("li",{className:l,children:[(0,h.jsx)("img",{src:(0,f.m)(a),alt:n,width:"140"}),(0,h.jsx)("p",{className:v,children:n}),(0,h.jsxs)("p",{className:m,children:["Character: ",r]})]},e)}));return(0,h.jsxs)(h.Fragment,{children:[w&&(0,h.jsx)(p.Z,{}),j&&(0,h.jsx)("p",{children:"Error"}),r.length>0&&(0,h.jsx)("ul",{className:d,children:N})]})};x.defaultProps={items:[]};var g=x},4240:function(t,e,r){t.exports=r.p+"static/media/no-poster-available.1b98b24aac4d9b1f6d3c.png"},42:function(t,e,r){t.exports=r.p+"static/media/no-image.12e64bc7efc49e58e460.png"}}]);
//# sourceMappingURL=99.f50aec4b.chunk.js.map