(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{189:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),i=a.n(r),c=a(11),o=a(192),s={source:[],error:[],recon:[],success:[]};var u=Object(c.c)({fetchUserLoginFailed:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN_FAILURE":return t.hasErrored;default:return e}},fetchUserLoginLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN_LOADING":return t.isLoading;default:return e}},fetchLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN_SUCCESS":return t.items;default:return e}},form:o.a}),h=a(61);var m=a(29),d=a(193),E=a(2),p=a(3),g=a(9),f=a(8),b=a(10),v=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).state={},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"LOGO"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"nav navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item "},l.a.createElement("a",{className:"nav-link",href:"#"},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"Blog")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link ",href:"#"},"Contact"))))),this.props.children,l.a.createElement("div",{className:"footer"},l.a.createElement("p",null)))}}]),t}(n.Component),k=function(e){function t(){return Object(E.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"goTo",value:function(e){this.props.history.replace("/".concat(e))}},{key:"login",value:function(){this.props.auth.login()}},{key:"logout",value:function(){this.props.auth.logout()}},{key:"componentDidMount",value:function(){var e=this.props.auth.renewSession;"true"===localStorage.getItem("isLoggedIn")&&e()}},{key:"render",value:function(){var e=this.props.auth.isAuthenticated;return l.a.createElement(v,null,!e()&&l.a.createElement("div",null,l.a.createElement("div",{className:"container jumbotron-jum jumbotron vertical-cente"},l.a.createElement("h2",{className:"text-center"},"Login"),l.a.createElement("div",{className:"form-actions"},l.a.createElement("button",{id:"qsLoginBtn",className:"btn btn-primary",onClick:this.login.bind(this)},"Oauth login")),l.a.createElement("br",null),l.a.createElement("h6",{className:"text-center"},"Or"),l.a.createElement("hr",null),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,l.a.createElement("b",null,"Username")),l.a.createElement("input",{type:"username",className:"form-control",id:"username",placeholder:"username",name:"username"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,l.a.createElement("b",null,"Password")),l.a.createElement("input",{type:"password",className:"form-control",id:"pwd",placeholder:"password",name:"pswd"})),l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{type:"submit ",className:"btn btn-primary"},"Login"))))))}}]),t}(n.Component),y=a(20);function N(e){return{type:"USER_LOGIN_LOADING",isLoading:e}}a(155).polyfill(),a(156);a(158);var w=function(e){function t(){var e;return Object(E.a)(this,t),(e=Object(g.a)(this,Object(f.a)(t).call(this))).apicalltest=e.apicalltest.bind(Object(y.a)(Object(y.a)(e))),e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"login",value:function(){this.props.auth.login()}},{key:"componentWillMount",value:function(){var e=this;this.apicalltest(),this.setState({profile:{}});var t=this.props.auth,a=t.userProfile,n=t.getProfile;a?(this.setState({profile:a}),console.log("userProfile:",a)):n(function(t,a){e.setState({profile:a}),console.log("profile:",a)})}},{key:"apicalltest",value:function(){var e=this.props.auth.getIdToken;console.log("getAccess Token:",e());this.props.dispatch(function(e,t,a){return function(n){n(N(!0)),fetch(e,{method:"POST",body:JSON.stringify(t),credentials:"same-origin",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}}).then(function(e){if(!e.ok)throw Error(e.statusText);return n(N(!1)),e}).then(function(e){return e.json()}).then(function(e){n({type:"USER_LOGIN_SUCCESS",items:e})}).catch(function(e){n({type:"USER_LOGIN_FAILURE",hasErrored:!0})})}}("http://localhost:5000/api/check",{},e()))}},{key:"componentWillReceiveProps",value:function(e){e.registerResponse&&console.log("response:",e.registerResponse)}},{key:"render",value:function(){var e=this.props.auth.isAuthenticated;this.state.profile;return l.a.createElement(v,null,e()&&l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"container jumbotron vertical-cente"},l.a.createElement("h6",null,l.a.createElement("b",null,"Let's make it as concrete a posssible and,as the saying goes,a saaS pricing page is worth a thousand words.")),l.a.createElement("br",null),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("table",{className:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,l.a.createElement("b",null,"Developer"),l.a.createElement("br",null),l.a.createElement("h4",{className:"h-color"},"$7/Month"),"Get started with Powerful ",l.a.createElement("br",null),"API and site monitoring"),l.a.createElement("th",null,l.a.createElement("b",null,"Developer"),l.a.createElement("br",null),l.a.createElement("h4",{className:"h-color"},"$7/Month"),"Get started with Powerful ",l.a.createElement("br",null),"API and site monitoring"),l.a.createElement("th",null,l.a.createElement("b",null,"Developer"),l.a.createElement("br",null),l.a.createElement("h4",{className:"h-color"}," $7/Month"),"Get started with Powerful ",l.a.createElement("br",null),"API and site monitoring"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"API checks")),l.a.createElement("td",null,"5"),l.a.createElement("td",null,"5"),l.a.createElement("td",null,"5")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Browser Checks")),l.a.createElement("td",null,"1"),l.a.createElement("td",null,"1"),l.a.createElement("td",null,"1")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Public DashBoard")),l.a.createElement("td",null,"1 min/10min"),l.a.createElement("td",null,"1 min/10min"),l.a.createElement("td",null,"1 min/10min")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Data center Locations")),l.a.createElement("td",null,"1"),l.a.createElement("td",null,"1"),l.a.createElement("td",null,"1")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"SSL Monitoring")),l.a.createElement("td",null,"x"),l.a.createElement("td",null,"x"),l.a.createElement("td",null,"x")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Email,Slack & webhooks")),l.a.createElement("td",null,"16"),l.a.createElement("td",null,"16"),l.a.createElement("td",null,"16")))))))))}}]),t}(n.Component);var O=Object(m.b)(function(e,t){return e.fetchLogin&&e.fetchLogin.Status?{registerResponse:e.fetchLogin}:{}})(w),j=a(63),S=a.n(j),T=function(e){function t(){return Object(E.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{position:"absolute",display:"flex",justifyContent:"center",height:"100vh",width:"100vw",top:0,bottom:0,left:0,right:0,backgroundColor:"white"}},l.a.createElement("img",{src:S.a,alt:"loading"}))}}]),t}(n.Component),A=a(64),I=a.n(A)()(),L=a(65),x=new(function(){function e(){Object(E.a)(this,e),this.auth0=new L.a.WebAuth({domain:"ashokreddypenamalli.auth0.com",clientID:"4hsR5-XRnqpz__5w1NjoIoJNRoHI4-lX",redirectUri:"http://localhost:3000/callback",responseType:"token id_token",scope:"openid profile"}),this.login=this.login.bind(this),this.logout=this.logout.bind(this),this.handleAuthentication=this.handleAuthentication.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.getAccessToken=this.getAccessToken.bind(this),this.getIdToken=this.getIdToken.bind(this),this.renewSession=this.renewSession.bind(this),this.getProfile=this.getProfile.bind(this),this.getExpiryDate=this.getExpiryDate.bind(this),this.scheduleRenewal()}return Object(p.a)(e,[{key:"login",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var e=this;this.auth0.parseHash(function(t,a){console.log("authResult:",a),a&&a.accessToken&&a.idToken?e.setSession(a):t&&(I.replace("/home"),console.log(t),alert("Error: ".concat(t.error,". Check the console for further details.")))})}},{key:"getAccessToken",value:function(){return this.accessToken}},{key:"getIdToken",value:function(){return this.idToken}},{key:"setSession",value:function(e){localStorage.setItem("isLoggedIn","true");var t=1e3*e.expiresIn+(new Date).getTime();this.accessToken=e.accessToken,this.idToken=e.idToken,this.expiresAt=t,this.scheduleRenewal(),I.replace("/home")}},{key:"renewSession",value:function(){var e=this;this.auth0.checkSession({},function(t,a){a&&a.accessToken&&a.idToken?e.setSession(a):t&&(e.logout(),console.log(t),alert("Could not get a new token (".concat(t.error,": ").concat(t.error_description,").")))})}},{key:"getProfile",value:function(e){var t=this;this.accessToken&&this.auth0.client.userInfo(this.accessToken,function(a,n){n&&(t.userProfile=n),e(a,n)})}},{key:"logout",value:function(){this.accessToken=null,this.idToken=null,this.expiresAt=0,this.userProfile=null,clearTimeout(this.tokenRenewalTimeout),localStorage.removeItem("isLoggedIn"),this.auth0.logout(),I.replace("/home")}},{key:"isAuthenticated",value:function(){var e=this.expiresAt;return(new Date).getTime()<e}},{key:"scheduleRenewal",value:function(){var e=this,t=this.expiresAt-Date.now();t>0&&(this.tokenRenewalTimeout=setTimeout(function(){e.renewSession()},t))}},{key:"getExpiryDate",value:function(){return JSON.stringify(new Date(this.expiresAt))}}]),e}()),R=function(){return l.a.createElement(d.b,{history:I},l.a.createElement("div",null,l.a.createElement(d.a,{path:"/",render:function(e){return l.a.createElement(k,Object.assign({auth:x},e))}}),l.a.createElement(d.a,{path:"/home",render:function(e){return l.a.createElement(O,Object.assign({auth:x},e))}}),l.a.createElement(d.a,{path:"/callback",render:function(e){return function(e){var t=e.location;/access_token|id_token|error/.test(t.hash)&&x.handleAuthentication()}(e),l.a.createElement(T,e)}})))},P=Object(c.d)(u,Object(c.a)(h.a));i.a.render(l.a.createElement(m.a,{store:P},l.a.createElement(R,null)),document.getElementById("root"))},63:function(e,t,a){e.exports=a.p+"static/media/loading.c5590569.svg"},67:function(e,t,a){e.exports=a(189)}},[[67,1,2]]]);
//# sourceMappingURL=main.01e9ea4e.chunk.js.map