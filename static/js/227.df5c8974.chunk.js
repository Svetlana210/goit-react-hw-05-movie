"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[227],{1687:function(e,t,n){n.d(t,{Ex:function(){return o},GN:function(){return l},Hj:function(){return d},qj:function(){return u},z1:function(){return c}});var r=n(5861),a=n(7757),s=n.n(a),i=n(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"ccd726dee91d403c616acd8dbc070a9c"}}),c=function(){var e=(0,r.Z)(s().mark((function e(){var t,n,r,a,c=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:1,n=c.length>1&&void 0!==c[1]?c[1]:"week",e.next=4,i.get("/trending/movie/".concat(n),{params:{page:t}});case 4:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,a,c=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:1,e.next=3,i.get("/search/movie",{params:{query:t,page:n}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t),{});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/credits"),{});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/reviews"),{});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},564:function(e,t,n){n.d(t,{X:function(){return s},m:function(){return i}});var r=n(4240),a=n(42),s=function(e){return e?"https://image.tmdb.org/t/p/w500/".concat(e):r},i=function(e){return e?"https://image.tmdb.org/t/p/w500/".concat(e):a}},2227:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var r=n(5861),a=n(9439),s=n(7757),i=n.n(s),c=n(1087),o=n(7689),u=n(2791),l=n(1687),d="movie-details-info_container__TXCRS",p="movie-details-info_wrap__B1cyA",f="movie-details-info_data__u8a6j",m="movie-details-info_text__jwcnf",v="movie-details-info_textbig__7ImPQ",h="movie-details-info_list__3xUeO",_="movie-details-info_item__aB2hB",x=n(564),j=n(184),w=function(e){var t=e.props,n=t.overview,r=t.genres,a=void 0===r?[]:r,s=t.title,i=t.release_date,c=void 0===i?"":i,o=t.vote_average,u=t.poster_path,l=a.map((function(e){return(0,j.jsx)("li",{className:_,children:e.name},e.id)})),w=c.substring(0,4);return(0,j.jsxs)("div",{className:d,children:[(0,j.jsx)("img",{src:(0,x.X)(u),alt:s,width:"250"}),(0,j.jsxs)("div",{className:p,children:[(0,j.jsxs)("h2",{children:[s,(0,j.jsxs)("span",{className:f,children:["(",w,")"]})]}),(0,j.jsxs)("p",{children:["User score: ",Math.round(10*o),"%"]}),(0,j.jsx)("p",{className:m,children:"Overview"}),(0,j.jsx)("p",{className:v,children:n}),(0,j.jsx)("p",{className:m,children:"Genres"}),(0,j.jsx)("ul",{className:h,children:l})]})]})},g=n(9830),b="movie-details_container__9Zseh",k="movie-details_title__s4PBE",N="movie-details_list__T4aAE",Z="movie-details_item__dXFYi",y="movie-details_link__bPQN4",C="movie-details_btn__7A9lB",B=function(){var e,t=(0,u.useState)({}),n=(0,a.Z)(t,2),s=n[0],d=n[1],p=(0,u.useState)(!1),f=(0,a.Z)(p,2),m=f[0],v=f[1],h=(0,u.useState)(null),_=(0,a.Z)(h,2),x=_[0],B=_[1],E=(0,o.UO)().id,O=(0,o.s0)(),A=(null===(e=(0,o.TH)().state)||void 0===e?void 0:e.from)||"/";(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,e.next=4,(0,l.qj)(E);case 4:t=e.sent,d(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),B(e.t0.message);case 11:return e.prev=11,v(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[E,x]);var S=(0,u.useCallback)((function(){return O(A)}),[O,A]);return(0,j.jsxs)(j.Fragment,{children:[m&&(0,j.jsx)(g.Z,{}),x&&(0,j.jsx)("p",{children:"Error"}),(0,j.jsx)("button",{className:C,onClick:S,children:"\u2190 Go back"}),(0,j.jsx)(w,{props:s}),(0,j.jsxs)("div",{className:b,children:[(0,j.jsx)("h2",{className:k,children:"Additional information"}),(0,j.jsxs)("ul",{className:N,children:[(0,j.jsx)("li",{className:Z,children:(0,j.jsx)(c.OL,{to:"cast",state:{from:A},className:y,children:"Cast"})}),(0,j.jsx)("li",{className:Z,children:(0,j.jsx)(c.OL,{to:"reviews",state:{from:A},className:y,children:"Reviews"})})]}),(0,j.jsx)(o.j3,{})]})]})}},4240:function(e,t,n){e.exports=n.p+"static/media/no-poster-available.1b98b24aac4d9b1f6d3c.png"},42:function(e,t,n){e.exports=n.p+"static/media/no-image.12e64bc7efc49e58e460.png"}}]);
//# sourceMappingURL=227.df5c8974.chunk.js.map