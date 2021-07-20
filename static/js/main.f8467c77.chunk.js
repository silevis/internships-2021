(this["webpackJsonpinternships-2021"]=this["webpackJsonpinternships-2021"]||[]).push([[0],{34:function(e,t,r){},60:function(e,t,r){"use strict";r.r(t);var a=r(1),s=r.n(a),c=r(26),n=r.n(c),l=(r(34),r(9)),i=r(2),d=r(14),o=r.n(d),j=r(27),b=r(11),x=r(28),m=r.n(x),h=r(0),u=function(e){var t=e.id,r=e.title,a=e.authors,s=e.smallThumbnail;return Object(h.jsxs)("div",{className:"flex flex-col sm:flex-row place-content-center max-w-full md:w-auto bg-gray-100 shadow-md p-3 m-3 mx-6",children:[Object(h.jsx)("img",{src:s,alt:"A book.",className:"transform hover:scale-110 cursor-pointer m-3 w-32 transition duration-400 ease-in-out hover:-translate-y-1"}),Object(h.jsxs)("div",{className:"ml-2 w-full",children:[Object(h.jsx)("span",{className:"break-words cursor-pointer transition duration-400 ease-in-out hover:text-gray-500",children:r}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"text-gray-400",children:null===a||void 0===a?void 0:a.join(" ")})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"button",className:"border-gray-400 text-gray-400 rounded-sm border-2 max-h-full ml-2 p-2 transition duration-500 ease-in-out hover:bg-gray-400 hover:text-gray-100",children:"+ Dodaj ksi\u0105\u017ck\u0119 do magazynu"})})]},t)},O=function(){var e=Object(a.useState)(),t=Object(b.a)(e,2),r=t[0],s=t[1],c=Object(a.useState)(),n=Object(b.a)(c,2),l=n[0],i=n[1];return Object(a.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!1),e.next=4,m.a.get("https://www.googleapis.com/books/v1/volumes?q=search+terms");case 4:t=e.sent,s(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),i(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsxs)("div",{children:[(null===r||void 0===r?void 0:r.items)&&(null===r||void 0===r?void 0:r.items.map((function(e){return Object(h.jsx)(u,{title:e.volumeInfo.title,authors:e.volumeInfo.authors,smallThumbnail:e.volumeInfo.imageLinks.smallThumbnail},e.id)}))),l&&Object(h.jsx)("p",{className:"text-red-600",children:"There was an error while trying to fetch data!"})]})},v=s.a.createContext(null);var p=function(){var e=Object(a.useContext)(v);return Object(h.jsx)("div",{className:"",children:Object(h.jsx)("nav",{className:"bg-white shadow dark:bg-gray-800",children:Object(h.jsxs)("div",{className:"container px-6 py-3 mx-auto md:flex md:justify-between md:items-center",children:[Object(h.jsx)("div",{className:"flex items-center justify-between",children:Object(h.jsx)("div",{children:Object(h.jsx)("span",{className:"text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300",children:"Books"})})}),Object(h.jsx)("div",{className:"items-center md:flex",children:Object(h.jsxs)("div",{className:"flex flex-col md:flex-row md:mx-6",children:[Object(h.jsx)(l.b,{to:"/",className:"my-1 pl-4 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mr-4 md:my-0 md:border-l md:border-gray-400",children:"Home"}),Object(h.jsx)(l.b,{to:"/user",className:"my-1 pl-4 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mr-4 md:my-0 md:border-l md:border-gray-400",children:e}),Object(h.jsx)(l.b,{to:"/admin",className:"my-1 px-4 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mr-4 md:my-0 md:border-l md:border-r md:border-gray-400",children:"Admin"})]})})]})})})};var g=function(){var e=Object(a.useState)(0),t=Object(b.a)(e,2),r=t[0],s=t[1],c=Object(a.useContext)(v);return Object(h.jsx)("div",{className:"fixed z-40 inset-0 flex-none h-full bg-opacity-25 w-full lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden shadow-sm dark:bg-gray-800",children:Object(h.jsxs)("div",{className:"items-center justify-between overflow-y-auto scrolling-touch",children:[Object(h.jsx)("div",{className:"border-b border-gray-400 mx-4 my-5 pl-2 text-l font-bold",children:"Filters"}),Object(h.jsxs)("nav",{className:"mx-4 my-3",children:[Object(h.jsxs)("div",{className:"border-b border-gray-200 mx-1 pb-5 mt-5",children:[Object(h.jsx)("label",{htmlFor:"searchbar",className:"mr-2",children:"Search"}),Object(h.jsx)("input",{type:"text",placeholder:"Insert book name",id:"searchbar",className:"p-1 placeholder-gray-400 text-gray-600 border outline-none"})]}),Object(h.jsx)("div",{className:"border-b border-gray-200 mx-1 pl-4 pb-5 mt-5",children:Object(h.jsxs)("ul",{className:"list-disc",children:[Object(h.jsx)("li",{children:c}),Object(h.jsx)("li",{children:"Fiction"}),Object(h.jsx)("li",{children:"Literature of fact, journalism"}),Object(h.jsx)("li",{children:"Popular science literature"}),Object(h.jsx)("li",{children:"Children's literature"}),Object(h.jsx)("li",{children:"Comics"}),Object(h.jsx)("li",{children:"Poetry, drama satire"}),Object(h.jsx)("li",{children:"Other"})]})}),Object(h.jsxs)("div",{className:"border-b border-gray-200 mx-1 pl-4 pb-5 mt-5",children:[Object(h.jsx)("input",{type:"range",min:"0",max:"10",onChange:function(e){var t;s(Number(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value))}}),Object(h.jsx)("span",{className:"ml-2",id:"range",children:r})]})]})]})})};var f=function(){return Object(h.jsx)(v.Provider,{value:15,children:Object(h.jsx)("div",{className:"App h-full",children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)("header",{className:"App-header fixed w-full top-0 h-10 z-50",children:Object(h.jsx)(p,{})}),Object(h.jsxs)("div",{className:"container w-full h-screen max-w-8xl mx-auto flex mt-12 z-10",children:[Object(h.jsx)(g,{}),Object(h.jsx)("div",{className:"min-w-0 w-full pl-5 pt-3 flex-auto lg:static lg:max-h-full lg:overflow-visible shadow-inner",children:Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.b,{path:"/internships-2021",exact:!0,children:Object(h.jsx)(i.a,{to:"/"})}),Object(h.jsxs)(i.b,{path:"/",exact:!0,children:["main",Object(h.jsxs)("main",{children:[Object(h.jsxs)("p",{children:["Edit ",Object(h.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(h.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn Reacta"})]})]}),Object(h.jsx)(i.b,{path:"/user",exact:!0}),Object(h.jsx)(i.b,{path:"/admin",exact:!0}),Object(h.jsx)(i.b,{path:"/books-list",exact:!0,children:Object(h.jsx)(O,{})})]})})]})]})})})},y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,61)).then((function(t){var r=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;r(e),a(e),s(e),c(e),n(e)}))};n.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),y()}},[[60,1,2]]]);
//# sourceMappingURL=main.f8467c77.chunk.js.map