"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[77],{551:function(t,e,r){r.d(e,{Hg:function(){return s},IQ:function(){return f},Jh:function(){return p},Mc:function(){return i},mv:function(){return o}});var n=r(861),a=r(757),c=r.n(a),u=r(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"c0e59496318bb750168f85f3ae951021"}}),s=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/trending/movie/day");case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/search/movie",{params:{query:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},77:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var n=r(439),a=r(791),c=r(87),u=r(689),s=r(551),i={list:"homePage_list__-HTS1",item:"homePage_item__za3vq",container:"homePage_container__KQUO7",img:"homePage_img__gzKPf"},o=r(184),f=function(){var t=(0,a.useState)([]),e=(0,n.Z)(t,2),r=e[0],f=e[1];console.log(r),(0,a.useEffect)((function(){(0,s.Hg)().then(f)}),[]);var p=(0,u.TH)(),m=r.map((function(t){return(0,o.jsx)("li",{className:i.item,children:(0,o.jsx)(c.rU,{className:i.link,to:"/movies/".concat(t.id),state:{from:p},children:(0,o.jsxs)("div",{className:i.container,children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),className:i.img,width:"50",alt:"",title:t.title}),t.title]})})},t.id)}));return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{className:i.list,children:m})})}}}]);
//# sourceMappingURL=77.81f16cb0.chunk.js.map