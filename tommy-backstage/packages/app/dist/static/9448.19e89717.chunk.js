"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9448],{45969:(h,D,t)=>{t.d(D,{L:()=>s});var M=t(79692),u=t(95544),a=t(90436),c=t(41156),O=t(90348),g=t(11861),e=t(2784),P=t(52160),v=t(49558);const L=(0,M.Z)({svgIcon:{display:"inline-block","& svg":{display:"inline-block",fontSize:"inherit",verticalAlign:"baseline"}}});function p(l){const{href:i,text:r,Icon:_}=l,o=L();return e.createElement(u.Z,{display:"flex"},e.createElement(u.Z,{mr:1,className:o.svgIcon},e.createElement(a.Z,{component:"div"},_?e.createElement(_,null):e.createElement(P.Z,null))),e.createElement(u.Z,{flexGrow:"1"},e.createElement(v.rU,{to:i,target:"_blank",rel:"noopener"},r||i)))}const C={xs:1,sm:1,md:1,lg:2,xl:3};function I(l){var i,r;const _=[(0,c.Z)(n=>n.breakpoints.up("xl"))?"xl":null,(0,c.Z)(n=>n.breakpoints.up("lg"))?"lg":null,(0,c.Z)(n=>n.breakpoints.up("md"))?"md":null,(0,c.Z)(n=>n.breakpoints.up("sm"))?"sm":null,(0,c.Z)(n=>n.breakpoints.up("xs"))?"xs":null];let o=1;if(typeof l=="number")o=l;else{const n=(i=_.find(E=>E!==null))!=null?i:"xs";o=(r=l==null?void 0:l[n])!=null?r:C[n]}return o}function s(l){const{items:i,cols:r=void 0}=l,_=I(r);return e.createElement(O.Z,{rowHeight:"auto",cols:_},i.map(({text:o,href:n,Icon:E},m)=>e.createElement(g.Z,{key:m},e.createElement(p,{href:n,text:o!=null?o:n,Icon:E}))))}},69448:(h,D,t)=>{t.r(D),t.d(D,{EntityLinksCard:()=>I});var M=t(78373),u=t(52160),a=t(2784),c=t(79692),O=t(90436),g=t(77277),e=t(49558),P=t(45969),v=t(30705);const L=`metadata:
  name: example
  links:
    - url: https://dashboard.example.com
      title: My Dashboard
      icon: dashboard`,p=(0,c.Z)(s=>({code:{borderRadius:6,margin:s.spacing(2,0),background:s.palette.type==="dark"?"#444":s.palette.common.white}}),{name:"PluginCatalogEntityLinksEmptyState"});function C(){const s=p();return a.createElement(a.Fragment,null,a.createElement(O.Z,{variant:"body1"},"No links defined for this entity. You can add links to your entity YAML as shown in the highlighted example below:"),a.createElement("div",{className:s.code},a.createElement(e.Oi,{text:L,language:"yaml",showLineNumbers:!0,highlightedNumbers:[3,4,5,6],customStyle:{background:"inherit",fontSize:"115%"}})),a.createElement(g.Z,{variant:"contained",color:"primary",target:"_blank",href:"https://backstage.io/docs/features/software-catalog/descriptor-format#links-optional"},"Read more"))}const I=s=>{var l;const{cols:i=void 0,variant:r}=s,{entity:_}=(0,M.u)(),o=(0,v.qD)(),n=m=>{var d;return m&&(d=o.getSystemIcon(m))!=null?d:u.Z},E=(l=_==null?void 0:_.metadata)==null?void 0:l.links;return a.createElement(e.rJ,{title:"Links",variant:r},!E||E.length===0?a.createElement(C,null):a.createElement(P.L,{cols:i,items:E.map(({url:m,title:d,icon:y})=>({text:d!=null?d:m,href:m,Icon:n(y)}))}))}}}]);})();

//# sourceMappingURL=9448.19e89717.chunk.js.map