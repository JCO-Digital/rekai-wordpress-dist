(()=>{"use strict";var M,I={697:()=>{const M=window.wp.blocks,I=window.wp.i18n,D=window.wp.blockEditor,N=window.wp.components;window.React;const g=window.ReactJSXRuntime;(0,M.registerBlockType)("rekai/qna",{edit:function({attributes:M,setAttributes:i}){const{nrofhits:e,headerText:j,tags:z,useRoot:T,extraAttributes:s}=M;return(0,g.jsxs)("div",{...(0,D.useBlockProps)(),children:[(0,g.jsx)("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDY5cHgiIGhlaWdodD0iODlweCIgdmlld0JveD0iMCAwIDQ2OSA4OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5sb2dvLXJla2FpLWJsdWU8L3RpdGxlPgogICAgPGcgaWQ9ImxvZ28tcmVrYWktYmx1ZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAyNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiMwQTAwQTIiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMjUiIHJ4PSIxMi41Ii8+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjMEEwMEEyIiB4PSIwIiB5PSIzNyIgd2lkdGg9IjY0IiBoZWlnaHQ9IjI1IiByeD0iMTIuNSIvPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0JEMTBFMCIgeD0iNzYiIHk9IjM3IiB3aWR0aD0iNDQiIGhlaWdodD0iMjUiIHJ4PSIxMi41Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHBhdGggZD0iTTE4OS43MTk4Nyw4NyBMMTg5LjcxOTg3LDYyLjM4NDkxMyBDMTg5LjcxOTg3LDU4LjcyOTIwNyAxOTAuMDkxMjA1LDU1LjMxNzIxNDcgMTkxLjA4MTQzMyw1Mi4yNzA3OTMgQzE5NC4wNTIxMTcsNDMuMDA5NjcxMiAyMDEuNjAyNjA2LDM5LjIzMjEwODMgMjA4LjI4NjY0NSwzOS4yMzIxMDgzIEMyMTAuMzkwODc5LDM5LjIzMjEwODMgMjEyLDM5LjQ3NTgyMjEgMjEyLDM5LjQ3NTgyMjEgTDIxMiwyNC4yNDM3MTM3IEMyMTIsMjQuMjQzNzEzNyAyMTAuNjM4NDM2LDI0IDIwOS4xNTMwOTQsMjQgQzE5OS40OTgzNzEsMjQgMTkxLjk0Nzg4MywzMS4wNjc2OTgzIDE4OS4xMDA5NzcsMzkuOTYzMjQ5NSBMMTg4Ljg1MzQyLDM5Ljk2MzI0OTUgQzE4OC44NTM0MiwzOS45NjMyNDk1IDE4OS4xMDA5NzcsMzcuODkxNjgyOCAxODkuMTAwOTc3LDM1LjU3NjQwMjMgTDE4OS4xMDA5NzcsMjQuODUyOTk4MSBMMTc0LDI0Ljg1Mjk5ODEgTDE3NCw4NyBMMTg5LjcxOTg3LDg3IFogTTI1MS4zMzE5NTksODkgQzI2Ni43ODE0NDMsODkgMjc2LjI3MDEwMyw4MC4xMTQyMzIyIDI3Ni4yNzAxMDMsODAuMTE0MjMyMiBMMjcwLjMwOTI3OCw2OS4wMzc0NTMyIEMyNzAuMzA5Mjc4LDY5LjAzNzQ1MzIgMjYyLjQwMjA2Miw3NS44NTM5MzI2IDI1Mi40MjY4MDQsNzUuODUzOTMyNiBDMjQzLjE4MTQ0Myw3NS44NTM5MzI2IDIzNC43ODc2MjksNzAuMjU0NjgxNiAyMzMuODE0NDMzLDU5LjQyMTM0ODMgTDI3Ni42MzUwNTIsNTkuNDIxMzQ4MyBDMjc2LjYzNTA1Miw1OS40MjEzNDgzIDI3Nyw1NS4yODI3NzE1IDI3Nyw1My40NTY5Mjg4IEMyNzcsMzcuMDI0MzQ0NiAyNjcuMzg5NjkxLDI0IDI0OS41MDcyMTYsMjQgQzIzMS4wMTY0OTUsMjQgMjE4LDM3LjM4OTUxMzEgMjE4LDU2LjUgQzIxOCw3NC4xNDk4MTI3IDIzMC43NzMxOTYsODkgMjUxLjMzMTk1OSw4OSBaIE0yNjEsNDkgTDIzNCw0OSBDMjM1LjQ1MjkxNSw0MC45MDU2NjA0IDI0MC45MDEzNDUsMzYgMjQ4Ljc3MTMsMzYgQzI1NS41NTE1NywzNiAyNjAuNzU3ODQ4LDQwLjUzNzczNTggMjYxLDQ5IFogTTMwNS4yNzIxNTIsODcgTDMwNS4yNzIxNTIsNTkuNjc0NjQ3OSBMMzEzLjIwODg2MSw1OS42NzQ2NDc5IEwzMjkuNDQzMDM4LDg3IEwzNDcsODcgTDMyNS4yMzQxNzcsNTIuNjkwMTQwOCBMMzI1LjIzNDE3Nyw1Mi40NDUwNzA0IEwzNDQuNTk0OTM3LDI0LjUwNzA0MjMgTDMyNy42MzkyNDEsMjQuNTA3MDQyMyBMMzEyLjg0ODEwMSw0Ni41NjMzODAzIEwzMDUuMjcyMTUyLDQ2LjU2MzM4MDMgTDMwNS4yNzIxNTIsMCBMMjkwLDAgTDI5MCw4NyBMMzA1LjI3MjE1Miw4NyBaIE0zNzIsODcgTDM3Miw3MSBMMzU2LDcxIEwzNTYsODcgTDM3Miw4NyBaIE00MDMuOTkzMjU4LDg5IEM0MTguMDY5NjYzLDg5IDQyMi45MjM1OTYsNzguMDQ0OTQzOCA0MjIuODAyMjQ3LDc4LjA0NDk0MzggTDQyMy4wNDQ5NDQsNzguMDQ0OTQzOCBDNDIzLjA0NDk0NCw3OC4wNDQ5NDM4IDQyMi44MTg2OTYsNzkuODYwNTEwMyA0MjIuODAzMDkzLDgyLjE3NjkyMjYgTDQyMi44MDIyNDcsODcuNTM5MzI1OCBMNDM3LDg3LjUzOTMyNTggTDQzNyw0OC43MDk3Mzc4IEM0MzcsMzMuMDA3NDkwNiA0MjcuNTM0ODMxLDI0IDQxMS4yNzQxNTcsMjQgQzM5Ni41OTEwMTEsMjQgMzg3LjAwNDQ5NCwzMS42Njg1MzkzIDM4Ny4wMDQ0OTQsMzEuNjY4NTM5MyBMMzkyLjgyOTIxMyw0Mi43NDUzMTg0IEMzOTIuODI5MjEzLDQyLjc0NTMxODQgNDAwLjk1OTU1MSwzNi43ODA4OTg5IDQwOS44MTc5NzgsMzYuNzgwODk4OSBDNDE2LjYxMzQ4MywzNi43ODA4OTg5IDQyMS43MTAxMTIsMzkuNTgwNTI0MyA0MjEuNzEwMTEyLDQ3LjczNTk1NTEgTDQyMS43MTAxMTIsNDguNTg4MDE1IEw0MTkuNjQ3MTkxLDQ4LjU4ODAxNSBDNDA5LjU3NTI4MSw0OC41ODgwMTUgMzgzLDQ5LjkyNjk2NjMgMzgzLDY5LjY0NjA2NzQgQzM4Myw4Mi4wNjE3OTc4IDM5Mi45NTA1NjIsODkgNDAzLjk5MzI1OCw4OSBaIE00MDguNjI1LDc2IEM0MDIuMTI1LDc2IDM5OSw3Mi4wNTQ3OTQ1IDM5OSw2Ny44NjMwMTM3IEMzOTksNTkuMTA5NTg5IDQxMi4xMjUsNTggNDIwLjI1LDU4IEw0MjMsNTggTDQyMyw1OS40Nzk0NTIxIEM0MjMsNjcuMTIzMjg3NyA0MTcsNzYgNDA4LjYyNSw3NiBaIE00NjksODcgTDQ2OSwyNSBMNDUzLDI1IEw0NTMsODcgTDQ2OSw4NyBaIiBpZD0icmVrLmFpIiBmaWxsPSIjMEEwMEEyIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIGZpbGw9IiNCRDEwRTAiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSI0NjkgMTUgNDY5IDEgNDUzIDEgNDUzIDE1Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",alt:"Rek.ai Logo"}),(0,g.jsx)("p",{children:"Q&A Block"}),(0,g.jsxs)(D.InspectorControls,{children:[(0,g.jsxs)(N.PanelBody,{title:(0,I.__)("Settings","rekai-wordpress"),initialOpen:!0,children:[(0,g.jsx)(N.TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,help:(0,I.__)("If you want to add header text above the questions","rekai-wordpress"),label:(0,I.__)("Header Text","rekai-wordpress"),value:j,onChange:M=>i({headerText:M})}),(0,g.jsx)(N.RangeControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:(0,I.__)("Number of Questions to show","rekai-wordpress"),value:e,onChange:M=>i({nrofhits:M}),min:1,max:5}),(0,g.jsx)(N.ToggleControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:(0,I.__)("Use Root path","rekai-wordpress"),help:(0,I.__)("Enabling this will show only questions that are under the path where this block is added","rekai-wordpress"),checked:T,onChange:M=>{i({useRoot:M})}}),(0,g.jsx)(N.ToggleControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:(0,I.__)("Use Root path","rekai-wordpress"),help:(0,I.__)("Enabling this will show only questions that are under the path where this block is added","rekai-wordpress"),checked:T,onChange:M=>{i({useRoot:M})}}),(0,g.jsx)(N.FormTokenField,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:"Tags",onChange:M=>{i({tags:M})},suggestions:[],value:z})]}),(0,g.jsx)(N.PanelBody,{title:(0,I.__)("Extra attributes","rekai-wordpress"),children:(0,g.jsx)(N.TextControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,value:s,onChange:M=>{i({extraAttributes:M})},label:(0,I.__)("Extra attributes","rekai-wordpress")})})]})]})},save:()=>null})}},D={};function N(M){var g=D[M];if(void 0!==g)return g.exports;var i=D[M]={exports:{}};return I[M](i,i.exports,N),i.exports}N.m=I,M=[],N.O=(I,D,g,i)=>{if(!D){var e=1/0;for(s=0;s<M.length;s++){for(var[D,g,i]=M[s],j=!0,z=0;z<D.length;z++)(!1&i||e>=i)&&Object.keys(N.O).every((M=>N.O[M](D[z])))?D.splice(z--,1):(j=!1,i<e&&(e=i));if(j){M.splice(s--,1);var T=g();void 0!==T&&(I=T)}}return I}i=i||0;for(var s=M.length;s>0&&M[s-1][2]>i;s--)M[s]=M[s-1];M[s]=[D,g,i]},N.o=(M,I)=>Object.prototype.hasOwnProperty.call(M,I),(()=>{var M={270:0,666:0};N.O.j=I=>0===M[I];var I=(I,D)=>{var g,i,[e,j,z]=D,T=0;if(e.some((I=>0!==M[I]))){for(g in j)N.o(j,g)&&(N.m[g]=j[g]);if(z)var s=z(N)}for(I&&I(D);T<e.length;T++)i=e[T],N.o(M,i)&&M[i]&&M[i][0](),M[i]=0;return N.O(s)},D=globalThis.webpackChunkrekai_wordpress=globalThis.webpackChunkrekai_wordpress||[];D.forEach(I.bind(null,0)),D.push=I.bind(null,D.push.bind(D))})();var g=N.O(void 0,[666],(()=>N(697)));g=N.O(g)})();