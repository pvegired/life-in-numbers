(this["webpackJsonpmoz-todo-react"]=this["webpackJsonpmoz-todo-react"]||[]).push([[0],{136:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(42),l=a.n(r),o=(a(84),a(148)),u=a(149),i=a(150),s=a(146),m=a(13),d=a(61),b=(a(86),d.a.initializeApp({apiKey:"AIzaSyCBZmV5hJZiUdnzqbkYYei35PcAkpIzBZs",authDomain:"lifeinnumbers-7adc7.firebaseapp.com",projectId:"lifeinnumbers-7adc7",storageBucket:"lifeinnumbers-7adc7.appspot.com",messagingSenderId:"118769306081",appId:"1:118769306081:web:8a68d8c3fed35952a76aa0"})),f=d.a.auth(),p=new d.a.auth.GoogleAuthProvider,g=b,v=c.a.createContext(),E=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(m.a)(a,2),l=r[0],o=r[1],u=Object(n.useState)(null),i=Object(m.a)(u,2),s=i[0],d=i[1];return Object(n.useEffect)((function(){g.auth().onAuthStateChanged((function(e){d(e),o(!1)}))}),[]),l?c.a.createElement("p",null,"Loading..."):c.a.createElement(v.Provider,{value:{currentUser:s}},t)},O=a(147),j=function(){var e=Object(n.useContext)(v).currentUser;return e?c.a.createElement(O.a,{to:"/dashboard"}):c.a.createElement("div",{className:"homecontainer"},c.a.createElement("img",{src:a(62),alt:"3d image for quantified todo"}),c.a.createElement("div",{id:"divLogin",class:"login_screen"},c.a.createElement("h3",null,"Experience the Magic of Quantifiying your Day!"),c.a.createElement("br",null),c.a.createElement("br",null),e?c.a.createElement("p",null,"You are logged - ",c.a.createElement(s.a,{to:"/dashboard"},"View Dashboard")):c.a.createElement("p",null,c.a.createElement("div",null,c.a.createElement(s.a,{to:"/login",className:"homepagebutton"},"Log In"),c.a.createElement("br",null),c.a.createElement(s.a,{to:"/signup",className:"homepagebutton"},"Sign Up")),c.a.createElement("br",null),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){f.signInWithPopup(p).catch(alert)},className:"homepagebutton",id:"specialbutton"},"Sign In with Google")))))};var h=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),r=a[0],l=a[1];return c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),r.trim()&&(e.addTask(r),l(""))}},c.a.createElement("h2",{className:"label-wrapper"},c.a.createElement("label",{htmlFor:"new-todo-input",className:"label__lg"},"What needs to be done?")),c.a.createElement("input",{type:"text",id:"new-todo-input",className:"input input__lg",name:"text",autoComplete:"off",value:r,onChange:function(e){l(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"btn btn__primary btn__lg"},"Add"))};var k=function(e){return c.a.createElement("button",{type:"button",className:"btn toggle-btn","aria-pressed":e.isPressed,onClick:function(){return e.setFilter(e.name)}},c.a.createElement("span",{className:"visually-hidden"},"Show "),c.a.createElement("span",null,e.name),c.a.createElement("span",{className:"visually-hidden"}," tasks"))},y=a(46),D=a(38),w=c.a.createElement(y.a,{icon:D.b}),N=c.a.createElement(y.a,{icon:D.c});function S(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(""),u=Object(m.a)(o,2),i=u[0],s=u[1],d=Object(n.useRef)(null),b=Object(n.useRef)(null),f=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(r);var p=c.a.createElement("form",{className:"stack-small",onSubmit:function(t){t.preventDefault(),i.trim()&&(e.editTask(e.id,i),s(""),l(!1))}},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{id:e.id,className:"todo-text",type:"text",value:i||e.name,onChange:function(e){s(e.target.value)},ref:d})),c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{type:"button",className:"btn todo-cancel",onClick:function(){return l(!1)}},"Cancel",c.a.createElement("span",{className:"visually-hidden"},"renaming ",e.name)),c.a.createElement("button",{type:"submit",className:"btn btn__primary todo-edit"},"Save",c.a.createElement("span",{className:"visually-hidden"},"new name for ",e.name)))),g=c.a.createElement("div",{className:"stack-small"},c.a.createElement("div",{className:"c-cb"},c.a.createElement("input",{id:e.id,type:"checkbox",defaultChecked:e.completed,onChange:function(){return e.toggleTaskCompleted(e.id)}}),c.a.createElement("label",{className:"todo-label",id:"textleft",htmlFor:e.id},e.name)),c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{type:"button",className:"btn",onClick:function(){return l(!0)},ref:b},w," ",c.a.createElement("span",{className:"visually-hidden"},e.name)),c.a.createElement("button",{type:"button",className:"btn btn__danger",onClick:function(){return e.deleteTask(e.id)}},N,"  ",c.a.createElement("span",{className:"visually-hidden"},e.name))));return Object(n.useEffect)((function(){!f&&r&&d.current.focus(),f&&!r&&b.current.focus()}),[f,r]),c.a.createElement("li",{className:"todo"},r?p:g)}var x=a(5),M=a(6),C=a(14),U=a(15),F=function(e){Object(C.a)(a,e);var t=Object(U.a)(a);function a(){var e;Object(x.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={date:new Date},e}return Object(M.a)(a,[{key:"callMe",value:function(){var e=this;setInterval((function(){e.setState({date:new Date})}),1e3)}},{key:"render",value:function(){return c.a.createElement("div",{className:"clock"},c.a.createElement("h3",null,"Time Left for today -"+(24-(this.state.date.getHours()+1)).toString()+":"+(60-(this.state.date.getMinutes()+1)).toString()+":"+(60-this.state.date.getSeconds()).toString()),this.callMe())}}]),a}(n.Component),Y=a(10),T=a(73),A=a.n(T),P=(a(93),a(18)),_=a(31),I=[];var R={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},z=Object.keys(R),B=function(){var e=Object(n.useState)(new Date),t=Object(m.a)(e,2),a=(t[0],t[1],Object(n.useState)(I)),r=Object(m.a)(a,2),l=r[0],o=r[1],u=Object(n.useState)("All"),i=Object(m.a)(u,2),s=i[0],d=i[1],b=Object(n.useState)(0),f=Object(m.a)(b,2),p=f[0],E=f[1];function j(){var e=Object(Y.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(Y.c)(e,"users/"+t.uid+"/"+n+"/maintenance/"),r=[],l={};Object(Y.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=e.val().name,n=e.val().completed;!0===String(t).includes("todo")&&(l={id:t,name:a,completed:n},r.push(l))})),o(r)}))}function y(){var e=Object(Y.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(Y.c)(e,"users/"+t.uid+"/"+n+"/maintenance/"),r=0,l=0;Object(Y.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=String(t),n=e.val().completed;!0===a.includes("todo")&&(!0===n&&r++,l++)}))}));var o=0,u=0;l>0&&(o=r/l*100,u=Math.floor(o)),E(u);var i=Object(Y.c)(e,"users/"+t.uid+"/"+n+"/score/maintenancepercentage/");Object(Y.d)(i,{percentage:u})}function D(e){l.map((function(t){if(e===t.id){var a=Object(Y.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(Y.c)(a,"users/"+n.uid+"/"+r+"/maintenance/"+e);return Object(Y.d)(l,{todoid:t.id,name:t.name,completed:!t.completed}),Object(P.a)(Object(P.a)({},t),{},{completed:!t.completed})}return t}));j(),y()}function w(e){l.filter((function(t){return e!==t.id}));var t=Object(Y.a)(),a=g.auth().currentUser,n=new Date,c=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear(),r=Object(Y.c)(t,"users/"+a.uid+"/"+c+"/maintenance/"+e);Object(Y.d)(r,{id:null}),j()}function N(e,t){l.map((function(a){if(e===a.id){var n=Object(Y.a)(),c=g.auth().currentUser,r=new Date,l=r.getDate()+"-"+(r.getMonth()+1)+"-"+r.getFullYear(),o=Object(Y.c)(n,"users/"+c.uid+"/"+l+"/maintenance/"+a.id);return Object(Y.d)(o,{todoid:a.id,name:t,completed:a.completed}),Object(P.a)(Object(P.a)({},a),{},{name:t})}return a}));j()}var x=l.filter(R[s]).map((function(e){return c.a.createElement(S,{id:e.id,name:e.name,completed:e.completed,key:e.id,toggleTaskCompleted:D,deleteTask:w,editTask:N})})),M=z.map((function(e){return c.a.createElement(k,{key:e,name:e,isPressed:e===s,setFilter:d})}));var C=1!==x.length?"tasks":"task";"".concat(x.length," ").concat(C," remaining"),Object(n.useRef)(null),function(e){var t=Object(n.useRef)();Object(n.useEffect)((function(){t.current=e})),t.current}(l.length);if(Object(n.useEffect)((function(){j(),y()}),[]),!Object(n.useContext)(v).currentUser)return c.a.createElement(O.a,{to:"/"});var U=function(e){return c.a.createElement("div",{className:"Progress","data-value":e.value},c.a.createElement("div",{className:"Progress-Bar",style:{width:"".concat(e.value,"%"),backgroundSize:"".concat(1e4/e.value,"% 100%")}}))};return c.a.createElement("div",null,c.a.createElement("div",{className:"todoapp stack-large"},c.a.createElement("h1",null,"Maintenance"),c.a.createElement("p",null,"Things you do to maintain your physical and mental health daily goes here"),c.a.createElement(U,{value:p}),c.a.createElement(h,{addTask:function(e){var t={id:"todo-"+Object(_.a)(),name:e,completed:!1},a=Object(Y.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(Y.c)(a,"users/"+n.uid+"/"+r+"/maintenance/"+t.id);Object(Y.d)(l,{todoid:t.id,name:t.name,completed:t.completed}),j()}}),c.a.createElement("div",{className:"filters btn-group stack-exception"},M),c.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},x)))},L=[];var W={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},q=Object.keys(W),J=function(){var e=Object(n.useState)(new Date),t=Object(m.a)(e,2),a=(t[0],t[1],Object(n.useState)(L)),r=Object(m.a)(a,2),l=r[0],o=r[1],u=Object(n.useState)("All"),i=Object(m.a)(u,2),s=i[0],d=i[1],b=Object(n.useState)(0),f=Object(m.a)(b,2),p=f[0],E=f[1];function j(){var e=Object(Y.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(Y.c)(e,"users/"+t.uid+"/"+n+"/bareminimum/"),r=[],l={};Object(Y.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=e.val().name,n=e.val().completed;!0===String(t).includes("todo")&&(l={id:t,name:a,completed:n},r.push(l))})),o(r)}))}function y(){var e=Object(Y.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(Y.c)(e,"users/"+t.uid+"/"+n+"/bareminimum/"),r=0,l=0;Object(Y.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=String(t),n=e.val().completed;!0===a.includes("todo")&&(!0===n&&r++,l++)}))}));var o=0,u=0;l>0&&(o=r/l*100,u=Math.floor(o)),E(u);var i=Object(Y.c)(e,"users/"+t.uid+"/"+n+"/score/bareminimumpercentage/");Object(Y.d)(i,{percentage:u})}function D(e){l.map((function(t){if(e===t.id){var a=Object(Y.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(Y.c)(a,"users/"+n.uid+"/"+r+"/bareminimum/"+e);return Object(Y.d)(l,{todoid:t.id,name:t.name,completed:!t.completed}),Object(P.a)(Object(P.a)({},t),{},{completed:!t.completed})}return t}));j(),y()}function w(e){l.filter((function(t){return e!==t.id}));var t=Object(Y.a)(),a=g.auth().currentUser,n=new Date,c=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear(),r=Object(Y.c)(t,"users/"+a.uid+"/"+c+"/bareminimum/"+e);Object(Y.d)(r,{id:null}),j()}function N(e,t){l.map((function(a){if(e===a.id){var n=Object(Y.a)(),c=g.auth().currentUser,r=new Date,l=r.getDate()+"-"+(r.getMonth()+1)+"-"+r.getFullYear(),o=Object(Y.c)(n,"users/"+c.uid+"/"+l+"/bareminimum/"+a.id);return Object(Y.d)(o,{todoid:a.id,name:t,completed:a.completed}),Object(P.a)(Object(P.a)({},a),{},{name:t})}return a}));j()}var x=l.filter(W[s]).map((function(e){return c.a.createElement(S,{id:e.id,name:e.name,completed:e.completed,key:e.id,toggleTaskCompleted:D,deleteTask:w,editTask:N})})),M=q.map((function(e){return c.a.createElement(k,{key:e,name:e,isPressed:e===s,setFilter:d})}));var C=1!==x.length?"tasks":"task";"".concat(x.length," ").concat(C," remaining"),Object(n.useRef)(null),function(e){var t=Object(n.useRef)();Object(n.useEffect)((function(){t.current=e})),t.current}(l.length);if(Object(n.useEffect)((function(){j(),y()}),[]),!Object(n.useContext)(v).currentUser)return c.a.createElement(O.a,{to:"/"});var U=function(e){return c.a.createElement("div",{className:"Progress","data-value":e.value},c.a.createElement("div",{className:"Progress-Bar",style:{width:"".concat(e.value,"%"),backgroundSize:"".concat(1e4/e.value,"% 100%")}}))};return c.a.createElement("div",null,c.a.createElement("div",{className:"todoapp stack-large"},c.a.createElement("h1",null,"Bare Minimum"),c.a.createElement("p",null,"Things that  are expected from you by default in your day to day career goes here"),c.a.createElement(U,{value:p}),c.a.createElement(h,{addTask:function(e){var t={id:"todo-"+Object(_.a)(),name:e,completed:!1},a=Object(Y.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(Y.c)(a,"users/"+n.uid+"/"+r+"/bareminimum/"+t.id);Object(Y.d)(l,{todoid:t.id,name:t.name,completed:t.completed}),j()}}),c.a.createElement("div",{className:"filters btn-group stack-exception"},M),c.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},x)))},Q=[];var Z={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},G=Object.keys(Z),V=function(){var e=Object(n.useState)(new Date),t=Object(m.a)(e,2),a=(t[0],t[1],Object(n.useState)(Q)),r=Object(m.a)(a,2),l=r[0],o=r[1],u=Object(n.useState)("All"),i=Object(m.a)(u,2),s=i[0],d=i[1],b=Object(n.useState)(0),f=Object(m.a)(b,2),p=f[0],E=f[1];function j(){var e=Object(Y.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(Y.c)(e,"users/"+t.uid+"/"+n+"/exceed/"),r=[],l={};Object(Y.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=e.val().name,n=e.val().completed;!0===String(t).includes("todo")&&(l={id:t,name:a,completed:n},r.push(l))})),o(r)}))}function y(){var e=Object(Y.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(Y.c)(e,"users/"+t.uid+"/"+n+"/exceed/"),r=0,l=0;Object(Y.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=String(t),n=e.val().completed;!0===a.includes("todo")&&(!0===n&&r++,l++)}))}));var o=0,u=0;l>0&&(o=r/l*100,u=Math.floor(o)),E(u);var i=Object(Y.c)(e,"users/"+t.uid+"/"+n+"/score/exceedpercentage/");Object(Y.d)(i,{percentage:u})}function D(e){l.map((function(t){if(e===t.id){var a=Object(Y.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(Y.c)(a,"users/"+n.uid+"/"+r+"/exceed/"+e);return Object(Y.d)(l,{todoid:t.id,name:t.name,completed:!t.completed}),Object(P.a)(Object(P.a)({},t),{},{completed:!t.completed})}return t}));j(),y()}function w(e){l.filter((function(t){return e!==t.id}));var t=Object(Y.a)(),a=g.auth().currentUser,n=new Date,c=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear(),r=Object(Y.c)(t,"users/"+a.uid+"/"+c+"/exceed/"+e);Object(Y.d)(r,{id:null}),j()}function N(e,t){l.map((function(a){if(e===a.id){var n=Object(Y.a)(),c=g.auth().currentUser,r=new Date,l=r.getDate()+"-"+(r.getMonth()+1)+"-"+r.getFullYear(),o=Object(Y.c)(n,"users/"+c.uid+"/"+l+"/exceed/"+a.id);return Object(Y.d)(o,{todoid:a.id,name:t,completed:a.completed}),Object(P.a)(Object(P.a)({},a),{},{name:t})}return a}));j()}var x=l.filter(Z[s]).map((function(e){return c.a.createElement(S,{id:e.id,name:e.name,completed:e.completed,key:e.id,toggleTaskCompleted:D,deleteTask:w,editTask:N})})),M=G.map((function(e){return c.a.createElement(k,{key:e,name:e,isPressed:e===s,setFilter:d})}));var C=1!==x.length?"tasks":"task";"".concat(x.length," ").concat(C," remaining"),Object(n.useRef)(null),function(e){var t=Object(n.useRef)();Object(n.useEffect)((function(){t.current=e})),t.current}(l.length);if(Object(n.useEffect)((function(){j(),y()}),[]),!Object(n.useContext)(v).currentUser)return c.a.createElement(O.a,{to:"/"});var U=function(e){return c.a.createElement("div",{className:"Progress","data-value":e.value},c.a.createElement("div",{className:"Progress-Bar",style:{width:"".concat(e.value,"%"),backgroundSize:"".concat(1e4/e.value,"% 100%")}}))};return c.a.createElement("div",null,c.a.createElement("div",{className:"todoapp stack-large"},c.a.createElement("h1",null,"Exceed"),c.a.createElement("p",null,"Extra things that you believe are productive and will help you in longterm goes here"),c.a.createElement(U,{value:p}),c.a.createElement(h,{addTask:function(e){var t={id:"todo-"+Object(_.a)(),name:e,completed:!1},a=Object(Y.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(Y.c)(a,"users/"+n.uid+"/"+r+"/exceed/"+t.id);Object(Y.d)(l,{todoid:t.id,name:t.name,completed:t.completed}),j()}}),c.a.createElement("div",{className:"filters btn-group stack-exception"},M),c.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},x)))},H=[];var K={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},X=Object.keys(K),$=function(){var e=Object(n.useState)(new Date),t=Object(m.a)(e,2),a=(t[0],t[1],Object(n.useState)(H)),r=Object(m.a)(a,2),l=r[0],o=r[1],u=Object(n.useState)("All"),i=Object(m.a)(u,2),s=i[0],d=i[1],b=Object(n.useState)(0),f=Object(m.a)(b,2),p=f[0],E=f[1];function j(){var e=Object(Y.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(Y.c)(e,"users/"+t.uid+"/"+n+"/personal/"),r=[],l={};Object(Y.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=e.val().name,n=e.val().completed;!0===String(t).includes("todo")&&(l={id:t,name:a,completed:n},r.push(l))})),o(r)}))}function y(){var e=Object(Y.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(Y.c)(e,"users/"+t.uid+"/"+n+"/personal/"),r=0,l=0;Object(Y.b)(c,(function(e){e.forEach((function(e){var t=e.val().todoid,a=String(t),n=e.val().completed;!0===a.includes("todo")&&(!0===n&&r++,l++)}))}));var o=0,u=0;l>0&&(o=r/l*100,u=Math.floor(o)),E(u);var i=Object(Y.c)(e,"users/"+t.uid+"/"+n+"/score/personalpercentage/");Object(Y.d)(i,{percentage:u})}function D(e){var t=l.map((function(t){if(e===t.id){var a=Object(Y.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(Y.c)(a,"users/"+n.uid+"/"+r+"/personal/"+e);return Object(Y.d)(l,{todoid:t.id,name:t.name,completed:!t.completed}),Object(P.a)(Object(P.a)({},t),{},{completed:!t.completed})}return t}));o(t),y()}function w(e){l.filter((function(t){return e!==t.id}));var t=Object(Y.a)(),a=g.auth().currentUser,n=new Date,c=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear(),r=Object(Y.c)(t,"users/"+a.uid+"/"+c+"/personal/"+e);Object(Y.d)(r,{id:null}),j()}function N(e,t){l.map((function(a){if(e===a.id){var n=Object(Y.a)(),c=g.auth().currentUser,r=new Date,l=r.getDate()+"-"+(r.getMonth()+1)+"-"+r.getFullYear(),o=Object(Y.c)(n,"users/"+c.uid+"/"+l+"/personal/"+a.id);return Object(Y.d)(o,{todoid:a.id,name:t,completed:a.completed}),Object(P.a)(Object(P.a)({},a),{},{name:t})}return a}));j()}var x=l.filter(K[s]).map((function(e){return c.a.createElement(S,{id:e.id,name:e.name,completed:e.completed,key:e.id,toggleTaskCompleted:D,deleteTask:w,editTask:N})})),M=X.map((function(e){return c.a.createElement(k,{key:e,name:e,isPressed:e===s,setFilter:d})}));var C=1!==x.length?"tasks":"task";"".concat(x.length," ").concat(C," remaining"),Object(n.useRef)(null),function(e){var t=Object(n.useRef)();Object(n.useEffect)((function(){t.current=e})),t.current}(l.length);if(Object(n.useEffect)((function(){j(),y()}),[]),!Object(n.useContext)(v).currentUser)return c.a.createElement(O.a,{to:"/"});var U=function(e){return c.a.createElement("div",{className:"Progress","data-value":e.value},c.a.createElement("div",{className:"Progress-Bar",style:{width:"".concat(e.value,"%"),backgroundSize:"".concat(1e4/e.value,"% 100%")}}))};return c.a.createElement("div",null,c.a.createElement("div",{className:"todoapp stack-large"},c.a.createElement("h1",null,"Personal"),c.a.createElement("p",null,"Filler tasks that you will do only for today and may not be repeated over goes here"),c.a.createElement(U,{value:p}),c.a.createElement(h,{addTask:function(e){var t={id:"todo-"+Object(_.a)(),name:e,completed:!1},a=Object(Y.a)(),n=g.auth().currentUser,c=new Date,r=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),l=Object(Y.c)(a,"users/"+n.uid+"/"+r+"/personal/"+t.id);Object(Y.d)(l,{todoid:t.id,name:t.name,completed:t.completed}),j()}}),c.a.createElement("div",{className:"filters btn-group stack-exception"},M),c.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},x)))},ee=c.a.createElement(y.a,{icon:D.a}),te=function(){var e=Object(n.useState)(new Date),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),o=Object(m.a)(l,2),u=(o[0],o[1],Object(n.useState)(0)),i=Object(m.a)(u,2),s=(i[0],i[1],Object(n.useState)(0)),d=Object(m.a)(s,2),b=(d[0],d[1],Object(n.useState)(0)),f=Object(m.a)(b,2),p=(f[0],f[1],Object(n.useState)(0)),E=Object(m.a)(p,2),j=E[0],h=E[1];function k(){var e=Object(Y.a)(),t=g.auth().currentUser,a=new Date,n=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),c=Object(Y.c)(e,"users/"+t.uid+"/"+n+"/");Object(Y.b)(c,(function(e){var t,a=0;e.forEach((function(e){var t=0,n=0,c=0;e.forEach((function(e){var a=e.val().todoid,c=String(a),r=e.val().completed;!0===c.includes("todo")&&(!0===r&&t++,n++)}));var r=0;n>0&&(r=t/n*100,c=Math.floor(r)),a+=c})),t=Math.floor(a/4),console.log("score "+t),h(t)}))}return Object(n.useEffect)((function(){k()}),[]),Object(n.useContext)(v).currentUser?(console.log(a),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"navigation"},c.a.createElement("div",null,c.a.createElement("a",{id:"logo"},"Day Quantifier")),c.a.createElement("nav",null,c.a.createElement("ul",{className:"navlist"},c.a.createElement("li",null,c.a.createElement("a",null,"To do")),c.a.createElement("li",null,c.a.createElement("a",null,"Insights")),c.a.createElement("li",null,c.a.createElement("a",{onClick:function(){return g.auth().signOut()}},"Sign Out"))))),c.a.createElement("div",{className:"text"},ee,c.a.createElement("p",null,c.a.createElement("strong",null,"Date:")),function(){var e=c.a.createElement(A.a,{selected:a,onChange:function(e){r(e)}}),t=a;return console.log(t),t.getDate(),t.getMonth(),t.getFullYear(),e}(),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("h1",null,"Your Current score for the day is ",j,"/100"),c.a.createElement("br",null),c.a.createElement(F,null)),c.a.createElement("div",{className:"taskcontainer"},c.a.createElement($,null),c.a.createElement(B,null),c.a.createElement(J,null),c.a.createElement(V,null)),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("p",null,"Developed With Music and Love by Pradeep"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null))):c.a.createElement(O.a,{to:"/"})},ae=(a(136),function(){return Object(n.useContext)(v).currentUser?c.a.createElement(O.a,{to:"/dashboard"}):c.a.createElement("div",{className:"homecontainer"},c.a.createElement("img",{src:a(62),alt:"3d image for quantified todo"}),c.a.createElement("div",{id:"divLogin",className:"login_screen"},c.a.createElement("h3",null,"Experience the Magic of Quantifiying your Day!"),c.a.createElement("div",{className:"login-page"},c.a.createElement("div",{className:"form"},c.a.createElement("h3",null,"Log In"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements,a=t.email,n=t.password;try{g.auth().signInWithEmailAndPassword(a.value,n.value).catch((function(e){var t=e.message;window.alert(t)}))}catch(c){}}},c.a.createElement("label",{for:"email"}),c.a.createElement("input",{type:"email",name:"email",placeholder:"Email"}),c.a.createElement("label",{for:"password"}),c.a.createElement("input",{type:"password",name:"password",placeholder:"Password"}),c.a.createElement("button",{type:"submit"},"Log In"),c.a.createElement("p",{class:"message"},"Not registered? ",c.a.createElement(s.a,{to:"/signup"},"Create an account")))))))}),ne=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),r=t[0],l=t[1];return r?c.a.createElement(O.a,{to:"/dashboard"}):c.a.createElement("div",{className:"homecontainer"},c.a.createElement("img",{src:a(62),alt:"3d image for quantified todo"}),c.a.createElement("div",{id:"divLogin",className:"login_screen"},c.a.createElement("h3",null,"Signup for ultimate Todo Experience!"),c.a.createElement("div",{className:"login-page"},c.a.createElement("div",{className:"form"},c.a.createElement("h3",null,"Create A New Account"),c.a.createElement("form",{className:"login-form",onSubmit:function(e){e.preventDefault();var t=e.target.elements,a=t.email,n=t.password;try{if(g.auth().createUserWithEmailAndPassword(a.value,n.value).catch((function(e){var t=e.message;window.alert(t)})),l(!0),r)return c.a.createElement(O.a,{to:"/dashboard"})}catch(o){}}},c.a.createElement("label",{for:"email"}),c.a.createElement("input",{type:"email",name:"email",placeholder:"Email"}),c.a.createElement("label",{for:"password"}),c.a.createElement("input",{type:"password",name:"password",placeholder:"Password"}),c.a.createElement("button",{className:"homepagebutton",type:"submit"},"Register"))))))},ce=function(){return c.a.createElement(E,null,c.a.createElement(o.a,null,c.a.createElement(u.a,null,c.a.createElement(i.a,{exact:!0,path:"/",component:j}),c.a.createElement(i.a,{exact:!0,path:"/dashboard",component:te}),c.a.createElement(i.a,{exact:!0,path:"/login",component:ae}),c.a.createElement(i.a,{exact:!0,path:"/signup",component:ne}))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(ce,null)),document.getElementById("root"))},62:function(e,t,a){e.exports=a.p+"static/media/todoimage.4a127f5c.png"},79:function(e,t,a){e.exports=a(138)},84:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.72d2f742.chunk.js.map