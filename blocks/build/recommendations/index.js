(()=>{"use strict";var e,M={759:()=>{const e=window.wp.blocks,M=window.wp.i18n,s=window.wp.element,a=window.wp.coreData,i=window.wp.components,r=window.wp.blockEditor;window.React;const t=window.ReactJSXRuntime,o=JSON.parse('{"UU":"rekai/recommendations"}');(0,e.registerBlockType)(o.UU,{edit:function({attributes:e,setAttributes:o,context:g}){const{headerText:n,showHeader:I,nrOfHits:l,renderstyle:N,listcols:D,cols:j,showImage:w,showIngress:T,ingressMaxLength:z,pathOption:c,limit:d,depth:x,limitDepth:u,subtreeIds:p,extraAttributes:y}=e,O="##!!##",[A,_]=(0,s.useState)([]),[L,k]=(0,s.useState)([]),{hasResolved:C,records:m}=(0,a.useEntityRecords)("postType",g.postType,{per_page:-1});(0,s.useEffect)((()=>{if(m){let e=[];_(m.map((M=>{const s=M.title.rendered+O+M.id.toString();return p.includes(M.id.toString())&&e.push(s),s}))),k(e)}}),[m]);const h=[];for(let e=0;e<l;e++)h.push((0,t.jsxs)("div",{className:"item",children:[w&&(0,t.jsx)("div",{className:"image"}),(0,t.jsx)("div",{className:"title"}),T&&(0,t.jsx)("div",{className:"row row1"}),T&&(0,t.jsx)("div",{className:"row row2"})]},e));return(0,t.jsxs)("div",{...(0,r.useBlockProps)(),children:[(0,t.jsxs)("div",{className:"logoHeader",children:[(0,t.jsx)("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTE3cHgiIGhlaWdodD0iMjJweCIgdmlld0JveD0iMCAwIDQ2OSA4OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5sb2dvLXJla2FpLWJsdWU8L3RpdGxlPgogICAgPGcgaWQ9ImxvZ28tcmVrYWktYmx1ZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAyNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiMwQTAwQTIiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMjUiIHJ4PSIxMi41Ii8+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjMEEwMEEyIiB4PSIwIiB5PSIzNyIgd2lkdGg9IjY0IiBoZWlnaHQ9IjI1IiByeD0iMTIuNSIvPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0JEMTBFMCIgeD0iNzYiIHk9IjM3IiB3aWR0aD0iNDQiIGhlaWdodD0iMjUiIHJ4PSIxMi41Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHBhdGggZD0iTTE4OS43MTk4Nyw4NyBMMTg5LjcxOTg3LDYyLjM4NDkxMyBDMTg5LjcxOTg3LDU4LjcyOTIwNyAxOTAuMDkxMjA1LDU1LjMxNzIxNDcgMTkxLjA4MTQzMyw1Mi4yNzA3OTMgQzE5NC4wNTIxMTcsNDMuMDA5NjcxMiAyMDEuNjAyNjA2LDM5LjIzMjEwODMgMjA4LjI4NjY0NSwzOS4yMzIxMDgzIEMyMTAuMzkwODc5LDM5LjIzMjEwODMgMjEyLDM5LjQ3NTgyMjEgMjEyLDM5LjQ3NTgyMjEgTDIxMiwyNC4yNDM3MTM3IEMyMTIsMjQuMjQzNzEzNyAyMTAuNjM4NDM2LDI0IDIwOS4xNTMwOTQsMjQgQzE5OS40OTgzNzEsMjQgMTkxLjk0Nzg4MywzMS4wNjc2OTgzIDE4OS4xMDA5NzcsMzkuOTYzMjQ5NSBMMTg4Ljg1MzQyLDM5Ljk2MzI0OTUgQzE4OC44NTM0MiwzOS45NjMyNDk1IDE4OS4xMDA5NzcsMzcuODkxNjgyOCAxODkuMTAwOTc3LDM1LjU3NjQwMjMgTDE4OS4xMDA5NzcsMjQuODUyOTk4MSBMMTc0LDI0Ljg1Mjk5ODEgTDE3NCw4NyBMMTg5LjcxOTg3LDg3IFogTTI1MS4zMzE5NTksODkgQzI2Ni43ODE0NDMsODkgMjc2LjI3MDEwMyw4MC4xMTQyMzIyIDI3Ni4yNzAxMDMsODAuMTE0MjMyMiBMMjcwLjMwOTI3OCw2OS4wMzc0NTMyIEMyNzAuMzA5Mjc4LDY5LjAzNzQ1MzIgMjYyLjQwMjA2Miw3NS44NTM5MzI2IDI1Mi40MjY4MDQsNzUuODUzOTMyNiBDMjQzLjE4MTQ0Myw3NS44NTM5MzI2IDIzNC43ODc2MjksNzAuMjU0NjgxNiAyMzMuODE0NDMzLDU5LjQyMTM0ODMgTDI3Ni42MzUwNTIsNTkuNDIxMzQ4MyBDMjc2LjYzNTA1Miw1OS40MjEzNDgzIDI3Nyw1NS4yODI3NzE1IDI3Nyw1My40NTY5Mjg4IEMyNzcsMzcuMDI0MzQ0NiAyNjcuMzg5NjkxLDI0IDI0OS41MDcyMTYsMjQgQzIzMS4wMTY0OTUsMjQgMjE4LDM3LjM4OTUxMzEgMjE4LDU2LjUgQzIxOCw3NC4xNDk4MTI3IDIzMC43NzMxOTYsODkgMjUxLjMzMTk1OSw4OSBaIE0yNjEsNDkgTDIzNCw0OSBDMjM1LjQ1MjkxNSw0MC45MDU2NjA0IDI0MC45MDEzNDUsMzYgMjQ4Ljc3MTMsMzYgQzI1NS41NTE1NywzNiAyNjAuNzU3ODQ4LDQwLjUzNzczNTggMjYxLDQ5IFogTTMwNS4yNzIxNTIsODcgTDMwNS4yNzIxNTIsNTkuNjc0NjQ3OSBMMzEzLjIwODg2MSw1OS42NzQ2NDc5IEwzMjkuNDQzMDM4LDg3IEwzNDcsODcgTDMyNS4yMzQxNzcsNTIuNjkwMTQwOCBMMzI1LjIzNDE3Nyw1Mi40NDUwNzA0IEwzNDQuNTk0OTM3LDI0LjUwNzA0MjMgTDMyNy42MzkyNDEsMjQuNTA3MDQyMyBMMzEyLjg0ODEwMSw0Ni41NjMzODAzIEwzMDUuMjcyMTUyLDQ2LjU2MzM4MDMgTDMwNS4yNzIxNTIsMCBMMjkwLDAgTDI5MCw4NyBMMzA1LjI3MjE1Miw4NyBaIE0zNzIsODcgTDM3Miw3MSBMMzU2LDcxIEwzNTYsODcgTDM3Miw4NyBaIE00MDMuOTkzMjU4LDg5IEM0MTguMDY5NjYzLDg5IDQyMi45MjM1OTYsNzguMDQ0OTQzOCA0MjIuODAyMjQ3LDc4LjA0NDk0MzggTDQyMy4wNDQ5NDQsNzguMDQ0OTQzOCBDNDIzLjA0NDk0NCw3OC4wNDQ5NDM4IDQyMi44MTg2OTYsNzkuODYwNTEwMyA0MjIuODAzMDkzLDgyLjE3NjkyMjYgTDQyMi44MDIyNDcsODcuNTM5MzI1OCBMNDM3LDg3LjUzOTMyNTggTDQzNyw0OC43MDk3Mzc4IEM0MzcsMzMuMDA3NDkwNiA0MjcuNTM0ODMxLDI0IDQxMS4yNzQxNTcsMjQgQzM5Ni41OTEwMTEsMjQgMzg3LjAwNDQ5NCwzMS42Njg1MzkzIDM4Ny4wMDQ0OTQsMzEuNjY4NTM5MyBMMzkyLjgyOTIxMyw0Mi43NDUzMTg0IEMzOTIuODI5MjEzLDQyLjc0NTMxODQgNDAwLjk1OTU1MSwzNi43ODA4OTg5IDQwOS44MTc5NzgsMzYuNzgwODk4OSBDNDE2LjYxMzQ4MywzNi43ODA4OTg5IDQyMS43MTAxMTIsMzkuNTgwNTI0MyA0MjEuNzEwMTEyLDQ3LjczNTk1NTEgTDQyMS43MTAxMTIsNDguNTg4MDE1IEw0MTkuNjQ3MTkxLDQ4LjU4ODAxNSBDNDA5LjU3NTI4MSw0OC41ODgwMTUgMzgzLDQ5LjkyNjk2NjMgMzgzLDY5LjY0NjA2NzQgQzM4Myw4Mi4wNjE3OTc4IDM5Mi45NTA1NjIsODkgNDAzLjk5MzI1OCw4OSBaIE00MDguNjI1LDc2IEM0MDIuMTI1LDc2IDM5OSw3Mi4wNTQ3OTQ1IDM5OSw2Ny44NjMwMTM3IEMzOTksNTkuMTA5NTg5IDQxMi4xMjUsNTggNDIwLjI1LDU4IEw0MjMsNTggTDQyMyw1OS40Nzk0NTIxIEM0MjMsNjcuMTIzMjg3NyA0MTcsNzYgNDA4LjYyNSw3NiBaIE00NjksODcgTDQ2OSwyNSBMNDUzLDI1IEw0NTMsODcgTDQ2OSw4NyBaIiBpZD0icmVrLmFpIiBmaWxsPSIjMEEwMEEyIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIGZpbGw9IiNCRDEwRTAiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSI0NjkgMTUgNDY5IDEgNDUzIDEgNDUzIDE1Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K",alt:"Rek.ai Logo"}),(0,t.jsx)("h4",{children:"Recommendations"})]}),I&&(0,t.jsx)(r.RichText,{identifier:"headerText",tagName:"h2",value:n,onChange:e=>{o({headerText:e})},placeholder:(0,M.__)("Heading Text","rekai-wordpress")}),(0,t.jsx)("div",{className:"items cols"+("list"===N?D:j)+" "+N,children:h}),(0,t.jsxs)(r.InspectorControls,{children:[(0,t.jsxs)(i.PanelBody,{title:(0,M.__)("Display","rekai-wordpress"),children:[(0,t.jsx)(i.ToggleControl,{label:(0,M.__)("Show Header","rekai-wordpress"),checked:I,onChange:e=>{o({showHeader:e})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),(0,t.jsx)(i.TextControl,{label:(0,M.__)("Number of Recommendations","rekai-wordpress"),type:"number",onChange:e=>{o({nrOfHits:e})},value:l,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),(0,t.jsx)(i.SelectControl,{label:(0,M.__)("Render Style","rekai-wordpress"),value:N,options:[{label:(0,M.__)("Pills","rekai-wordpress"),value:"pills"},{label:(0,M.__)("List","rekai-wordpress"),value:"list"},{label:(0,M.__)("Advanced","rekai-wordpress"),value:"advanced"}],onChange:e=>o({renderstyle:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),"list"===N&&(0,t.jsx)(i.TextControl,{label:(0,M.__)("Number of Columns","rekai-wordpress"),type:"number",onChange:e=>{o({listcols:e})},value:D,min:"1",max:"3",__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),"advanced"===N&&(0,t.jsx)(i.TextControl,{label:(0,M.__)("Number of Columns","rekai-wordpress"),type:"number",onChange:e=>{o({cols:e})},value:j,min:"1",max:"3",__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),"advanced"===N&&(0,t.jsx)(i.ToggleControl,{label:(0,M.__)("Show Image","rekai-wordpress"),checked:w,onChange:e=>{o({showImage:e})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),"advanced"===N&&(0,t.jsx)(i.ToggleControl,{label:(0,M.__)("Show Ingress","rekai-wordpress"),checked:T,onChange:e=>{o({showIngress:e})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),"advanced"===N&&(0,t.jsx)(i.TextControl,{label:(0,M.__)("Ingress Max Length","rekai-wordpress"),type:"number",value:z,onChange:e=>{o({ingressMaxLength:e})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})]}),(0,t.jsxs)(i.PanelBody,{title:(0,M.__)("Filter","rekai-wordpress"),children:[(0,t.jsx)(i.ToggleControl,{label:(0,M.__)("Show only current language","rekai-wordpress"),help:e.currentLanguage?(0,M.__)("Shows only content in current language.","rekai-wordpress"):(0,M.__)("Shows content in all languages.","rekai-wordpress"),checked:e.currentLanguage,onChange:e=>{o({currentLanguage:e})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),(0,t.jsx)(i.RadioControl,{label:(0,M.__)("Show content from starting point:","rekai-wordpress"),selected:c,options:[{value:"all",label:(0,M.__)("Whole website","rekai-wordpress")},{value:"rootPath",label:(0,M.__)("Starting from current page","rekai-wordpress")},{value:"maxDepth",label:(0,M.__)("Subpages until specified depth","rekai-wordpress")},{value:"rootPathLevel",label:(0,M.__)("Subpages of current page from specified depth","rekai-wordpress")}],onChange:e=>o({pathOption:e})}),["maxDepth","rootPathLevel"].includes(c)&&(0,t.jsx)(i.__experimentalNumberControl,{value:parseInt(x),label:"maxDepth"===c?(0,M.__)("Max depth","rekai-wordpress"):(0,M.__)("Path level from current path to exclude","rekai-wordpress"),min:0,onChange:e=>o({depth:parseInt(e)})}),["all"].includes(c)&&(C&&(0,t.jsx)(i.FormTokenField,{__experimentalExpandOnFocus:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:(0,M.__)("Subtree","rekai-wordpress"),placeholder:(0,M.__)("Search for Page","jcore"),suggestions:A,displayTransform:e=>{var M;return null!==(M=e.split(O)[0])&&void 0!==M?M:""},value:L,onChange:e=>{console.debug(e),k(e);let M=e.map((e=>{const M=e.split(O);if(2===M.length)return M[1]}));e.length,o({subtreeIds:M})}})||(0,t.jsx)(i.Spinner,{})),(0,t.jsx)(i.RadioControl,{label:(0,M.__)("Exclude content from subpages?","rekai-wordpress"),selected:d,options:[{value:"none",label:(0,M.__)("None","rekai-wordpress")},{value:"subPages",label:(0,M.__)("Subpages of current page","rekai-wordpress")},{value:"minDepth",label:(0,M.__)("Exclude subpages until depth","rekai-wordpress")}],onChange:e=>o({limit:e})}),"minDepth"===d&&(0,t.jsx)(i.__experimentalNumberControl,{value:parseInt(u),label:(0,M.__)("Exclude subpages until depth"),min:0,onChange:e=>o({limitDepth:parseInt(e)})})]}),(0,t.jsx)(i.PanelBody,{title:(0,M.__)("Extra attributes","rekai-wordpress"),initialOpen:!1,children:(0,t.jsx)(i.TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,value:y,onChange:e=>{o({extraAttributes:e})},label:(0,M.__)("Extra attributes","rekai-wordpress")})})]})]})}})}},s={};function a(e){var i=s[e];if(void 0!==i)return i.exports;var r=s[e]={exports:{}};return M[e](r,r.exports,a),r.exports}a.m=M,e=[],a.O=(M,s,i,r)=>{if(!s){var t=1/0;for(I=0;I<e.length;I++){for(var[s,i,r]=e[I],o=!0,g=0;g<s.length;g++)(!1&r||t>=r)&&Object.keys(a.O).every((e=>a.O[e](s[g])))?s.splice(g--,1):(o=!1,r<t&&(t=r));if(o){e.splice(I--,1);var n=i();void 0!==n&&(M=n)}}return M}r=r||0;for(var I=e.length;I>0&&e[I-1][2]>r;I--)e[I]=e[I-1];e[I]=[s,i,r]},a.o=(e,M)=>Object.prototype.hasOwnProperty.call(e,M),(()=>{var e={236:0,196:0};a.O.j=M=>0===e[M];var M=(M,s)=>{var i,r,[t,o,g]=s,n=0;if(t.some((M=>0!==e[M]))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(g)var I=g(a)}for(M&&M(s);n<t.length;n++)r=t[n],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(I)},s=globalThis.webpackChunkrekai_wordpress=globalThis.webpackChunkrekai_wordpress||[];s.forEach(M.bind(null,0)),s.push=M.bind(null,s.push.bind(s))})();var i=a.O(void 0,[196],(()=>a(759)));i=a.O(i)})();