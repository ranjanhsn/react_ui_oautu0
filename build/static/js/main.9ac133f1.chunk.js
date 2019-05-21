(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),o=a.n(r),i=a(10),c=a(166),s={source:[],error:[],recon:[],success:[]};var u=Object(i.c)({fetchUserLoginFailed:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN_FAILURE":return t.hasErrored;default:return e}},fetchUserLoginLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN_LOADING":return t.isLoading;default:return e}},fetchLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN_SUCCESS":return t.items;default:return e}},form:c.a}),h=a(54);var m=a(14),d=a(167),p=a(1),E=a(2),g=a(8),f=a(7),b=a(9);function v(e){return{type:"USER_LOGIN_LOADING",isLoading:e}}a(147).polyfill(),a(149);var k=a(29),y=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).auth0=new k.a.WebAuth({domain:"ashokreddypenamalli.auth0.com",clientID:"4hsR5-XRnqpz__5w1NjoIoJNRoHI4-lX",redirectUri:"http://localhost:3000/callback",responseType:"token id_token",scope:"openid profile"}),a.state={},a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"logout",value:function(){this.accessToken=null,this.idToken=null,this.expiresAt=0,this.userProfile=null,clearTimeout(this.tokenRenewalTimeout),localStorage.removeItem("isLoggedIn"),this.auth0.logout()}},{key:"render",value:function(){console.log("Hello:",localStorage.getItem("isLoggedIn"));var e=localStorage.getItem("isLoggedIn");return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"LOGO"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"nav navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item "},l.a.createElement("a",{className:"nav-link",href:"#"},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"Blog")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link ",href:"#"},"Contact")),e&&l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",onClick:this.logout.bind(this)},"logout"))))),this.props.children,l.a.createElement("div",{className:"footer"},l.a.createElement("p",null)))}}]),t}(n.Component);var N=Object(m.b)(function(e,t){return e.fetchLogin&&e.fetchLogin.Status?{registerResponse:e.fetchLogin}:{}})(y),w=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(E.a)(t,[{key:"goTo",value:function(e){this.props.history.replace("/".concat(e))}},{key:"login",value:function(){this.props.auth.login()}},{key:"logout",value:function(){this.props.auth.logout()}},{key:"componentDidMount",value:function(){var e=this.props.auth.renewSession;"true"===localStorage.getItem("isLoggedIn")&&e()}},{key:"render",value:function(){var e=this.props.auth.isAuthenticated;return l.a.createElement(N,null,!e()&&l.a.createElement("div",null,l.a.createElement("div",{className:"container jumbotron-jum jumbotron vertical-cente"},l.a.createElement("h2",{className:"text-center"},"Login"),l.a.createElement("div",{className:"form-actions"},l.a.createElement("button",{id:"qsLoginBtn",className:"btn btn-primary",onClick:this.login.bind(this)},"Oauth login")),l.a.createElement("br",null),l.a.createElement("h6",{className:"text-center"},"Or"),l.a.createElement("hr",null),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,l.a.createElement("b",null,"Username")),l.a.createElement("input",{type:"username",className:"form-control",id:"username",placeholder:"username",name:"username"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,l.a.createElement("b",null,"Password")),l.a.createElement("input",{type:"password",className:"form-control",id:"pwd",placeholder:"password",name:"pswd"})),l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{type:"submit ",className:"btn btn-primary"},"Login"))))))}}]),t}(n.Component),O=a(20),j=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(g.a)(this,Object(f.a)(t).call(this))).apicalltest=e.apicalltest.bind(Object(O.a)(Object(O.a)(e))),e}return Object(b.a)(t,e),Object(E.a)(t,[{key:"login",value:function(){this.props.auth.login()}},{key:"componentWillMount",value:function(){var e=this;this.apicalltest(),this.setState({profile:{}});var t=this.props.auth,a=t.userProfile,n=t.getProfile;a?(this.setState({profile:a}),console.log("userProfile:",a)):n(function(t,a){e.setState({profile:a}),console.log("profile:",a)})}},{key:"apicalltest",value:function(){var e=this.props.auth.getIdToken;console.log("getAccess Token:",e());this.props.dispatch(function(e,t,a){return function(n){n(v(!0)),fetch(e,{method:"POST",body:JSON.stringify(t),credentials:"same-origin",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}}).then(function(e){if(!e.ok)throw Error(e.statusText);return n(v(!1)),e}).then(function(e){return e.json()}).then(function(e){n({type:"USER_LOGIN_SUCCESS",items:e})}).catch(function(e){n({type:"USER_LOGIN_FAILURE",hasErrored:!0})})}}("http://localhost:5000/api/check",{},e()))}},{key:"componentWillReceiveProps",value:function(e){e.registerResponse&&console.log("response:",e.registerResponse)}},{key:"render",value:function(){var e=this.props.auth.isAuthenticated;this.state.profile;return l.a.createElement(N,null,e()&&l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"container jumbotron vertical-cente"},l.a.createElement("h6",null,l.a.createElement("b",null,"Let's make it as concrete a posssible and,as the saying goes,a saaS pricing page is worth a thousand words.")),l.a.createElement("br",null),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("table",{className:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,l.a.createElement("b",null,"Developer"),l.a.createElement("br",null),l.a.createElement("h4",{className:"h-color"},"$7/Month"),"Get started with Powerful ",l.a.createElement("br",null),"API and site monitoring"),l.a.createElement("th",null,l.a.createElement("b",null,"Developer"),l.a.createElement("br",null),l.a.createElement("h4",{className:"h-color"},"$7/Month"),"Get started with Powerful ",l.a.createElement("br",null),"API and site monitoring"),l.a.createElement("th",null,l.a.createElement("b",null,"Developer"),l.a.createElement("br",null),l.a.createElement("h4",{className:"h-color"}," $7/Month"),"Get started with Powerful ",l.a.createElement("br",null),"API and site monitoring"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"API checks")),l.a.createElement("td",null,"5"),l.a.createElement("td",null,"5"),l.a.createElement("td",null,"5")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Browser Checks")),l.a.createElement("td",null,"1"),l.a.createElement("td",null,"1"),l.a.createElement("td",null,"1")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Public DashBoard")),l.a.createElement("td",null,"1 min/10min"),l.a.createElement("td",null,"1 min/10min"),l.a.createElement("td",null,"1 min/10min")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Data center Locations")),l.a.createElement("td",null,"1"),l.a.createElement("td",null,"1"),l.a.createElement("td",null,"1")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"SSL Monitoring")),l.a.createElement("td",null,"x"),l.a.createElement("td",null,"x"),l.a.createElement("td",null,"x")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Email,Slack & webhooks")),l.a.createElement("td",null,"16"),l.a.createElement("td",null,"16"),l.a.createElement("td",null,"16")))))))))}}]),t}(n.Component);var I=Object(m.b)(function(e,t){return e.fetchLogin&&e.fetchLogin.Status?{registerResponse:e.fetchLogin}:{}})(j),S=a(56),T=a.n(S),L=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{position:"absolute",display:"flex",justifyContent:"center",height:"100vh",width:"100vw",top:0,bottom:0,left:0,right:0,backgroundColor:"white"}},l.a.createElement("img",{src:T.a,alt:"loading"}))}}]),t}(n.Component),A=a(57),R=a.n(A)()(),x=new(function(){function e(){Object(p.a)(this,e),this.auth0=new k.a.WebAuth({domain:"ashokreddypenamalli.auth0.com",clientID:"4hsR5-XRnqpz__5w1NjoIoJNRoHI4-lX",redirectUri:"http://localhost:3000/callback",responseType:"token id_token",scope:"openid profile"}),this.login=this.login.bind(this),this.logout=this.logout.bind(this),this.handleAuthentication=this.handleAuthentication.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.getAccessToken=this.getAccessToken.bind(this),this.getIdToken=this.getIdToken.bind(this),this.renewSession=this.renewSession.bind(this),this.getProfile=this.getProfile.bind(this),this.getExpiryDate=this.getExpiryDate.bind(this),this.scheduleRenewal()}return Object(E.a)(e,[{key:"login",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var e=this;this.auth0.parseHash(function(t,a){console.log("authResult:",a),a&&a.accessToken&&a.idToken?e.setSession(a):t&&(R.replace("/home"),console.log(t),alert("Error: ".concat(t.error,". Check the console for further details.")))})}},{key:"getAccessToken",value:function(){return this.accessToken}},{key:"getIdToken",value:function(){return this.idToken}},{key:"setSession",value:function(e){localStorage.setItem("isLoggedIn","true");var t=1e3*e.expiresIn+(new Date).getTime();this.accessToken=e.accessToken,this.idToken=e.idToken,this.expiresAt=t,this.scheduleRenewal(),R.replace("/home")}},{key:"renewSession",value:function(){var e=this;this.auth0.checkSession({},function(t,a){a&&a.accessToken&&a.idToken?e.setSession(a):t&&(e.logout(),console.log(t),alert("Could not get a new token (".concat(t.error,": ").concat(t.error_description,").")))})}},{key:"getProfile",value:function(e){var t=this;this.accessToken&&this.auth0.client.userInfo(this.accessToken,function(a,n){n&&(t.userProfile=n),e(a,n)})}},{key:"logout",value:function(){this.accessToken=null,this.idToken=null,this.expiresAt=0,this.userProfile=null,clearTimeout(this.tokenRenewalTimeout),localStorage.removeItem("isLoggedIn"),this.auth0.logout(),R.replace("/home")}},{key:"isAuthenticated",value:function(){var e=this.expiresAt;return(new Date).getTime()<e}},{key:"scheduleRenewal",value:function(){var e=this,t=this.expiresAt-Date.now();t>0&&(this.tokenRenewalTimeout=setTimeout(function(){e.renewSession()},t))}},{key:"getExpiryDate",value:function(){return JSON.stringify(new Date(this.expiresAt))}}]),e}()),_=function(){return l.a.createElement(d.b,{history:R},l.a.createElement("div",null,l.a.createElement(d.a,{path:"/",render:function(e){return l.a.createElement(w,Object.assign({auth:x},e))}}),l.a.createElement(d.a,{path:"/home",render:function(e){return l.a.createElement(I,Object.assign({auth:x},e))}}),l.a.createElement(d.a,{path:"/callback",render:function(e){return function(e){var t=e.location;/access_token|id_token|error/.test(t.hash)&&x.handleAuthentication()}(e),l.a.createElement(L,e)}})))},P=Object(i.d)(u,Object(i.a)(h.a));o.a.render(l.a.createElement(m.a,{store:P},l.a.createElement(_,null)),document.getElementById("root"))},56:function(e,t,a){e.exports=a.p+"static/media/loading.c5590569.svg"},59:function(e,t,a){e.exports=a(163)}},[[59,1,2]]]);
//# sourceMappingURL=main.9ac133f1.chunk.js.map