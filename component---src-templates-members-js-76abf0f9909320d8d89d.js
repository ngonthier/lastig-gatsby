"use strict";(self.webpackChunklastig_gastby=self.webpackChunklastig_gastby||[]).push([[754],{7528:function(e,t,a){var l=a(6540),n=a(4794);t.A=e=>{let{title:t}=e;const a=(0,n.useStaticQuery)("3159585216");return l.createElement("title",null,t," | ",a.site.siteMetadata.title)}},4973:function(e,t,a){a.r(t),a.d(t,{Head:function(){return f},default:function(){return p}});var l=a(6540),n=a(4815),r=a(6442),s=a(8065),m=a(7581);const i=m.default.div.withConfig({displayName:"Membersstyled__Members",componentId:"sc-xal9j8-0"})(["display:grid;gap:10px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));"]),u=m.default.div.withConfig({displayName:"Membersstyled__StyledMember",componentId:"sc-xal9j8-1"})(["img{border-radius:50% !important;height:100px;width:100px;}"]);var o=a(379),c=a(7528),d=a(6358);const g=e=>{let{node:t}=e;return l.createElement(u,{key:t.id},l.createElement(n.c_,{to:`/members/${t.firstname}-${t.lastname}`},l.createElement("img",{src:(a=t.photo,a?a.startsWith("/")?"https://www.umr-lastig.fr"+a:a:"https://www.umr-lastig.fr/lastig_data/img/abstract-user-icon.svg"),alt:`${t.firstname} ${t.lastname}`}),l.createElement("h3",null," ",t.firstname," ",t.alt_firstname&&`(${t.alt_firstname}) `,t.lastname," "),l.createElement("p",null," ",t.status," ")));var a};function p(e){let{data:t,pageContext:a}=e;const n=a.team.length>1,m=n?"LASTIG":a.team;console.log(`Members PAGE : ${m} => ${n}`);const u=(0,r.A)();function c(e){return u.formatMessage({id:e})}const p=t.allPeopleCsv.nodes.filter((e=>"PhD student"===e.status&&"true"===e.member)),f=t.allPeopleCsv.nodes.filter((e=>"Post-doc"===e.status&&"true"===e.member&&"false"===e.perm)),h=t.allPeopleCsv.nodes.filter((e=>e.status.toLowerCase().includes("engineer")&&"true"===e.member&&"false"===e.perm)),E=t.allPeopleCsv.nodes.filter((e=>"false"===e.member)),v=t.allPeopleCsv.nodes.filter((e=>"true"===e.perm&&"PhD student"!==e.status&&"true"===e.member));return l.createElement(o.A,{pageTitle:l.createElement(s.A,{id:"members",values:{team:m}})},l.createElement("h1",null,l.createElement(s.A,{id:"members",values:{team:m}})),!n&&l.createElement(d.j,{title:m,menus:t.site.siteMetadata.menus[m],team:m}),l.createElement("h2",null,c("Permanent staff")),l.createElement(i,null,v.map((e=>g(e={node:e})))),p.length>0&&l.createElement(l.Fragment,null,l.createElement("h2",null,c("PhD candidates")),l.createElement(i,null,p.map((e=>g(e={node:e}))))),f.length>0&&l.createElement(l.Fragment,null,l.createElement("h2",null,c("Post-docs")),l.createElement(i,null,f.map((e=>g(e={node:e}))))),h.length>0&&l.createElement(l.Fragment,null,l.createElement("h2",null,c("Engineers")),l.createElement(i,null,h.map((e=>g(e={node:e}))))),l.createElement("h2",null,c("Alumni")),l.createElement(i,null,E.map((e=>g(e={node:e})))))}const f=e=>{let{pageContext:t}=e;return l.createElement(c.A,{title:`${t.team.length>1?"LASTIG":t.team} Members`})}},8065:function(e,t,a){var l=a(5215),n=a(6540),r=a(6442),s=a(4184);function m(e){var t=(0,r.A)(),a=t.formatMessage,l=t.textComponent,s=void 0===l?n.Fragment:l,m=e.id,i=e.description,u=e.defaultMessage,o=e.values,c=e.children,d=e.tagName,g=void 0===d?s:d,p=a({id:m,description:i,defaultMessage:u},o,{ignoreTag:e.ignoreTag});return"function"==typeof c?c(Array.isArray(p)?p:[p]):g?n.createElement(g,null,n.Children.toArray(p)):n.createElement(n.Fragment,null,p)}m.displayName="FormattedMessage";var i=n.memo(m,(function(e,t){var a=e.values,n=(0,l.Tt)(e,["values"]),r=t.values,m=(0,l.Tt)(t,["values"]);return(0,s.bN)(r,a)&&(0,s.bN)(n,m)}));i.displayName="MemoizedFormattedMessage",t.A=i}}]);
//# sourceMappingURL=component---src-templates-members-js-76abf0f9909320d8d89d.js.map