(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,n){e.exports=n(72)},72:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchUser",function(){return w}),n.d(a,"handlePayment",function(){return g});var r=n(0),c=n.n(r),u=n(19),l=n.n(u),o=(n(48),n(8)),i=n(10),s=n(40),p=n(11),m=n(12),h=n(14),f=n(13),d=n(15),b=n(22),y=n(9),E=n(18),v=n.n(E),j=n(26),O=n(27),k=n.n(O),w=function(){return function(){var e=Object(j.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/current_user");case 2:n=e.sent,t({type:"fetch_user",payload:n.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(j.a)(v.a.mark(function t(n){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.post("/api/stripe",e);case 2:a=t.sent,n({type:"fetch_user",payload:a.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},x=n(41),C=n.n(x),N=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(C.a,{name:"Emaily",description:"$5 for 5 credits ",amount:500,token:function(t){return e.props.handlePayment(t)},stripeKey:"pk_test_0ojU6w0MSZcoros8qyReCVNb007U7Mnt67"},c.a.createElement("button",{className:"btn"},"Add Credits"))}}]),t}(r.Component),_=Object(o.b)(null,a)(N),U=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"renderContent",value:function(){switch(this.props.auth){case null:return;case!1:return c.a.createElement("li",null,c.a.createElement("a",{href:"/auth/google"}," Google"),c.a.createElement("a",{href:"/auth/facebook"},"Facebook"));default:return[c.a.createElement("li",{key:"1"},c.a.createElement(_,null)),c.a.createElement("li",{key:"3",style:{margin:"0 10px"}}," Credits : ",this.props.auth.credits," "),c.a.createElement("li",{key:"2"},c.a.createElement("a",{href:"/api/logout"}," Logged Out "))]}}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement(b.b,{to:this.props.auth?"/surveys":"/"},c.a.createElement("a",{href:" ",className:"brand-logo"},"Emaily")),c.a.createElement("ul",{className:"brand-logo right"},this.renderContent()))))}}]),t}(r.Component);var M=Object(o.b)(function(e){return{auth:e.auth}})(U),A=function(){return c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h1",null,"Emaily"),"Collect feedback data from user!")},B=function(){return c.a.createElement("h1",null,"DashBoard")},D=function(){return c.a.createElement("h1",null,"SurveyNew")},J=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(b.a,null,c.a.createElement("div",null,c.a.createElement(M,null),c.a.createElement(y.a,{exact:!0,path:"/",component:A}),c.a.createElement(y.a,{exact:!0,path:"/surveys",component:B}),c.a.createElement(y.a,{path:"/surveys/new",component:D}))))}}]),t}(r.Component),P=Object(o.b)(null,a)(J),S=Object(i.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_user":return t.payload||!1;default:return e}}}),q=Object(i.d)(S,{},Object(i.a)(s.a));l.a.render(c.a.createElement(o.a,{store:q},c.a.createElement(P,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.16cd23ef.chunk.js.map