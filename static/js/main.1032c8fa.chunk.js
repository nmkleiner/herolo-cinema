(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,n){e.exports=n(320)},123:function(e,t,n){},320:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(16),o=n.n(i),c=(n(123),n(22)),s=n(23),l=n(26),u=n(24),d=n(25),m=n(17),v=n(35),p=n(112),h=n(73),f=n(18),E={getRandomInt:b,makeId:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t},makeLorem:function(e){var t="";for(;t.length<e;){var n=b(3,6),a=O(n);Math.random()>.9&&(a+=","),t+=a+" "}return t=(t=t.substring(0,e))[0].toUpperCase()+t.substr(1)},getCurrency:function(e){switch(e){case"ILS":return"\u20aa";case"EUR":return"\u20ac";case"USD":return"$";default:return""}}};function b(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}function O(e){for(var t="";t.length<e;){t+=g()}return t}function g(){var e="abcdefghijklmnopqrstuvwxyz",t=parseInt(Math.random()*e.length);return e.charAt(t)}var M={movies:[],selectedMovie:{},isDeleteMsgOpen:!1,deletedMovie:{id:""}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_MOVIES":return Object(f.a)({},e,{movies:Object(h.a)(t.movies)});case"SELECT_MOVIE":if(t.id){var n=e.movies.find(function(e){return e.id===t.id});return Object(f.a)({},e,{selectedMovie:n})}return Object(f.a)({},e,{selectedMovie:{id:E.makeId(6),title:"",year:"",director:"",runtime:"",genres:[""]}});case"UNSELECT_MOVIE":return Object(f.a)({},e,{selectedMovie:{}});case"UPDATE_MOVIE":return Object(f.a)({},e,{movies:e.movies.map(function(e){return e.id===t.updatedMovie.id?Object(f.a)({},t.updatedMovie,{Runtime:t.updatedMovie.Runtime+" min"}):e})});case"ADD_MOVIE":return Object(f.a)({},e,{movies:[].concat(Object(h.a)(e.movies),[t.addedMovie])});case"DELETE_MOVIE":return Object(f.a)({},e,{movies:e.movies.filter(function(t){return t.id!==e.deletedMovie.id})});case"CLOSE_DELETE_MSG":return Object(f.a)({},e,{isDeleteMsgOpen:!1});case"OPEN_DELETE_MSG":return Object(f.a)({},e,{isDeleteMsgOpen:!0});case"SET_DELETED_MOVIE":return Object(f.a)({},e,{deletedMovie:e.movies.find(function(e){return e.id===t.deletedMovieId})});default:return e}},C=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.c,j=Object(v.d)(y,C(Object(v.a)(p.a))),k=n(15),w=n.n(k),x=n(29),I=n(113),D=n.n(I),S={query:function(){return T.apply(this,arguments)},handleTitle:A},N="5c2e7969",_="https://www.omdbapi.com/?";function T(){return(T=Object(x.a)(w.a.mark(function e(){var t,n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=["the empire strikes back","fight club","the matrix","lord of the rings","logan lucky","aladin","saving private ryan"],e.next=3,Promise.all(t.map(function(){var e=Object(x.a)(w.a.mark(function e(t){var n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("".concat(_,"t=").concat(t,"&apikey=").concat(N));case 2:return(n=e.sent).data=L(n.data),e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function L(e){for(var t in e.id=e.imdbID,e.runtime=parseInt(e.Runtime),e.genres=e.Genre.split(","),e.genres=e.genres.map(function(e){return e.trim()}),e.title=A(e.Title),e.year=e.Year,e.director=e.Director,e)"id"!==t&&"title"!==t&&"year"!==t&&"runtime"!==t&&"genres"!==t&&"director"!==t&&delete e[t];return e}function A(e){return e=(e=e.toLowerCase()).replace(/[^a-zA-Z0-9 ]/g,"")}var F=function(e){return{type:"LOAD_MOVIES",movies:e}},V=function(){return function(){var e=Object(x.a)(w.a.mark(function e(t){var n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.query();case 2:return n=e.sent,t(F(n)),e.abrupt("return",Promise.resolve());case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},z=function(e){return e.title=S.handleTitle(e.title),{type:"ADD_MOVIE",addedMovie:e}},R=function(e){return e.title=S.handleTitle(e.title),{type:"UPDATE_MOVIE",updatedMovie:e}},P=function(e){return{type:"SELECT_MOVIE",id:e}},U=function(){return{type:"UNSELECT_MOVIE"}},G=function(){return{type:"DELETE_MOVIE"}},W=function(){return{type:"CLOSE_DELETE_MSG"}},B=function(){return{type:"OPEN_DELETE_MSG"}},Y=function(e){return{type:"SET_DELETED_MOVIE",deletedMovieId:e}},q=n(114),J=n.n(q),X=n(27),H=n.n(X),K=n(115),Z=n.n(K),$=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleClose",value:function(){}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:this.props.isDeleteMsgOpen,onClose:this.props.handleClose,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},"Are you sure?"),action:[r.a.createElement(H.a,{key:"undo",color:"secondary",size:"small",onClick:this.props.handleYes},r.a.createElement("i",{className:"fas fa-trash"}),"\xa0yes"),r.a.createElement(Z.a,{key:"close","aria-label":"Close",color:"inherit",onClick:this.props.handleClose},"x")]}))}}]),t}(a.Component);var Q=Object(m.b)(function(e){return{isDeleteMsgOpen:e.isDeleteMsgOpen,deletedMovie:e.deletedMovie}},function(e){return{handleClose:function(){e(W())},handleYes:function(){e(G()),e(W())}}})($);var ee=function(){return r.a.createElement("header",{className:"nav-bar"},r.a.createElement("div",{className:"container flex"},r.a.createElement("span",{className:"capitalize white-text"},"Herolo Cinema")))},te=n(41),ne=n.n(te),ae=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.movie,n=e.borderless;return r.a.createElement("div",{className:n?"movie-preview inner-container capitalize borderless":"movie-preview inner-container capitalize"},r.a.createElement("h4",null,t.title),r.a.createElement("div",{className:"chips-wrapper"},r.a.createElement(ne.a,{label:"year: "+t.year,variant:"outlined"}),r.a.createElement(ne.a,{label:"genre: "+t.genres.map(function(e,n){return n===t.genres.length-1?" "+e+".":" "+e}),variant:"outlined"}),r.a.createElement(ne.a,{label:"runtime: "+t.runtime+"min",variant:"outlined"}),r.a.createElement(ne.a,{label:"director: "+t.director,variant:"outlined"})),r.a.createElement("div",{className:"button-wrapper flex justify-end mt-20"},r.a.createElement(H.a,{variant:"text",color:"default",onClick:this.props.onEditClick.bind({},t.id)},r.a.createElement("i",{className:"fas fa-edit"}),"\xa0edit"),r.a.createElement(H.a,{variant:"text",color:"default",onClick:this.props.onDeleteMovieClick.bind({},t.id)},r.a.createElement("i",{className:"fas fa-trash"}),"\xa0delete")))}}]),t}(a.Component);var re=Object(m.b)(null,function(e){return{onDeleteMovieClick:function(t){e(B()),e(Y(t))},onEditClick:function(t){e(P(t))}}})(ae);var ie=Object(m.b)(function(e){return{movies:e.movies}},function(e){return{}})(function(e){var t=e.movies;return r.a.createElement(r.a.Fragment,null,!!t.length&&r.a.createElement("div",{className:"movie-list"},t.map(function(e,n){return r.a.createElement(re,{movie:e,borderless:n===t.length-1,key:e.id})})))}),oe=n(116),ce=n.n(oe),se=n(72),le=n.n(se),ue=n(71),de=n.n(ue),me=n(69),ve=n.n(me),pe=n(70),he=n.n(pe),fe=n(117),Ee=n.n(fe),be=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this))).handleInputChange=function(e,t){var a=t.target.value;a.length&&!a[0]&&a.shift();var r=Object(f.a)({},n.state.selectedMovie);r[e]=a,n.setState({selectedMovie:r})},n.resetErrors=function(){var e=n.state.textFields;e.forEach(function(e){e.error=!1}),n.setState({textFields:e})},n.validate=function(){var e=n.state.selectedMovie,t=e.title,a=e.director,r=e.genres,i=e.year,o=e.runtime,c=e.id,s=n.state.textFields,l=n.props.movies,u=0,d=!1;return""===t.trim()?(d=!0,s[u].error=!0,s[u].label="Invalid title.",n.setState({textFields:s})):l.find(function(e){return e.id!==c&&e.title.toLowerCase()===t.toLowerCase()})&&(d=!0,s[u].error=!0,s[u].label="A movie with the same title already exists.",n.setState({textFields:s})),u++,""===a.trim()&&(d=!0,s[u].error=!0,n.setState({textFields:s})),u++,+o<1&&(d=!0,s[u].error=!0,n.setState({textFields:s})),u++,(+i<1888||+i>2020)&&(d=!0,s[u].error=!0,n.setState({textFields:s})),u++,r.length&&r[0]||(d=!0,s[u].error=!0,n.setState({textFields:s})),d},n.state={selectedMovie:e.selectedMovie,isClosing:!1,isWorking:!1},n.state.textFields=[{type:"text",name:"title",placeholder:"Movie title",label:"Invalid title.",value:e.selectedMovie.title,error:!1,onChange:n.handleInputChange},{type:"text",name:"director",placeholder:"Director",label:"Invalid director.",value:e.selectedMovie.director,error:!1,onChange:n.handleInputChange},{type:"number",name:"runtime",placeholder:"Runtime",label:"Invalid runtime.",value:e.selectedMovie.runtime,error:!1,onChange:n.handleInputChange},{type:"number",name:"year",placeholder:"Year released",label:"Invalid year.",value:e.selectedMovie.year,error:!1,onChange:n.handleInputChange},{type:"select",name:"genres",placeholder:"Genres",label:"Choose genres.",value:e.selectedMovie.genres,error:!1,onChange:n.handleInputChange,genres:["War","Sci-Fi","Adventure","Drama","Comedy","Romantic","Action","Fantasy"]}],e.selectedMovie.title||(n.state.addMovie=!0),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.selectedMovie,n=this.state.isWorking;return r.a.createElement("div",{className:this.state.isClosing?"movie-edit capitalize animated fadeOut":"movie-edit capitalize animated fadeIn"},r.a.createElement("div",{className:"modal-screen"}),r.a.createElement("form",{onSubmit:this.props.onSubmit.bind(this),className:this.state.isClosing?"animated fadeOutRight":"animated fadeInRight"},this.state.addMovie?r.a.createElement("h3",null,"Add new movie"):r.a.createElement("h3",null,"Update movie"),r.a.createElement("div",{className:"wrapper"},this.state.textFields.map(function(n,a){return"select"!==n.type?r.a.createElement(ce.a,{type:n.type,value:t[n.name],onChange:n.onChange.bind(e,n.name),placeholder:n.placeholder,helperText:n.error&&n.label,error:n.error,key:a}):r.a.createElement(ve.a,{key:a,error:n.error},r.a.createElement(de.a,{value:t[n.name],onChange:n.onChange.bind(e,n.name),multiple:!0,inputProps:{name:"genre",id:"genre"}},r.a.createElement(le.a,{value:"",disabled:!0},"Genre"),n.genres.map(function(e){return r.a.createElement(le.a,{key:e,value:e},e)})),n.error&&r.a.createElement(he.a,null,"Choose genre."))}),r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(H.a,{variant:"contained",size:"large",color:"primary",type:"submit"},n?r.a.createElement(Ee.a,{color:"inherit"}):"save"),r.a.createElement(H.a,{variant:"contained",size:"large",type:"button",onClick:this.props.onClose.bind(this)},"cancel")))))}}]),t}(a.Component);var Oe=Object(m.b)(function(e){return{selectedMovie:e.selectedMovie,movies:e.movies}},function(e){return{onSubmit:function(){var t=Object(x.a)(w.a.mark(function t(n){var a=this;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),this.resetErrors(),this.validate()){t.next=10;break}return this.state.addMovie?e(z(this.state.selectedMovie)):e(R(this.state.selectedMovie)),t.next=7,this.setState({isWorking:!0});case 7:return t.next=9,setTimeout(Object(x.a)(w.a.mark(function e(){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({isClosing:!0});case 2:case"end":return e.stop()}},e,this)})),700);case 9:setTimeout(function(){e(U())},1400);case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),onClose:function(){var t=Object(x.a)(w.a.mark(function t(){return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({isClosing:!0});case 2:setTimeout(function(){e(U())},700);case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}})(be),ge=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"movies-page"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"top-wrapper"},r.a.createElement("h4",{className:"capitalize"},"your movie library"),r.a.createElement(H.a,{color:"primary",variant:"outlined",onClick:this.props.onAddMovieClick},r.a.createElement("i",{className:"fas fa-plus"}),"Add Movie")),r.a.createElement(ie,{store:j}),this.props.selectedMovie.id&&r.a.createElement(Oe,{store:j})))}}]),t}(a.Component);var Me=Object(m.b)(function(e){return{selectedMovie:e.selectedMovie}},function(e){return{onAddMovieClick:function(){e(P(null))}}})(ge);var ye=function(){return r.a.createElement("header",{className:"footer"},r.a.createElement("div",{className:"container flex"},r.a.createElement("small",null,"Built By Noam Kleiner")))},Ce=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onLoad()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Q,null),r.a.createElement(ee,{store:j}),r.a.createElement(Me,{store:j}),r.a.createElement(ye,null))}}]),t}(a.Component);var je=Object(m.b)(function(e){return{movies:e.movies,isDeleteMsgOpen:e.isDeleteMsgOpen}},function(e){return{onLoad:function(){e(V())}}})(Ce);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(m.a,{store:j},r.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[118,2,1]]]);
//# sourceMappingURL=main.1032c8fa.chunk.js.map