(this["webpackJsonpmy-ui"]=this["webpackJsonpmy-ui"]||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),s=n(26),c=n.n(s),o=n(10),i=n(8),l=n(44),u=n(45),h=n.n(u),d=(n(56),n(9)),j=n(7),b=n(46);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=r.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"});function f(e,t){var n=e.title,a=e.titleId,s=p(e,["title","titleId"]);return r.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",ref:t,"aria-labelledby":a},s),n?r.createElement("title",{id:a},n):null,m)}var g=r.forwardRef(f);n.p;function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var S=r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"});function _(e,t){var n=e.title,a=e.titleId,s=x(e,["title","titleId"]);return r.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",ref:t,"aria-labelledby":a},s),n?r.createElement("title",{id:a},n):null,S)}var C=r.forwardRef(_),N=(n.p,n(57),n(17)),y=n.n(N);function E(e){return{type:"FETCHING_SHOES_FAILED",error:e}}function k(e){return{type:"LOGGING_IN_FAILURE",error:e}}function w(e){return function(t){t({type:"LOGGING_IN"}),y.a.post("https://cors-anywhere.herokuapp.com/https://vast-earth-24958.herokuapp.com/sessions",{user:{username:e.username,password:e.password}},{withCredentials:!0}).then((function(e){return"created"!==e.data.status&&t(k(e.data)),"created"===e.data.status&&t({type:"LOGGING_IN_SUCCESFUL",user:e.data}),e.data})).catch((function(e){t(k(e))}))}}function I(){return function(e){e({type:"CHECK_LOGIN_STATUS_START"}),y.a.get("https://cors-anywhere.herokuapp.com/https://vast-earth-24958.herokuapp.com/logged_in",{withCredentials:!0}).then((function(t){return e({type:"CHECK_LOGIN_STATUS",status:t.data}),t.data})).catch((function(t){e(k(t))}))}}function F(){return function(e){y.a.delete("https://cors-anywhere.herokuapp.com/https://vast-earth-24958.herokuapp.com/logout",{withCredentials:!0}).then((function(t){return e({type:"LOG_OUT_USER",status:t.data}),t.data})).catch((function(t){e(k(t))}))}}var L=function(e){return function(t){t({type:"SIGNING_UP"}),y.a.post("https://cors-anywhere.herokuapp.com/https://vast-earth-24958.herokuapp.com/registrations",{user:{username:e.username,password:e.password,password_confirmation:e.password_confirmation}},{withCredentials:!0}).then((function(e){return t({type:"SIGNED_UP_SUCCESFUL",user:e.data}),e.data})).catch((function(e){t(function(e){return{type:"SIGNED_UP_FAILURE",error:e}}(e))}))}},U=n(2),G={user:{},favShoes:[],loading:!1,error:null,loggedIn:!1},T=function(e){return e.auth.loggedIn},H=function(e){return e.auth.user},D=function(e){return e.auth.favShoes},R=function(e){return e.auth.loading},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNING_UP":return Object(U.a)(Object(U.a)({},e),{},{loading:!0});case"SIGNED_UP_SUCCESFUL":return Object(U.a)(Object(U.a)({},e),{},{loading:!1,user:t.user,loggedIn:t.user.logged_in});case"SIGNED_UP_FAILURE":return Object(U.a)(Object(U.a)({},e),{},{loading:!1,error:t.error});case"LOGGING_IN":return Object(U.a)(Object(U.a)({},e),{},{loading:!0});case"LOGGING_IN_SUCCESFUL":return Object(U.a)(Object(U.a)({},e),{},{loading:!1,user:t.user,loggedIn:t.user.logged_in});case"LOGGING_IN_FAILURE":return Object(U.a)(Object(U.a)({},e),{},{loading:!1,error:t.error});case"CHECK_LOGIN_STATUS_START":return Object(U.a)(Object(U.a)({},e),{},{loading:!0});case"CHECK_LOGIN_STATUS":return Object(U.a)(Object(U.a)({},e),{},{loading:!1,loggedIn:t.status.logged_in,user:t.status.user,favShoes:t.status.user_fav});case"LOG_OUT_USER":return Object(U.a)(Object(U.a)({},e),{},{loggedIn:t.status.logged_in});default:return e}},P=Object(o.b)((function(e){return{userStatus:T(e)}}),(function(e){return Object(i.b)({logUserOut:F},e)}))((function(e){var t=Object(r.useState)(!1),n=Object(b.a)(t,2),s=n[0],c=n[1],o=function(){return c(!1)},i=e.userStatus,l=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("li",{className:"option mobile-option",onClick:o,onKeyDown:o,children:Object(a.jsx)(d.b,{to:"/login",className:"sign-up",children:"Log In"})}),Object(a.jsx)("li",{className:"option mobile-option",onClick:o,onKeyDown:o,children:Object(a.jsx)(d.b,{to:"/signup",className:"sign-up",children:"Sign Up"})})]}),u=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("li",{className:"option mobile-option",onClick:o,onKeyDown:o,children:Object(a.jsx)(d.b,{to:"/favourites",className:"sign-up",children:"My Favourites"})}),Object(a.jsx)("li",{className:"option mobile-option",onClick:o,onKeyDown:o,children:Object(a.jsx)("button",{type:"button",className:"logout-btn",onClick:function(){(0,e.logUserOut)()},children:"Log Out"})})]}),h=i?u:l;return Object(a.jsx)("nav",{children:Object(a.jsxs)("div",{className:"header",children:[Object(a.jsxs)("div",{className:"logo-nav",children:[Object(a.jsx)("div",{className:"logo-container",children:Object(a.jsx)(d.b,{to:"/",children:Object(a.jsx)("h1",{children:"D'm Shoes"})})}),Object(a.jsx)("ul",{className:s?"nav-options active":"nav-options",children:h})]}),Object(a.jsx)("div",{className:"mobile-menu",onClick:function(){return c(!s)},onKeyDown:o,children:s?Object(a.jsx)(g,{className:"menu-icon"}):Object(a.jsx)(C,{className:"menu-icon"})})]})})})),M=n(19),K=n(20),B=n(22),q=n(21),J=n(18),V=n(3),W=n.n(V),z={shoes:[],shoe:{},loading:!1,error:null},Y=function(e){return e.shoe.shoes},Z=function(e){return e.shoe.shoe},Q=function(e){return e.shoe.loading},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHING_SHOES":return Object(U.a)(Object(U.a)({},e),{},{loading:!0});case"FETCHED_SHOES":return Object(U.a)(Object(U.a)({},e),{},{loading:!1,shoes:t.shoes});case"FETCHING_SHOES_FAILED":return Object(U.a)(Object(U.a)({},e),{},{loading:!1,error:t.error});case"FETCHING_ONE_SHOE":return Object(U.a)(Object(U.a)({},e),{},{loading:!0});case"FETCHED_ONE_SHOE":return Object(U.a)(Object(U.a)({},e),{},{loading:!1,shoe:t.shoe});case"FETCHING_ONE_SHOE_FAILED":return Object(U.a)(Object(U.a)({},e),{},{loading:!1,error:t.error});default:return e}};function $(e){return function(t){t({type:"FETCHING_ONE_SHOE"}),y.a.get("https://cors-anywhere.herokuapp.com/https://vast-earth-24958.herokuapp.com/shoes/".concat(e)).then((function(e){return t({type:"FETCHED_ONE_SHOE",shoe:e.data}),e.data})).catch((function(e){t(function(e){return{type:"FETCHING_ONE_SHOE_FAILED",error:e}}(e))}))}}var ee=function(){return function(e){e({type:"FETCHING_SHOES"}),y.a.get("https://cors-anywhere.herokuapp.com/https://vast-earth-24958.herokuapp.com/shoes").then((function(t){return e({type:"FETCHED_SHOES",shoes:t.data}),t.data})).catch((function(t){e(E(t))}))}},te=function(e){var t=e.shoe;return Object(a.jsx)("div",{className:W.a.links,children:Object(a.jsxs)(d.b,{to:"shoes/".concat(t.id),children:[Object(a.jsx)("div",{className:W.a.img,children:Object(a.jsx)("img",{src:t.image,alt:t.name})}),Object(a.jsx)("p",{children:t.name})]})},t.id)},ne=function(e){Object(B.a)(n,e);var t=Object(q.a)(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(K.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.fetchShoes,n=e.checkStatus;t(),n()}},{key:"render",value:function(){var e=this.props,t=e.shoes,n=e.userStatus,r=e.loading,s=t.map((function(e){return Object(a.jsx)(te,{shoe:e},Math.random())}));return n?Object(a.jsxs)(a.Fragment,{children:[r&&Object(a.jsx)("div",{className:W.a.loading,children:Object(a.jsx)(J.RingLoader,{loading:r})}),Object(a.jsx)("div",{children:Object(a.jsx)("h2",{className:W.a.welcome_text,children:"Welcome to your Sneaker Collection"})}),Object(a.jsx)("div",{className:W.a.shoes,children:s})]}):Object(a.jsx)(j.a,{to:"/login"})}}]),n}(r.Component),ae=Object(o.b)((function(e){return{shoes:Y(e),loading:Q(e),userStatus:T(e)}}),(function(e){return Object(i.b)({fetchShoes:ee,checkStatus:I},e)}))(ne),re=n(24),se=n(16),ce=function(e){Object(B.a)(n,e);var t=Object(q.a)(n);function n(e){var a;return Object(M.a)(this,n),(a=t.call(this,e)).state={username:"",password:"",password_confirmation:""},a.handleChange=a.handleChange.bind(Object(se.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(se.a)(a)),a}return Object(K.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.checkStatus)()}},{key:"handleChange",value:function(e){this.setState(Object(re.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),(0,this.props.signUpUser)(this.state),e.target.reset(),this.resetState()}},{key:"resetState",value:function(){this.setState({username:"",password:"",password_confirmation:""})}},{key:"render",value:function(){var e=this.state,t=e.username,n=e.password,r=e.password_confirmation,s=this.props,c=s.userStatus,o=s.loading;return c?Object(a.jsx)(j.a,{to:"/"}):Object(a.jsxs)(a.Fragment,{children:[o&&Object(a.jsx)("div",{className:W.a.loading,children:Object(a.jsx)(J.RingLoader,{loading:o})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:W.a.txt,children:"Welcome to the One stop for all your Favourite Jordan Sneakers"}),Object(a.jsxs)("div",{className:W.a.form,children:[Object(a.jsx)("h4",{className:W.a.txt,children:"SIGN UP"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("div",{className:W.a.div,children:Object(a.jsxs)("label",{htmlFor:"username",className:W.a.label,children:["Username",Object(a.jsx)("input",{type:"text",name:"username",value:t,onChange:this.handleChange,required:!0})]})}),Object(a.jsx)("div",{className:W.a.div,children:Object(a.jsxs)("label",{htmlFor:"password",className:W.a.label,children:["Password",Object(a.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange,required:!0})]})}),Object(a.jsx)("div",{className:W.a.div,children:Object(a.jsxs)("label",{htmlFor:"password_confirmation",className:W.a.label,children:["Confirm Password",Object(a.jsx)("input",{type:"password",name:"password_confirmation",value:r,onChange:this.handleChange,required:!0})]})}),Object(a.jsx)("div",{className:W.a.btn,children:Object(a.jsx)("button",{type:"submit",children:"Sign Up"})})]})]})]})]})}}]),n}(r.Component),oe=Object(o.b)((function(e){return{userStatus:T(e),loading:R(e)}}),(function(e){return Object(i.b)({signUpUser:L,checkStatus:I},e)}))(ce),ie=function(e){Object(B.a)(n,e);var t=Object(q.a)(n);function n(e){var a;return Object(M.a)(this,n),(a=t.call(this,e)).state={username:"",password:""},a.handleChange=a.handleChange.bind(Object(se.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(se.a)(a)),a}return Object(K.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.checkStatus)()}},{key:"handleChange",value:function(e){this.setState(Object(re.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),(0,this.props.logInUser)(this.state),e.target.reset(),this.resetState()}},{key:"resetState",value:function(){this.setState({username:"",password:""})}},{key:"render",value:function(){var e=this.state,t=e.username,n=e.password,r=this.props,s=r.userStatus,c=r.loading;return s?Object(a.jsx)(j.a,{to:"/"}):Object(a.jsxs)(a.Fragment,{children:[c&&Object(a.jsx)("div",{className:W.a.loading,children:Object(a.jsx)(J.RingLoader,{loading:c})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:W.a.txt,children:"Welcome to the One stop for all your Favourite Jordan Sneakers"}),Object(a.jsxs)("div",{className:W.a.form,children:[Object(a.jsx)("h4",{className:W.a.txt,children:"LOG IN"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("div",{className:W.a.div,children:Object(a.jsxs)("label",{htmlFor:"username",className:W.a.label,children:["Username",Object(a.jsx)("input",{type:"text",name:"username",value:t,onChange:this.handleChange,required:!0})]})}),Object(a.jsx)("div",{className:W.a.div,children:Object(a.jsxs)("label",{htmlFor:"password",className:W.a.label,children:["Password",Object(a.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange,required:!0})]})}),Object(a.jsx)("div",{className:W.a.btn,children:Object(a.jsx)("button",{type:"submit",children:"Login"})})]})]})]})]})}}]),n}(r.Component),le=Object(o.b)((function(e){return{userStatus:T(e),loading:R(e)}}),(function(e){return Object(i.b)({logInUser:w,checkStatus:I},e)}))(ie);n(102);function ue(e,t){return function(n){y.a.post("https://cors-anywhere.herokuapp.com/https://vast-earth-24958.herokuapp.com/favourites/new/{".concat(e,",").concat(t,"}"),{withCredentials:!0}).then((function(e){n({type:"FETCHED_FAVOURITES_SUCCESSFUL",status:e.data})})).catch((function(e){n(E(e))}))}}var he=function(){return function(e){e({type:"FETCHING_SHOES"}),y.a.get("https://cors-anywhere.herokuapp.com/https://vast-earth-24958.herokuapp.com/favourites/all",{withCredentials:!0}).then((function(t){return e({type:"FETCHED_FAVOURITES",shoes:t.data}),t.data})).catch((function(t){e(E(t))}))}},de=(n(103),function(e){Object(B.a)(n,e);var t=Object(q.a)(n);function n(e){var a;return Object(M.a)(this,n),(a=t.call(this,e)).createLike=a.createLike.bind(Object(se.a)(a)),a.handleClick=a.handleClick.bind(Object(se.a)(a)),a}return Object(K.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.fetchShoe,n=e.checkStatus;t(this.props.match.params.id),n()}},{key:"createLike",value:function(){var e=this.props,t=e.createFav,n=e.user;t(e.shoe.id,n.id)}},{key:"handleClick",value:function(e){"favourite"===e.target.value?(e.target.value="not-favourite",e.target.textContent="Like"):(e.target.value="favourite",e.target.textContent="Unlike"),this.createLike()}},{key:"render",value:function(){var e,t=this.props,n=t.shoe,r=t.userStatus,s=t.userFavourites,c=t.loading;if(!r)return Object(a.jsx)(j.a,{to:"/login"});var o=[];return s.forEach((function(e){o.push(e.id)})),e=o.includes(n.id)?Object(a.jsx)("button",{type:"button",onClick:this.handleClick,value:"favorite",children:"Unlike"}):Object(a.jsx)("button",{type:"button",onClick:this.handleClick,value:"not-favorite",children:"Like"}),Object(a.jsxs)(a.Fragment,{children:[c&&Object(a.jsx)("div",{className:W.a.loading,children:Object(a.jsx)(J.RingLoader,{loading:c})}),Object(a.jsxs)("div",{className:"my-shoe",children:[Object(a.jsx)("h2",{className:"shoe-name",children:n.name}),Object(a.jsxs)("div",{className:"shoe-con",children:[Object(a.jsx)("img",{src:n.image,alt:n.name}),Object(a.jsxs)("p",{className:"shoe-name price",children:["Price:\xa0",n.price]})]}),Object(a.jsx)("p",{className:"shoe-details",children:n.description}),Object(a.jsxs)("div",{className:"btns-below",children:[Object(a.jsx)("p",{children:Object(a.jsx)(d.b,{to:"/",children:"Back"})}),Object(a.jsx)("p",{children:e})]})]})]})}}]),n}(r.Component)),je=Object(o.b)((function(e){return{shoe:Z(e),userStatus:T(e),loading:Q(e),user:H(e),userFavourites:D(e)}}),(function(e){return Object(i.b)({fetchShoe:$,checkStatus:I,createFav:ue},e)}))(de),be=function(){var e=Object(o.c)();Object(r.useEffect)((function(){e(he()),I()}),[]);var t=Object(o.d)((function(e){return{status:e.auth.loggedIn,favShoes:e.fav.shoes.user_shoes,loading:e.fav.loading}})),n=t.status,s=t.favShoes,c=t.loading;if(!n)return Object(a.jsx)(j.a,{to:"/login"});var i=s&&s.length>0?s.map((function(e){return Object(a.jsx)(te,{shoe:e},Math.random())})):Object(a.jsx)("p",{children:"You do not have any Favorites yet"});return Object(a.jsxs)(a.Fragment,{children:[c&&Object(a.jsx)("div",{className:W.a.loading,children:Object(a.jsx)(J.RingLoader,{loading:c})}),Object(a.jsx)("div",{children:Object(a.jsx)("h2",{className:W.a.welcome_text,children:"Your Favourite Collection"})}),Object(a.jsx)("div",{className:W.a.shoes,children:i})]})},Oe=n.p+"static/media/Bg3.06bd2f18.png";var pe=function(){return Object(a.jsx)(d.a,{children:Object(a.jsxs)("div",{className:"mobile",children:[Object(a.jsx)("img",{src:Oe,alt:"background"}),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(P,{}),Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.b,{exact:!0,path:"/",component:ae}),Object(a.jsx)(j.b,{path:"/shoes/:id",component:je}),Object(a.jsx)(j.b,{path:"/signup",component:oe}),Object(a.jsx)(j.b,{path:"/login",component:le}),Object(a.jsx)(j.b,{path:"/favourites",component:be})]})]})]})})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,105)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))},fe={shoes:{},status:"",loading:!1,error:null},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHING_SHOES":return Object(U.a)(Object(U.a)({},e),{},{loading:!0});case"FETCHED_FAVOURITES":return Object(U.a)(Object(U.a)({},e),{},{loading:!1,shoes:t.shoes});case"FETCHING_SHOES_FAILED":return Object(U.a)(Object(U.a)({},e),{},{loading:!1,error:t.error});case"FETCHED_FAVOURITES_SUCCESSFUL":return Object(U.a)(Object(U.a)({},e),{},{loading:!1,status:t.status});default:return e}},ve=Object(i.c)({shoe:X,auth:A,fav:ge}),xe=[l.a,h.a],Se=Object(i.d)(ve,i.a.apply(void 0,xe));c.a.render(Object(a.jsx)(o.a,{store:Se,children:Object(a.jsx)(pe,{})}),document.getElementById("root")),me()},3:function(e,t,n){e.exports={welcome_text:"Container_welcome_text__uaywO",txt:"Container_txt__27hTs",form:"Container_form__29CTJ",label:"Container_label__1wTx1",div:"Container_div__28a-R",btn:"Container_btn__cz2br",shoes:"Container_shoes__2Npij",img:"Container_img__3-ZR2",links:"Container_links__3n3z5",loading:"Container_loading__3r8kI"}},56:function(e,t,n){},57:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.d152d5ed.chunk.js.map