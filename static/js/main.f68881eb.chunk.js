(this["webpackJsonpinternships-2021"]=this["webpackJsonpinternships-2021"]||[]).push([[0],{49:function(e,t,r){},77:function(e,t,r){"use strict";r.r(t);var s=r(0),a=r.n(s),n=r(39),i=r.n(n),l=(r(49),r(7)),d=r(1),c=a.a.createContext(null),o=a.a.createContext(null),b=function(){return Object(s.useContext)(c)},m=function(e){var t=e.children,r=Object(s.useState)({id:"",firstName:"",lastName:""}),a=Object(l.a)(r,2),n=a[0],i=a[1];return Object(d.jsx)(c.Provider,{value:n,children:Object(d.jsx)(o.Provider,{value:function(e){i(e)},children:t})})},j=r(17),u=r(3),x=r(2),h=r.n(x),O=r(15),p=r(40),v=r.n(p),f=function(e){var t=e.id,r=e.title,s=e.authors,a=e.image;return Object(d.jsxs)("div",{className:"flex flex-col sm:flex-row place-content-center max-w-full md:w-auto bg-gray-100 shadow-md p-3 m-3 mx-6",children:[Object(d.jsx)("img",{src:a,alt:"A book.",className:"transform hover:scale-110 cursor-pointer m-3 w-32 transition duration-400 ease-in-out hover:-translate-y-1"}),Object(d.jsxs)("div",{className:"ml-2 w-full",children:[Object(d.jsx)("span",{className:"break-words cursor-pointer transition duration-400 ease-in-out hover:text-gray-500",children:r}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"text-gray-400",children:null===s||void 0===s?void 0:s.join(" ")})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"button",className:"border-gray-400 text-gray-400 rounded-sm border-2 max-h-full ml-2 p-2 transition duration-500 ease-in-out hover:bg-gray-400 hover:text-gray-100",children:"+ Dodaj ksi\u0105\u017ck\u0119 do magazynu"})})]},t)},g=function(){var e=Object(s.useState)(),t=Object(l.a)(e,2),r=t[0],a=t[1],n=Object(s.useState)(),i=Object(l.a)(n,2),c=i[0],o=i[1];return Object(s.useEffect)((function(){(function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!1),e.next=4,v.a.get("https://www.googleapis.com/books/v1/volumes?q=search+terms");case 4:t=e.sent,a(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsxs)("div",{children:[(null===r||void 0===r?void 0:r.items)&&(null===r||void 0===r?void 0:r.items.map((function(e){return Object(d.jsx)(f,{title:e.volumeInfo.title,description:e.volumeInfo.description,publishedDate:e.volumeInfo.publishedDate,industryIdentifiers:e.volumeInfo.industryIdentifiers,image:e.volumeInfo.imageLinks.thumbnail,authors:e.volumeInfo.authors,categories:e.volumeInfo.categories},e.id)}))),c&&Object(d.jsx)("p",{className:"text-red-600",children:"There was an error while trying to fetch data!"})]})},N=r(24),w=r(44),y=String(Object({NODE_ENV:"production",PUBLIC_URL:"/internships-2021",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SUPABASE_URL),S=String(Object({NODE_ENV:"production",PUBLIC_URL:"/internships-2021",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SUPABASE_TOKEN),C=Object(w.a)(y,S),_=function(){var e=Object(s.useContext)(o),t=Object(s.useState)(!1),r=Object(l.a)(t,2),a=r[0],n=r[1],i=Object(N.a)({initialValues:{emailAdress:"",password:""},onSubmit:function(){var t=Object(O.a)(h.a.mark((function t(r){var s,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.auth.signIn({email:r.emailAdress,password:r.password});case 2:s=t.sent,i=s.user,s.error,n(!a),e&&e({id:null===i||void 0===i?void 0:i.id,firstName:null===i||void 0===i?void 0:i.email,lastName:"unknown"});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()});return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{type:"button",onClick:function(){return n(!a)},className:"border-solid bg-red-300 rounded-md",children:"Login"}),a&&Object(d.jsx)("div",{className:"fixed left-0 top-0 pin z-50 overflow-auto bg-gray-400 bg-opacity-50 flex h-screen w-screen",children:Object(d.jsxs)("div",{className:"relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-md shadow-xl",children:[Object(d.jsx)("button",{type:"button",onClick:function(){return n(!a)},className:"border-solid bg-red-300 rounded-md",children:"Exit"}),Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:i.handleSubmit,children:[Object(d.jsx)("label",{htmlFor:"email-adress",children:"Email adress:"}),Object(d.jsx)("input",{id:"emailAdress",name:"emailAdress",type:"email",placeholder:"Email-adress",onChange:i.handleChange,value:i.values.emailAdress,className:"border-solid border-4 border-blue-300 rounded-md mb-2"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(d.jsx)("input",{id:"password",name:"password",type:"password",placeholder:"Password",onChange:i.handleChange,value:i.values.password,className:"border-solid border-4 border-blue-300 rounded-md mb-2"}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{type:"submit",className:"border-solid bg-blue-300 rounded-md",children:"Login"})]})})]})})]})},E=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),r=t[0],a=t[1],n=Object(N.a)({initialValues:{emailAdress:"",password:"",firstName:"",lastName:""},onSubmit:function(){var e=Object(O.a)(h.a.mark((function e(t){var s,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.auth.signUp({email:t.emailAdress,password:t.password});case 2:if(s=e.sent,n=s.user,s.error,!n){e.next=8;break}return e.next=8,C.from("profiles").insert({id:n.id,firstName:t.firstName,lastName:t.lastName});case 8:a(!r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{type:"button",onClick:function(){return a(!r)},className:"border-solid bg-red-300 rounded-md",children:"Register"}),r&&Object(d.jsx)("div",{className:"fixed left-0 top-0 pin z-50 overflow-auto bg-gray-400 bg-opacity-50 flex h-screen w-screen",children:Object(d.jsxs)("div",{className:"relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-md shadow-xl",children:[Object(d.jsx)("button",{type:"button",onClick:function(){return a(!r)},className:"border-solid bg-red-300 rounded-md",children:"Exit"}),Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:n.handleSubmit,children:[Object(d.jsx)("label",{htmlFor:"email-adress",children:"Email adress:"}),Object(d.jsx)("input",{id:"emailAdress",name:"emailAdress",type:"email",placeholder:"Email-adress",onChange:n.handleChange,value:n.values.emailAdress,className:"border-solid border-4 border-blue-300 rounded-md mb-2"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(d.jsx)("input",{id:"password",name:"password",type:"password",placeholder:"Password",onChange:n.handleChange,value:n.values.password,className:"border-solid border-4 border-blue-300 rounded-md mb-2"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(d.jsx)("input",{id:"firstName",name:"firstName",type:"text",placeholder:"First Name",onChange:n.handleChange,value:n.values.firstName,className:"border-solid border-4 border-blue-300 rounded-md mb-2"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(d.jsx)("input",{id:"lastName",name:"lastName",type:"text",placeholder:"Last Name",onChange:n.handleChange,value:n.values.lastName,className:"border-solid border-4 border-blue-300 rounded-md mb-2"}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{type:"submit",className:"border-solid bg-blue-300 rounded-md",children:"Register"})]})})]})})]})};var k=function(){var e=b();return Object(d.jsx)("div",{className:"",children:Object(d.jsx)("nav",{className:"bg-white shadow dark:bg-gray-800",children:Object(d.jsxs)("div",{className:"container px-6 py-3 mx-auto md:flex md:justify-between md:items-center",children:[Object(d.jsx)("div",{className:"flex items-center justify-between",children:Object(d.jsx)("div",{children:Object(d.jsx)("span",{className:"text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300",children:"Books"})})}),Object(d.jsx)("div",{className:"items-center md:flex",children:Object(d.jsxs)("div",{className:"flex flex-col md:flex-row md:mx-6",children:[Object(d.jsx)(j.b,{to:"/",className:"my-1 pl-4 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mr-4 md:my-0 md:border-l md:border-gray-400",children:"Home"}),Object(d.jsx)(j.b,{to:"/user",className:"my-1 pl-4 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mr-4 md:my-0 md:border-l md:border-gray-400",children:null!==e&&""!==e.id?e.firstName:"User"}),Object(d.jsx)(j.b,{to:"/admin",className:"my-1 px-4 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mr-4 md:my-0 md:border-l md:border-r md:border-gray-400",children:"Admin"}),Object(d.jsx)(_,{}),Object(d.jsx)(E,{})]})})]})})})};var A=function(){var e=Object(s.useState)(0),t=Object(l.a)(e,2),r=t[0],a=t[1];return Object(d.jsx)("div",{className:"fixed z-40 inset-0 flex-none h-full bg-opacity-25 w-full lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden shadow-sm dark:bg-gray-800",children:Object(d.jsxs)("div",{className:"items-center justify-between overflow-y-auto scrolling-touch",children:[Object(d.jsx)("div",{className:"border-b border-gray-400 mx-4 my-5 pl-2 text-l font-bold",children:"Filters"}),Object(d.jsxs)("nav",{className:"mx-4 my-3",children:[Object(d.jsxs)("div",{className:"border-b border-gray-200 mx-1 pb-5 mt-5",children:[Object(d.jsx)("label",{htmlFor:"searchbar",className:"mr-2",children:"Search"}),Object(d.jsx)("input",{type:"text",placeholder:"Insert book name",id:"searchbar",className:"p-1 placeholder-gray-400 text-gray-600 border outline-none"})]}),Object(d.jsx)("div",{className:"border-b border-gray-200 mx-1 pl-4 pb-5 mt-5",children:Object(d.jsxs)("ul",{className:"list-disc",children:[Object(d.jsx)("li",{children:"Fiction"}),Object(d.jsx)("li",{children:"Literature of fact, journalism"}),Object(d.jsx)("li",{children:"Popular science literature"}),Object(d.jsx)("li",{children:"Children's literature"}),Object(d.jsx)("li",{children:"Comics"}),Object(d.jsx)("li",{children:"Poetry, drama satire"}),Object(d.jsx)("li",{children:"Other"})]})}),Object(d.jsxs)("div",{className:"border-b border-gray-200 mx-1 pl-4 pb-5 mt-5",children:[Object(d.jsx)("input",{type:"range",min:"0",max:"10",onChange:function(e){var t;a(Number(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value))}}),Object(d.jsx)("span",{className:"ml-2",id:"range",children:r})]})]})]})})};var T=function(){var e=b();return Object(d.jsx)("div",{className:"App h-full",children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)("header",{className:"App-header fixed w-full top-0 h-10 z-50",children:Object(d.jsx)(k,{})}),Object(d.jsxs)("div",{className:"container w-full h-screen max-w-8xl mx-auto flex mt-12 z-10",children:[Object(d.jsx)(A,{}),Object(d.jsx)("div",{className:"min-w-0 w-full pl-5 pt-3 flex-auto lg:static lg:max-h-full lg:overflow-visible shadow-inner",children:Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{path:"/internships-2021",exact:!0,children:Object(d.jsx)(u.a,{to:"/"})}),Object(d.jsxs)(u.b,{path:"/",exact:!0,children:["main",Object(d.jsxs)("main",{children:[Object(d.jsxs)("p",{children:["Edit ",Object(d.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(d.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn Reacta"})]})]}),Object(d.jsx)(u.b,{path:"/user",exact:!0}),Object(d.jsx)(u.b,{path:"/admin",exact:!0,children:(null===e||void 0===e?void 0:e.id)===Object({NODE_ENV:"production",PUBLIC_URL:"/internships-2021",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ADMIN_ID?Object(d.jsx)("div",{children:"Witaj adminie"}):Object(d.jsx)(u.a,{to:"/"})}),Object(d.jsx)(u.b,{path:"/books-list",exact:!0,children:Object(d.jsx)(g,{})})]})})]})]})})};var P=function(){return Object(d.jsx)(m,{children:Object(d.jsx)(T,{})})},F=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,80)).then((function(t){var r=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;r(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(P,{})}),document.getElementById("root")),F()}},[[77,1,2]]]);
//# sourceMappingURL=main.f68881eb.chunk.js.map