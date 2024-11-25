import{c as B,K as $,n as d,t as P,l as z,x as u,k as j,I as D,w as _}from"./index-D5UzUt9W.js";import{d as C,i as f,j as N,k as R,n as U,G as A,A as F,H as S,c as n,p as G,P as H,m as b}from"./index-BXgsGGBr.js";const[K,i]=B("image"),M={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:P,errorIcon:z("photo-fail"),iconPrefix:String,showLoading:P,loadingIcon:z("photo"),crossorigin:String,referrerpolicy:String};var O=C({name:K,props:M,emits:["load","error"],setup(r,{emit:g,slots:c}){const t=f(!1),a=f(!0),o=f(),{$Lazyload:l}=N().proxy,k=R(()=>{const e={width:u(r.width),height:u(r.height)};return j(r.radius)&&(e.overflow="hidden",e.borderRadius=u(r.radius)),e});U(()=>r.src,()=>{t.value=!1,a.value=!0});const v=e=>{a.value&&(a.value=!1,g("load",e))},m=()=>{const e=new Event("load");Object.defineProperty(e,"target",{value:o.value,enumerable:!0}),v(e)},h=e=>{t.value=!0,a.value=!1,g("error",e)},y=(e,s,I)=>I?I():n(D,{name:e,size:r.iconSize,class:s,classPrefix:r.iconPrefix},null),x=()=>{if(a.value&&r.showLoading)return n("div",{class:i("loading")},[y(r.loadingIcon,i("loading-icon"),c.loading)]);if(t.value&&r.showError)return n("div",{class:i("error")},[y(r.errorIcon,i("error-icon"),c.error)])},E=()=>{if(t.value||!r.src)return;const e={alt:r.alt,class:i("img"),style:{objectFit:r.fit,objectPosition:r.position},crossorigin:r.crossorigin,referrerpolicy:r.referrerpolicy};return r.lazyLoad?G(n("img",b({ref:o},e),null),[[H("lazy"),r.src]]):n("img",b({ref:o,src:r.src,onLoad:v,onError:h},e),null)},w=({el:e})=>{const s=()=>{e===o.value&&a.value&&m()};o.value?s():S(s)},L=({el:e})=>{e===o.value&&!t.value&&h()};return l&&$&&(l.$on("loaded",w),l.$on("error",L),A(()=>{l.$off("loaded",w),l.$off("error",L)})),F(()=>{S(()=>{var e;(e=o.value)!=null&&e.complete&&!r.lazyLoad&&m()})}),()=>{var e;return n("div",{class:i({round:r.round,block:r.block}),style:k.value},[E(),x(),(e=c.default)==null?void 0:e.call(c)])}}});const q=_(O);export{q as I};
