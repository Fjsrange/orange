import{d as t,r as n,a as l,b as c,o as r,c as i,e as d,w,v as p,f as v,n as m,g as u,_}from"./index-IEz5XlPj.js";import f from"./index-A-3IBhWR.js";const h=t({__name:"index",setup(x){const o=n(!1),e=n(.01),s=()=>{o.value=window.scrollY>=100,window.scrollY>=100&&window.scrollY<=200&&(e.value=(window.scrollY-100)/100*.99+.01)},a=()=>{window.scrollTo({top:0,behavior:"smooth"})};return l(()=>{window.addEventListener("scroll",s)}),c(()=>{window.removeEventListener("scroll",s)}),(b,y)=>(r(),i("div",null,[d(f),w(v("div",{class:m(["top-btn",{show:o.value}]),style:u({opacity:e.value}),onClick:a}," top ",6),[[p,o.value]])]))}}),k=_(h,[["__scopeId","data-v-e4b65958"]]);export{k as default};
