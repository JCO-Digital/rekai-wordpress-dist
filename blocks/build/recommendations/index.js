(()=>{"use strict";var e,r={672:()=>{const e=window.wp.blocks,r=window.wp.i18n,n=(window.wp.element,window.wp.components),o=window.wp.blockEditor,t=window.ReactJSXRuntime,s=JSON.parse('{"UU":"rekai/recommendations"}');(0,e.registerBlockType)(s.UU,{edit:function({attributes:e,setAttributes:s}){return(0,t.jsxs)("div",{...(0,o.useBlockProps)(),children:[(0,t.jsxs)(o.InspectorControls,{children:[(0,t.jsxs)(n.PanelBody,{title:(0,r.__)("Display","rekai-wordpress"),children:[(0,t.jsx)(n.TextControl,{label:(0,r.__)("Number of Recommendations","rekai-wordpress"),type:"number",onChange:e=>{s({nrofhits:e})},value:e.nrofhits}),(0,t.jsx)(n.ToggleControl,{label:(0,r.__)("Add content","rekai-wordpress"),help:e.addcontent?(0,r.__)("Adds text content to data.","rekai-wordpress"):(0,r.__)("Only use metadata.","rekai-wordpress"),checked:e.addcontent,onChange:e=>{s({addcontent:e})}})]}),(0,t.jsxs)(n.PanelBody,{title:(0,r.__)("Filter","rekai-wordpress"),children:[(0,t.jsx)(n.ToggleControl,{label:(0,r.__)("Show only current language","rekai-wordpress"),help:e.currentLanguage?(0,r.__)("Shows only content in current language.","rekai-wordpress"):(0,r.__)("Shows content in all languages.","rekai-wordpress"),checked:e.currentLanguage,onChange:e=>{s({currentLanguage:e})}}),(0,t.jsx)(n.TextControl,{label:(0,r.__)("Subtree","rekai-wordpress"),type:"text",onChange:e=>{s({subtree:e})},value:e.subtree})]})]}),(0,r.__)("Rek.ai Recommendations","rekai-wordpress")]})}})}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var s=n[e]={exports:{}};return r[e](s,s.exports,o),s.exports}o.m=r,e=[],o.O=(r,n,t,s)=>{if(!n){var a=1/0;for(c=0;c<e.length;c++){for(var[n,t,s]=e[c],i=!0,l=0;l<n.length;l++)(!1&s||a>=s)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(i=!1,s<a&&(a=s));if(i){e.splice(c--,1);var d=t();void 0!==d&&(r=d)}}return r}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,t,s]},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={236:0,196:0};o.O.j=r=>0===e[r];var r=(r,n)=>{var t,s,[a,i,l]=n,d=0;if(a.some((r=>0!==e[r]))){for(t in i)o.o(i,t)&&(o.m[t]=i[t]);if(l)var c=l(o)}for(r&&r(n);d<a.length;d++)s=a[d],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(c)},n=globalThis.webpackChunkrekai_wordpress=globalThis.webpackChunkrekai_wordpress||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var t=o.O(void 0,[196],(()=>o(672)));t=o.O(t)})();