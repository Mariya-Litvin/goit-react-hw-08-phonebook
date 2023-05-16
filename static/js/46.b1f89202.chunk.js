"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[46],{1205:function(n,e,r){r.r(e),r.d(e,{default:function(){return X}});var t,o,a,i,c,d,s,x,p,l,u,b,h,f,g,m,w=r(9439),Z=r(2791),j=r(5218),v=r(9434),k=r(3634),y=function(n){return n.contacts.items},P=function(n){return n.filter},C=r(168),z=r(6444),A=z.ZP.form(t||(t=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n"]))),F=z.ZP.label(o||(o=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-size: 20px;\n  font-weight: 500;\n"]))),I=z.ZP.input(a||(a=(0,C.Z)(["\n  height: 20px;\n  width: 350px;\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  :focus {\n    outline: none;\n    border-color: #007bff;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n  }\n  :hover {\n    border-color: #007bff;\n  }\n"]))),E=z.ZP.button(i||(i=(0,C.Z)(["\n  width: 100px;\n  height: 30px;\n  padding: 5px;\n  font-weight: 500;\n  font-size: 14px;\n  border-radius: 5px;\n  border-color: #84c3be;\n  background-color: #5d9b9b;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) box-shadow\n    250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    background-color: #669e85;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n  }\n"]))),L=r(184),S=function(){var n=(0,Z.useState)(""),e=(0,w.Z)(n,2),r=e[0],t=e[1],o=(0,Z.useState)(""),a=(0,w.Z)(o,2),i=a[0],c=a[1],d=(0,v.v9)(y),s=(0,v.I0)(),x=function(n){var e=n.target,r=e.name,o=e.value;"name"===r?t(o):"number"===r&&c(o)};return(0,L.jsxs)(A,{onSubmit:function(n){n.preventDefault(),function(){var n={number:i,name:r};if(d.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase().trim()})))return j.ZP.error("".concat(n.name," is already in contacts."));s((0,k.uK)(n)),(0,j.ZP)("Success! This contact will be added to your Phonebook.",{icon:"\ud83d\udc4f"})}(),t(""),c("")},children:[(0,L.jsxs)(F,{children:["Name",(0,L.jsx)(I,{type:"text",name:"name",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:x,value:r})]}),(0,L.jsxs)(F,{children:["Number",(0,L.jsx)(I,{type:"tel",name:"number",placeholder:"Enter number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:x,value:i})]}),(0,L.jsx)(E,{type:"submit",children:"Add contact"})]})},_=z.ZP.p(c||(c=(0,C.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n"]))),N=z.ZP.button(d||(d=(0,C.Z)(["\n  width: 60px;\n  height: 30px;\n  padding: 5px;\n  font-weight: 500;\n  font-size: 14px;\n  border-radius: 5px;\n  border-color: #007bff;\n  background-color: #abcdef;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    background-color: #cac4b0;\n  }\n"]))),q=function(n){var e=n.contact,r=(0,v.I0)();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(_,{children:[e.name,": ",e.number]}),(0,L.jsx)(N,{type:"button",onClick:function(){return r((0,k.GK)(e.id))},children:"Delete"})]})},D=z.ZP.ul(s||(s=(0,C.Z)(["\n  width: 400px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 10px;\n  overflow: auto;\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    background-color: #f1f1f1;\n  }\n  ::-webkit-scrollbar-thumb {\n    background-color: #888;\n    border: 1px solid #f1f1f1;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  }\n  ::-webkit-scrollbar-thumb:hover {\n    background-color: #555;\n  }\n"]))),H=z.ZP.li(x||(x=(0,C.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n"]))),K=z.ZP.p(p||(p=(0,C.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n"]))),T=function(){var n=(0,v.v9)(y),e=(0,v.v9)(P),r=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(D,{children:r.map((function(n){return(0,L.jsx)(H,{children:(0,L.jsx)(q,{contact:n})},n.id)}))}),(0,L.jsxs)(K,{children:["All contacts: ",n.length]}),e&&(0,L.jsxs)(K,{children:["Filtered contacts: ",r.length]})]})},B=r(4808),G=z.ZP.div(l||(l=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),J=z.ZP.p(u||(u=(0,C.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n"]))),M=z.ZP.input(b||(b=(0,C.Z)(["\n  height: 20px;\n  width: 350px;\n  padding: 5px;\n  margin-top: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  :focus {\n    outline: none;\n    border-color: #007bff;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n  }\n  :hover {\n    border-color: #007bff;\n  }\n"]))),$=function(){var n=(0,v.I0)(),e=(0,v.v9)(P);return(0,L.jsxs)(G,{children:[(0,L.jsx)(J,{children:"Find Contacts by name"}),(0,L.jsx)("label",{children:(0,L.jsx)(M,{type:"text",name:"filter",placeholder:"Enter name",onChange:function(e){var r=e.target.value;n((0,B.T)(r))},value:e})})]})},O=r(4270),Q=z.ZP.div(h||(h=(0,C.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n"]))),R=z.ZP.div(f||(f=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  /* margin: 0px 0px 0px 400px; */\n  padding: 20px;\n  width: 400px;\n  height: 350px;\n  border-radius: 5px;\n  background-color: #c1caca;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n"]))),U=z.ZP.div(g||(g=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: baseline;\n  gap: 20px;\n  /* margin: 0px 0px 0px 400px; */\n  padding: 20px;\n  width: 400px;\n  height: 350px;\n  /* max-height: max-content; */\n  border-radius: 5px;\n  background-color: #c1caca;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n"]))),V=z.ZP.div(m||(m=(0,C.Z)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(66, 75, 92, 0.5);\n  /* background-image: url('../../image/bgHome.jpg'); */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n"]))),W=r.p+"static/media/bgContacts.66a35d94a88c2d7a38fe.jpg",X=function(){var n=(0,v.I0)();return(0,Z.useEffect)((function(){n((0,k.yF)())}),[n]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(O.Helmet,{children:(0,L.jsx)("title",{children:"Contacts"})}),(0,L.jsx)(V,{style:{backgroundImage:"url(".concat(W,")")},children:(0,L.jsxs)(Q,{children:[(0,L.jsx)(R,{children:(0,L.jsx)(S,{})}),(0,L.jsxs)(U,{children:[(0,L.jsx)($,{}),(0,L.jsx)(T,{})]})]})})]})}}}]);
//# sourceMappingURL=46.b1f89202.chunk.js.map