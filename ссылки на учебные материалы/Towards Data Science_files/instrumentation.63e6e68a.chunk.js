(self.webpackChunklite=self.webpackChunklite||[]).push([[118],{79745:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>y});var t=r(67294),o=r(25735),u=r(6443),i=r(2998),c=r(92661),s=r(50996),a=r(54712),f=r(43487),d=r(85663),l=r(62896),v=r(63038),p=r.n(v),h=r(59713),b=r.n(h),g=r(6402),_=r(98914);function m(){for(var e=new _.y,n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];if(0===r.length)return e;var o=r.map((function(){return[]}));return r.forEach((function(n,r){n.observe((function(n){o[r].push(n),o.every((function(e){return e.length>0}))&&e.set(o.map((function(e){return e.shift()})))}))})),e}var w=function(e){return function(n){return b()({},e,n)}};const y=function(){var e,n,r,v,h,b,_,y,E,A,O,T,k,C;return(0,t.useEffect)((function(){var e=m(d.sY,d.wZ,d.vY).map((function(e){var n=p()(e,3),r=n[0],t=n[1],o=n[2];return{responseEndToLCP:new d.jb(r.response.end,t.end),responseEndToFCP:new d.jb(r.response.end,o.end)}})),n=m(d.sY,d.qH.map(w("fid")),d.vY.map(w("fcp")),d.wZ.map(w("lcp")),e);d.cA.observe((function(e){e||n.observe((function(e){var n=e.reduce((function(e,n){return Object.assign(e,n)}),{}),r=Object.keys(n).reduce((function(e,r){var t=n[r].duration;return e[r]=t%1==0?t:Number(t.toFixed(1)),e}),{}),t=document.children[0],o={html:null==t?void 0:t.innerHTML.length,redux:JSON.stringify(window.__PRELOADED_STATE__).length,apollo:JSON.stringify(window.__APOLLO_STATE__).length};g.k.debug({perf:r,sizes:o},"client hydrated")}))})),d.Df.observe((function(e){return g.k.debug({resources:e},"client resource sizes")}))}),[]),e=(0,f.v9)((function(e){return e.client.viewerIsBot})),n=(0,u.H)(),r=n.loading,v=n.error,h=!!n.value,b=(0,a.xg)(),_=(0,a.f$)(),y=(0,f.b$)((function(e){return e.cache.cacheStatus})),E=(0,f.v9)((function(e){return e.cache.inDisabledExperiment})),A=(0,o.d)("disable_edge_cache"),O=A.loading,T=A.value,k=(0,c.dh)(),C=(0,i.Av)(),t.useEffect((function(){var n;if(!(!C||e||r||v||O)){var t=k(window.location.pathname),o=null!==(n=null==t?void 0:t.route.metricName)&&void 0!==n?n:"unidentified",u=(0,l.ic)(navigator.userAgent),i=[];b?i.push("edge_cache_enabled"):_&&i.push("edge_cache_control"),y===s.K2.Hit&&i.push("edge_cache_hit"),E&&i.push("edgy_disable_edge_cache"),!O&&T&&i.push("deviant_disable_edge_cache");var c=i.join(","),a={loggedIn:h,mobileOrTablet:u,experiment:c,route:o};d.sY.observe((function(e){C.reportRender(a,e)})),d.vY.observe((function(e){C.reportFirstContentfulPaint(a,e)})),d.wZ.observe((function(e){C.reportLargestContentfulPaint(a,e)})),d.yI.observe((function(e){C.reportCumulativeLayoutShift(a,e)})),d.cA.observe((function(e){e&&C.reportUnsupportedPerfObserver(a)})),d.qH.observe((function(e){C.reportInput(a,e)}))}}),[r,v,h,e,E,O,T]),null}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/instrumentation.63e6e68a.chunk.js.map