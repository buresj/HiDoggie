(window.webpackJsonpdogbot=window.webpackJsonpdogbot||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/5554.0014511f.jpg"},17:function(e,t,a){e.exports=a.p+"static/media/bruno_avatar.e81b77e6.png"},18:function(e,t,a){e.exports=a.p+"static/media/logo.47ae5de7.png"},28:function(e,t,a){e.exports=a(40)},40:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(5),l=a.n(r),o=a(13),s=a.n(o),m=a(16),u=a.n(m),d=a(17),g=a.n(d),c=a(18),p=a.n(c),v=a(19),h=a(6),b=a(20),k=a(21),E=a(24),f=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(b.a)(this,Object(k.a)(t).call(this,e))).state={name:"",email:""},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.steps,t=e.name,a=e.email;this.setState({name:t,email:a})}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email;return i.a.createElement("div",{style:{width:"100%"}},i.a.createElement("h3",null,"Summary"),i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"Name"),i.a.createElement("td",null,t.value)),i.a.createElement("tr",null,i.a.createElement("td",null,"Email"),i.a.createElement("td",null,a.value)))))}}]),t}(n.Component);f.defaultProps={steps:void 0};var y=function(e){return i.a.createElement(s.a,{headerTitle:"Hi Doggie \ud83d\udc36 App",placeholder:"Napi\u0161 zpr\xe1vu...",botAvatar:g.a,botDelay:1e3,steps:[{id:"1",message:"Haf! Jmenuji se Bruno! \ud83d\udc3e a zrovna te\u010f bydl\xedm v \xfatulku Handipet Rescue kousek od M\u011bln\xedka",trigger:"2"},{id:"2",message:"Jak se jmenuje\u0161?",trigger:"3"},{id:"3",user:!0,trigger:"4"},{id:"4",message:"Pac {previousValue}!",trigger:"5"},{id:"5",message:"Na co se chce\u0161 zeptat?",trigger:"6"},{id:"6",options:[{value:1,label:"Jak\xfd je tv\u016fj p\u0159\xedb\u011bh?",trigger:"10"},{value:2,label:"Jak m\u016f\u017eu pomoci?",trigger:"8"}]},{id:"10",message:"Po\u010dkej, n\u011bkde m\xe1m odkaz na \u010dl\xe1nek, kter\xfd o m\u011b napsali. \u2b50\u2b50\u2b50",trigger:"7"},{id:"7",component:i.a.createElement("a",{href:"https://www.handipet.org/2019/08/14/bruno-2/"},i.a.createElement("h2",null,"BRUNO \u2013 DOBROTIV\xdd OBR S NEMOCN\xddM SRDCEM"),i.a.createElement("img",{src:p.a,width:"200"})),trigger:"11"},{id:"8",message:"Po\u0161li n\xe1m hromadu pi\u0161kot\u016f!",trigger:"9"},{id:"9",component:i.a.createElement("img",{src:u.a,height:"200",width:"200"}),trigger:"11"},{id:"11",message:"D\u011bkujeme za z\xe1jem, m\u016f\u017eu se T\u011b zeptat na kontakt, abychom ti mohli poslat novinky?",trigger:"12"},{id:"12",options:[{value:1,label:"Ur\u010dit\u011b!",trigger:"13"},{value:2,label:"Ne d\xedky \ud83d\ude0a",end:!0}]},{id:"13",message:"Jak se jmenuje\u0161?",trigger:"name"},{id:"name",user:!0,trigger:"14"},{id:"14",message:"Kam ti m\u016f\u017eeme napsat?",trigger:"email"},{id:"email",user:!0,trigger:"15"},{id:"15",message:"Bezva - tady je shrnut\xed:",trigger:"review"},{id:"review",component:i.a.createElement(f,null),asMessage:!0,trigger:"update"},{id:"update",message:"Chce\u0161 zm\u011bnit n\u011bkter\xe9 z \xfadaj\u016f?",trigger:"update-question"},{id:"update-question",options:[{value:"yes",label:"Yes",trigger:"update-yes"},{value:"no",label:"No",trigger:"end-message"}]},{id:"update-yes",message:"Co si p\u0159eje\u0161 zm\u011bnit?",trigger:"update-fields"},{id:"update-fields",options:[{value:"name",label:"Name",trigger:"update-name"},{value:"email",label:"Email",trigger:"update-email"}]},{id:"update-name",update:"name",trigger:"15"},{id:"update-email",update:"email",trigger:"15"},{id:"end-message",message:"D\xedky! V\u0161e je ulo\u017eeno a brzy Ti nap\xed\u0161eme!",end:!0}]})},w=a(53),j=function(){return i.a.createElement("div",{style:{padding:"25px"}},i.a.createElement(w.a,{variant:"contained",color:"secondary",onClick:function(){return window.location.reload()}},"Refresh"))};var z=function(){return i.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100vh"}},i.a.createElement(j,null),i.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.db004da3.chunk.js.map