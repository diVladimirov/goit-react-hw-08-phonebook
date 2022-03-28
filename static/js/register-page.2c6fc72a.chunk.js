"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[316],{50:function(e,r,t){t.r(r);var a=t(885),n=t(2791),o=t(6030),i=t(5822),s=t(3504),l=t(6445),c=t(4554),u=t(3044),d=t(890),m=t(1889),f=t(7593),h=t(6151),v=t(1550),p=t(184);r.default=function(){var e=(0,n.useState)(""),r=(0,a.Z)(e,2),t=r[0],g=r[1],x=(0,n.useState)(""),Z=(0,a.Z)(x,2),j=Z[0],w=Z[1],b=(0,n.useState)(""),y=(0,a.Z)(b,2),S=y[0],k=y[1],P=(0,o.I0)(),R=function(e){var r=e.target,t=r.name,a=r.value;switch(t){case"name":return g(a);case"email":return w(a);case"password":return k(a);default:return}};return(0,p.jsx)(l.Z,{maxWidth:"xs",children:(0,p.jsxs)(c.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,p.jsx)(u.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,p.jsx)(v.Z,{})}),(0,p.jsx)(d.Z,{component:"h1",variant:"h5",children:"Registration"}),(0,p.jsxs)(c.Z,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault(),P(i.Z.createNewUser({name:t,email:j,password:S})),g(""),w(""),k("")},sx:{mt:3},children:[(0,p.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,p.jsx)(m.ZP,{item:!0,xs:12,children:(0,p.jsx)(f.Z,{autoComplete:"given-name",name:"name",required:!0,fullWidth:!0,id:"name",label:"Name",autoFocus:!0,type:"text",value:t,onChange:R})}),(0,p.jsx)(m.ZP,{item:!0,xs:12,children:(0,p.jsx)(f.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",type:"email",value:j,onChange:R})}),(0,p.jsx)(m.ZP,{item:!0,xs:12,children:(0,p.jsx)(f.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password",value:S,onChange:R})})]}),(0,p.jsx)(h.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Register"}),(0,p.jsx)(m.ZP,{container:!0,justifyContent:"center",children:(0,p.jsx)(m.ZP,{item:!0,children:(0,p.jsx)(s.rU,{to:"/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]})})}},1550:function(e,r,t){var a=t(4119);r.Z=void 0;var n=a(t(5649)),o=t(184),i=(0,n.default)((0,o.jsx)("path",{d:"M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM5 18c.2-.63 2.57-1.68 4.96-1.94l2.04-2c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-2-2H5zm15.6-5.5-5.13 5.17-2.07-2.08L12 17l3.47 3.5L22 13.91z"}),"HowToRegOutlined");r.Z=i},3044:function(e,r,t){t.d(r,{Z:function(){return j}});var a=t(885),n=t(1048),o=t(2793),i=t(2791),s=t(8182),l=t(767),c=t(7630),u=t(1046),d=t(9201),m=t(184),f=(0,d.Z)((0,m.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),h=t(5159);function v(e){return(0,h.Z)("MuiAvatar",e)}(0,t(208).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var p=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})((function(e){var r=e.theme,t=e.ownerState;return(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:r.shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&{color:r.palette.background.default,backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]})})),x=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Z=(0,c.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"75%",height:"75%"});var j=i.forwardRef((function(e,r){var t=(0,u.Z)({props:e,name:"MuiAvatar"}),c=t.alt,d=t.children,f=t.className,h=t.component,j=void 0===h?"div":h,w=t.imgProps,b=t.sizes,y=t.src,S=t.srcSet,k=t.variant,P=void 0===k?"circular":k,R=(0,n.Z)(t,p),C=null,z=function(e){var r=e.crossOrigin,t=e.referrerPolicy,n=e.src,o=e.srcSet,s=i.useState(!1),l=(0,a.Z)(s,2),c=l[0],u=l[1];return i.useEffect((function(){if(n||o){u(!1);var e=!0,a=new Image;return a.onload=function(){e&&u("loaded")},a.onerror=function(){e&&u("error")},a.crossOrigin=r,a.referrerPolicy=t,a.src=n,o&&(a.srcset=o),function(){e=!1}}}),[r,t,n,o]),c}((0,o.Z)({},w,{src:y,srcSet:S})),A=y||S,D=A&&"error"!==z,M=(0,o.Z)({},t,{colorDefault:!D,component:j,variant:P}),N=function(e){var r=e.classes,t={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,l.Z)(t,v,r)}(M);return C=D?(0,m.jsx)(x,(0,o.Z)({alt:c,src:y,srcSet:S,sizes:b,ownerState:M,className:N.img},w)):null!=d?d:A&&c?c[0]:(0,m.jsx)(Z,{className:N.fallback}),(0,m.jsx)(g,(0,o.Z)({as:j,ownerState:M,className:(0,s.Z)(N.root,f),ref:r},R,{children:C}))}))}}]);
//# sourceMappingURL=register-page.2c6fc72a.chunk.js.map