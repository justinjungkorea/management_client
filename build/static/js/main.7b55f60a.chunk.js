(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),i=a.n(l),o=(a(99),a(58)),s=a.n(o),c=a(76),u=a(19),m=a(20),h=a(24),p=a(21),d=a(25),f=a(52),b=a(173),g=a(174),E=a(185),v=a(172),C=a(171),j=a(168),y=a(170),O=a(135),w=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.state={open:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"deleteCustomer",value:function(e){fetch("http://58.225.16.216:5000/api/customers/"+e,{method:"DELETE"}),setTimeout(this.props.stateRefresh,50)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(j.a,{variant:"contained",color:"secondary",onClick:this.handleClickOpen},"\uc0ad\uc81c"),r.a.createElement(E.a,{open:this.state.open,onClose:this.handleClose},r.a.createElement(y.a,{onClose:this.handleClose},"\uc0ad\uc81c \uacbd\uace0"),r.a.createElement(C.a,null,r.a.createElement(O.a,{gutterBottom:!0},"\uc120\ud0dd\ud55c \uace0\uac1d \uc815\ubcf4\uac00 \uc0ad\uc81c\ub429\ub2c8\ub2e4.")),r.a.createElement(v.a,null,r.a.createElement(j.a,{variant:"contained",color:"primary",onClick:function(t){e.deleteCustomer(e.props.id)}},"\uc0ad\uc81c"),r.a.createElement(j.a,{variant:"outlined",color:"primary",onClick:this.handleClose},"\ub2eb\uae30"))))}}]),t}(r.a.Component),k=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(g.a,null,this.props.id),r.a.createElement(g.a,null,r.a.createElement("img",{src:this.props.image,alt:"profile",width:"64"})),r.a.createElement(g.a,null,this.props.name),r.a.createElement(g.a,null,this.props.gender),r.a.createElement(g.a,null,this.props.job),r.a.createElement(g.a,null,r.a.createElement(w,{stateRefresh:this.props.stateRefresh,id:this.props.id})))}}]),t}(r.a.Component),N=a(80),S=a(183),R=a(4),x=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),a.addCustomer().then(function(e){console.log(e.data),a.props.stateRefresh()}),a.setState({file:null,userName:"",gender:"",job:"",fileName:"",open:!1})},a.handleFileChage=function(e){a.setState({file:e.target.files[0],fileName:e.target.value})},a.handleValueChange=function(e){var t={};t[e.target.name]=e.target.value,a.setState(t)},a.addCustomer=function(){var e=new FormData;e.append("image",a.state.file),e.append("name",a.state.userName),e.append("gender",a.state.gender),e.append("job",a.state.job);return Object(N.post)("http://58.225.16.216:5000/api/customers",e,{headers:{"content-type":"multipart/form-data"}})},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({file:null,userName:"",gender:"",job:"",fileName:"",open:!1})},a.state={file:null,userName:"",gender:"",job:"",fileName:"",open:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(j.a,{variant:"contained",color:"primary",onClick:this.handleClickOpen},"\uace0\uac1d \ucd94\uac00\ud558\uae30"),r.a.createElement(E.a,{open:this.state.open,onClose:this.handleClose},r.a.createElement(y.a,null,"\uace0\uac1d \ucd94\uac00"),r.a.createElement(C.a,null,r.a.createElement("input",{className:e.hidden,accept:"image/*",id:"raised-button-file",type:"file",file:this.state.file,value:this.state.fileName,onChange:this.handleFileChage}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"raised-button-file"},r.a.createElement(j.a,{variant:"contained",color:"primary",component:"span",name:"file"},""===this.state.fileName?"\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0 \uc120\ud0dd":this.state.fileName)),r.a.createElement("br",null),r.a.createElement(S.a,{label:"\uc774\ub984",type:"text",name:"userName",value:this.state.userName,onChange:this.handleValueChange}),r.a.createElement("br",null),r.a.createElement(S.a,{label:"\uc131\ubcc4",type:"text",name:"gender",value:this.state.gender,onChange:this.handleValueChange}),r.a.createElement("br",null),r.a.createElement(S.a,{label:"\uc9c1\uc5c5",type:"text",name:"job",value:this.state.job,onChange:this.handleValueChange}),r.a.createElement("br",null)),r.a.createElement(v.a,null,r.a.createElement(j.a,{variant:"contained",color:"primary",onClick:this.handleFormSubmit},"\ucd94\uac00"),r.a.createElement(j.a,{variant:"outlined",color:"primary",onClick:this.handleClose},"\ub2eb\uae30"))))}}]),t}(r.a.Component),F=Object(R.a)(function(e){return{hidden:{display:"none"}}})(x),I=(a(131),a(179)),B=a(180),K=a(181),V=a(182),D=a(134),L=a(176),W=a(177),A=a(178),T=a(187),G=a(13),H=a(81),J=a.n(H),_=a(82),z=a.n(_),M=a(175),P=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).stateRefresh=function(){a.setState({customers:"",completed:0,searchKeyword:""}),a.callApi().then(function(e){return a.setState({customers:e})}).catch(function(e){return console.log(e)})},a.callApi=Object(c.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://58.225.16.216:5000/api/customers");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}},e)})),a.progress=function(){var e=a.state.completed;a.setState({completed:e>=100?0:e+1})},a.handleValueChange=function(e){var t={};t[e.target.name]=e.target.value,a.setState(t)},a.state={customers:"",completed:0,searchKeyword:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(this.progress,20),this.callApi().then(function(t){return e.setState({customers:t})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(M.a,null,r.a.createElement(L.a,{position:"static"},r.a.createElement(W.a,null,r.a.createElement(A.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"Open drawer"},r.a.createElement(J.a,null)),r.a.createElement(O.a,{className:t.title,variant:"h6",noWrap:!0},"\uace0\uac1d \uad00\ub9ac \uc2dc\uc2a4\ud15c"),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(z.a,null)),r.a.createElement(T.a,{placeholder:"\uac80\uc0c9\ud558\uae30",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"Search"},name:"searchKeyword",value:this.state.searchKeyword,onChange:this.handleValueChange})))),r.a.createElement("div",{className:t.menu},r.a.createElement(F,{stateRefresh:this.stateRefresh})),r.a.createElement(D.a,{className:t.paper},r.a.createElement(I.a,{className:t.table},r.a.createElement(B.a,null,r.a.createElement(b.a,null,["\ubc88\ud638","\uc774\ubbf8\uc9c0","\uc774\ub984","\uc131\ubcc4","\uc9c1\uc5c5","\uc124\uc815"].map(function(e){return r.a.createElement(g.a,{className:t.tableHead},e)}))),r.a.createElement(K.a,null,this.state.customers?this.state.customers.filter(function(t){return t.name.indexOf(e.state.searchKeyword)>-1}).map(function(t){return r.a.createElement(k,{stateRefresh:e.stateRefresh,key:t._id,id:t._id,image:t.image,name:t.name,gender:t.gender,job:t.job})}):r.a.createElement(b.a,null,r.a.createElement(g.a,{colSpan:"5",align:"center"},r.a.createElement(V.a,{className:t.progress,variant:"determinate",value:this.state.completed}))))))))}}]),t}(n.Component),$=Object(R.a)(function(e){return{root:{width:"100%",minWidth:1080},paper:{marginLeft:18,marginRight:18},progress:{margin:2*e.spacing.unit},grow:{flexGrow:1},tableHead:{fontSize:"1.0rem"},menu:{marginTop:15,marginBottom:15,display:"flex",justifyContent:"center"},menuButton:{marginRight:e.spacing(2)},title:Object(f.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(f.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(G.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(G.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(f.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}})(P);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=a(83),Q=a(186),U=Object(q.a)({typography:{fontFamily:'"Noto Sans KR", serif'}});i.a.render(r.a.createElement(Q.a,{theme:U},r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},94:function(e,t,a){e.exports=a(132)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.7b55f60a.chunk.js.map