(this["webpackJsonpinternships-2021"]=this["webpackJsonpinternships-2021"]||[]).push([[0],{123:function(e,t,r){},124:function(e,t,r){"use strict";r.r(t);var n,a=r(1),i=r.n(a),s=r(56),c=r.n(s),l=(r(67),r(2)),o=r.n(l),d=r(3),u=r(4),b=r(62),j=String("https://foammhipcaktheiqbvqe.supabase.co"),m=String("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNjI3MTA5MiwiZXhwIjoxOTQxODQ3MDkyfQ.eL3JU79VGLK32aPQDh9JZ-hsHCOtTN9EESh07e96FeM"),x=Object(b.a)(j,m),h=x,v=r(0),f=i.a.createContext(null),p=i.a.createContext(null),g=null!==(n=h.auth.user())&&void 0!==n?n:null,O=function(e){return null===e||void 0===e?void 0:e.isAdmin},y=function(){return h.auth.user()},w=function(){return Object(a.useContext)(f)},N=function(){return Object(a.useContext)(p)};function k(){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g){e.next=2;break}return e.abrupt("return",void 0);case 2:return e.abrupt("return",h.storage.from("images/avatars").createSignedUrl("".concat(null===g||void 0===g?void 0:g.id),43200));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=function(e){var t,r,n=e.children,i=Object(a.useState)({id:null!==(t=null===g||void 0===g?void 0:g.id)&&void 0!==t?t:"",firstName:"",lastName:"",email:null!==(r=null===g||void 0===g?void 0:g.email)&&void 0!==r?r:"",avatarUrl:""}),s=Object(d.a)(i,2),c=s[0],l=s[1];return Object(v.jsx)(f.Provider,{value:c,children:Object(v.jsx)(p.Provider,{value:function(e){l(e)},children:n})})},I=r(8),D=r(5),A=function(e){var t=e.id,r=e.title,n=e.authors,a=e.image,i=e.description,s=e.isbn,c=e.publishedDate,l=e.categories,d=e.quantity,b=w(),j=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.from("books").insert({id:t,title:r,description:i,publishedDate:c,categories:l,isbn:s,imageLinks:[a],authors:n,votesAmount:Math.floor(1e3*Math.random())+1,avgRating:Math.floor(10*Math.random())+1,addedById:null===b||void 0===b?void 0:b.id,addedDate:new Date,quantity:d});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{children:Object(v.jsx)("button",{type:"button",className:"border-gray-400 text-gray-400 rounded-sm border-2 max-h-full ml-2 p-2 transition duration-500 ease-in-out hover:bg-gray-400 hover:text-gray-100",onClick:j,children:"+ Dodaj ksi\u0105\u017ck\u0119 do magazynu"})})},q=function(e){var t=e.id,r=e.quantity,n=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.from("books").update({quantity:r}).match({id:t});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{children:Object(v.jsx)("button",{type:"button",className:"border-gray-400 text-gray-400 rounded-sm border-2 max-h-full ml-2 p-2 transition duration-500 ease-in-out hover:bg-gray-400 hover:text-gray-100",onClick:n,children:"+ Zwi\u0119ksz ilo\u015b\u0107 w magazynie"})})},L=function(e){var t,r=e.id,n=e.title,i=e.authors,s=e.image,c=e.publishedDate,l=e.categories,b=e.description,j=e.isbn,m=Object(a.useState)([]),x=Object(d.a)(m,2),f=x[0],p=x[1],g=Object(a.useState)("1"),O=Object(d.a)(g,2),y=O[0],w=O[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.from("books").select("\n      id, quantity\n    ").eq("id",r);case 2:t=e.sent,n=t.data,t.error,null!==n&&p(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(v.jsxs)("div",{className:"flex flex-col sm:flex-row place-content-center max-w-full md:w-auto bg-gray-50 shadow p-3 m-3 mx-6",children:[Object(v.jsx)("div",{className:"m-3 ",children:Object(v.jsx)(I.b,{to:"/book/".concat(r),children:Object(v.jsx)("img",{src:s,alt:"A book",className:"transform hover:scale-110 cursor-pointer w-32 transition duration-400 ease-in-out hover:-translate-y-1"})})}),Object(v.jsxs)("div",{className:"ml-2 w-full",children:[Object(v.jsx)("span",{className:"break-words cursor-pointer transition duration-400 ease-in-out hover:text-gray-500",children:Object(v.jsx)(I.b,{to:"/book/".concat(r),children:n})}),Object(v.jsx)("br",{}),Object(v.jsx)("span",{className:"text-gray-400",children:null===i||void 0===i?void 0:i.join(" ")}),Object(v.jsx)("br",{}),Object(v.jsx)("span",{className:"text-gray-400",children:l})]}),Object(v.jsxs)("div",{children:["/internships-2021/admin/store"===window.location.pathname&&Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:"Quantity:"}),Object(v.jsx)("input",{id:"quantity",name:"quantity",type:"number",onChange:function(e){return w(e.target.value)}}),0!==(null===f||void 0===f?void 0:f.length)&&Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"bg-red-500 text-white",children:["W magazynie ",null===f||void 0===f?void 0:f.map((function(e){return e.quantity}))[0]," "]}),Object(v.jsx)(q,{id:r,quantity:Number(y)+(null!==(t=null===f||void 0===f?void 0:f.map((function(e){return e.quantity}))[0])&&void 0!==t?t:0)})]}),0===(null===f||void 0===f?void 0:f.length)&&Object(v.jsx)(A,{id:r,title:n,authors:i,image:s,description:b,isbn:j,publishedDate:c,categories:l,quantity:Number(y)})]}),"/internships-2021/admin/store"!==window.location.pathname&&Object(v.jsx)("button",{type:"button",className:"border-gray-400 text-gray-400 rounded-sm border-2 max-h-full ml-2 p-2 transition duration-500 ease-in-out hover:bg-gray-400 hover:text-gray-50",children:"Kup ksi\u0105\u017ck\u0119"})]})]})},z=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),r=t[0],n=t[1],i=Object(D.i)(),s=i.rating;return Object(a.useEffect)((function(){(null===i||void 0===i?void 0:i.q.lenght)<1&&(i.q="*"),function(){var e=Object(u.a)(o.a.mark((function e(){var t,r,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="%".concat(i.q?i.q:"*","%"),r=".99","0"===s&&(r="10"),e.next=5,h.from("books").select("*").ilike("title",t).gte("avgRating",s).lte("avgRating",s+r);case 5:a=e.sent,null!==(c=a.data)&&n(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[i]),Object(v.jsxs)("div",{children:[r&&(null===r||void 0===r?void 0:r.map((function(e){return Object(v.jsx)(L,{id:e.id,title:e.title,image:e.imageLinks[0],isbn:e.isbn,authors:e.authors,publishedDate:e.publishedDate,categories:e.categories,description:e.description},e.id)}))),r&&(null===r||void 0===r?void 0:r.length)<1&&Object(v.jsx)("div",{children:" NIE MA "})]})},U=r(28),F=function(){var e=N(),t=Object(a.useState)(!1),r=Object(d.a)(t,2),n=r[0],i=r[1],s=Object(U.a)({initialValues:{emailAdress:"",password:""},onSubmit:function(){var t=Object(u.a)(o.a.mark((function t(r){var a,s,c,l,d;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.auth.signIn({email:r.emailAdress,password:r.password});case 2:if(a=t.sent,s=a.user,a.error,i(!n),!s){t.next=35;break}if(t.t0=e,!t.t0){t.next=35;break}return t.t1=e,t.t2=null===s||void 0===s?void 0:s.id,t.t3=null!==(c=null===s||void 0===s?void 0:s.email)&&void 0!==c?c:"no email",t.next=14,k();case 14:if(t.t6=d=t.sent,t.t5=null===t.t6,t.t5){t.next=18;break}t.t5=void 0===d;case 18:if(!t.t5){t.next=22;break}t.t7=void 0,t.next=23;break;case 22:t.t7=d.signedURL;case 23:if(t.t8=l=t.t7,t.t4=null!==t.t8,!t.t4){t.next=27;break}t.t4=void 0!==l;case 27:if(!t.t4){t.next=31;break}t.t9=l,t.next=32;break;case 31:t.t9="".concat("/internships-2021","/image-not-found.png");case 32:t.t10=t.t9,t.t11={id:t.t2,firstName:"unknown",lastName:"unknown",email:t.t3,avatarUrl:t.t10},(0,t.t1)(t.t11);case 35:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()});return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{onClick:function(){return i(!n)},className:"my-1 pl-4 pb-1 md:pb-0 text-gray-200 transition duration-400 ease-in-out hover:text-indigo-500 md:mr-4 md:my-0 border-b md:border-b-0 md:border-l border-gray-400 w-full cursor-pointer",children:"Sign In"}),n&&Object(v.jsx)("div",{className:"fixed left-0 top-0 pin z-50 overflow-auto bg-gray-400 bg-opacity-50 flex h-screen w-screen",children:Object(v.jsxs)("div",{className:"relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-md shadow-xl",children:[Object(v.jsxs)("div",{className:"flex justify-between",children:[Object(v.jsx)("h1",{className:"font-bold",children:"Login"}),Object(v.jsx)("button",{type:"button",onClick:function(){return i(!n)},className:"border-red-400 text-red-400 rounded-sm border-2 max-h-full px-2 transition duration-500 hover:bg-red-400 hover:text-white",children:"X"})]}),Object(v.jsx)("div",{children:Object(v.jsxs)("form",{onSubmit:s.handleSubmit,children:[Object(v.jsxs)("div",{className:"flex",children:[Object(v.jsxs)("div",{className:"mr-1",children:[Object(v.jsx)("label",{htmlFor:"email-adress",className:"text-xs block",children:"Email adress:"}),Object(v.jsx)("input",{id:"emailAdress",name:"emailAdress",type:"email",placeholder:"Email-adress",onChange:s.handleChange,value:s.values.emailAdress,className:"p-1 placeholder-gray-400 text-gray-600 border outline-none mb-2"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"password",className:"text-xs block",children:"Password:"}),Object(v.jsx)("input",{id:"password",name:"password",type:"password",placeholder:"Password",onChange:s.handleChange,value:s.values.password,className:"p-1 placeholder-gray-400 text-gray-600 border outline-none mb-2"})]})]}),Object(v.jsx)("button",{type:"submit",className:"border-gray-400 text-gray-400 rounded-sm border-2 max-h-full p-1 transition duration-500 ease-in-out hover:bg-gray-400 hover:text-white",children:"Sign In"})]})})]})})]})},E=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),r=t[0],n=t[1],i=Object(U.a)({initialValues:{emailAdress:"",password:"",firstName:"",lastName:""},onSubmit:function(){var e=Object(u.a)(o.a.mark((function e(t){var a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.auth.signUp({email:t.emailAdress,password:t.password});case 2:if(a=e.sent,i=a.user,a.error,!i){e.next=8;break}return e.next=8,x.from("profiles").insert({id:i.id,firstName:t.firstName,lastName:t.lastName});case 8:n(!r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{onClick:function(){return n(!r)},className:"my-1 pl-4 pb-1 md:pb-0 text-gray-200 transition duration-400 ease-in-out hover:text-indigo-500 md:mr-4 md:my-0 border-b md:border-b-0 md:border-l md:border-r border-gray-400 w-full cursor-pointer",children:"Sign Up"}),r&&Object(v.jsx)("div",{className:"fixed left-0 top-0 pin z-50 overflow-auto bg-gray-600 bg-opacity-50 flex h-screen w-screen",children:Object(v.jsxs)("div",{className:"relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-md shadow-xl",children:[Object(v.jsxs)("div",{className:"flex justify-between",children:[Object(v.jsx)("h1",{className:"font-bold",children:"Register"}),Object(v.jsx)("button",{type:"button",onClick:function(){return n(!r)},className:"border-red-400 text-red-400 rounded-sm border-2 max-h-full px-2 transition duration-500 hover:bg-red-400 hover:text-white",children:"X"})]}),Object(v.jsx)("div",{children:Object(v.jsxs)("form",{onSubmit:i.handleSubmit,children:[Object(v.jsxs)("div",{className:"flex justify-between",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"firstName",className:"text-xs block",children:"First Name:"}),Object(v.jsx)("input",{id:"firstName",name:"firstName",type:"text",placeholder:"First Name",onChange:i.handleChange,value:i.values.firstName,className:"p-1 placeholder-gray-400 text-gray-600 border outline-none mb-2"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"lastName",className:"text-xs block",children:"Last Name:"}),Object(v.jsx)("input",{id:"lastName",name:"lastName",type:"text",placeholder:"Last Name",onChange:i.handleChange,value:i.values.lastName,className:"p-1 placeholder-gray-400 text-gray-600 border outline-none"})]})]}),Object(v.jsxs)("div",{className:"flex justify-between",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"email-adress",className:"text-xs block",children:"Email adress:"}),Object(v.jsx)("input",{id:"emailAdress",name:"emailAdress",type:"email",placeholder:"Email-adress",onChange:i.handleChange,value:i.values.emailAdress,className:"p-1 placeholder-gray-400 text-gray-600 border outline-none mb-2"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"password",className:"text-xs block",children:"Password:"}),Object(v.jsx)("input",{id:"password",name:"password",type:"password",placeholder:"Password",onChange:i.handleChange,value:i.values.password,className:"p-1 placeholder-gray-400 text-gray-600 border outline-none mb-2"})]})]}),Object(v.jsx)("button",{type:"submit",className:"border-gray-400 text-gray-400 rounded-sm border-2 max-h-full p-1 transition duration-500 ease-in-out hover:bg-gray-400 hover:text-white",children:"Sign Up"})]})})]})})]})},R=function(e){var t=Object(a.useState)(),r=Object(d.a)(t,2),n=r[0],i=r[1];return Object(a.useEffect)((function(){e&&function(){var t=Object(u.a)(o.a.mark((function t(){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.from("profiles").select("\n      *\n    ").eq("id",e);case 2:r=t.sent,n=r.data,r.error,i(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]),e?null===n||void 0===n?void 0:n[0]:null};var B=function(){var e,t,r=w(),n=R(null!==(e=null===(t=w())||void 0===t?void 0:t.id)&&void 0!==e?e:null),i=N(),s=Object(a.useState)(!1),c=Object(d.a)(s,2),l=c[0],o=c[1],u=Object(D.g)();return Object(v.jsx)("nav",{className:"bg-gray-700 shadow dark:bg-gray-800",children:Object(v.jsxs)("div",{className:"container px-6 py-3 mx-auto md:flex md:justify-between md:items-center",children:[Object(v.jsxs)("div",{className:"flex items-center justify-between",children:[Object(v.jsx)(I.b,{to:"/",children:Object(v.jsx)("div",{children:Object(v.jsx)("span",{className:"text-xl font-bold text-white dark:text-white md:text-2xl",children:"Books"})})}),Object(v.jsx)("button",{type:"button",className:"border-gray-400 text-gray-200 rounded-md border max-h-full px-1 transition duration-500 ease-in-out hover:bg-gray-200 hover:text-gray-700 md:hidden",onClick:function(){return o(!l)},children:"\u2630"})]}),Object(v.jsx)("div",{className:!0===l?"block items-center md:flex":"hidden md:block items-center",children:Object(v.jsxs)("div",{className:"flex flex-col md:flex-row my-2 md:my-0 md:mx-6",children:[Object(v.jsx)(I.b,{to:"/",className:"my-1 py-1 md:py-0 pl-4 text-gray-200 transition duration-500 ease-in-out hover:text-indigo-500 md:mr-4 md:my-0 border-b border-t md:border-t-0 md:border-b-0 md:border-l border-gray-400",children:"Home"}),O(n)&&Object(v.jsx)("div",{className:"my-1 pl-4 pb-1 md:pb-0 text-gray-200 transition duration-400 ease-in-out hover:text-indigo-500 md:mr-4 md:my-0 border-b md:border-b-0 md:border-l border-gray-400",children:"Admin"}),y()&&!O(n)&&Object(v.jsx)(I.b,{to:"/user",className:"my-1 pl-4 pb-1 md:pb-0 text-gray-200 transition duration-400 ease-in-out hover:text-indigo-500 md:mr-4 md:my-0 border-b md:border-b-0 md:border-l border-gray-400",children:null===r||void 0===r?void 0:r.email}),y()?Object(v.jsx)("div",{onClick:function(){i&&i({id:"",firstName:"",lastName:"",email:"",avatarUrl:""}),h.auth.signOut(),u.push("/")},className:"my-1 pl-4 pb-1 md:pb-0 text-gray-200 transition duration-400 ease-in-out hover:text-indigo-500 md:pr-4 md:mr-4 md:my-0 border-b md:border-b-0 md:border-l md:border-r border-gray-400 cursor-pointer",children:"Logout"}):Object(v.jsxs)("div",{className:"flex flex-col md:flex-row w-full",children:[Object(v.jsx)(F,{}),Object(v.jsx)(E,{})]})]})})]})})};var M=function(){var e=Object(a.useState)(0),t=Object(d.a)(e,2),r=t[0],n=t[1],i=Object(a.useState)("*"),s=Object(d.a)(i,2),c=s[0],l=s[1],o=Object(a.useState)(!0),u=Object(d.a)(o,2),b=u[0],j=u[1],m=Object(D.g)();return Object(v.jsxs)("div",{className:"flex justify-between bg-white",children:[Object(v.jsx)("div",{className:"bg-white inline z-40 ".concat(!0===b?"hidden":"fixed lg:static"),children:Object(v.jsx)("button",{type:"button",className:"border-gray-600 bg-white text-gray-600 border max-h-full px-1 mt-2 fixed inset-y-0 left-0 transition duration-500 ease-in-out hover:bg-gray-400 hover:text-white lg:hidden",onClick:function(){return j(!b)},children:"\u2b9c"})}),Object(v.jsx)("div",{className:"lg:block z-30 inset-0 flex-none h-full w-8/12 sm:w-4/12 lg:h-auto bg-white ml-6 lg:mt-0 lg:ml-0 pb-10 lg:pt-0\n        lg:w-60 xl:w-72 shadow-sm dark:bg-gray-800 overflow-y-auto lg:overflow-y-visible ".concat(!0===b?"hidden":"fixed lg:static"),children:Object(v.jsxs)("div",{className:"items-center justify-between scrolling-touch sticky top-16",children:[Object(v.jsx)("div",{className:"border-b border-gray-400 mx-4 my-5 pl-2 text-l font-bold",children:"Filters"}),Object(v.jsxs)("nav",{className:"mx-4 my-3",children:[Object(v.jsxs)("div",{className:"border-b border-gray-200 mx-1 pb-5 mt-5",children:[Object(v.jsx)("label",{htmlFor:"searchbar",className:"mr-2",children:"Search"}),Object(v.jsx)("input",{type:"text",placeholder:"Enter book name",id:"searchbar",className:"p-1 placeholder-gray-400 text-gray-600 border outline-none transition duration-300 ease-in-out focus:ring-2 ring-gray-200",onChange:function(e){var t,r;String(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value).length>0?l(String(null===e||void 0===e||null===(r=e.target)||void 0===r?void 0:r.value)):l("*")}})]}),Object(v.jsx)("div",{className:"border-b border-gray-200 mx-1 pl-4 pb-5 mt-5",children:Object(v.jsxs)("ul",{className:"list-disc",children:[Object(v.jsx)("li",{children:"Fiction"}),Object(v.jsx)("li",{children:"Literature of fact, journalism"}),Object(v.jsx)("li",{children:"Popular science literature"}),Object(v.jsx)("li",{children:"Children's literature"}),Object(v.jsx)("li",{children:"Comics"}),Object(v.jsx)("li",{children:"Poetry, drama satire"}),Object(v.jsx)("li",{children:"Other"})]})}),Object(v.jsxs)("div",{className:"border-b border-gray-200 mx-1 pl-4 pb-5 mt-5",children:[Object(v.jsx)("input",{type:"range",min:"0",max:"10",onChange:function(e){var t;n(Number(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value))}}),Object(v.jsx)("span",{className:"ml-2",id:"range",children:r>0?r:"All"})]}),Object(v.jsx)("div",{className:"flex border-b border-gray-200 mx-1 pl-4 pb-5 mt-5 place-content-center",children:Object(v.jsx)("button",{className:"transition duration-500 ease-in-out border text-gray-400 border-gray-200 p-2 w-2/3 hover:bg-gray-400 hover:text-gray-100",type:"button",onClick:function(){return m.replace("/books-list/".concat(c,"/").concat(r))},children:"Filtruj"})})]})]})}),Object(v.jsx)("div",{className:"inline z-40 ".concat(!0===b?"fixed":"hidden"),children:Object(v.jsx)("button",{type:"button",className:"border-gray-600 bg-white text-gray-600 border max-h-full px-1 mt-2 fixed inset-y-0 left-0 transition duration-500 ease-in-out hover:bg-gray-400 hover:text-white lg:hidden",onClick:function(){j(!b)},children:"\u2b9e"})})]})},P=function(e){var t=e.id,r=void 0===t?"":t,n=e.title,a=void 0===n?"":n,i=e.author,s=void 0===i?"":i,c=e.image,l=void 0===c?"":c;return Object(v.jsx)("div",{className:"flex flex-col justify-center items-center text-center h-72 w-64 ",children:Object(v.jsxs)(I.b,{to:"/book/".concat(r),children:[Object(v.jsx)("img",{src:l,alt:a,className:"w-48 h-64 overflow-hidden"}),a,Object(v.jsx)("br",{}),Object(v.jsx)("span",{className:"text-gray-500 text-sm",children:s})]})})},T=function(e){var t,r,n,i,s,c=e.entryCount,l=e.entries,o=Object(a.useState)(0),u=Object(d.a)(o,2),b=u[0],j=u[1],m=Object(a.useState)(),x=Object(d.a)(m,2),h=x[0],f=x[1];function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=b+e;return j(t>=c?0:t<=-1?c-1:t)}return Object(a.useEffect)((function(){h&&clearTimeout(h);var e=setTimeout((function(){j(b===c-1?0:function(e){return e+1})}),2200);f(e)}),[b]),Object(v.jsx)("div",{className:"flex place-content-start mt-2 ml-6",children:Object(v.jsxs)("div",{className:"flex flex-col items-center bg-gray-50 shadow p-2",children:[Object(v.jsx)(P,{id:null===(t=l[b])||void 0===t?void 0:t.id,title:null===(r=l[b])||void 0===r?void 0:r.title,author:null===(n=l[b])||void 0===n||null===(i=n.authors)||void 0===i?void 0:i.join(" "),image:null===(s=l[b])||void 0===s?void 0:s.image}),Object(v.jsxs)("div",{className:"flex flex-row",children:[Object(v.jsx)("button",{className:"flex px-2 py-1 border-gray-400 text-gray-400 rounded-sm border-2 max-h-full transition duration-500 ease-in-out hover:bg-gray-400 hover:text-gray-50",type:"button",onClick:function(){return p(-1)},children:"\u2b9c"}),Object(v.jsx)("div",{className:"w-80"}),Object(v.jsx)("button",{className:"flex px-2 py-1 border-gray-400 text-gray-400 rounded-sm border-2 max-h-full transition duration-500 ease-in-out hover:bg-gray-400 hover:text-gray-50",type:"button",onClick:function(){return p(1)},children:"\u2b9e"})]})]})})},J=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),r=t[0],n=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.from("books").select("\n      *\n    ");case 2:t=e.sent,r=t.data,t.error,n(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r?Object(v.jsx)(T,{entries:null===r||void 0===r?void 0:r.map((function(e){return{id:e.id,title:e.title,authors:e.authors,image:e.imageLinks[0]}})),entryCount:r.length}):Object(v.jsx)("p",{children:"Loading..."})},Q=function(e){var t=e.urlBlank,r=e.urlFull,n=e.fillingPercent,a={clipPath:"polygon(0 0, ".concat(n,"% 0, ").concat(n,"% 100%, 0 100%)")};return Object(v.jsx)("div",{children:100===n?Object(v.jsx)("img",{src:r,alt:"Filled ranking icon"}):Object(v.jsxs)("div",{className:"grid grid-cols-1 grid-rows-1",children:[0!==n&&Object(v.jsx)("img",{src:r,style:a,alt:"Blank ranking icon",className:"col-start-1 col-end-2 row-start-1 row-end-2"}),Object(v.jsx)("img",{src:t,alt:"Blank ranking icon",className:"col-start-1 col-end-2 row-start-1 row-end-2"})]})})},Z="".concat("/internships-2021","/star_border_black.svg"),V="".concat("/internships-2021","/star_black.svg"),X=function(e){for(var t=e.bare,r=e.votesAmount,n=[],a=e.avgRating/10*100,i=0;i<5;i++)n.push(Object(v.jsx)(Q,{urlBlank:Z,urlFull:V,fillingPercent:Math.floor(Math.max(0,Math.min(100,5*a)))},i)),a-=20;return Object(v.jsxs)("div",{className:"flex flex-wrap justify-center items-center flex-col",children:[Object(v.jsx)("div",{className:"flex justify-between",children:n}),!t&&Object(v.jsxs)("span",{className:"text-gray-600 text-xs mt-1",children:["Ilosc g\u0142os\xf3w: ",r]})]})},_=function(e){for(var t=e.items,r=[],n=0;n<t.length;n++)r.push(Object(v.jsxs)("div",{className:"flex flex-wrap flex-col md:flex-row justify-between border-b",children:[Object(v.jsx)("div",{className:"max-w-1/2 md:text-right p-2 mr-10 text-gray-500",children:t[n].key}),Object(v.jsx)("div",{className:"max-w-1/2 p-2",children:t[n].value})]}));return Object(v.jsx)("div",{children:r})},K=function(e){var t=e.tabs,r=e.defaultTab,n=Object(a.useState)(r),i=Object(d.a)(n,2),s=i[0],c=i[1];for(var l=[],o=function(e){l.push(Object(v.jsx)("button",{type:"button",className:"flex-initial p-4 cursor-pointer auto-rows-min border-r border-gray-300",onClick:function(){c(e)},children:t[e].title}))},u=0;u<t.length;u++)o(u);return Object(v.jsxs)("div",{className:"grid grid-rows-2 grid-cols-1 shadow-md border border-gray-400",style:{gridTemplateRows:"min-content auto"},children:[Object(v.jsx)("div",{className:"flex border-b border-gray-300",children:l}),Object(v.jsx)("div",{className:"p-1 md:p-4",children:t[s].content})]})},G=function(e){var t,r,n,i,s=e.book,c=Object(a.useState)([{key:"Rok wydania",value:s.publishedDate},{key:"ID",value:s.id},{key:"Tytul",value:s.title},{key:"ISBN",value:s.isbn},{key:"Autorzy",value:null===(t=s.authors)||void 0===t?void 0:t.join(", ")},{key:"Kategorie",value:null===(r=s.categories)||void 0===r?void 0:r.join(", ")}]),l=Object(d.a)(c,1)[0],o=Object(a.useState)([{title:"Szczeg\xf3\u0142y",content:Object(v.jsx)("div",{className:"flex justify-center p-1 md:p-4",children:Object(v.jsx)(_,{items:l})})}]),u=Object(d.a)(o,1)[0];Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]);var b=Object(a.useState)(!1),j=Object(d.a)(b,2),m=j[0],x=j[1];return Object(v.jsxs)("div",{className:"w-11/12 m-auto mt-8",children:[Object(v.jsxs)("div",{className:"md:w-11/12 m-auto flex flex-wrap flex-col md:flex-row items-start",children:[Object(v.jsx)("div",{className:"m-auto flex flex-wrap flex-col items-start md:flex-row md:w-2/6",children:Object(v.jsx)("img",{onClick:function(){return x(!0)},src:s.imageLinks[0],alt:"A book.",className:"m-auto md:w-1/3 max-h-56 object-scale-down transform hover:scale-110 cursor-pointer w-32 transition duration-400 ease-in-out hover:-translate-y-1"})}),Object(v.jsxs)("div",{className:"lg:w-2/3 flex-col lg:flex-row flex flex-wrap",children:[Object(v.jsxs)("div",{className:"lg:w-6/12 flex flex-auto flex-col",children:[Object(v.jsx)("span",{className:"text-xl",children:s.title})," ",Object(v.jsx)("br",{}),Object(v.jsxs)("div",{className:"flex",children:[Object(v.jsx)("div",{className:"w-1/2 text-gray-600",children:null===(n=s.categories)||void 0===n?void 0:n.join(", ")}),Object(v.jsx)("div",{className:"w-1/2 text-right text-gray-600",children:null===(i=s.authors)||void 0===i?void 0:i.join(", ")})]}),Object(v.jsx)("div",{className:"mt-12 text-sm text-gray-700 text-justify",children:s.description})]}),Object(v.jsx)("div",{className:"lg:w-2/12 mt-4 lg:ml-4",children:Object(v.jsx)(X,{bare:!1,votesAmount:s.votesAmount,avgRating:s.avgRating})})]})]}),Object(v.jsx)("div",{className:"w-full md:w-2/3 mt-8 m-auto",children:Object(v.jsx)(K,{tabs:u,defaultTab:0})}),m&&Object(v.jsxs)("div",{className:"fixed left-0 top-0 pin z-50 overflow-auto bg-gray-400 bg-opacity-50 flex h-screen w-screen",onClick:function(){return x(!1)},children:["siema",Object(v.jsx)("div",{className:"relative m-auto flex-col flex rounded-md shadow-xl transform scale-150",children:Object(v.jsx)("img",{src:s.imageLinks[0],alt:"A book."})})]})]})},H=function(){var e=Object(D.i)(),t=Object(a.useState)(),r=Object(d.a)(t,2),n=r[0],i=r[1];return Object(a.useEffect)((function(){(function(){var t=Object(u.a)(o.a.mark((function t(){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.from("books").select("*").eq("id",e.id);case 2:r=t.sent,null!==(n=r.data)&&i(n[0]);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),n?Object(v.jsx)(G,{book:n}):Object(v.jsx)("span",{children:"simea"})};var W=function(){var e=Object(a.useState)(!0),t=Object(d.a)(e,2),r=t[0],n=t[1];return Object(v.jsxs)("div",{className:"flex justify-between bg-white",children:[Object(v.jsx)("div",{className:"bg-white inline z-40 ".concat(!0===r?"hidden":"fixed lg:static"),children:Object(v.jsx)("button",{type:"button",className:"border-gray-600 bg-white text-gray-600 border max-h-full px-1 mt-2 fixed inset-y-0 left-0 transition duration-500 ease-in-out hover:bg-gray-400 hover:text-white lg:hidden",onClick:function(){return n(!r)},children:"\u2b9c"})}),Object(v.jsx)("div",{className:"lg:block z-30 inset-0 flex-none h-full w-8/12 sm:w-4/12 lg:h-auto bg-white ml-6 lg:mt-0 lg:ml-0 pb-10 lg:pt-0\n        lg:w-60 xl:w-72 shadow-sm dark:bg-gray-800 overflow-y-auto lg:overflow-y-visible ".concat(!0===r?"hidden":"fixed lg:static"),children:Object(v.jsxs)("div",{className:"items-center justify-between scrolling-touch sticky top-16",children:[Object(v.jsx)("div",{className:"border-b border-gray-400 mx-4 my-5 pl-2 text-l font-bold",children:"Magazine"}),Object(v.jsxs)("nav",{className:"mx-4 my-3",children:[Object(v.jsx)(I.b,{to:"/admin/owned",children:Object(v.jsx)("div",{className:"border-b border-gray-200 mx-1 pl-4 pb-5 mt-5",children:"Owned"})}),Object(v.jsx)(I.b,{to:"/admin/store",children:Object(v.jsx)("div",{className:"border-b border-gray-200 mx-1 pl-4 pb-5 mt-5",children:"Store"})})]})]})}),Object(v.jsx)("div",{className:"inline z-40 ".concat(!0===r?"fixed":"hidden"),children:Object(v.jsx)("button",{type:"button",className:"border-gray-600 bg-white text-gray-600 border max-h-full px-1 mt-2 fixed inset-y-0 left-0 transition duration-500 ease-in-out hover:bg-gray-400 hover:text-white lg:hidden",onClick:function(){return n(!r)},children:"\u2b9e"})})]})},Y=r(60),$=r.n(Y),ee=function(e){var t=e.id,r=e.onBookDelete,n=function(){var e=Object(u.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.from("books").delete().match({id:t});case 2:n=e.sent,n.data,r();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)("button",{type:"button",className:"border-gray-400 text-gray-400 rounded-sm border-2 max-h-full ml-2 p-2 transition duration-500 ease-in-out hover:bg-gray-400 hover:text-gray-100",onClick:n,children:"-Usu\u0144 ksi\u0105\u017ck\u0119 z magazynu"})},te=function(e){var t=e.id,r=e.title,n=e.authors,a=e.image,i=e.categories,s=e.quantity,c=e.onBookDelete;return Object(v.jsxs)("div",{className:"flex flex-col sm:flex-row place-content-center max-w-full md:w-auto bg-gray-100 shadow-md p-3 m-3 mx-6",children:[Object(v.jsx)("img",{src:a,alt:"A book.",className:"transform hover:scale-110 cursor-pointer m-3 w-32 transition duration-400 ease-in-out hover:-translate-y-1"}),Object(v.jsxs)("div",{className:"ml-2 w-full",children:[Object(v.jsx)("span",{className:"break-words cursor-pointer transition duration-400 ease-in-out hover:text-gray-500",children:r}),Object(v.jsx)("br",{}),Object(v.jsx)("span",{className:"text-gray-400",children:null===n||void 0===n?void 0:n.join(" ")}),Object(v.jsx)("br",{}),Object(v.jsx)("span",{className:"text-gray-400",children:i}),Object(v.jsx)("br",{}),Object(v.jsx)("span",{className:"text-gray-400",children:s})]}),Object(v.jsx)("div",{children:Object(v.jsx)(ee,{id:t,onBookDelete:c})})]})},re=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),r=t[0],n=t[1],i=Object(a.useState)(),s=Object(d.a)(i,2),c=s[0],l=s[1],b=Object(a.useState)(),j=Object(d.a)(b,2),m=j[0],x=j[1],f=function(){var e=Object(u.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.from("books").select("\n    *\n  ");case 2:t=e.sent,r=t.data,t.error,null!==r&&n(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!1),e.next=4,$.a.get("https://www.googleapis.com/books/v1/volumes?q=a");case 4:t=e.sent,l(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),x(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()(),f()}),[]),Object(v.jsxs)("div",{children:["/internships-2021/admin/store"===window.location.pathname&&c&&(null===c||void 0===c?void 0:c.items.map((function(e){var t,r,n,a,i,s;return Object(v.jsx)(L,{id:null!==(r=e.id)&&void 0!==r?r:"N/D",title:null!==(n=e.volumeInfo.title)&&void 0!==n?n:"N/D",description:null!==(a=e.volumeInfo.description)&&void 0!==a?a:"N/D",publishedDate:null!==(i=e.volumeInfo.publishedDate)&&void 0!==i?i:"N/D",image:e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:"".concat("/internships-2021","/image-not-found.png"),authors:e.volumeInfo.authors,categories:null!==(s=e.volumeInfo.categories)&&void 0!==s?s:["N/D"],isbn:e.volumeInfo.industryIdentifiers?e.volumeInfo.industryIdentifiers[0].identifier:"N/D"},null!==(t=e.id)&&void 0!==t?t:"N/D")}))),m&&Object(v.jsx)("p",{className:"text-red-600",children:"There was an error while trying to fetch data!"}),"/internships-2021/admin/owned"===window.location.pathname&&r&&(null===r||void 0===r?void 0:r.map((function(e){return Object(v.jsx)(te,{id:e.id,title:e.title,image:e.imageLinks[0],isbn:e.isbn,authors:e.authors,publishedDate:e.publishedDate,categories:e.categories,description:e.description,quantity:e.quantity,onBookDelete:f},e.id)})))]})},ne=function(e){return t=e.user,O(t)?Object(v.jsx)(D.b,{path:e.path,exact:e.exact,component:e.component}):Object(v.jsx)(D.a,{to:"/"});var t};var ae=function(){var e=Object(D.h)();return Object(v.jsxs)("div",{className:"flex flex-col items-center w-full",children:[Object(v.jsx)("h1",{className:"text-9xl tracking-wider",children:"404"}),Object(v.jsxs)("h3",{className:"text-3xl",children:["No match for path: ",Object(v.jsx)("code",{className:"font-black",children:e.pathname})]})]})},ie=function(e){var t=e.url,r=e.className;return Object(v.jsx)("img",{className:"w-32 h-32 rounded-full object-cover ".concat(r),src:t,alt:"Zdj\u0119cie u\u017cytkownika"})},se=r(61),ce=r.n(se),le=function(){var e=w(),t=Object(a.useState)(Object(a.useRef)(null)),r=Object(d.a)(t,1)[0],n=Object(a.useState)(),i=Object(d.a)(n,2),s=i[0],c=i[1],l=Object(a.useState)(""),b=Object(d.a)(l,2),j=b[0],m=b[1];function x(){return(x=Object(u.a)(o.a.mark((function t(r){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==r){t.next=3;break}return c("File not found."),t.abrupt("return");case 3:if(e&&e.id){t.next=6;break}return c("Unknown user"),t.abrupt("return");case 6:return t.t0=ce.a,t.next=9,r.arrayBuffer();case 9:return t.t1=t.sent,t.next=12,t.t0.fromBuffer.call(t.t0,t.t1);case 12:if("image/jpeg"===(null===(n=t.sent)||void 0===n?void 0:n.mime)||"image/png"===(null===n||void 0===n?void 0:n.mime)){t.next=16;break}return c("Invalid file type. Supported types: jpg, png."),t.abrupt("return");case 16:return c("Uploading..."),t.next=19,h.storage.from("images").remove(["avatars/".concat(null===e||void 0===e?void 0:e.id)]);case 19:h.storage.from("images/avatars").upload("".concat(null===e||void 0===e?void 0:e.id),r).then(function(){var e=Object(u.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===t.error){e.next=2;break}throw t.error;case 2:return c("Upload successful."),e.next=5,k();case 5:(null===(r=e.sent)||void 0===r?void 0:r.signedURL)&&m(null===r||void 0===r?void 0:r.signedURL);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){c("Upload error (".concat(JSON.stringify(e),")"))}));case 20:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k().then((function(e){(null===e||void 0===e?void 0:e.signedURL)&&m(null===e||void 0===e?void 0:e.signedURL)}));case 2:case"end":return e.stop()}}),e)})))()}),[j]),Object(v.jsxs)("div",{className:"p-4",children:[Object(v.jsx)("h1",{className:"text-2xl",children:"Zmiana zdj\u0119cia u\u017cytkownika"}),Object(v.jsxs)("div",{className:"flex flex-wrap",children:[Object(v.jsx)(ie,{url:j,className:""}),Object(v.jsxs)("div",{className:"flex flex-col flex-wrap place-content-end m-2",children:[Object(v.jsx)("input",{type:"file",accept:"image/jpeg, image/png",ref:r,required:!0}),Object(v.jsxs)("div",{className:"mt-4",children:[Object(v.jsx)("button",{type:"button",onClick:function(){var e,t,n;(null===r||void 0===r||null===(e=r.current)||void 0===e?void 0:e.files)&&(null===r||void 0===r||null===(t=r.current)||void 0===t?void 0:t.files.length)>0?function(e){x.apply(this,arguments)}(null===r||void 0===r||null===(n=r.current)||void 0===n?void 0:n.files[0]):c("File not selected.")},children:"Upload file"}),Object(v.jsxs)("div",{className:"text-xs h-4",children:[Object(v.jsx)("label",{className:"text-gray-500",children:"Status: "}),s]})]})]})]})]})},oe=function(){return Object(v.jsx)("div",{className:"m-4",children:Object(v.jsx)(le,{})})},de=(r(123),function(){var e=w(),t=Object(a.useState)(""),r=Object(d.a)(t,2),n=r[0],i=r[1];return Object(a.useEffect)((function(){Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k().then((function(e){(null===e||void 0===e?void 0:e.signedURL)&&i(null===e||void 0===e?void 0:e.signedURL)}));case 2:case"end":return e.stop()}}),e)})))()}),[]),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"h-32 bg-gray-500 bg-no-repeat bg-center",style:{backgroundImage:"url(https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg)"}}),Object(v.jsx)("div",{className:"mx-16 bg-white relative -top-4 z-30",children:Object(v.jsxs)("div",{className:"shadow-md",children:[Object(v.jsxs)("div",{className:"flex flex-col md:flex-row",children:[Object(v.jsx)("div",{className:"w-1/4 relative h-24",children:Object(v.jsx)(ie,{url:n,className:"relative -top-16 left-2"})}),Object(v.jsx)("div",{className:"mt-2 w-1/2",children:Object(v.jsxs)("div",{className:"flex uppercase",children:[Object(v.jsx)("div",{className:"w-min md:mr-2 first-l",children:null===e||void 0===e?void 0:e.firstName}),Object(v.jsx)("div",{className:"w-min first-l",children:null===e||void 0===e?void 0:e.lastName})]})}),Object(v.jsx)("div",{className:"text-gray-400 w-1/4 flex justify-end p-4",children:"ROLA USERA"})]}),Object(v.jsx)("div",{className:"p-2",children:Object(v.jsx)(oe,{})})]})})]})});var ue=function(){var e,t=w(),r=R(null!==(e=null===t||void 0===t?void 0:t.id)&&void 0!==e?e:null);return Object(v.jsx)("div",{className:"App h-full",children:Object(v.jsxs)(I.a,{basename:"/internships-2021",children:[Object(v.jsx)("header",{className:"App-header fixed w-full top-0 h-10 z-50",children:Object(v.jsx)(B,{})}),Object(v.jsxs)("div",{className:"container w-full h-screen max-w-8xl mx-auto flex mt-12 z-10",children:[O(r)?Object(v.jsx)(W,{}):Object(v.jsx)(M,{}),Object(v.jsx)("div",{className:"min-w-0 w-full pl-5 pt-3 flex-auto lg:static lg:max-h-full lg:overflow-visible shadow-inner",children:Object(v.jsxs)(D.d,{children:[Object(v.jsx)(D.b,{path:"/internships-2021",exact:!0,children:Object(v.jsx)(D.a,{to:"/"})}),Object(v.jsxs)(D.b,{path:"/",exact:!0,children:[Object(v.jsx)("div",{className:"justify-start",children:Object(v.jsx)(J,{})}),Object(v.jsx)(z,{})]}),Object(v.jsx)(D.b,{path:"/user",exact:!0,children:Object(v.jsx)(de,{})}),Object(v.jsx)(ne,{component:re,path:"/admin/owned",exact:!0,user:r}),Object(v.jsx)(ne,{component:z,path:"/admin/store",exact:!0,user:r}),Object(v.jsx)(D.b,{path:"/books-list",exact:!0,children:Object(v.jsx)(D.a,{to:"/books-list/*/0"})}),Object(v.jsx)(D.b,{path:"/books-list/:q?/:rating?",children:Object(v.jsx)(z,{})}),Object(v.jsx)(D.b,{path:"/book/:id",exact:!0,children:Object(v.jsx)(H,{})}),Object(v.jsx)(D.b,{path:"*",children:Object(v.jsx)(ae,{})})]})})]})]})})};var be=function(){return Object(v.jsx)(C,{children:Object(v.jsx)(ue,{})})},je=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,127)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),i(e),s(e)}))};c.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(be,{})}),document.getElementById("root")),je()},67:function(e,t,r){}},[[124,1,2]]]);
//# sourceMappingURL=main.baf3f257.chunk.js.map