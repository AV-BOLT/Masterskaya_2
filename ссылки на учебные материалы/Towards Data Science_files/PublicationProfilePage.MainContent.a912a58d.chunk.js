(self.webpackChunklite=self.webpackChunklite||[]).push([[2614],{75412:(e,n,i)=>{"use strict";i.d(n,{A:()=>l});var t=i(23564),a=i(45697),o=i(64718);function l(e){var n=e.children,i=e.query,a=(0,t._T)(e,["children","query"]),l=(0,o.a)(i,a);return l?n(l):null}l.propTypes={client:a.object,children:a.func.isRequired,fetchPolicy:a.string,notifyOnNetworkStatusChange:a.bool,onCompleted:a.func,onError:a.func,pollInterval:a.number,query:a.object.isRequired,variables:a.object,ssr:a.bool,partialRefetch:a.bool,returnPartialData:a.bool}},69100:(e,n,i)=>{var t=i(99489),a=i(57067);function o(n,i,l){return a()?e.exports=o=Reflect.construct:e.exports=o=function(e,n,i){var a=[null];a.push.apply(a,n);var o=new(Function.bind.apply(e,a));return i&&t(o,i.prototype),o},o.apply(null,arguments)}e.exports=o},70430:e=>{e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},57067:e=>{e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},65957:(e,n,i)=>{var t=i(29754),a=i(99489),o=i(70430),l=i(69100);function r(n){var i="function"==typeof Map?new Map:void 0;return e.exports=r=function(e){if(null===e||!o(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==i){if(i.has(e))return i.get(e);i.set(e,n)}function n(){return l(e,arguments,t(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,e)},r(n)}e.exports=r},38125:(e,n,i)=>{var t=i(14259);e.exports=function(e){return null!=e&&e.length?t(e,0,-1):[]}},50308:e=>{e.exports=function(){}},68254:e=>{"use strict";var n=Math.floor(1099511627776*Math.random()).toString(16),i=new RegExp('"@__(F|R|D|M|S|U)-'+n+'-(\\d+)__@"',"g"),t=/\{\s*\[native code\]\s*\}/g,a=/function.*?\(/,o=/.*?=>.*?/,l=/[<>\/\u2028\u2029]/g,r=["*","async"],u={"<":"\\u003C",">":"\\u003E","/":"\\u002F","\u2028":"\\u2028","\u2029":"\\u2029"};function c(e){return u[e]}e.exports=function e(u,d){d||(d={}),"number"!=typeof d&&"string"!=typeof d||(d={space:d});var s,m=[],f=[],p=[],v=[],k=[],g=[];return d.ignoreFunction&&"function"==typeof u&&(u=void 0),void 0===u?String(u):"string"!=typeof(s=d.isJSON&&!d.space?JSON.stringify(u):JSON.stringify(u,d.isJSON?null:function(e,i){if(d.ignoreFunction&&function(e){var n=[];for(var i in e)"function"==typeof e[i]&&n.push(i);for(var t=0;t<n.length;t++)delete e[n[t]]}(i),!i&&void 0!==i)return i;var t=this[e],a=typeof t;if("object"===a){if(t instanceof RegExp)return"@__R-"+n+"-"+(f.push(t)-1)+"__@";if(t instanceof Date)return"@__D-"+n+"-"+(p.push(t)-1)+"__@";if(t instanceof Map)return"@__M-"+n+"-"+(v.push(t)-1)+"__@";if(t instanceof Set)return"@__S-"+n+"-"+(k.push(t)-1)+"__@"}return"function"===a?"@__F-"+n+"-"+(m.push(t)-1)+"__@":"undefined"===a?"@__U-"+n+"-"+(g.push(t)-1)+"__@":i},d.space))?String(s):(!0!==d.unsafe&&(s=s.replace(l,c)),0===m.length&&0===f.length&&0===p.length&&0===v.length&&0===k.length&&0===g.length?s:s.replace(i,(function(n,i,l){return"D"===i?'new Date("'+p[l].toISOString()+'")':"R"===i?"new RegExp("+e(f[l].source)+', "'+f[l].flags+'")':"M"===i?"new Map("+e(Array.from(v[l].entries()),d)+")":"S"===i?"new Set("+e(Array.from(k[l].values()),d)+")":"U"===i?"undefined":function(e){var n=e.toString();if(t.test(n))throw new TypeError("Serializing native function: "+e.name);if(a.test(n))return n;if(o.test(n))return n;var i=n.indexOf("("),l=n.substr(0,i).trim().split(" ").filter((function(e){return e.length>0}));return l.filter((function(e){return-1===r.indexOf(e)})).length>0?(l.indexOf("async")>-1?"async ":"")+"function"+(l.join("").indexOf("*")>-1?"*":"")+n.substr(i):n}(m[l])})))}},23795:(e,n,i)=>{"use strict";i.r(n),i.d(n,{MainContent:()=>R,useLoader:()=>O});var t=i(64718),a=i(67294),o=i(32563),l=i(92030),r=i(1630),u=i(26829),c=i(43487),d=i(38121),s=i(65850),m=i(94931),f=i(4081),p=i(63038),v=i.n(p),k=i(1383),g=function(e){var n=e.collectionName,i=a.useState(!0),t=v()(i,2),o=t[0],l=t[1],r=a.useCallback((function(){return l(!1)}),[]),u="You’ve unsubscribed from ".concat(n,"’s emails but will still see their stories across Medium.");return a.createElement(k.Q,{isVisible:o,hide:r,titleText:"You’re unsubscribed",onConfirm:r,confirmText:"OK",showCancelButton:!1,noPortal:!0,isDestructiveAction:!1},u)},y=i(77355),b=i(66411),h=i(77280),N=function(e){var n=e.collection,i=e.fetchMore,t="unsubscribe-newsletter"===(0,h.YF)();return(0,d.g)(n),a.createElement(y.x,{backgroundColor:"BACKGROUND",display:"flex",flexDirection:"column",minHeight:"100vh"},a.createElement(b.cW,{source:{name:"collection_home"}},a.createElement(f.n,{collection:n}),a.createElement(s.U,{publisher:n}),a.createElement(m.I,{publisher:n,fetchMore:i})),t&&a.createElement(g,{collectionName:n.name}))},S=i(319),_=i.n(S),w=i(22223),F=i(2316),C=i(46588),E=i(30423),D={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublicationHomepage_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherHeader_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherHomepagePosts_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"usePublicationAnalytics_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionMetadata_collection"}}]}}].concat(_()(w.L.definitions),_()(F.Yz.definitions),_()(C.R.definitions),_()(E.u.definitions))},P={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PublicationHomepageQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"collectionId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"homepagePostsLimit"}},type:{kind:"NamedType",name:{kind:"Name",value:"PaginationLimit"}},defaultValue:{kind:"IntValue",value:"25"}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"homepagePostsFrom"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"includeDistributedResponses"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}},defaultValue:{kind:"BooleanValue",value:!1}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"collection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"collectionId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublicationHomepage_collection"}}]}}]}}].concat(_()(D.definitions))},x=function(e){var n,i,o,c=e.collectionId,d=(0,t.a)(P,{variables:{collectionId:c,homepagePostsLimit:10,homepagePostsFrom:null}}),s=d.loading,m=d.error,f=d.data,p=d.fetchMore,v=null==f?void 0:f.collection;if(m&&!v)return a.createElement(l.C,{error:m});if(s)return a.createElement(u.h,null);if(!v)return a.createElement(r.$,null);var k=null==v||null===(n=v.homepagePostsConnection)||void 0===n||null===(i=n.pagingInfo)||void 0===i?void 0:i.next;if(k){var g=k.limit,y=k.from;o=function(){return p({variables:{homepagePostsFrom:y,homepagePostsLimit:g}})}}return a.createElement(N,{collection:v,fetchMore:o})},V=i(30858),I={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PublicationProfileQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"domainOrSlug"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"collection"},name:{kind:"Name",value:"collectionByDomainOrSlug"},arguments:[{kind:"Argument",name:{kind:"Name",value:"domainOrSlug"},value:{kind:"Variable",name:{kind:"Name",value:"domainOrSlug"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublicationCanonicalizer_collection"}}]}}]}}]}}].concat(_()(V.B.definitions))},O=function(e){var n=e.collectionSlug,i=(0,c.v9)((function(e){return e.navigation.hostname})),a=(0,t.a)(I,{variables:{domainOrSlug:n||i}});return{loading:a.loading,publicationProfileQueryResult:a}},R=function(e){var n=e.loading,i=e.publicationProfileQueryResult,t=i.error,c=i.data,d=null==c?void 0:c.collection;return t?a.createElement(l.C,{error:t}):n?a.createElement(u.h,null):null!=d&&d.id?a.createElement(o.A,{collection:d},a.createElement(x,{collectionId:d.id})):a.createElement(r.$,null)}},60672:(e,n,i)=>{"use strict";i.d(n,{e:()=>m});var t=i(67294),a=i(27517),o=i(18702),l=i(25550),r=i(6443),u=i(98067),c=i(77280),d=i(43487),s=i(55765),m=function(e){var n=e.data,i=void 0===n?{}:n,m=e.isBlocked,f=void 0!==m&&m,p=e.loading,v=e.show,k=i.canonicalUrl,g=i.collectionViewerEdge,y=i.creatorViewerEdge,b=i.meteringInfo,h=i.pageType,N=i.post,S=i.profileName,_=i.profilePhoto,w=i.profileUsername,F=i.topicViewerEdge,C=(0,a.I0)(),E=(0,l.r)(),D=E.loading,P=E.viewerId,x=(0,s.P)(),V=x.loading,I=x.inAppBrowser,O=(0,r.H)(),R=O.loading,T=O.value,A=(0,d.v9)((function(e){return e.navigation.referrer})),M=(0,c.PM)();(0,t.useEffect)((function(){if(!(p||R||D||!P||V)){var e=(0,o.RD)({collectionViewerEdge:g,creatorViewerEdge:y,currentUserId:P,inAppBrowser:I,meteringInfo:b,page_type:h,post:N,profile_name:S,profile_photo:_,profile_username:w,referrer:A,referrerSource:M,viewer:T,topicViewerEdge:F});return k&&(e.data.$canonical_url=k),(0,o.Pu)(e),C((0,u.aj)(e)),v&&(C((0,u.QZ)()),C((0,u.Dl)(f))),function(){C((0,u.Uo)())}}}),[p,R,D,P,V])}},38121:(e,n,i)=>{"use strict";i.d(n,{g:()=>u});var t=i(67294),a=i(60672),o=i(8851),l=i(39727),r=i(18627),u=function(e){var n=(0,r.Av)(),i=e.id,u=e.googleAnalyticsId,c=u?[u]:null;(0,o.t)({ids:c});var d=(0,l.g)(e),s=d.viewerEdge,m=d.loading;(0,t.useEffect)((function(){n.event("collection.viewed",{collectionId:i})}),[]),(0,a.e)({data:{collectionViewerEdge:s},loading:m,show:!1})}},46588:(e,n,i)=>{"use strict";i.d(n,{R:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"usePublicationAnalytics_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"googleAnalyticsId"}}]}}]}},80350:(e,n,i)=>{"use strict";i.d(n,{t:()=>c,e:()=>d});var t=i(67294),a=i(68427),o=i(84739),l=i(93310),r=i(87691),u=i(21372),c=function(e){var n,i,t=null!==(n="Collection"===e.__typename?e.subscriberCount:null===(i=e.socialStats)||void 0===i?void 0:i.followerCount)&&void 0!==n?n:0;return{followerCount:t,isFollowerCountVisible:t>0}},d=function(e){var n=e.disableLink,i=void 0!==n&&n,d=e.scale,s=void 0===d?"L":d,m=e.publisher,f=e.color,p=e.linkStyle,v=void 0===p?"SUBTLE":p,k=e.inline,g=e.showWhenZero,y=(0,a.B)(),b=(0,o.I)(),h=c(m),N=h.followerCount,S=h.isFollowerCountVisible;if(!g&&!S)return null;var _="".concat((0,u.pY)(N)," Follower").concat(1===N?"":"s");return t.createElement(r.F,{playwrightClassName:"pw-follower-count",tag:"span",scale:s,color:f},N>0&&!i?t.createElement(l.r,{href:"".concat("Collection"===m.__typename?y(m):b(m),"/followers"),linkStyle:v,inline:k},_):_)}},14337:(e,n,i)=>{"use strict";i.d(n,{v:()=>r});var t=i(319),a=i.n(t),o=i(84683),l=i(27048),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherAvatar_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionAvatar_collection"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}}]}}]}}].concat(a()(o.d.definitions),a()(l.W.definitions))}},30826:(e,n,i)=>{"use strict";i.d(n,{G:()=>l});var t=i(67294),a=i(71652),o=i(17193),l=function(e){var n=e.link,i=void 0!==n&&n,l=e.scale,r=void 0===l?"M":l,u=e.publisher;switch(u.__typename){case"User":return t.createElement(o.Yt,{link:i,scale:r,user:u});case"Collection":return t.createElement(a.v,{link:i,size:o.wC[r],collection:u});default:return null}}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/PublicationProfilePage.MainContent.a912a58d.chunk.js.map