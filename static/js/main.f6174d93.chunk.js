(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t){e.exports={omdbKey:"5c2e7969"}},114:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADIBAMAAACg8cFmAAAAG1BMVEVVVVX////U1NSqqqq/v79/f3+UlJTp6elqamoy0vmiAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACPklEQVR4nO3Wv2/aQBjG8dcU/xh5TcCMeGhn2DrCEKWjQxK1I0hVWe2KMmMpav1n997DaUjV1RZSvx8phDtfdI/Od+9FBAAAAAAAAAAAAAAAAAAAAAAAAADQL1VNFyLVPx7Fo4vGeUBQ9hLKx9KbK4z19PRVi6uLlbmf5eoqY9XlVcYKRtcZy6/Wc/W9EEnu0q19P1qsTfbJ95x8rCg/upHJXba1P9mvuo5Vz92sSaU6EblXnUrojudK4qlq5nsmPtZOdVda053c4Kidx/JbfpienlM3/fsHPcXp03ImsR5/VgvXs8l8LL3dVOV5gATZoegyljbNgy8Qg5lrSOiSrbe7uURjiW2p5pHrybduQGTlrbTmbiGBvdguY72U02hhsYZTkf0iL2wZ46kdUuvZ2XIO3Ktclvbpdlgw6TTV5eWTPKpfM9dqmqaSeGYJ7LO2zWcH8941m+bXyA5vp7LzLxdr4xK2RcGW0O2wkcWyAL6C2Je6DOzRrPNK8SdWqIeP57kl8bGKv2Kdm7U9mvQXazCWdu7kpL7vnGNw+RLrsn17vcWyWdXv692iOol8a2O92fL3fqtF2/5iuWV4p+LLQbFeSZi1sV4LhFvOdTm8sXB9vsRk6epkdfuYSX3zZT9uY7metpxWRaRlordWY3uLFamO84ndMBO3bKrzl1ivl09arUtZuorS496Sfbr9/EPC3C7sjX542fKS5GnhB4T5wTXD3O7y3v6VAAAAAAAAAAAAAAAAAAAAAAAAAPAf+A2qDG+MSI9xyQAAAABJRU5ErkJggg=="},118:function(e,t,n){e.exports=n(321)},123:function(e,t,n){},321:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(16),o=n.n(i),c=(n(123),n(25)),s=n(26),l=n(29),u=n(27),d=n(28),m=n(17),v=n(35),p=n(109),f=n(72),h=n(18),E={getRandomInt:b,makeId:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t},makeLorem:function(e){var t="";for(;t.length<e;){var n=b(3,6),a=A(n);Math.random()>.9&&(a+=","),t+=a+" "}return t=(t=t.substring(0,e))[0].toUpperCase()+t.substr(1)},getCurrency:function(e){switch(e){case"ILS":return"\u20aa";case"EUR":return"\u20ac";case"USD":return"$";default:return""}}};function b(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}function A(e){for(var t="";t.length<e;){t+=O()}return t}function O(){var e="abcdefghijklmnopqrstuvwxyz",t=parseInt(Math.random()*e.length);return e.charAt(t)}var g={movies:[],selectedMovie:{},isDeleteMsgOpen:!1,deletedMovie:{id:""}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_MOVIES":return Object(h.a)({},e,{movies:Object(f.a)(t.movies)});case"SELECT_MOVIE":if(t.id){var n=e.movies.find(function(e){return e.id===t.id});return Object(h.a)({},e,{selectedMovie:n})}return Object(h.a)({},e,{selectedMovie:{id:E.makeId(6),title:"",year:"",director:"",runtime:"",genres:[""]}});case"UNSELECT_MOVIE":return Object(h.a)({},e,{selectedMovie:{}});case"UPDATE_MOVIE":return Object(h.a)({},e,{movies:e.movies.map(function(e){return e.id===t.updatedMovie.id?Object(h.a)({},t.updatedMovie,{Runtime:t.updatedMovie.Runtime+" min"}):e})});case"ADD_MOVIE":return Object(h.a)({},e,{movies:[].concat(Object(f.a)(e.movies),[t.addedMovie])});case"DELETE_MOVIE":return Object(h.a)({},e,{movies:e.movies.filter(function(t){return t.id!==e.deletedMovie.id})});case"CLOSE_DELETE_MSG":return Object(h.a)({},e,{isDeleteMsgOpen:!1});case"OPEN_DELETE_MSG":return Object(h.a)({},e,{isDeleteMsgOpen:!0});case"SET_DELETED_MOVIE":return Object(h.a)({},e,{deletedMovie:e.movies.find(function(e){return e.id===t.deletedMovieId})});default:return e}},M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.c,k=Object(v.d)(y,M(Object(v.a)(p.a))),C=n(15),x=n.n(C),j=n(24),w=n(110),S=n.n(w),D=n(111),I=n.n(D).a.omdbKey,L="https://www.omdbapi.com/?";function T(){return(T=Object(j.a)(x.a.mark(function e(){var t,n;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=["the empire strikes back","fight club","the matrix","lord of the rings","logan lucky","aladin","saving private ryan"],e.next=3,Promise.all(t.map(function(){var e=Object(j.a)(x.a.mark(function e(t){var n;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("".concat(L,"t=").concat(t,"&apikey=").concat(I));case 2:return(n=e.sent).data=N(n.data),e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function N(e){for(var t in e.id=e.imdbID,e.runtime=parseInt(e.Runtime),e.genres=e.Genre.split(","),e.genres=e.genres.map(function(e){return e.trim()}),e.title=V(e.Title),e.year=e.Year,e.director=e.Director,e)"id"!==t&&"title"!==t&&"year"!==t&&"runtime"!==t&&"genres"!==t&&"director"!==t&&delete e[t];return e}function V(e){return e=(e=e.toLowerCase()).replace(/[^a-zA-Z0-9 ]/g,"")}var _={query:function(){return T.apply(this,arguments)},handleTitle:V,validate:function(){var e=this,t=this.state,n=t.textFields,a=t.selectedMovie,r=a.title,i=a.id,o=this.props.movies,c=!1,s=function(e){c=!0;var t=n.findIndex(function(t){return t.name===e});n[t].error=!0},l=function(t){c=!0;var a=n.findIndex(function(e){return e.name===t});n[a].error=!0,e.setState({textFields:n})},u=function(t){switch(t){case"title":var c=n.findIndex(function(e){return e.name===t});""===a[t].replace(/[^a-zA-Z0-9 ]/g,"").trim()?(s(t),n[c].label="Invalid title.",e.setState({textFields:n})):o.find(function(e){return e.id!==i&&e.title.toLowerCase()===r.toLowerCase()})&&(s(t),n[c].label="A movie with the same title already exists.",e.setState({textFields:n}));break;case"director":""===a[t].trim()&&l(t);break;case"runtime":+a[t]<1&&l(t);break;case"year":(+a[t]<1888||+a[t]>2020)&&l(t);break;case"genres":a[t].length&&a[t][0]||l(t)}};for(var d in a)u(d);return c},textFields:[{type:"text",name:"title",placeholder:"Movie title",label:"Invalid title."},{type:"text",name:"director",placeholder:"Director",label:"Invalid director."},{type:"number",name:"runtime",placeholder:"Runtime",label:"Invalid runtime."},{type:"number",name:"year",placeholder:"Year released",label:"Invalid year."},{type:"select",name:"genres",placeholder:"Genres",label:"Please choose genres.",genres:["War","Sci-Fi","Adventure","Drama","Comedy","Romantic","Action","Fantasy"]}]},U=function(e){return{type:"LOAD_MOVIES",movies:e}},W=function(){return function(){var e=Object(j.a)(x.a.mark(function e(t){var n;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.query();case 2:return n=e.sent,t(U(n)),e.abrupt("return",Promise.resolve());case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},F=function(e){return e.title=_.handleTitle(e.title),{type:"ADD_MOVIE",addedMovie:e}},R=function(e){return e.title=_.handleTitle(e.title),{type:"UPDATE_MOVIE",updatedMovie:e}},K=function(e){return{type:"SELECT_MOVIE",id:e}},G=function(){return{type:"UNSELECT_MOVIE"}},P=function(){return{type:"DELETE_MOVIE"}},z=function(){return{type:"CLOSE_DELETE_MSG"}},q=function(){return{type:"OPEN_DELETE_MSG"}},X=function(e){return{type:"SET_DELETED_MOVIE",deletedMovieId:e}},B=n(112),Y=n.n(B),Z=n(22),J=n.n(Z),Q=n(113),H=n.n(Q);var $=Object(m.b)(function(e){return{isDeleteMsgOpen:e.isDeleteMsgOpen,deletedMovie:e.deletedMovie}},function(e){return{handleClose:function(){e(z())},handleYes:function(){e(P()),e(z())}}})(function(e){var t=e.isDeleteMsgOpen,n=e.handleClose,a=e.handleYes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:t,onClose:n,message:r.a.createElement("span",{id:"message-id"},"Are you sure?"),action:[r.a.createElement(J.a,{key:"yes",color:"secondary",size:"small",onClick:a},"yes\xa0",r.a.createElement("i",{className:"fas fa-trash"})),r.a.createElement(H.a,{key:"x",color:"inherit",onClick:n},"x")]}))});var ee=function(){return r.a.createElement("header",{className:"nav-bar"},r.a.createElement("div",{className:"container flex"},r.a.createElement("span",{className:"capitalize white-text"},"Herolo Cinema")))};var te=function(e){var t=e.label,n=e.items,a=e.item;return r.a.createElement("div",{className:"detail-line"},r.a.createElement("span",null,t),a&&r.a.createElement("span",null," "+a),n&&r.a.createElement("span",null,n.map(function(e,t){return t===n.length-1?" "+e:" "+e+","})))},ne=n(114),ae=n.n(ne);var re=Object(m.b)(null,function(e){return{onDeleteMovieClick:function(t){e(q()),e(X(t))},onEditClick:function(t){e(K(t))}}})(function(e){var t=e.movie,n=e.borderless,a=e.onEditClick,i=e.onDeleteMovieClick,o=[{label:"year released:",item:t.year,items:""},{label:"genre:",item:"",items:t.genres},{label:"runtime:",item:t.runtime,items:""},{label:"director:",item:t.director,items:""}];return r.a.createElement("div",{className:"movie-preview inner-container capitalize"+(n?" borderless":"")},r.a.createElement("h4",null,t.title),r.a.createElement("img",{src:ae.a,alt:"movie",className:"mx-auto d-block"}),r.a.createElement("div",{className:"details-wrapper"},o.map(function(e,t){return r.a.createElement(te,{label:e.label,item:e.item,items:e.items,key:t})})),r.a.createElement("div",{className:"button-wrapper flex justify-end mt-20"},r.a.createElement(J.a,{onClick:a.bind({},t.id)},"edit\xa0",r.a.createElement("i",{className:"fas fa-edit"})),r.a.createElement(J.a,{onClick:i.bind({},t.id)},"delete\xa0",r.a.createElement("i",{className:"fas fa-trash"}))))}),ie=n(115),oe=n.n(ie),ce=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"scrollUp",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.props.movies;return r.a.createElement("div",{className:"movie-list"},t.map(function(n,a){return r.a.createElement(r.a.Fragment,{key:n.id},2===a&&r.a.createElement("div",{className:"position-sticky"},r.a.createElement(oe.a,{onClick:e.scrollUp},r.a.createElement("i",{className:"fas fa-angle-double-up"}))),r.a.createElement(re,{movie:n,borderless:a===t.length-1}))}))}}]),t}(a.Component);var se=Object(m.b)(function(e){return{movies:e.movies}},function(e){return{}})(ce),le=n(70),ue=n.n(le),de=n(71),me=n.n(de),ve=n(116),pe=n.n(ve),fe=n(68),he=n.n(fe),Ee=n(69),be=n.n(Ee),Ae=n(117),Oe=n.n(Ae);var ge=function(e){var t=this,n=e.props,a=n.movie,i=n.isWorking,o=n.isClosing,c=n.addMovie,s=n.textFields,l=n.onSubmit,u=n.onClose;return r.a.createElement("div",{className:"movie-edit capitalize animated "+(o?"fadeOut":"fadeIn")},r.a.createElement("div",{className:"modal-screen"}),r.a.createElement("form",{onSubmit:l.bind(this),className:"animated "+(o?"fadeOutRight":"fadeInRight")},r.a.createElement("h3",null,c?"Add new movie":"Update movie"),r.a.createElement("div",{className:"wrapper"},s.map(function(e,n){return"select"!==e.type?r.a.createElement(pe.a,{type:e.type,value:a[e.name],onChange:e.onChange.bind(t,e.name),error:e.error,helperText:e.error&&e.label,key:n,placeholder:e.placeholder}):r.a.createElement(he.a,{key:n,error:e.error},r.a.createElement(ue.a,{value:a[e.name],onChange:e.onChange.bind(t,e.name),multiple:!0,inputProps:{name:"genre"}},r.a.createElement(me.a,{value:"",disabled:!0},"Genre"),e.genres.map(function(e){return r.a.createElement(me.a,{key:e,value:e},e)})),e.error&&r.a.createElement(be.a,null,"Choose genre."))})),r.a.createElement("div",{className:"buttons-wrapper flex justify-center"},r.a.createElement(J.a,{variant:"contained",size:"large",color:"primary",type:"submit"},i?r.a.createElement(Oe.a,{color:"inherit"}):"save"),r.a.createElement(J.a,{variant:"contained",size:"large",type:"button",onClick:u.bind(this)},"cancel"))))},ye=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this))).handleInputChange=function(e,t){var a=t.target.value;a.length&&!a[0]&&a.shift();var r=Object(h.a)({},n.state.selectedMovie);r[e]=a,n.setState({selectedMovie:r})},n.resetErrors=function(){var e=n.state.textFields;e.forEach(function(e){e.error=!1}),n.setState({textFields:e})},n.state={selectedMovie:e.selectedMovie,isClosing:!1,isWorking:!1,textFields:_.textFields,addMovie:!e.selectedMovie.title},n.state.textFields.forEach(function(e){e.error=!1,e.onChange=n.handleInputChange}),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.selectedMovie,t=this.state,n=t.isWorking,a=t.isClosing,i=t.addMovie,o=t.textFields,c=this.props,s=c.onSubmit,l=c.onClose,u={movie:e,isWorking:n,isClosing:a,addMovie:i,textFields:o,onSubmit:s.bind(this),onClose:l.bind(this)};return r.a.createElement(ge,{props:u})}}]),t}(a.Component);var Me=Object(m.b)(function(e){return{selectedMovie:e.selectedMovie,movies:e.movies}},function(e){return{onSubmit:function(){var t=Object(j.a)(x.a.mark(function t(n){var a=this;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),this.resetErrors(),_.validate.apply(this)){t.next=10;break}return this.state.addMovie?e(F(this.state.selectedMovie)):e(R(this.state.selectedMovie)),t.next=7,this.setState({isWorking:!0});case 7:return t.next=9,setTimeout(Object(j.a)(x.a.mark(function e(){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({isClosing:!0});case 2:case"end":return e.stop()}},e,this)})),700);case 9:setTimeout(function(){e(G())},1400);case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),onClose:function(){var t=Object(j.a)(x.a.mark(function t(){return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({isClosing:!0});case 2:setTimeout(function(){e(G())},700);case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}})(ye),ke=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"movies-page"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:this.props.selectedMovie.id?"top-wrapper":"top-wrapper sticky"},r.a.createElement("h4",{className:"capitalize"},"your movie library"),r.a.createElement(J.a,{color:"primary",variant:"outlined",onClick:this.props.onAddMovieClick},r.a.createElement("i",{className:"fas fa-plus"}),"Add Movie")),r.a.createElement(se,{store:k}),this.props.selectedMovie.id&&r.a.createElement(Me,{store:k})))}}]),t}(a.Component);var Ce=Object(m.b)(function(e){return{selectedMovie:e.selectedMovie}},function(e){return{onAddMovieClick:function(){e(K(null))}}})(ke);var xe=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container flex"},r.a.createElement("small",null,"Built By Noam Kleiner")))},je=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onLoad()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement($,null),r.a.createElement(ee,{store:k}),r.a.createElement(Ce,{store:k}),r.a.createElement(xe,null))}}]),t}(a.Component);var we=Object(m.b)(function(e){return{movies:e.movies,isDeleteMsgOpen:e.isDeleteMsgOpen}},function(e){return{onLoad:function(){e(W())}}})(je);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(m.a,{store:k},r.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[118,2,1]]]);
//# sourceMappingURL=main.f6174d93.chunk.js.map