(this["webpackJsonpmoz-todo-react"]=this["webpackJsonpmoz-todo-react"]||[]).push([[0],{140:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(42),l=a.n(r),o=(a(87),a(153)),u=a(154),i=a(151),s=a(150),m=a(13),d=a(62),b=(a(89),d.a.initializeApp({apiKey:"AIzaSyCBZmV5hJZiUdnzqbkYYei35PcAkpIzBZs",authDomain:"lifeinnumbers-7adc7.firebaseapp.com",projectId:"lifeinnumbers-7adc7",storageBucket:"lifeinnumbers-7adc7.appspot.com",messagingSenderId:"118769306081",appId:"1:118769306081:web:8a68d8c3fed35952a76aa0"})),f=d.a.auth(),p=new d.a.auth.GoogleAuthProvider,g=b,E=c.a.createContext(),v=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(m.a)(a,2),l=r[0],o=r[1],u=Object(n.useState)(null),i=Object(m.a)(u,2),s=i[0],d=i[1];return Object(n.useEffect)((function(){g.auth().onAuthStateChanged((function(e){d(e),o(!1)}))}),[]),l?c.a.createElement("p",null,"Loading..."):c.a.createElement(E.Provider,{value:{currentUser:s}},t)},h=a(152),j=a(79),O=a(149),y=["history","location","match","staticContext","to","onClick"],k=Object(O.a)((function(e){var t=e.history,a=(e.location,e.match,e.staticContext,e.to),n=e.onClick,r=Object(j.a)(e,y);return c.a.createElement("button",Object.assign({},r,{onClick:function(e){n&&n(e),t.push(a)}}))})),w=function(e){return c.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)},D=function(){if(Object(n.useContext)(E).currentUser)return c.a.createElement(h.a,{to:"/dashboard"});return c.a.createElement("div",{className:"row no-gutters"},c.a.createElement("div",{class:"col md-6 no-gutters"},c.a.createElement("div",{className:"leftside d-flex justify-content-center align-items-center"},c.a.createElement("img",{src:a(71),alt:"3d image for quantified todo"}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("h1",null,"Experience the Magic ",c.a.createElement("br",null)," of Quantifiying your Day!"))),c.a.createElement("div",{class:"col md-6 no-gutters",id:"divlogin"},c.a.createElement("div",{className:"rightside d-flex justify-content-center align-items-center "},c.a.createElement("div",{className:"solidborder"},c.a.createElement("div",null,c.a.createElement("h2",null,"Log In!",c.a.createElement(w,{symbol:"\u270c\ufe0f",label:"peace"})),c.a.createElement("br",null),c.a.createElement("div",{className:"form"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements,a=t.email,n=t.password;try{g.auth().signInWithEmailAndPassword(a.value,n.value).catch((function(e){var t=e.message;window.alert(t)}))}catch(c){}}},c.a.createElement("label",{for:"email"}),c.a.createElement("input",{type:"email",name:"email",placeholder:"Email"}),c.a.createElement("label",{for:"password"}),c.a.createElement("input",{type:"password",name:"password",placeholder:"Password"}),c.a.createElement("button",{type:"submit"},"Log In"),c.a.createElement("p",{class:"message"},"Not registered? ",c.a.createElement(s.a,{to:"/signup"},"Create an account"))),c.a.createElement("button",{type:"button",id:"google-button",onClick:function(){f.signInWithPopup(p).catch(alert)}},c.a.createElement("span",{class:"google-button__icon"},c.a.createElement("svg",{viewBox:"0 0 366 372",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z",id:"Shape",fill:"#EA4335"}),c.a.createElement("path",{d:"M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z",id:"Shape",fill:"#FBBC05"}),c.a.createElement("path",{d:"M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z",id:"Shape",fill:"#4285F4"}),c.a.createElement("path",{d:"M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z",fill:"#34A853"}))),c.a.createElement("span",{class:"google-button__text"},"Sign in with Google"))))))))};var N=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),r=a[0],l=a[1];return c.a.createElement("form",null,c.a.createElement("div",{className:"formflex form1"},c.a.createElement("input",{type:"text",id:"new-todo-input",className:"input input__lg",name:"text",autoComplete:"off",placeholder:"Add a task",value:r,onChange:function(e){l(e.target.value)},onKeyPress:function(t){if("Enter"===t.key){if(t.preventDefault(),!r.trim())return;e.addTask(r),l("")}}})))};var S=function(e){return c.a.createElement("button",{type:"button",className:"btn toggle-btn","aria-pressed":e.isPressed,onClick:function(){return e.setFilter(e.name)}},c.a.createElement("span",{className:"visually-hidden"},"Show "),c.a.createElement("span",null,e.name),c.a.createElement("span",{className:"visually-hidden"}," tasks"))},x=a(46),C=a(38),M=c.a.createElement(x.a,{icon:C.b}),U=c.a.createElement(x.a,{icon:C.c});function F(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(""),u=Object(m.a)(o,2),i=u[0],s=u[1],d=Object(n.useRef)(null),b=Object(n.useRef)(null),f=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(r);var p=c.a.createElement("form",{className:"stack-small",onSubmit:function(t){t.preventDefault(),i.trim()&&(e.editTask(e.id,i),s(""),l(!1))}},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{id:e.id,className:"todo-text",type:"text",value:i||e.name,onChange:function(e){s(e.target.value)},ref:d})),c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{type:"button",className:"btn todo-cancel",onClick:function(){return l(!1)}},"Cancel",c.a.createElement("span",{className:"visually-hidden"},"renaming ",e.name)),c.a.createElement("button",{type:"submit",className:"btn btn__primary todo-edit"},"Save",c.a.createElement("span",{className:"visually-hidden"},"new name for ",e.name)))),g=c.a.createElement("div",{className:"todoitem"},c.a.createElement("input",{className:"checkboxstyle",id:e.id,type:"checkbox",defaultChecked:e.completed,onChange:function(){return e.toggleTaskCompleted(e.id)}}),c.a.createElement("label",{className:"todoname",id:"textleft",htmlFor:e.id},e.name),c.a.createElement("button",{type:"button",className:"btn todoitembutton",onClick:function(){return l(!0)},ref:b},M," ",c.a.createElement("span",{className:"visually-hidden"},e.name)),c.a.createElement("button",{type:"button",className:"btn todoitembutton",onClick:function(){return e.deleteTask(e.id)}},U,"  ",c.a.createElement("span",{className:"visually-hidden"},e.name)));return Object(n.useEffect)((function(){!f&&r&&d.current.focus(),f&&!r&&b.current.focus()}),[f,r]),c.a.createElement("li",{className:"todo"},r?p:g)}var Y=a(5),P=a(6),A=a(14),T=a(15),z=function(e){Object(A.a)(a,e);var t=Object(T.a)(a);function a(){var e;Object(Y.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={date:new Date},e}return Object(P.a)(a,[{key:"callMe",value:function(){var e=this;setInterval((function(){e.setState({date:new Date})}),1e3)}},{key:"render",value:function(){return c.a.createElement("div",{className:"clock"},c.a.createElement("h3",null,"Time Left for today -"+(24-(this.state.date.getHours()+1)).toString()+":"+(60-(this.state.date.getMinutes()+1)).toString()+":"+(60-this.state.date.getSeconds()).toString()),this.callMe())}}]),a}(n.Component),I=a(11),B=a(75),R=a.n(B),_=(a(96),a(18)),H=a(31),L=[];var W={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},q=Object.keys(W),G=function(){var e=Object(n.useState)(new Date),t=Object(m.a)(e,2),a=(t[0],t[1],Object(n.useState)(L)),r=Object(m.a)(a,2),l=r[0],o=r[1],u=Object(n.useState)("All"),i=Object(m.a)(u,2),s=i[0],d=i[1],b=Object(n.useState)(0),f=Object(m.a)(b,2),p=f[0],v=f[1];function j(){var e=Object(I.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(I.c)(e,"users/"+t.uid+"/"+n+"/maintenance/"),r=[],l={};Object(I.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=e.val().name,n=e.val().completed;!0===String(t).includes("todo")&&(l={id:t,name:a,completed:n},r.push(l))})),o(r)}))}function O(){var e=Object(I.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(I.c)(e,"users/"+t.uid+"/"+n+"/maintenance/"),r=0,l=0;Object(I.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=String(t),n=e.val().completed;!0===a.includes("todo")&&(!0===n&&r++,l++)}))}));var o=0,u=0;l>0&&(o=r/l*100,u=Math.floor(o)),v(u);var i=Object(I.c)(e,"users/"+t.uid+"/"+n+"/score/maintenancepercentage/");Object(I.d)(i,{percentage:u})}function y(e){l.map((function(t){if(e===t.id){var a=Object(I.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(I.c)(a,"users/"+n.uid+"/"+r+"/maintenance/"+e);return Object(I.d)(l,{todoid:t.id,name:t.name,completed:!t.completed}),Object(_.a)(Object(_.a)({},t),{},{completed:!t.completed})}return t}));j(),O()}function k(e){l.filter((function(t){return e!==t.id}));var t=Object(I.a)(),a=g.auth().currentUser,n=new Date,c=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear(),r=Object(I.c)(t,"users/"+a.uid+"/"+c+"/maintenance/"+e);Object(I.d)(r,{id:null}),j(),O()}function w(e,t){l.map((function(a){if(e===a.id){var n=Object(I.a)(),c=g.auth().currentUser,r=new Date,l=r.getDate()+"-"+(r.getMonth()+1)+"-"+r.getFullYear(),o=Object(I.c)(n,"users/"+c.uid+"/"+l+"/maintenance/"+a.id);return Object(I.d)(o,{todoid:a.id,name:t,completed:a.completed}),Object(_.a)(Object(_.a)({},a),{},{name:t})}return a}));j()}var D=l.filter(W[s]).map((function(e){return c.a.createElement(F,{id:e.id,name:e.name,completed:e.completed,key:e.id,toggleTaskCompleted:y,deleteTask:k,editTask:w})})),x=q.map((function(e){return c.a.createElement(S,{key:e,name:e,isPressed:e===s,setFilter:d})}));var C=1!==D.length?"tasks":"task";"".concat(D.length," ").concat(C," remaining"),Object(n.useRef)(null),function(e){var t=Object(n.useRef)();Object(n.useEffect)((function(){t.current=e})),t.current}(l.length);if(Object(n.useEffect)((function(){j(),O()}),[]),!Object(n.useContext)(E).currentUser)return c.a.createElement(h.a,{to:"/"});var M=function(e){return c.a.createElement("div",{className:"Progress","data-value":e.value},c.a.createElement("div",{className:"Progress-Bar",style:{width:"".concat(e.value,"%"),backgroundSize:"".concat(1e4/e.value,"% 100%")}}))};return c.a.createElement("div",null,c.a.createElement("div",{className:"todoapp stack-large"},c.a.createElement("h1",null,c.a.createElement("strong",null,"Health")),c.a.createElement("h5",null,"Things you do to maintain your physical and mental health daily goes here"),c.a.createElement(M,{value:p}),c.a.createElement(N,{addTask:function(e){var t={id:"todo-"+Object(H.a)(),name:e,completed:!1},a=Object(I.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(I.c)(a,"users/"+n.uid+"/"+r+"/maintenance/"+t.id);Object(I.d)(l,{todoid:t.id,name:t.name,completed:t.completed}),j(),O()}}),c.a.createElement("div",{className:"filters btn-group stack-exception"},x),c.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},D)))},J=[];var Q={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},Z=Object.keys(Q),K=function(){var e=Object(n.useState)(new Date),t=Object(m.a)(e,2),a=(t[0],t[1],Object(n.useState)(J)),r=Object(m.a)(a,2),l=r[0],o=r[1],u=Object(n.useState)("All"),i=Object(m.a)(u,2),s=i[0],d=i[1],b=Object(n.useState)(0),f=Object(m.a)(b,2),p=f[0],v=f[1];function j(){var e=Object(I.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(I.c)(e,"users/"+t.uid+"/"+n+"/bareminimum/"),r=[],l={};Object(I.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=e.val().name,n=e.val().completed;!0===String(t).includes("todo")&&(l={id:t,name:a,completed:n},r.push(l))})),o(r)}))}function O(){var e=Object(I.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(I.c)(e,"users/"+t.uid+"/"+n+"/bareminimum/"),r=0,l=0;Object(I.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=String(t),n=e.val().completed;!0===a.includes("todo")&&(!0===n&&r++,l++)}))}));var o=0,u=0;l>0&&(o=r/l*100,u=Math.floor(o)),v(u);var i=Object(I.c)(e,"users/"+t.uid+"/"+n+"/score/bareminimumpercentage/");Object(I.d)(i,{percentage:u})}function y(e){l.map((function(t){if(e===t.id){var a=Object(I.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(I.c)(a,"users/"+n.uid+"/"+r+"/bareminimum/"+e);return Object(I.d)(l,{todoid:t.id,name:t.name,completed:!t.completed}),Object(_.a)(Object(_.a)({},t),{},{completed:!t.completed})}return t}));j(),O()}function k(e){l.filter((function(t){return e!==t.id}));var t=Object(I.a)(),a=g.auth().currentUser,n=new Date,c=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear(),r=Object(I.c)(t,"users/"+a.uid+"/"+c+"/bareminimum/"+e);Object(I.d)(r,{id:null}),j(),O()}function w(e,t){l.map((function(a){if(e===a.id){var n=Object(I.a)(),c=g.auth().currentUser,r=new Date,l=r.getDate()+"-"+(r.getMonth()+1)+"-"+r.getFullYear(),o=Object(I.c)(n,"users/"+c.uid+"/"+l+"/bareminimum/"+a.id);return Object(I.d)(o,{todoid:a.id,name:t,completed:a.completed}),Object(_.a)(Object(_.a)({},a),{},{name:t})}return a}));j()}var D=l.filter(Q[s]).map((function(e){return c.a.createElement(F,{id:e.id,name:e.name,completed:e.completed,key:e.id,toggleTaskCompleted:y,deleteTask:k,editTask:w})})),x=Z.map((function(e){return c.a.createElement(S,{key:e,name:e,isPressed:e===s,setFilter:d})}));var C=1!==D.length?"tasks":"task";"".concat(D.length," ").concat(C," remaining"),Object(n.useRef)(null),function(e){var t=Object(n.useRef)();Object(n.useEffect)((function(){t.current=e})),t.current}(l.length);if(Object(n.useEffect)((function(){j(),O()}),[]),!Object(n.useContext)(E).currentUser)return c.a.createElement(h.a,{to:"/"});var M=function(e){return c.a.createElement("div",{className:"Progress","data-value":e.value},c.a.createElement("div",{className:"Progress-Bar",style:{width:"".concat(e.value,"%"),backgroundSize:"".concat(1e4/e.value,"% 100%")}}))};return c.a.createElement("div",null,c.a.createElement("div",{className:"todoapp stack-large"},c.a.createElement("h1",null,c.a.createElement("strong",null,"Career")),c.a.createElement("h5",null,"Things that  are expected from you by default in your day to day career goes here"),c.a.createElement(M,{value:p}),c.a.createElement(N,{addTask:function(e){var t={id:"todo-"+Object(H.a)(),name:e,completed:!1},a=Object(I.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(I.c)(a,"users/"+n.uid+"/"+r+"/bareminimum/"+t.id);Object(I.d)(l,{todoid:t.id,name:t.name,completed:t.completed}),j(),O()}}),c.a.createElement("div",{className:"filters btn-group stack-exception"},x),c.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},D)))},V=[];var X={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},$=Object.keys(X),ee=function(){var e=Object(n.useState)(new Date),t=Object(m.a)(e,2),a=(t[0],t[1],Object(n.useState)(V)),r=Object(m.a)(a,2),l=r[0],o=r[1],u=Object(n.useState)("All"),i=Object(m.a)(u,2),s=i[0],d=i[1],b=Object(n.useState)(0),f=Object(m.a)(b,2),p=f[0],v=f[1];function j(){var e=Object(I.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(I.c)(e,"users/"+t.uid+"/"+n+"/exceed/"),r=[],l={};Object(I.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=e.val().name,n=e.val().completed;!0===String(t).includes("todo")&&(l={id:t,name:a,completed:n},r.push(l))})),o(r)}))}function O(){var e=Object(I.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(I.c)(e,"users/"+t.uid+"/"+n+"/exceed/"),r=0,l=0;Object(I.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=String(t),n=e.val().completed;!0===a.includes("todo")&&(!0===n&&r++,l++)}))}));var o=0,u=0;l>0&&(o=r/l*100,u=Math.floor(o)),v(u);var i=Object(I.c)(e,"users/"+t.uid+"/"+n+"/score/exceedpercentage/");Object(I.d)(i,{percentage:u})}function y(e){l.map((function(t){if(e===t.id){var a=Object(I.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(I.c)(a,"users/"+n.uid+"/"+r+"/exceed/"+e);return Object(I.d)(l,{todoid:t.id,name:t.name,completed:!t.completed}),Object(_.a)(Object(_.a)({},t),{},{completed:!t.completed})}return t}));j(),O()}function k(e){l.filter((function(t){return e!==t.id}));var t=Object(I.a)(),a=g.auth().currentUser,n=new Date,c=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear(),r=Object(I.c)(t,"users/"+a.uid+"/"+c+"/exceed/"+e);Object(I.d)(r,{id:null}),j(),O()}function w(e,t){l.map((function(a){if(e===a.id){var n=Object(I.a)(),c=g.auth().currentUser,r=new Date,l=r.getDate()+"-"+(r.getMonth()+1)+"-"+r.getFullYear(),o=Object(I.c)(n,"users/"+c.uid+"/"+l+"/exceed/"+a.id);return Object(I.d)(o,{todoid:a.id,name:t,completed:a.completed}),Object(_.a)(Object(_.a)({},a),{},{name:t})}return a}));j()}var D=l.filter(X[s]).map((function(e){return c.a.createElement(F,{id:e.id,name:e.name,completed:e.completed,key:e.id,toggleTaskCompleted:y,deleteTask:k,editTask:w})})),x=$.map((function(e){return c.a.createElement(S,{key:e,name:e,isPressed:e===s,setFilter:d})}));var C=1!==D.length?"tasks":"task";"".concat(D.length," ").concat(C," remaining"),Object(n.useRef)(null),function(e){var t=Object(n.useRef)();Object(n.useEffect)((function(){t.current=e})),t.current}(l.length);if(Object(n.useEffect)((function(){j(),O()}),[]),!Object(n.useContext)(E).currentUser)return c.a.createElement(h.a,{to:"/"});var M=function(e){return c.a.createElement("div",{className:"Progress","data-value":e.value},c.a.createElement("div",{className:"Progress-Bar",style:{width:"".concat(e.value,"%"),backgroundSize:"".concat(1e4/e.value,"% 100%")}}))};return c.a.createElement("div",null,c.a.createElement("div",{className:"todoapp stack-large"},c.a.createElement("h1",null,c.a.createElement("strong",null,"Hobbies")),c.a.createElement("h5",null,"Extra things that you believe are productive and will help you in longterm goes here"),c.a.createElement(M,{value:p}),c.a.createElement(N,{addTask:function(e){var t={id:"todo-"+Object(H.a)(),name:e,completed:!1},a=Object(I.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(I.c)(a,"users/"+n.uid+"/"+r+"/exceed/"+t.id);Object(I.d)(l,{todoid:t.id,name:t.name,completed:t.completed}),j(),O()}}),c.a.createElement("div",{className:"filters btn-group stack-exception"},x),c.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},D)))},te=[];var ae={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},ne=Object.keys(ae),ce=function(){var e=Object(n.useState)(new Date),t=Object(m.a)(e,2),a=(t[0],t[1],Object(n.useState)(te)),r=Object(m.a)(a,2),l=r[0],o=r[1],u=Object(n.useState)("All"),i=Object(m.a)(u,2),s=i[0],d=i[1],b=Object(n.useState)(0),f=Object(m.a)(b,2),p=f[0],v=f[1];function j(){var e=Object(I.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(I.c)(e,"users/"+t.uid+"/"+n+"/personal/"),r=[],l={};Object(I.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=e.val().name,n=e.val().completed;!0===String(t).includes("todo")&&(l={id:t,name:a,completed:n},r.push(l))})),o(r)}))}function O(){var e=Object(I.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(I.c)(e,"users/"+t.uid+"/"+n+"/personal/"),r=0,l=0;Object(I.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=String(t),n=e.val().completed;!0===a.includes("todo")&&(!0===n&&r++,l++)}))}));var o=0,u=0;l>0&&(o=r/l*100,u=Math.floor(o)),v(u);var i=Object(I.c)(e,"users/"+t.uid+"/"+n+"/score/personalpercentage/");Object(I.d)(i,{percentage:u})}function y(e){var t=l.map((function(t){if(e===t.id){var a=Object(I.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(I.c)(a,"users/"+n.uid+"/"+r+"/personal/"+e);return Object(I.d)(l,{todoid:t.id,name:t.name,completed:!t.completed}),Object(_.a)(Object(_.a)({},t),{},{completed:!t.completed})}return t}));o(t),O()}function k(e){l.filter((function(t){return e!==t.id}));var t=Object(I.a)(),a=g.auth().currentUser,n=new Date,c=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear(),r=Object(I.c)(t,"users/"+a.uid+"/"+c+"/personal/"+e);Object(I.d)(r,{id:null}),j(),O()}function w(e,t){l.map((function(a){if(e===a.id){var n=Object(I.a)(),c=g.auth().currentUser,r=new Date,l=r.getDate()+"-"+(r.getMonth()+1)+"-"+r.getFullYear(),o=Object(I.c)(n,"users/"+c.uid+"/"+l+"/personal/"+a.id);return Object(I.d)(o,{todoid:a.id,name:t,completed:a.completed}),Object(_.a)(Object(_.a)({},a),{},{name:t})}return a}));j()}var D=l.filter(ae[s]).map((function(e){return c.a.createElement(F,{id:e.id,name:e.name,completed:e.completed,key:e.id,toggleTaskCompleted:y,deleteTask:k,editTask:w})})),x=ne.map((function(e){return c.a.createElement(S,{key:e,name:e,isPressed:e===s,setFilter:d})}));var C=1!==D.length?"tasks":"task";"".concat(D.length," ").concat(C," remaining"),Object(n.useRef)(null),function(e){var t=Object(n.useRef)();Object(n.useEffect)((function(){t.current=e})),t.current}(l.length);if(Object(n.useEffect)((function(){j(),O()}),[]),!Object(n.useContext)(E).currentUser)return c.a.createElement(h.a,{to:"/"});var M=function(e){return c.a.createElement("div",{className:"Progress","data-value":e.value},c.a.createElement("div",{className:"Progress-Bar",style:{width:"".concat(e.value,"%"),backgroundSize:"".concat(1e4/e.value,"% 100%")}}))};return c.a.createElement("div",null,c.a.createElement("div",{className:"todoapp stack-large"},c.a.createElement("h1",null,c.a.createElement("strong",null,"Personal")),c.a.createElement("h5",null,"Filler tasks that you will do only for today and may not be repeated over goes here"),c.a.createElement(M,{value:p}),c.a.createElement(N,{addTask:function(e){var t={id:"todo-"+Object(H.a)(),name:e,completed:!1},a=Object(I.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(I.c)(a,"users/"+n.uid+"/"+r+"/personal/"+t.id);Object(I.d)(l,{todoid:t.id,name:t.name,completed:t.completed}),j(),O()}}),c.a.createElement("div",{className:"filters btn-group stack-exception"},x),c.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},D)))},re=(x.a,C.a,function(){var e=Object(n.useState)(new Date),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),o=Object(m.a)(l,2),u=(o[0],o[1],Object(n.useState)(0)),i=Object(m.a)(u,2),s=(i[0],i[1],Object(n.useState)(0)),d=Object(m.a)(s,2),b=(d[0],d[1],Object(n.useState)(0)),f=Object(m.a)(b,2),p=(f[0],f[1],Object(n.useState)(0)),v=Object(m.a)(p,2),j=v[0],O=v[1];function y(){var e=Object(I.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(I.c)(e,"users/"+t.uid+"/"+n+"/");Object(I.b)(c,(function(e){var t,a=0;e.forEach((function(e){var t=0,n=0,c=0;e.forEach((function(e){var a=e.val().todoid,c=String(a),r=e.val().completed;!0===c.includes("todo")&&(!0===r&&t++,n++)}));var r=0;n>0&&(r=t/n*100,c=Math.floor(r)),a+=c})),t=Math.floor(a/4),O(t)}))}return Object(n.useEffect)((function(){y()}),[]),Object(n.useContext)(E).currentUser?c.a.createElement("div",{className:"container1"},c.a.createElement("div",{className:"navigation"},c.a.createElement("div",null,c.a.createElement("a",{id:"logo"},"Day Quantifier")),c.a.createElement("nav",null,c.a.createElement("ul",{className:"navlist"},c.a.createElement("li",null,c.a.createElement("a",null,"To do")),c.a.createElement("li",null,c.a.createElement("a",null,"Insights")),c.a.createElement("li",null,c.a.createElement("a",{onClick:function(){return g.auth().signOut()}},"Sign Out"))))),c.a.createElement("div",{className:"text"},c.a.createElement(w,{symbol:"\ud83d\udcc5",label:"Calendar"}),c.a.createElement("p",null,c.a.createElement("strong",null,"Date:")),function(){var e=c.a.createElement(R.a,{selected:a,onChange:function(e){r(e)}}),t=a;return t.getDate(),t.getMonth(),t.getFullYear(),e}(),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("h1",null,"Your Current score for the day is ",c.a.createElement("strong",null,j,"/100")),c.a.createElement("br",null),c.a.createElement(z,null)),c.a.createElement("div",{className:"taskcontainer"},c.a.createElement(ce,null),c.a.createElement(G,null),c.a.createElement(K,null),c.a.createElement(ee,null)),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("h5",null,"Developed With ",c.a.createElement(w,{symbol:"\ud83c\udfb5",label:"Music"})," and ",c.a.createElement(w,{symbol:"\u2764\ufe0f",label:"love"}),"  by ",c.a.createElement("a",{href:"https://pradeep.digital"},"Pradeep")),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null)):c.a.createElement(h.a,{to:"/"})}),le=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),r=t[0],l=t[1];if(r)return c.a.createElement(h.a,{to:"/dashboard"});return c.a.createElement("div",{className:"row no-gutters"},c.a.createElement("div",{class:"col md-6 no-gutters"},c.a.createElement("div",{className:"leftside d-flex justify-content-center align-items-center"},c.a.createElement("img",{src:a(71),alt:"3d image for quantified todo"}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("h1",null,"Experience the Magic ",c.a.createElement("br",null)," of Quantifiying your Day!"))),c.a.createElement("div",{class:"col md-6 no-gutters",id:"divlogin"},c.a.createElement("div",{className:"rightside d-flex justify-content-center align-items-center "},c.a.createElement("div",{className:"solidborder"},c.a.createElement("div",null,c.a.createElement("h2",null,"Create a New Account!",c.a.createElement(w,{symbol:"\u270c\ufe0f",label:"peace"})),c.a.createElement("br",null),c.a.createElement("div",{className:"form"},c.a.createElement("form",{className:"login-form",onSubmit:function(e){e.preventDefault();var t=e.target.elements,a=t.email,n=t.password;try{if(g.auth().createUserWithEmailAndPassword(a.value,n.value).catch((function(e){var t=e.message;window.alert(t)})),l(!0),r)return c.a.createElement(h.a,{to:"/dashboard"})}catch(o){}}},c.a.createElement("label",{for:"email"}),c.a.createElement("input",{type:"email",name:"email",placeholder:"Email"}),c.a.createElement("label",{for:"password"}),c.a.createElement("input",{type:"password",name:"password",placeholder:"Password"}),c.a.createElement("button",{className:"homepagebutton",type:"submit"},"Sign Up"),c.a.createElement("p",{class:"message"},"Have an account?  ",c.a.createElement(s.a,{to:"/"},"LogIn"))),c.a.createElement(k,{to:"/login",onClick:function(){f.signInWithPopup(p).catch(alert)},className:"homepagebutton",id:"specialbutton"},"Sign Up with Google")))))))},oe=function(){return c.a.createElement(v,null,c.a.createElement(o.a,null,c.a.createElement(u.a,null,c.a.createElement(i.a,{exact:!0,path:"/",component:D}),c.a.createElement(i.a,{exact:!0,path:"/dashboard",component:re}),c.a.createElement(i.a,{exact:!0,path:"/signup",component:le}))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(oe,null)),document.getElementById("root"))},71:function(e,t,a){e.exports=a.p+"static/media/todoimage.4a127f5c.png"},82:function(e,t,a){e.exports=a(140)},87:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.1df5265d.chunk.js.map