"use strict";(()=>{var e={};e.id=977,e.ids=[977],e.modules={846:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{e.exports=require("path")},9411:(e,r,o)=>{o.r(r),o.d(r,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>l,routeModule:()=>c,tree:()=>p});var t=o(260),n=o(8203),s=o(5155),i=o.n(s),a=o(7292),d={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>a[e]);o.d(r,d);let p=["",{children:["(shop)",{children:["category",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(o.bind(o,7242)),"D:\\Programacion\\personal_projects\\TesloShop\\src\\app\\(shop)\\category\\[id]\\page.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(o.bind(o,4979)),"D:\\Programacion\\personal_projects\\TesloShop\\src\\app\\(shop)\\category\\not-found.tsx"]}]},{layout:[()=>Promise.resolve().then(o.bind(o,2532)),"D:\\Programacion\\personal_projects\\TesloShop\\src\\app\\(shop)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(o.t.bind(o,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(o.t.bind(o,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(o.t.bind(o,1485,23)),"next/dist/client/components/unauthorized-error"]}]},{layout:[()=>Promise.resolve().then(o.bind(o,1354)),"D:\\Programacion\\personal_projects\\TesloShop\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(o.t.bind(o,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(o.t.bind(o,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(o.t.bind(o,1485,23)),"next/dist/client/components/unauthorized-error"]}],l=["D:\\Programacion\\personal_projects\\TesloShop\\src\\app\\(shop)\\category\\[id]\\page.tsx"],u={require:o,loadChunk:()=>Promise.resolve()},c=new t.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/(shop)/category/[id]/page",pathname:"/category/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},7242:(e,r,o)=>{o.r(r),o.d(r,{default:()=>i});var t=o(2740),n=o(1889);let s=o(5561).x.products;async function i({params:e}){let{id:r}=await e;if(!["men","women","kid","unisex"].includes(r))return(0,t.jsx)("div",{children:"Error: Invalid Category"});let o=s.filter(e=>e.gender===r);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.hE,{title:`Art\xedculos para ${{men:"Hombres",women:"Mujeres",kid:"Ni\xf1os",unisex:"Unisex"}[r]}`,subtiitle:"Todos los productos",className:"mb-2"}),(0,t.jsx)(n.qo,{products:o})]})}},4979:(e,r,o)=>{o.r(r),o.d(r,{default:()=>s});var t=o(2740),n=o(1889);function s(){return(0,t.jsx)(n.Hv,{})}}};var r=require("../../../../webpack-runtime.js");r.C(e);var o=e=>r(r.s=e),t=r.X(0,[964,509,105,561],()=>o(9411));module.exports=t})();