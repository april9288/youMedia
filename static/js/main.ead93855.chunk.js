(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{232:function(e,t,n){},248:function(e,t,n){e.exports=n(580)},253:function(e,t,n){},278:function(e,t){},280:function(e,t){},311:function(e,t){},312:function(e,t){},360:function(e,t){},362:function(e,t){},382:function(e,t){},580:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(82),i=n.n(o),c=(n(253),n(59)),s=n(60),l=n(63),u=n(61),d=n(64),m=n(102),p=n(62),f=n.n(p),h=n(236),E=n.n(h),g=n(45),b=n.n(g),y=n(238),v=n.n(y),w=n(50),O=n(20),j=n(237),k=n.n(j),S=n(26),V=n(247),C=n(139),N=n.n(C),R=function(e){return function(t){t({type:"REQUEST_VIDEOS_PENDING"});var n=e||"2018 javascript trends";N()(n,{maxResults:6,key:"AIzaSyDtccvVnz4_jP_E3u9KPOITfGWk29LyV44"}).then(function(e){return t({type:"REQUEST_VIDEOS_SUCCESS",payload:e})}).catch(function(e){return t({type:"REQUEST_VIDEOS_FAILED",payload:!0})})}},I=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).enter=function(e){"Enter"===e.key&&n.props.onrequestVideosAction(n.props.searchField)},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.onsearchFieldAction;return r.a.createElement("div",{className:t.root},r.a.createElement(f.a,{position:"static"},r.a.createElement(E.a,null,r.a.createElement(b.a,{className:t.title,variant:"title",noWrap:!0},"YouMedia"),r.a.createElement("div",{className:t.grow}),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(k.a,null)),r.a.createElement(v.a,{onChange:n,onKeyPress:this.enter,placeholder:"search videos",disableUnderline:!0,classes:{root:t.inputRoot,input:t.inputInput}})))))}}]),t}(r.a.Component),_=Object(O.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},title:Object(m.a)({color:"white",display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(m.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(w.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(w.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(m.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}})(I),A=Object(S.b)(function(e){return{searchField:e.searchFieldReducer.searchField}},function(e){return{onsearchFieldAction:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onrequestVideosAction:function(t){return e(R(t))}}})(_),P=n(239),x=n.n(P),D=Object(O.withStyles)({root:{flexGrow:1},colorPrimary:{backgroundColor:"#FC2C04"},barColorPrimary:{backgroundColor:"#eda384"}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(x.a,{classes:{colorPrimary:t.colorPrimary,barColorPrimary:t.barColorPrimary}}))}),F=n(98),T=n.n(F),L=n(99),U=n.n(L),W=n(240),q=n.n(W),Q=n(101),B=n.n(Q),G=n(100),z=n.n(G),M=n(137),K=n.n(M),H=Object(O.withStyles)({card:{maxWidth:500},media:{objectFit:"cover"}})(function(e){var t=e.classes,n=e.selectedVideo,a=n.id,o="https://www.youtube.com/embed/".concat(a);return r.a.createElement(T.a,{className:"mainVideoContainer"},r.a.createElement(U.a,{target:"_blank",component:"a",href:n.link},r.a.createElement(z.a,{component:"iframe",alt:n.title,className:t.media,height:"400",src:o,title:n.title}),r.a.createElement(B.a,null,r.a.createElement(b.a,{gutterBottom:!0,variant:"title",align:"left"},n.title),r.a.createElement(b.a,{variant:"body1",align:"left"},n.description))),r.a.createElement(q.a,null,r.a.createElement(K.a,{size:"small",color:"primary",target:"_blank",component:"a",href:n.link},"Learn More")))}),J=Object(S.b)(function(e){return{selectedVideo:e.requestVideosReducer.selectedVideo}})(H),Y=n(242),$=n.n(Y),X=n(241),Z=n.n(X),ee=Object(O.withStyles)({card:{width:350},media:{width:120,height:90}})(function(e){var t=e.classes,n=e.youtubeVideo,a=e.onrequestVideosActionfromRelated,o=n.title.substr(0,50),i=n.description.substr(0,100),c=n.thumbnails.default.url;return r.a.createElement(T.a,{className:t.card},r.a.createElement(U.a,{onClick:function(){return a(n,o)}},r.a.createElement(z.a,{className:t.media,component:"img",src:c,title:o,alt:o}),r.a.createElement(B.a,null,r.a.createElement(b.a,{gutterBottom:!0,variant:"subheading",align:"left"},o),r.a.createElement(b.a,{variant:"body1",align:"left"},i))))}),te=Object(S.b)(void 0,function(e){return{onrequestVideosActionfromRelated:function(t,n){return e(function(e,t){return function(n){n({type:"REQUEST_VIDEOS_PENDING"}),N()(t,{maxResults:6,key:"AIzaSyDtccvVnz4_jP_E3u9KPOITfGWk29LyV44"}).then(function(t){var a=[],r=t;r=r.slice(1,5),a.push.apply(a,[e].concat(Object(V.a)(r))),n({type:"REQUEST_VIDEOS_SUCCESS",payload:a})}).catch(function(e){return n({type:"REQUEST_VIDEOS_FAILED",payload:!0})})}}(t,n))}}})(ee),ne=n(243),ae=n.n(ne),re=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.relatedVideos.map(function(e){return r.a.createElement(Z.a,{key:e.id},r.a.createElement(te,{key:e.id,youtubeVideo:e}))});return r.a.createElement("div",{className:t.root},r.a.createElement($.a,{subheader:r.a.createElement(ae.a,{component:"div",disableSticky:!0},"Related Videos")},n))}}]),t}(r.a.Component),oe=Object(O.withStyles)(function(e){return{root:{width:"100%",maxWidth:350,backgroundColor:e.palette.background.paper}}})(re),ie=Object(S.b)(function(e){return{relatedVideos:e.requestVideosReducer.relatedVideos}})(oe),ce=(n(232),n(33)),se=n.n(ce),le=Object(O.withStyles)(function(e){return{root:{width:"100%",textAlign:"center"},footerAppBar:{background:"#355c7d"},footerContainer:{padding:"2rem 0 1rem 0",fontWeight:600},title:{fontSize:"1rem",color:"white",margin:"0.5rem 0"}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(f.a,{position:"static",className:t.footerAppBar},r.a.createElement(se.a,{container:!0,className:t.footerContainer},r.a.createElement(se.a,{item:!0,xs:12,sm:12},r.a.createElement("p",{className:t.title},"Wrong Keyword! Please try again!")))))}),ue=n(244),de=n.n(ue),me=Object(O.withStyles)(function(e){return{root:{width:"100%",textAlign:"center"},footerAppBar:{background:"#355c7d"},footerContainer:{padding:"2rem 0 1rem 0",fontWeight:600},title:{fontSize:"1rem",color:"white",margin:"0.5rem 0"}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(f.a,{position:"static",className:t.footerAppBar},r.a.createElement(se.a,{container:!0,className:t.footerContainer},r.a.createElement(se.a,{item:!0,xs:12,sm:12},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/april9288/",sytle:{textDecoration:"none"}},r.a.createElement("i",{className:"fab fa-github-alt footerIcons"})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/jongho-kim-b05618170/",sytle:{textDecoration:"none"}},r.a.createElement("i",{className:"fab fa-linkedin footerIcons"}))),r.a.createElement(de.a,null),r.a.createElement(se.a,{item:!0,xs:12,sm:12},r.a.createElement("p",{className:t.title},"\xa9 2018 James Jongho Kim All Rights Reserved")))))}),pe=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onrequestVideosAction()}},{key:"render",value:function(){var e=this.props,t=e.isPending,n=e.error;return r.a.createElement("div",null,r.a.createElement(A,null),t?r.a.createElement(D,null):n?r.a.createElement(le,null):r.a.createElement("section",null,r.a.createElement(se.a,{container:!0,justify:"center",style:{width:"99%"}},r.a.createElement(se.a,{item:!0,xs:12,sm:7,style:{display:"flex",justifyContent:"center",alignItems:"flex-start",margin:"3rem 0"}},r.a.createElement(J,null)),r.a.createElement(se.a,{item:!0,xs:12,sm:4,style:{display:"flex",justifyContent:"center",margin:"3rem 0"}},r.a.createElement(ie,null))),r.a.createElement(me,null)))}}]),t}(a.Component),fe=Object(S.b)(function(e){return{isPending:e.requestVideosReducer.isPending,error:e.requestVideosReducer.error}},function(e){return{onrequestVideosAction:function(t){return e(R(t))}}})(pe),he=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ee(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var ge=n(65),be=n(245),ye=n(246),ve={searchField:""},we={selectedVideo:"",relatedVideos:"",isPending:!0,error:!1},Oe=Object(O.createMuiTheme)({palette:{primary:{main:"#f67280"},secondary:{main:"#355c7d"},typography:{useNextVariants:!0}}}),je=(Object(ye.createLogger)(),[be.a]);var ke=Object(ge.c)({searchFieldReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestVideosReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_VIDEOS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_VIDEOS_SUCCESS":return Object.assign({},e,{selectedVideo:t.payload[0],relatedVideos:t.payload.slice(1,5),isPending:!1});case"REQUEST_VIDEOS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),Se=Object(ge.d)(ke,ge.a.apply(void 0,je));i.a.render(r.a.createElement(O.MuiThemeProvider,{theme:Oe},r.a.createElement(S.a,{store:Se},r.a.createElement(fe,null))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/youMedia",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/youMedia","/service-worker.js");he?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ee(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Ee(e)})}}()}},[[248,2,1]]]);
//# sourceMappingURL=main.ead93855.chunk.js.map