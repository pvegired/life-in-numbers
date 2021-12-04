(this["webpackJsonpmoz-todo-react"]=this["webpackJsonpmoz-todo-react"]||[]).push([[0],{135:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(42),l=a.n(r),u=(a(83),a(147)),o=a(148),i=a(149),s=a(145),m=a(13),d=a(61),b=(a(85),d.a.initializeApp({apiKey:"AIzaSyCBZmV5hJZiUdnzqbkYYei35PcAkpIzBZs",authDomain:"lifeinnumbers-7adc7.firebaseapp.com",projectId:"lifeinnumbers-7adc7",storageBucket:"lifeinnumbers-7adc7.appspot.com",messagingSenderId:"118769306081",appId:"1:118769306081:web:8a68d8c3fed35952a76aa0"})),f=d.a.auth(),p=new d.a.auth.GoogleAuthProvider,g=b,E=c.a.createContext(),v=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(m.a)(a,2),l=r[0],u=r[1],o=Object(n.useState)(null),i=Object(m.a)(o,2),s=i[0],d=i[1];return Object(n.useEffect)((function(){g.auth().onAuthStateChanged((function(e){d(e),u(!1)}))}),[]),l?c.a.createElement("p",null,"Loading..."):c.a.createElement(E.Provider,{value:{currentUser:s}},t)},O=a(146),j=function(){var e=Object(n.useContext)(E).currentUser;return e?c.a.createElement(O.a,{to:"/dashboard"}):c.a.createElement("div",{className:"homecontainer"},c.a.createElement("div",{id:"divLogin",class:"login_screen"},c.a.createElement("h3",null,"Experience the Magic of Quantification!"),c.a.createElement("br",null),c.a.createElement("br",null),e?c.a.createElement("p",null,"You are logged - ",c.a.createElement(s.a,{to:"/dashboard"},"View Dashboard")):c.a.createElement("p",null,c.a.createElement("div",null,c.a.createElement(s.a,{to:"/login",class:"homepagebutton"},"Log In"),c.a.createElement("br",null),c.a.createElement(s.a,{to:"/signup",class:"homepagebutton"},"Sign Up")),c.a.createElement("br",null),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){f.signInWithPopup(p).catch(alert)},class:"homepagebutton"},"Sign In with Google")))))};var h=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),r=a[0],l=a[1];return c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),r.trim()&&(e.addTask(r),l(""))}},c.a.createElement("h2",{className:"label-wrapper"},c.a.createElement("label",{htmlFor:"new-todo-input",className:"label__lg"},"What needs to be done?")),c.a.createElement("input",{type:"text",id:"new-todo-input",className:"input input__lg",name:"text",autoComplete:"off",value:r,onChange:function(e){l(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"btn btn__primary btn__lg"},"Add"))};var k=function(e){return c.a.createElement("button",{type:"button",className:"btn toggle-btn","aria-pressed":e.isPressed,onClick:function(){return e.setFilter(e.name)}},c.a.createElement("span",{className:"visually-hidden"},"Show "),c.a.createElement("span",null,e.name),c.a.createElement("span",{className:"visually-hidden"}," tasks"))},D=a(46),w=a(38),S=c.a.createElement(D.a,{icon:w.b}),y=c.a.createElement(D.a,{icon:w.c});function N(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],l=a[1],u=Object(n.useState)(""),o=Object(m.a)(u,2),i=o[0],s=o[1],d=Object(n.useRef)(null),b=Object(n.useRef)(null),f=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(r);var p=c.a.createElement("form",{className:"stack-small",onSubmit:function(t){t.preventDefault(),i.trim()&&(e.editTask(e.id,i),s(""),l(!1))}},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{id:e.id,className:"todo-text",type:"text",value:i||e.name,onChange:function(e){s(e.target.value)},ref:d})),c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{type:"button",className:"btn todo-cancel",onClick:function(){return l(!1)}},"Cancel",c.a.createElement("span",{className:"visually-hidden"},"renaming ",e.name)),c.a.createElement("button",{type:"submit",className:"btn btn__primary todo-edit"},"Save",c.a.createElement("span",{className:"visually-hidden"},"new name for ",e.name)))),g=c.a.createElement("div",{className:"stack-small"},c.a.createElement("div",{className:"c-cb"},c.a.createElement("input",{id:e.id,type:"checkbox",defaultChecked:e.completed,onChange:function(){return e.toggleTaskCompleted(e.id)}}),c.a.createElement("label",{className:"todo-label",id:"textleft",htmlFor:e.id},e.name)),c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{type:"button",className:"btn",onClick:function(){return l(!0)},ref:b},S," ",c.a.createElement("span",{className:"visually-hidden"},e.name)),c.a.createElement("button",{type:"button",className:"btn btn__danger",onClick:function(){return e.deleteTask(e.id)}},y,"  ",c.a.createElement("span",{className:"visually-hidden"},e.name))));return Object(n.useEffect)((function(){!f&&r&&d.current.focus(),f&&!r&&b.current.focus()}),[f,r]),c.a.createElement("li",{className:"todo"},r?p:g)}var x=a(5),U=a(6),M=a(14),F=a(15),C=(n.Component,a(10)),Y=a(72),P=a.n(Y),T=(a(92),a(18)),A=a(31),I=[];var R={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},_=Object.keys(R),z=function(){var e=Object(n.useState)(new Date),t=Object(m.a)(e,2),a=(t[0],t[1],Object(n.useState)(I)),r=Object(m.a)(a,2),l=r[0],u=r[1],o=Object(n.useState)("All"),i=Object(m.a)(o,2),s=i[0],d=i[1],b=Object(n.useState)(0),f=Object(m.a)(b,2),p=f[0],v=f[1];function j(){var e=Object(C.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(C.c)(e,"users/"+t.uid+"/"+n+"/maintenance/"),r=[],l={};Object(C.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=e.val().name,n=e.val().completed;!0===String(t).includes("todo")&&(l={id:t,name:a,completed:n},r.push(l))})),u(r)}))}function D(){var e=Object(C.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(C.c)(e,"users/"+t.uid+"/"+n+"/maintenance/"),r=0,l=0;Object(C.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=String(t),n=e.val().completed;!0===a.includes("todo")&&(!0===n&&r++,l++)}))}));var u=0,o=0;l>0&&(u=r/l*100,o=Math.floor(u)),v(o);var i=Object(C.c)(e,"users/"+t.uid+"/"+n+"/score/maintenancepercentage/");Object(C.d)(i,{percentage:o})}function w(e){l.map((function(t){if(e===t.id){var a=Object(C.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(C.c)(a,"users/"+n.uid+"/"+r+"/maintenance/"+e);return Object(C.d)(l,{todoid:t.id,name:t.name,completed:!t.completed}),Object(T.a)(Object(T.a)({},t),{},{completed:!t.completed})}return t}));j(),D()}function S(e){l.filter((function(t){return e!==t.id}));var t=Object(C.a)(),a=g.auth().currentUser,n=new Date,c=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear(),r=Object(C.c)(t,"users/"+a.uid+"/"+c+"/maintenance/"+e);Object(C.d)(r,{id:null}),j()}function y(e,t){l.map((function(a){if(e===a.id){var n=Object(C.a)(),c=g.auth().currentUser,r=new Date,l=r.getDate()+"-"+(r.getMonth()+1)+"-"+r.getFullYear(),u=Object(C.c)(n,"users/"+c.uid+"/"+l+"/maintenance/"+a.id);return Object(C.d)(u,{todoid:a.id,name:t,completed:a.completed}),Object(T.a)(Object(T.a)({},a),{},{name:t})}return a}));j()}var x=l.filter(R[s]).map((function(e){return c.a.createElement(N,{id:e.id,name:e.name,completed:e.completed,key:e.id,toggleTaskCompleted:w,deleteTask:S,editTask:y})})),U=_.map((function(e){return c.a.createElement(k,{key:e,name:e,isPressed:e===s,setFilter:d})}));var M=1!==x.length?"tasks":"task",F="".concat(x.length," ").concat(M," remaining"),Y=Object(n.useRef)(null),P=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(l.length);if(Object(n.useEffect)((function(){j(),D(),l.length-P===-1&&Y.current.focus()}),[l.length,P]),!Object(n.useContext)(E).currentUser)return c.a.createElement(O.a,{to:"/"});var z=function(e){return c.a.createElement("div",{className:"Progress","data-value":e.value},c.a.createElement("div",{className:"Progress-Bar",style:{width:"".concat(e.value,"%"),backgroundSize:"".concat(1e4/e.value,"% 100%")}}))};return c.a.createElement("div",null,c.a.createElement("div",{className:"todoapp stack-large"},c.a.createElement("h1",null,"Maintenance"),c.a.createElement(z,{value:p}),c.a.createElement(h,{addTask:function(e){var t={id:"todo-"+Object(A.a)(),name:e,completed:!1},a=Object(C.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(C.c)(a,"users/"+n.uid+"/"+r+"/maintenance/"+t.id);Object(C.d)(l,{todoid:t.id,name:t.name,completed:t.completed}),j()}}),c.a.createElement("div",{className:"filters btn-group stack-exception"},U),c.a.createElement("h2",{id:"list-heading",tabIndex:"-1",ref:Y},F),c.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},x)))},B=[];var L={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},W=Object.keys(L),J=function(){var e=Object(n.useState)(new Date),t=Object(m.a)(e,2),a=(t[0],t[1],Object(n.useState)(B)),r=Object(m.a)(a,2),l=r[0],u=r[1],o=Object(n.useState)("All"),i=Object(m.a)(o,2),s=i[0],d=i[1],b=Object(n.useState)(0),f=Object(m.a)(b,2),p=f[0],v=f[1];function j(){var e=Object(C.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(C.c)(e,"users/"+t.uid+"/"+n+"/bareminimum/"),r=[],l={};Object(C.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=e.val().name,n=e.val().completed;!0===String(t).includes("todo")&&(l={id:t,name:a,completed:n},r.push(l))})),u(r)}))}function D(){var e=Object(C.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(C.c)(e,"users/"+t.uid+"/"+n+"/bareminimum/"),r=0,l=0;Object(C.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=String(t),n=e.val().completed;!0===a.includes("todo")&&(!0===n&&r++,l++)}))}));var u=0,o=0;l>0&&(u=r/l*100,o=Math.floor(u)),v(o);var i=Object(C.c)(e,"users/"+t.uid+"/"+n+"/score/bareminimumpercentage/");Object(C.d)(i,{percentage:o})}function w(e){l.map((function(t){if(e===t.id){var a=Object(C.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(C.c)(a,"users/"+n.uid+"/"+r+"/bareminimum/"+e);return Object(C.d)(l,{todoid:t.id,name:t.name,completed:!t.completed}),Object(T.a)(Object(T.a)({},t),{},{completed:!t.completed})}return t}));j(),D()}function S(e){l.filter((function(t){return e!==t.id}));var t=Object(C.a)(),a=g.auth().currentUser,n=new Date,c=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear(),r=Object(C.c)(t,"users/"+a.uid+"/"+c+"/bareminimum/"+e);Object(C.d)(r,{id:null}),j()}function y(e,t){l.map((function(a){if(e===a.id){var n=Object(C.a)(),c=g.auth().currentUser,r=new Date,l=r.getDate()+"-"+(r.getMonth()+1)+"-"+r.getFullYear(),u=Object(C.c)(n,"users/"+c.uid+"/"+l+"/bareminimum/"+a.id);return Object(C.d)(u,{todoid:a.id,name:t,completed:a.completed}),Object(T.a)(Object(T.a)({},a),{},{name:t})}return a}));j()}var x=l.filter(L[s]).map((function(e){return c.a.createElement(N,{id:e.id,name:e.name,completed:e.completed,key:e.id,toggleTaskCompleted:w,deleteTask:S,editTask:y})})),U=W.map((function(e){return c.a.createElement(k,{key:e,name:e,isPressed:e===s,setFilter:d})}));var M=1!==x.length?"tasks":"task",F="".concat(x.length," ").concat(M," remaining"),Y=Object(n.useRef)(null),P=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(l.length);if(Object(n.useEffect)((function(){j(),D(),l.length-P===-1&&Y.current.focus()}),[l.length,P]),!Object(n.useContext)(E).currentUser)return c.a.createElement(O.a,{to:"/"});var I=function(e){return c.a.createElement("div",{className:"Progress","data-value":e.value},c.a.createElement("div",{className:"Progress-Bar",style:{width:"".concat(e.value,"%"),backgroundSize:"".concat(1e4/e.value,"% 100%")}}))};return c.a.createElement("div",null,c.a.createElement("div",{className:"todoapp stack-large"},c.a.createElement("h1",null,"Bare Minimum"),c.a.createElement(I,{value:p}),c.a.createElement(h,{addTask:function(e){var t={id:"todo-"+Object(A.a)(),name:e,completed:!1},a=Object(C.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(C.c)(a,"users/"+n.uid+"/"+r+"/bareminimum/"+t.id);Object(C.d)(l,{todoid:t.id,name:t.name,completed:t.completed}),j()}}),c.a.createElement("div",{className:"filters btn-group stack-exception"},U),c.a.createElement("h2",{id:"list-heading",tabIndex:"-1",ref:Y},F),c.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},x)))},Z=[];var G={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},Q=Object.keys(G),V=function(){var e=Object(n.useState)(new Date),t=Object(m.a)(e,2),a=(t[0],t[1],Object(n.useState)(Z)),r=Object(m.a)(a,2),l=r[0],u=r[1],o=Object(n.useState)("All"),i=Object(m.a)(o,2),s=i[0],d=i[1],b=Object(n.useState)(0),f=Object(m.a)(b,2),p=f[0],v=f[1];function j(){var e=Object(C.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(C.c)(e,"users/"+t.uid+"/"+n+"/exceed/"),r=[],l={};Object(C.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=e.val().name,n=e.val().completed;!0===String(t).includes("todo")&&(l={id:t,name:a,completed:n},r.push(l))})),u(r)}))}function D(){var e=Object(C.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(C.c)(e,"users/"+t.uid+"/"+n+"/exceed/"),r=0,l=0;Object(C.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=String(t),n=e.val().completed;!0===a.includes("todo")&&(!0===n&&r++,l++)}))}));var u=0,o=0;l>0&&(u=r/l*100,o=Math.floor(u)),v(o);var i=Object(C.c)(e,"users/"+t.uid+"/"+n+"/score/exceedpercentage/");Object(C.d)(i,{percentage:o})}function w(e){l.map((function(t){if(e===t.id){var a=Object(C.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(C.c)(a,"users/"+n.uid+"/"+r+"/exceed/"+e);return Object(C.d)(l,{todoid:t.id,name:t.name,completed:!t.completed}),Object(T.a)(Object(T.a)({},t),{},{completed:!t.completed})}return t}));j(),D()}function S(e){l.filter((function(t){return e!==t.id}));var t=Object(C.a)(),a=g.auth().currentUser,n=new Date,c=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear(),r=Object(C.c)(t,"users/"+a.uid+"/"+c+"/exceed/"+e);Object(C.d)(r,{id:null}),j()}function y(e,t){l.map((function(a){if(e===a.id){var n=Object(C.a)(),c=g.auth().currentUser,r=new Date,l=r.getDate()+"-"+(r.getMonth()+1)+"-"+r.getFullYear(),u=Object(C.c)(n,"users/"+c.uid+"/"+l+"/exceed/"+a.id);return Object(C.d)(u,{todoid:a.id,name:t,completed:a.completed}),Object(T.a)(Object(T.a)({},a),{},{name:t})}return a}));j()}var x=l.filter(G[s]).map((function(e){return c.a.createElement(N,{id:e.id,name:e.name,completed:e.completed,key:e.id,toggleTaskCompleted:w,deleteTask:S,editTask:y})})),U=Q.map((function(e){return c.a.createElement(k,{key:e,name:e,isPressed:e===s,setFilter:d})}));var M=1!==x.length?"tasks":"task",F="".concat(x.length," ").concat(M," remaining"),Y=Object(n.useRef)(null),P=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(l.length);if(Object(n.useEffect)((function(){j(),D(),l.length-P===-1&&Y.current.focus()}),[l.length,P]),!Object(n.useContext)(E).currentUser)return c.a.createElement(O.a,{to:"/"});var I=function(e){return c.a.createElement("div",{className:"Progress","data-value":e.value},c.a.createElement("div",{className:"Progress-Bar",style:{width:"".concat(e.value,"%"),backgroundSize:"".concat(1e4/e.value,"% 100%")}}))};return c.a.createElement("div",null,c.a.createElement("div",{className:"todoapp stack-large"},c.a.createElement("h1",null,"Exceed"),c.a.createElement(I,{value:p}),c.a.createElement(h,{addTask:function(e){var t={id:"todo-"+Object(A.a)(),name:e,completed:!1},a=Object(C.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(C.c)(a,"users/"+n.uid+"/"+r+"/exceed/"+t.id);Object(C.d)(l,{todoid:t.id,name:t.name,completed:t.completed}),j()}}),c.a.createElement("div",{className:"filters btn-group stack-exception"},U),c.a.createElement("h2",{id:"list-heading",tabIndex:"-1",ref:Y},F),c.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},x)))},q=[];var H={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},K=Object.keys(H),X=function(){var e=Object(n.useState)(new Date),t=Object(m.a)(e,2),a=(t[0],t[1],Object(n.useState)(q)),r=Object(m.a)(a,2),l=r[0],u=r[1],o=Object(n.useState)("All"),i=Object(m.a)(o,2),s=i[0],d=i[1],b=Object(n.useState)(0),f=Object(m.a)(b,2),p=f[0],v=f[1];function j(){var e=Object(C.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(C.c)(e,"users/"+t.uid+"/"+n+"/personal/"),r=[],l={};Object(C.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=e.val().name,n=e.val().completed;!0===String(t).includes("todo")&&(l={id:t,name:a,completed:n},r.push(l))})),u(r)}))}function D(){var e=Object(C.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(C.c)(e,"users/"+t.uid+"/"+n+"/personal/"),r=0,l=0;Object(C.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=String(t),n=e.val().completed;!0===a.includes("todo")&&(!0===n&&r++,l++)}))}));var u=0,o=0;l>0&&(u=r/l*100,o=Math.floor(u)),v(o);var i=Object(C.c)(e,"users/"+t.uid+"/"+n+"/score/personalpercentage/");Object(C.d)(i,{percentage:o})}function w(e){var t=l.map((function(t){if(e===t.id){var a=Object(C.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(C.c)(a,"users/"+n.uid+"/"+r+"/personal/"+e);return Object(C.d)(l,{todoid:t.id,name:t.name,completed:!t.completed}),Object(T.a)(Object(T.a)({},t),{},{completed:!t.completed})}return t}));u(t),D()}function S(e){l.filter((function(t){return e!==t.id}));var t=Object(C.a)(),a=g.auth().currentUser,n=new Date,c=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear(),r=Object(C.c)(t,"users/"+a.uid+"/"+c+"/personal/"+e);Object(C.d)(r,{id:null}),j()}function y(e,t){l.map((function(a){if(e===a.id){var n=Object(C.a)(),c=g.auth().currentUser,r=new Date,l=r.getDate()+"-"+(r.getMonth()+1)+"-"+r.getFullYear(),u=Object(C.c)(n,"users/"+c.uid+"/"+l+"/personal/"+a.id);return Object(C.d)(u,{todoid:a.id,name:t,completed:a.completed}),Object(T.a)(Object(T.a)({},a),{},{name:t})}return a}));j()}var x=l.filter(H[s]).map((function(e){return c.a.createElement(N,{id:e.id,name:e.name,completed:e.completed,key:e.id,toggleTaskCompleted:w,deleteTask:S,editTask:y})})),U=K.map((function(e){return c.a.createElement(k,{key:e,name:e,isPressed:e===s,setFilter:d})}));var M=1!==x.length?"tasks":"task",F=("".concat(x.length," ").concat(M," remaining"),Object(n.useRef)(null)),Y=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(l.length);if(Object(n.useEffect)((function(){j(),D(),l.length-Y===-1&&F.current.focus()}),[l.length,Y]),!Object(n.useContext)(E).currentUser)return c.a.createElement(O.a,{to:"/"});var P=function(e){return c.a.createElement("div",{className:"Progress","data-value":e.value},c.a.createElement("div",{className:"Progress-Bar",style:{width:"".concat(e.value,"%"),backgroundSize:"".concat(1e4/e.value,"% 100%")}}))};return c.a.createElement("div",null,c.a.createElement("div",{className:"todoapp stack-large"},c.a.createElement("h1",null,"Personal"),c.a.createElement(P,{value:p}),c.a.createElement(h,{addTask:function(e){var t={id:"todo-"+Object(A.a)(),name:e,completed:!1},a=Object(C.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(C.c)(a,"users/"+n.uid+"/"+r+"/personal/"+t.id);Object(C.d)(l,{todoid:t.id,name:t.name,completed:t.completed}),j()}}),c.a.createElement("div",{className:"filters btn-group stack-exception"},U),c.a.createElement("h2",{id:"list-heading",tabIndex:"-1",ref:F}),c.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},x)))},$=c.a.createElement(D.a,{icon:w.a}),ee=function(){var e=Object(n.useState)(new Date),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),u=Object(m.a)(l,2),o=(u[0],u[1],Object(n.useState)(0)),i=Object(m.a)(o,2),s=(i[0],i[1],Object(n.useState)(0)),d=Object(m.a)(s,2),b=(d[0],d[1],Object(n.useState)(0)),f=Object(m.a)(b,2),p=(f[0],f[1],Object(n.useState)(0)),v=Object(m.a)(p,2),j=v[0],h=v[1];function k(){var e=Object(C.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear();Object(C.c)(e,"users/"+t.uid+"/"+n+"/score/");console.log("hiii"),function(){var e=Object(C.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(C.c)(e,"users/"+t.uid+"/"+n+"/");Object(C.b)(c,(function(e){var t,a=0;e.forEach((function(e){var t=0,n=0,c=0;e.forEach((function(e){var a=e.val().todoid,c=String(a),r=e.val().completed;!0===c.includes("todo")&&(!0===r&&t++,n++)}));var r=0;n>0&&(r=t/n*100,c=Math.floor(r)),a+=c})),t=Math.floor(a/4),console.log("score "+t),h(t)}))}()}return Object(n.useEffect)((function(){k()}),[]),Object(n.useContext)(E).currentUser?(console.log(a),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"navigation"},c.a.createElement("div",null,c.a.createElement("a",{id:"logo"},"Day Quantifier")),c.a.createElement("nav",null,c.a.createElement("ul",{className:"navlist"},c.a.createElement("li",null,c.a.createElement("a",null,"To do")),c.a.createElement("li",null,c.a.createElement("a",null,"Insights")),c.a.createElement("li",null,c.a.createElement("a",{onClick:function(){return g.auth().signOut()}},"Sign Out"))))),c.a.createElement("div",{className:"text"},$,c.a.createElement("p",null,c.a.createElement("strong",null,"Date:")),function(){var e=c.a.createElement(P.a,{selected:a,onChange:function(e){r(e)}}),t=a;return console.log(t),t.getDate(),t.getMonth(),t.getFullYear(),e}(),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("h1",null,"Your current score for the day is ",j,"/100"),c.a.createElement("br",null),c.a.createElement("h3",null,"Est. time to finish remaining tasks - 04:30:16")),c.a.createElement("div",{className:"taskcontainer"},c.a.createElement(X,null),c.a.createElement(z,null),c.a.createElement(J,null),c.a.createElement(V,null)),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("p",null,"Developed With Music and Love by Pradeep"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null))):c.a.createElement(O.a,{to:"/"})},te=(a(135),function(){return Object(n.useContext)(E).currentUser?c.a.createElement(O.a,{to:"/dashboard"}):c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Log In"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements,a=t.email,n=t.password;try{g.auth().signInWithEmailAndPassword(a.value,n.value).catch((function(e){var t=e.message;window.alert(t)}))}catch(c){}}},c.a.createElement("label",{for:"email"},"Email"),c.a.createElement("input",{type:"email",name:"email",placeholder:"Email"}),c.a.createElement("label",{for:"password"},"Password"),c.a.createElement("input",{type:"password",name:"password",placeholder:"Password"}),c.a.createElement("button",{type:"submit"},"Log In")),c.a.createElement("p",null,c.a.createElement("div",null,c.a.createElement("h5",null," If Haven't Registered, Signup! "),c.a.createElement(s.a,{to:"/signup"},"Sign Up"))))}),ae=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],r=t[1];return a?c.a.createElement(O.a,{to:"/dashboard"}):c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Sign Up"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements,n=t.email,l=t.password;try{if(g.auth().createUserWithEmailAndPassword(n.value,l.value).catch((function(e){var t=e.message;window.alert(t)})),r(!0),a)return c.a.createElement(O.a,{to:"/dashboard"})}catch(u){}}},c.a.createElement("label",{for:"email"},"Email"),c.a.createElement("input",{type:"email",name:"email",placeholder:"Email"}),c.a.createElement("label",{for:"password"},"Password"),c.a.createElement("input",{type:"password",name:"password",placeholder:"Password"}),c.a.createElement("button",{type:"submit"},"Register")))},ne=function(){return c.a.createElement(v,null,c.a.createElement(u.a,null,c.a.createElement(o.a,null,c.a.createElement(i.a,{exact:!0,path:"/",component:j}),c.a.createElement(i.a,{exact:!0,path:"/dashboard",component:ee}),c.a.createElement(i.a,{exact:!0,path:"/login",component:te}),c.a.createElement(i.a,{exact:!0,path:"/signup",component:ae}))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(ne,null)),document.getElementById("root"))},78:function(e,t,a){e.exports=a(137)},83:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.9ccaeb28.chunk.js.map