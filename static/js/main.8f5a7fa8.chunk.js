(this["webpackJsonpmoz-todo-react"]=this["webpackJsonpmoz-todo-react"]||[]).push([[0],{144:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(41),l=a.n(r),u=(a(91),a(17)),o=a(13),i=a(61),s=(a(97),i.a.initializeApp({apiKey:"AIzaSyCBZmV5hJZiUdnzqbkYYei35PcAkpIzBZs",authDomain:"lifeinnumbers-7adc7.firebaseapp.com",projectId:"lifeinnumbers-7adc7",storageBucket:"lifeinnumbers-7adc7.appspot.com",messagingSenderId:"118769306081",appId:"1:118769306081:web:8a68d8c3fed35952a76aa0"})),m=i.a.auth(),d=new i.a.auth.GoogleAuthProvider,b=s,f=c.a.createContext(),p=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(o.a)(a,2),l=r[0],u=r[1],i=Object(n.useState)(null),s=Object(o.a)(i,2),m=s[0],d=s[1];return Object(n.useEffect)((function(){b.auth().onAuthStateChanged((function(e){d(e),u(!1)}))}),[]),l?c.a.createElement("p",null,"Loading..."):c.a.createElement(f.Provider,{value:{currentUser:m}},t)},g=function(){var e=Object(n.useContext)(f).currentUser;return e?c.a.createElement(u.c,{to:"/dashboard"}):c.a.createElement("div",{className:"homecontainer"},c.a.createElement("div",{id:"divLogin",class:"login_screen"},c.a.createElement("h3",null,"Experience the Magic of Quantification!"),c.a.createElement("br",null),c.a.createElement("br",null),e?c.a.createElement("p",null,"You are logged - ",c.a.createElement(u.b,{to:"/dashboard"},"View Dashboard")):c.a.createElement("p",null,c.a.createElement("div",null,c.a.createElement(u.b,{to:"/login",class:"homepagebutton"},"Log In"),c.a.createElement("br",null),c.a.createElement(u.b,{to:"/signup",class:"homepagebutton"},"Sign Up")),c.a.createElement("br",null),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){m.signInWithPopup(d).catch(alert)},class:"homepagebutton"},"Sign In with Google")))))};var E=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],l=a[1];return c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),r.trim()&&(e.addTask(r),l(""))}},c.a.createElement("h2",{className:"label-wrapper"},c.a.createElement("label",{htmlFor:"new-todo-input",className:"label__lg"},"What needs to be done?")),c.a.createElement("input",{type:"text",id:"new-todo-input",className:"input input__lg",name:"text",autoComplete:"off",value:r,onChange:function(e){l(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"btn btn__primary btn__lg"},"Add"))};var v=function(e){return c.a.createElement("button",{type:"button",className:"btn toggle-btn","aria-pressed":e.isPressed,onClick:function(){return e.setFilter(e.name)}},c.a.createElement("span",{className:"visually-hidden"},"Show "),c.a.createElement("span",null,e.name),c.a.createElement("span",{className:"visually-hidden"}," tasks"))},O=a(45),j=a(37),h=c.a.createElement(O.a,{icon:j.b}),k=c.a.createElement(O.a,{icon:j.c});function D(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],l=a[1],u=Object(n.useState)(""),i=Object(o.a)(u,2),s=i[0],m=i[1],d=Object(n.useRef)(null),b=Object(n.useRef)(null),f=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(r);var p=c.a.createElement("form",{className:"stack-small",onSubmit:function(t){t.preventDefault(),s.trim()&&(e.editTask(e.id,s),m(""),l(!1))}},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{id:e.id,className:"todo-text",type:"text",value:s||e.name,onChange:function(e){m(e.target.value)},ref:d})),c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{type:"button",className:"btn todo-cancel",onClick:function(){return l(!1)}},"Cancel",c.a.createElement("span",{className:"visually-hidden"},"renaming ",e.name)),c.a.createElement("button",{type:"submit",className:"btn btn__primary todo-edit"},"Save",c.a.createElement("span",{className:"visually-hidden"},"new name for ",e.name)))),g=c.a.createElement("div",{className:"stack-small"},c.a.createElement("div",{className:"c-cb"},c.a.createElement("input",{id:e.id,type:"checkbox",defaultChecked:e.completed,onChange:function(){return e.toggleTaskCompleted(e.id)}}),c.a.createElement("label",{className:"todo-label",id:"textleft",htmlFor:e.id},e.name)),c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{type:"button",className:"btn",onClick:function(){return l(!0)},ref:b},h," ",c.a.createElement("span",{className:"visually-hidden"},e.name)),c.a.createElement("button",{type:"button",className:"btn btn__danger",onClick:function(){return e.deleteTask(e.id)}},k,"  ",c.a.createElement("span",{className:"visually-hidden"},e.name))));return Object(n.useEffect)((function(){!f&&r&&d.current.focus(),f&&!r&&b.current.focus()}),[f,r]),c.a.createElement("li",{className:"todo"},r?p:g)}var w=a(5),S=a(6),y=a(14),N=a(15),x=(n.Component,a(11)),U=a(80),M=a.n(U),F=(a(101),a(19)),C=a(31),Y=[];var P={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},T=Object.keys(P),A=function(){var e=Object(n.useState)(new Date),t=Object(o.a)(e,2),a=(t[0],t[1],Object(n.useState)(Y)),r=Object(o.a)(a,2),l=r[0],i=r[1],s=Object(n.useState)("All"),m=Object(o.a)(s,2),d=m[0],p=m[1],g=Object(n.useState)(0),O=Object(o.a)(g,2),j=O[0],h=O[1];function k(){var e=Object(x.a)(),t=b.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(x.c)(e,"users/"+t.uid+"/"+n+"/maintenance/"),r=[],l={};Object(x.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=e.val().name,n=e.val().completed;!0===String(t).includes("todo")&&(l={id:t,name:a,completed:n},r.push(l))})),i(r)}))}function w(){var e=Object(x.a)(),t=b.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(x.c)(e,"users/"+t.uid+"/"+n+"/maintenance/"),r=0,l=0;Object(x.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=String(t),n=e.val().completed;!0===a.includes("todo")&&(!0===n&&r++,l++)}))}));var u=0,o=0;l>0&&(u=r/l*100,o=Math.floor(u)),h(o);var i=Object(x.c)(e,"users/"+t.uid+"/"+n+"/score/maintenancepercentage/");Object(x.d)(i,{percentage:o})}function S(e){l.map((function(t){if(e===t.id){var a=Object(x.a)(),n=b.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(x.c)(a,"users/"+n.uid+"/"+r+"/maintenance/"+e);return Object(x.d)(l,{todoid:t.id,name:t.name,completed:!t.completed}),Object(F.a)(Object(F.a)({},t),{},{completed:!t.completed})}return t}));k(),w()}function y(e){l.filter((function(t){return e!==t.id}));var t=Object(x.a)(),a=b.auth().currentUser,n=new Date,c=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear(),r=Object(x.c)(t,"users/"+a.uid+"/"+c+"/maintenance/"+e);Object(x.d)(r,{id:null}),k()}function N(e,t){l.map((function(a){if(e===a.id){var n=Object(x.a)(),c=b.auth().currentUser,r=new Date,l=r.getDate()+"-"+(r.getMonth()+1)+"-"+r.getFullYear(),u=Object(x.c)(n,"users/"+c.uid+"/"+l+"/maintenance/"+a.id);return Object(x.d)(u,{todoid:a.id,name:t,completed:a.completed}),Object(F.a)(Object(F.a)({},a),{},{name:t})}return a}));k()}var U=l.filter(P[d]).map((function(e){return c.a.createElement(D,{id:e.id,name:e.name,completed:e.completed,key:e.id,toggleTaskCompleted:S,deleteTask:y,editTask:N})})),M=T.map((function(e){return c.a.createElement(v,{key:e,name:e,isPressed:e===d,setFilter:p})}));var A=1!==U.length?"tasks":"task",I="".concat(U.length," ").concat(A," remaining"),R=Object(n.useRef)(null),_=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(l.length);if(Object(n.useEffect)((function(){k(),w(),l.length-_===-1&&R.current.focus()}),[l.length,_]),!Object(n.useContext)(f).currentUser)return c.a.createElement(u.c,{to:"/"});var z=function(e){return c.a.createElement("div",{className:"Progress","data-value":e.value},c.a.createElement("div",{className:"Progress-Bar",style:{width:"".concat(e.value,"%"),backgroundSize:"".concat(1e4/e.value,"% 100%")}}))};return c.a.createElement("div",null,c.a.createElement("div",{className:"todoapp stack-large"},c.a.createElement("h1",null,"Maintenance"),c.a.createElement(z,{value:j}),c.a.createElement(E,{addTask:function(e){var t={id:"todo-"+Object(C.a)(),name:e,completed:!1},a=Object(x.a)(),n=b.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(x.c)(a,"users/"+n.uid+"/"+r+"/maintenance/"+t.id);Object(x.d)(l,{todoid:t.id,name:t.name,completed:t.completed}),k()}}),c.a.createElement("div",{className:"filters btn-group stack-exception"},M),c.a.createElement("h2",{id:"list-heading",tabIndex:"-1",ref:R},I),c.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},U)))},I=[];var R={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},_=Object.keys(R),z=function(){var e=Object(n.useState)(new Date),t=Object(o.a)(e,2),a=(t[0],t[1],Object(n.useState)(I)),r=Object(o.a)(a,2),l=r[0],i=r[1],s=Object(n.useState)("All"),m=Object(o.a)(s,2),d=m[0],p=m[1],g=Object(n.useState)(0),O=Object(o.a)(g,2),j=O[0],h=O[1];function k(){var e=Object(x.a)(),t=b.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(x.c)(e,"users/"+t.uid+"/"+n+"/bareminimum/"),r=[],l={};Object(x.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=e.val().name,n=e.val().completed;!0===String(t).includes("todo")&&(l={id:t,name:a,completed:n},r.push(l))})),i(r)}))}function w(){var e=Object(x.a)(),t=b.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(x.c)(e,"users/"+t.uid+"/"+n+"/bareminimum/"),r=0,l=0;Object(x.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=String(t),n=e.val().completed;!0===a.includes("todo")&&(!0===n&&r++,l++)}))}));var u=0,o=0;l>0&&(u=r/l*100,o=Math.floor(u)),h(o);var i=Object(x.c)(e,"users/"+t.uid+"/"+n+"/score/bareminimumpercentage/");Object(x.d)(i,{percentage:o})}function S(e){l.map((function(t){if(e===t.id){var a=Object(x.a)(),n=b.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(x.c)(a,"users/"+n.uid+"/"+r+"/bareminimum/"+e);return Object(x.d)(l,{todoid:t.id,name:t.name,completed:!t.completed}),Object(F.a)(Object(F.a)({},t),{},{completed:!t.completed})}return t}));k(),w()}function y(e){l.filter((function(t){return e!==t.id}));var t=Object(x.a)(),a=b.auth().currentUser,n=new Date,c=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear(),r=Object(x.c)(t,"users/"+a.uid+"/"+c+"/bareminimum/"+e);Object(x.d)(r,{id:null}),k()}function N(e,t){l.map((function(a){if(e===a.id){var n=Object(x.a)(),c=b.auth().currentUser,r=new Date,l=r.getDate()+"-"+(r.getMonth()+1)+"-"+r.getFullYear(),u=Object(x.c)(n,"users/"+c.uid+"/"+l+"/bareminimum/"+a.id);return Object(x.d)(u,{todoid:a.id,name:t,completed:a.completed}),Object(F.a)(Object(F.a)({},a),{},{name:t})}return a}));k()}var U=l.filter(R[d]).map((function(e){return c.a.createElement(D,{id:e.id,name:e.name,completed:e.completed,key:e.id,toggleTaskCompleted:S,deleteTask:y,editTask:N})})),M=_.map((function(e){return c.a.createElement(v,{key:e,name:e,isPressed:e===d,setFilter:p})}));var Y=1!==U.length?"tasks":"task",P="".concat(U.length," ").concat(Y," remaining"),T=Object(n.useRef)(null),A=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(l.length);if(Object(n.useEffect)((function(){k(),w(),l.length-A===-1&&T.current.focus()}),[l.length,A]),!Object(n.useContext)(f).currentUser)return c.a.createElement(u.c,{to:"/"});var z=function(e){return c.a.createElement("div",{className:"Progress","data-value":e.value},c.a.createElement("div",{className:"Progress-Bar",style:{width:"".concat(e.value,"%"),backgroundSize:"".concat(1e4/e.value,"% 100%")}}))};return c.a.createElement("div",null,c.a.createElement("div",{className:"todoapp stack-large"},c.a.createElement("h1",null,"Bare Minimum"),c.a.createElement(z,{value:j}),c.a.createElement(E,{addTask:function(e){var t={id:"todo-"+Object(C.a)(),name:e,completed:!1},a=Object(x.a)(),n=b.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(x.c)(a,"users/"+n.uid+"/"+r+"/bareminimum/"+t.id);Object(x.d)(l,{todoid:t.id,name:t.name,completed:t.completed}),k()}}),c.a.createElement("div",{className:"filters btn-group stack-exception"},M),c.a.createElement("h2",{id:"list-heading",tabIndex:"-1",ref:T},P),c.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},U)))},B=[];var L={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},W=Object.keys(L),J=function(){var e=Object(n.useState)(new Date),t=Object(o.a)(e,2),a=(t[0],t[1],Object(n.useState)(B)),r=Object(o.a)(a,2),l=r[0],i=r[1],s=Object(n.useState)("All"),m=Object(o.a)(s,2),d=m[0],p=m[1],g=Object(n.useState)(0),O=Object(o.a)(g,2),j=O[0],h=O[1];function k(){var e=Object(x.a)(),t=b.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(x.c)(e,"users/"+t.uid+"/"+n+"/exceed/"),r=[],l={};Object(x.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=e.val().name,n=e.val().completed;!0===String(t).includes("todo")&&(l={id:t,name:a,completed:n},r.push(l))})),i(r)}))}function w(){var e=Object(x.a)(),t=b.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(x.c)(e,"users/"+t.uid+"/"+n+"/exceed/"),r=0,l=0;Object(x.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=String(t),n=e.val().completed;!0===a.includes("todo")&&(!0===n&&r++,l++)}))}));var u=0,o=0;l>0&&(u=r/l*100,o=Math.floor(u)),h(o);var i=Object(x.c)(e,"users/"+t.uid+"/"+n+"/score/exceedpercentage/");Object(x.d)(i,{percentage:o})}function S(e){l.map((function(t){if(e===t.id){var a=Object(x.a)(),n=b.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(x.c)(a,"users/"+n.uid+"/"+r+"/exceed/"+e);return Object(x.d)(l,{todoid:t.id,name:t.name,completed:!t.completed}),Object(F.a)(Object(F.a)({},t),{},{completed:!t.completed})}return t}));k(),w()}function y(e){l.filter((function(t){return e!==t.id}));var t=Object(x.a)(),a=b.auth().currentUser,n=new Date,c=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear(),r=Object(x.c)(t,"users/"+a.uid+"/"+c+"/exceed/"+e);Object(x.d)(r,{id:null}),k()}function N(e,t){l.map((function(a){if(e===a.id){var n=Object(x.a)(),c=b.auth().currentUser,r=new Date,l=r.getDate()+"-"+(r.getMonth()+1)+"-"+r.getFullYear(),u=Object(x.c)(n,"users/"+c.uid+"/"+l+"/exceed/"+a.id);return Object(x.d)(u,{todoid:a.id,name:t,completed:a.completed}),Object(F.a)(Object(F.a)({},a),{},{name:t})}return a}));k()}var U=l.filter(L[d]).map((function(e){return c.a.createElement(D,{id:e.id,name:e.name,completed:e.completed,key:e.id,toggleTaskCompleted:S,deleteTask:y,editTask:N})})),M=W.map((function(e){return c.a.createElement(v,{key:e,name:e,isPressed:e===d,setFilter:p})}));var Y=1!==U.length?"tasks":"task",P="".concat(U.length," ").concat(Y," remaining"),T=Object(n.useRef)(null),A=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(l.length);if(Object(n.useEffect)((function(){k(),w(),l.length-A===-1&&T.current.focus()}),[l.length,A]),!Object(n.useContext)(f).currentUser)return c.a.createElement(u.c,{to:"/"});var I=function(e){return c.a.createElement("div",{className:"Progress","data-value":e.value},c.a.createElement("div",{className:"Progress-Bar",style:{width:"".concat(e.value,"%"),backgroundSize:"".concat(1e4/e.value,"% 100%")}}))};return c.a.createElement("div",null,c.a.createElement("div",{className:"todoapp stack-large"},c.a.createElement("h1",null,"Exceed"),c.a.createElement(I,{value:j}),c.a.createElement(E,{addTask:function(e){var t={id:"todo-"+Object(C.a)(),name:e,completed:!1},a=Object(x.a)(),n=b.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(x.c)(a,"users/"+n.uid+"/"+r+"/exceed/"+t.id);Object(x.d)(l,{todoid:t.id,name:t.name,completed:t.completed}),k()}}),c.a.createElement("div",{className:"filters btn-group stack-exception"},M),c.a.createElement("h2",{id:"list-heading",tabIndex:"-1",ref:T},P),c.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},U)))},Z=[];var G={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},Q=Object.keys(G),V=function(){var e=Object(n.useState)(new Date),t=Object(o.a)(e,2),a=(t[0],t[1],Object(n.useState)(Z)),r=Object(o.a)(a,2),l=r[0],i=r[1],s=Object(n.useState)("All"),m=Object(o.a)(s,2),d=m[0],p=m[1],g=Object(n.useState)(0),O=Object(o.a)(g,2),j=O[0],h=O[1];function k(){var e=Object(x.a)(),t=b.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(x.c)(e,"users/"+t.uid+"/"+n+"/personal/"),r=[],l={};Object(x.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=e.val().name,n=e.val().completed;!0===String(t).includes("todo")&&(l={id:t,name:a,completed:n},r.push(l))})),i(r)}))}function w(){var e=Object(x.a)(),t=b.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(x.c)(e,"users/"+t.uid+"/"+n+"/personal/"),r=0,l=0;Object(x.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=String(t),n=e.val().completed;!0===a.includes("todo")&&(!0===n&&r++,l++)}))}));var u=0,o=0;l>0&&(u=r/l*100,o=Math.floor(u)),h(o);var i=Object(x.c)(e,"users/"+t.uid+"/"+n+"/score/personalpercentage/");Object(x.d)(i,{percentage:o})}function S(e){var t=l.map((function(t){if(e===t.id){var a=Object(x.a)(),n=b.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(x.c)(a,"users/"+n.uid+"/"+r+"/personal/"+e);return Object(x.d)(l,{todoid:t.id,name:t.name,completed:!t.completed}),Object(F.a)(Object(F.a)({},t),{},{completed:!t.completed})}return t}));i(t),w()}function y(e){l.filter((function(t){return e!==t.id}));var t=Object(x.a)(),a=b.auth().currentUser,n=new Date,c=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear(),r=Object(x.c)(t,"users/"+a.uid+"/"+c+"/personal/"+e);Object(x.d)(r,{id:null}),k()}function N(e,t){l.map((function(a){if(e===a.id){var n=Object(x.a)(),c=b.auth().currentUser,r=new Date,l=r.getDate()+"-"+(r.getMonth()+1)+"-"+r.getFullYear(),u=Object(x.c)(n,"users/"+c.uid+"/"+l+"/personal/"+a.id);return Object(x.d)(u,{todoid:a.id,name:t,completed:a.completed}),Object(F.a)(Object(F.a)({},a),{},{name:t})}return a}));k()}var U=l.filter(G[d]).map((function(e){return c.a.createElement(D,{id:e.id,name:e.name,completed:e.completed,key:e.id,toggleTaskCompleted:S,deleteTask:y,editTask:N})})),M=Q.map((function(e){return c.a.createElement(v,{key:e,name:e,isPressed:e===d,setFilter:p})}));var Y=1!==U.length?"tasks":"task",P=("".concat(U.length," ").concat(Y," remaining"),Object(n.useRef)(null)),T=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(l.length);if(Object(n.useEffect)((function(){k(),w(),l.length-T===-1&&P.current.focus()}),[l.length,T]),!Object(n.useContext)(f).currentUser)return c.a.createElement(u.c,{to:"/"});var A=function(e){return c.a.createElement("div",{className:"Progress","data-value":e.value},c.a.createElement("div",{className:"Progress-Bar",style:{width:"".concat(e.value,"%"),backgroundSize:"".concat(1e4/e.value,"% 100%")}}))};return c.a.createElement("div",null,c.a.createElement("div",{className:"todoapp stack-large"},c.a.createElement("h1",null,"Personal"),c.a.createElement(A,{value:j}),c.a.createElement(E,{addTask:function(e){var t={id:"todo-"+Object(C.a)(),name:e,completed:!1},a=Object(x.a)(),n=b.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(x.c)(a,"users/"+n.uid+"/"+r+"/personal/"+t.id);Object(x.d)(l,{todoid:t.id,name:t.name,completed:t.completed}),k()}}),c.a.createElement("div",{className:"filters btn-group stack-exception"},M),c.a.createElement("h2",{id:"list-heading",tabIndex:"-1",ref:P}),c.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},U)))},q=c.a.createElement(O.a,{icon:j.a}),H=function(){var e=Object(n.useState)(new Date),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),i=Object(o.a)(l,2),s=(i[0],i[1],Object(n.useState)(0)),m=Object(o.a)(s,2),d=(m[0],m[1],Object(n.useState)(0)),p=Object(o.a)(d,2),g=(p[0],p[1],Object(n.useState)(0)),E=Object(o.a)(g,2),v=(E[0],E[1],Object(n.useState)(0)),O=Object(o.a)(v,2),j=O[0],h=O[1];function k(){var e=Object(x.a)(),t=b.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear();Object(x.c)(e,"users/"+t.uid+"/"+n+"/score/");console.log("hiii"),function(){var e=Object(x.a)(),t=b.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(x.c)(e,"users/"+t.uid+"/"+n+"/");Object(x.b)(c,(function(e){var t,a=0;e.forEach((function(e){var t=0,n=0,c=0;e.forEach((function(e){var a=e.val().todoid,c=String(a),r=e.val().completed;!0===c.includes("todo")&&(!0===r&&t++,n++)}));var r=0;n>0&&(r=t/n*100,c=Math.floor(r)),a+=c})),t=Math.floor(a/4),console.log("score "+t),h(t)}))}()}return Object(n.useEffect)((function(){k()}),[]),Object(n.useContext)(f).currentUser?(console.log(a),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"navigation"},c.a.createElement("div",null,c.a.createElement("a",{id:"logo"},"Day Quantifier")),c.a.createElement("nav",null,c.a.createElement("ul",{className:"navlist"},c.a.createElement("li",null,c.a.createElement("a",null,"To do")),c.a.createElement("li",null,c.a.createElement("a",null,"Insights")),c.a.createElement("li",null,c.a.createElement("a",{onClick:function(){return b.auth().signOut()}},"Sign Out"))))),c.a.createElement("div",{className:"text"},q,c.a.createElement("p",null,c.a.createElement("strong",null,"Date:")),function(){var e=c.a.createElement(M.a,{selected:a,onChange:function(e){r(e)}}),t=a;return console.log(t),t.getDate(),t.getMonth(),t.getFullYear(),e}(),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("h1",null,"Your current score for the day is ",j,"/100"),c.a.createElement("br",null),c.a.createElement("h3",null,"Est. time to finish remaining tasks - 04:30:16")),c.a.createElement("div",{className:"taskcontainer"},c.a.createElement(V,null),c.a.createElement(A,null),c.a.createElement(z,null),c.a.createElement(J,null)),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("p",null,"Developed With Music and Love by Pradeep"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null))):c.a.createElement(u.c,{to:"/"})},K=(a(144),function(){return Object(n.useContext)(f).currentUser?c.a.createElement(u.c,{to:"/dashboard"}):c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Log In"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements,a=t.email,n=t.password;try{b.auth().signInWithEmailAndPassword(a.value,n.value).catch((function(e){var t=e.message;window.alert(t)}))}catch(c){}}},c.a.createElement("label",{for:"email"},"Email"),c.a.createElement("input",{type:"email",name:"email",placeholder:"Email"}),c.a.createElement("label",{for:"password"},"Password"),c.a.createElement("input",{type:"password",name:"password",placeholder:"Password"}),c.a.createElement("button",{type:"submit"},"Log In")),c.a.createElement("p",null,c.a.createElement("div",null,c.a.createElement("h5",null," If Haven't Registered, Signup! "),c.a.createElement(u.b,{to:"/signup"},"Sign Up"))))}),X=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],r=t[1];return a?c.a.createElement(u.c,{to:"/dashboard"}):c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Sign Up"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements,n=t.email,l=t.password;try{if(b.auth().createUserWithEmailAndPassword(n.value,l.value).catch((function(e){var t=e.message;window.alert(t)})),r(!0),a)return c.a.createElement(u.c,{to:"/dashboard"})}catch(o){}}},c.a.createElement("label",{for:"email"},"Email"),c.a.createElement("input",{type:"email",name:"email",placeholder:"Email"}),c.a.createElement("label",{for:"password"},"Password"),c.a.createElement("input",{type:"password",name:"password",placeholder:"Password"}),c.a.createElement("button",{type:"submit"},"Register")))},$=function(){return c.a.createElement(p,null,c.a.createElement(u.a,null,c.a.createElement(u.e,null,c.a.createElement(u.d,{exact:!0,path:"/",component:g}),c.a.createElement(u.d,{exact:!0,path:"/dashboard",component:H}),c.a.createElement(u.d,{exact:!0,path:"/login",component:K}),c.a.createElement(u.d,{exact:!0,path:"/signup",component:X}))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement($,null)),document.getElementById("root"))},86:function(e,t,a){e.exports=a(146)},91:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.8f5a7fa8.chunk.js.map