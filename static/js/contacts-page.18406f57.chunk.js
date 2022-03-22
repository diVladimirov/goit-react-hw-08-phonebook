"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[141],{8357:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var a=t(6030),r=t(8152),s=t(2791),c=t(6052),u=t(184),i=function(){var e=(0,s.useState)(""),n=(0,r.Z)(e,2),t=n[0],i=n[1],o=(0,s.useState)(""),d=(0,r.Z)(o,2),l=d[0],m=d[1],h=(0,a.I0)(),p=(0,a.v9)((function(e){return e.contacts.items}));(0,s.useEffect)((function(){h(c.Z.fetchContacts())}),[h]);var f=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"name":return i(a);case"number":return m(a);default:return}};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{children:"AddForm"}),(0,u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),p.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))return alert("".concat(t," is already in contacts."));h(c.Z.createNewContact({name:t,number:l})),i(""),m("")},children:[(0,u.jsxs)("label",{children:["Name",(0,u.jsx)("input",{type:"text",value:t,onChange:f,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Input name",required:!0})]}),(0,u.jsxs)("label",{children:["Number",(0,u.jsx)("input",{type:"tel",value:l,onChange:f,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Input number",required:!0})]}),(0,u.jsx)("button",{type:"submit",children:"Add contact"})]})]})},o=t(6273),d=function(e){var n=e.id,t=e.name,r=e.number,s=(0,a.I0)();return(0,u.jsxs)("li",{children:[(0,u.jsxs)("span",{children:[t,":"]}),(0,u.jsx)("span",{children:r}),(0,u.jsx)("button",{type:"button",onClick:function(){return s((0,o.h7)(n))},children:"Edit contact"}),(0,u.jsx)("button",{type:"button",onClick:function(){return s(c.Z.deleteContact(n))},children:"Delete contact"})]},n)},l=function(){var e=(0,a.v9)((function(e){return e.contacts.items})),n=(0,a.v9)((function(e){return e.contacts.filter})),t=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{children:t.map((function(e){var n=e.id,t=e.name,a=e.number;return(0,u.jsx)(d,{id:n,name:t,number:a},n)}))})})},m=function(){var e=(0,a.I0)();return(0,u.jsx)("form",{children:(0,u.jsxs)("label",{children:["Find contacts by name",(0,u.jsx)("input",{type:"text",name:"filter",onChange:function(n){e((0,o.a8)(n.currentTarget.value))},placeholder:"Input name to find"})]})})},h=t(4164),p=document.querySelector("#modal-root"),f=function(){var e=(0,s.useState)(""),n=(0,r.Z)(e,2),t=n[0],i=n[1],d=(0,s.useState)(""),l=(0,r.Z)(d,2),m=l[0],f=l[1],x=(0,s.useState)(""),b=(0,r.Z)(x,2),j=b[0],v=b[1],C=(0,a.I0)(),y=(0,a.v9)((function(e){return e.contacts.editContact}));(0,s.useEffect)((function(){i(y[0].id),f(y[0].name),v(y[0].number)}),[y]);var g=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"name":return f(a);case"number":return v(a);default:return}};return(0,h.createPortal)((0,u.jsx)("div",{children:(0,u.jsx)("div",{children:(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),C(c.Z.updateContact({id:t,name:m,number:j})),C((0,o.Mr)())},children:[(0,u.jsxs)("label",{children:["Name",(0,u.jsx)("input",{type:"text",value:m,onChange:g,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsxs)("label",{children:["Number",(0,u.jsx)("input",{type:"tel",value:j,onChange:g,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,u.jsx)("button",{type:"submit",children:"Save"}),(0,u.jsx)("button",{type:"button",onClick:function(){return C((0,o.Mr)())},children:"Close"})]})})}),p)},x=function(){var e=(0,a.v9)((function(e){return e.contacts.showModal}));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"ContactsPage"}),(0,u.jsx)(m,{}),(0,u.jsx)(l,{}),(0,u.jsx)(i,{})]}),e&&(0,u.jsx)(f,{})]})}}}]);
//# sourceMappingURL=contacts-page.18406f57.chunk.js.map