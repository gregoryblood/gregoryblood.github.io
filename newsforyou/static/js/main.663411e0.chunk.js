(this.webpackJsonpnewsfiltered=this.webpackJsonpnewsfiltered||[]).push([[0],{23:function(e,t,n){e.exports=n(48)},28:function(e,t,n){},30:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(15),i=n.n(o),c=(n(28),n(5)),l=n.n(c),u=n(16),s=n(17),d=n(18),f=n(22),h=n(21),p=n(2),m=(n(30),n(3)),v=n(4),g=n.n(v);function b(){var e=Object(p.a)(["\n  object-fit: cover;\n  width: 100%;\n  height: 40vw;\n  padding: 0 0;\n  margin: 0 auto;\n\n"]);return b=function(){return e},e}function w(){var e=Object(p.a)(["\n  font-size: 4vw;\n  font-style: italic;\n  padding-bottom: 10px;\n  border-bottom: solid;\n  border-bottom-color: grey;\n  border-bottom-width: 1px;\n"]);return w=function(){return e},e}function y(){var e=Object(p.a)(["\n  font-weight: bold;\n  font-size: 4vw; \n\n"]);return y=function(){return e},e}function j(){var e=Object(p.a)(["\n  position: relative;\n  margin: 0 auto;\n  width: 90%;\n"]);return j=function(){return e},e}function E(){var e=Object(p.a)(["\n  text-decoration: none;\n  width: 100%;\n  color: white;\n  text-align: center;\n\n"]);return E=function(){return e},e}var k=m.a.a(E()),O=m.a.div(j()),x=m.a.p(y()),z=m.a.p(w()),C=m.a.img(b());var D=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={articles:null},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,console.debug("== Getting Articles"),g.a.all([g.a.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=80fc18dc29434ee782d8e09d6aec240f&pageSize=100")]).then(g.a.spread((function(e){return{articles:e.data}})));case 2:t=e.sent,n=t.articles,this.setState({articles:n});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.articles;return a.a.createElement(a.a.Fragment,null,e?a.a.createElement(a.a.Fragment,null,function(e){for(var t=["trump","covid","fake","black","police","racism","republicans","biden"],n=[],r=!0,o=0;o<e.length;o++){for(var i=0;i<t.length;i++)1!=e[o].title.toLowerCase().includes(t[i])&&1!=e[o].description.toLowerCase().includes(t[i])||(r=!1);r&&n.push(a.a.createElement(k,{href:e[o].url},a.a.createElement(C,{src:e[o].urlToImage,alt:"No Img"}),a.a.createElement(O,null,a.a.createElement(x,null,e[o].title),a.a.createElement(z,null,e[o].description)))),r=!0}return n}(e.articles)):a.a.createElement("h1",null,"Loading..."))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.663411e0.chunk.js.map