(()=>{"use strict";var e,r={889:()=>{const e=window.wp.blocks,r=window.wp.i18n,t=(window.wp.element,window.wp.components),o=window.wp.blockEditor;window.React;const n=window.ReactJSXRuntime,a=JSON.parse('{"UU":"rekai/recommendations"}');(0,e.registerBlockType)(a.UU,{edit:function({attributes:e,setAttributes:a}){const{headerText:s,nrofhits:l,renderstyle:i}=e,d=[];for(let e=0;e<l;e++)d.push((0,n.jsx)("div",{className:"item"},e));return(0,n.jsxs)("div",{...(0,o.useBlockProps)(),children:[(0,n.jsx)(o.RichText,{identifier:"headerText",tagName:"h2",value:s,onChange:e=>{a({headerText:e})},placeholder:(0,r.__)("Heading Text","rekai-wordpress")}),(0,n.jsx)("div",{className:"items "+i,children:d}),(0,n.jsxs)(o.InspectorControls,{children:[(0,n.jsxs)(t.PanelBody,{title:(0,r.__)("Display","rekai-wordpress"),children:[(0,n.jsx)(t.TextControl,{label:(0,r.__)("Number of Recommendations","rekai-wordpress"),type:"number",onChange:e=>{a({nrofhits:e})},value:l,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),(0,n.jsx)(t.SelectControl,{label:(0,r.__)("Render Style","rekai-wordpress"),value:i,options:[{label:(0,r.__)("Pills","rekai-wordpress"),value:"pills"},{label:(0,r.__)("List","rekai-wordpress"),value:"list"},{label:(0,r.__)("Advanced","rekai-wordpress"),value:"advanced"}],onChange:e=>a({renderstyle:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),(0,n.jsx)(t.ToggleControl,{label:(0,r.__)("Add content","rekai-wordpress"),help:e.addcontent?(0,r.__)("Adds text content to data.","rekai-wordpress"):(0,r.__)("Only use metadata.","rekai-wordpress"),checked:e.addcontent,onChange:e=>{a({addcontent:e})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})]}),(0,n.jsxs)(t.PanelBody,{title:(0,r.__)("Filter","rekai-wordpress"),children:[(0,n.jsx)(t.ToggleControl,{label:(0,r.__)("Use Root path","rekai-wordpress"),help:(0,r.__)("Enabling this will show only questions that are under the path where this block is added","rekai-wordpress"),checked:e.userootpath,onChange:e=>{a({userootpath:e})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),(0,n.jsx)(t.ToggleControl,{label:(0,r.__)("Show only current language","rekai-wordpress"),help:e.currentLanguage?(0,r.__)("Shows only content in current language.","rekai-wordpress"):(0,r.__)("Shows content in all languages.","rekai-wordpress"),checked:e.currentLanguage,onChange:e=>{a({currentLanguage:e})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),(0,n.jsx)(t.TextControl,{label:(0,r.__)("Subtree","rekai-wordpress"),type:"text",onChange:e=>{a({subtree:e})},value:e.subtree,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})]})]})]})}})}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var a=t[e]={exports:{}};return r[e](a,a.exports,o),a.exports}o.m=r,e=[],o.O=(r,t,n,a)=>{if(!t){var s=1/0;for(p=0;p<e.length;p++){for(var[t,n,a]=e[p],l=!0,i=0;i<t.length;i++)(!1&a||s>=a)&&Object.keys(o.O).every((e=>o.O[e](t[i])))?t.splice(i--,1):(l=!1,a<s&&(s=a));if(l){e.splice(p--,1);var d=n();void 0!==d&&(r=d)}}return r}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[t,n,a]},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={236:0,196:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var n,a,[s,l,i]=t,d=0;if(s.some((r=>0!==e[r]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(i)var p=i(o)}for(r&&r(t);d<s.length;d++)a=s[d],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(p)},t=globalThis.webpackChunkrekai_wordpress=globalThis.webpackChunkrekai_wordpress||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var n=o.O(void 0,[196],(()=>o(889)));n=o.O(n)})();