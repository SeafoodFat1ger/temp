import{J as O,U,k as F,i as g,r as D,A as W,H as te,I as ne,E as oe,X as re,n as S,Y as w,j as H,L as se,Z as ue,d as K,c as B,m as ie}from"./index-BXgsGGBr.js";function Ge(){}const Xe=Object.assign,Z=typeof window<"u",R=e=>e!==null&&typeof e=="object",E=e=>e!=null,P=e=>typeof e=="function",Je=e=>R(e)&&P(e.then)&&P(e.catch),Qe=e=>Object.prototype.toString.call(e)==="[object Date]"&&!Number.isNaN(e.getTime()),q=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),ae=()=>Z?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function _(e,t){const n=t.split(".");let o=e;return n.forEach(r=>{var u;o=R(o)&&(u=o[r])!=null?u:""}),o}function et(e,t,n){return t.reduce((o,r)=>(o[r]=e[r],o),{})}const tt=e=>Array.isArray(e)?e:[e],nt=null,h=[Number,String],ce={type:Boolean,default:!0},ot=e=>({type:e,required:!0}),rt=()=>({type:Array,default:()=>[]}),st=e=>({type:Number,default:e}),ut=e=>({type:h,default:e}),x=e=>({type:String,default:e});var m=typeof window<"u";function N(e){return m?requestAnimationFrame(e):-1}function it(e){m&&cancelAnimationFrame(e)}function at(e){N(()=>N(e))}var le=e=>e===window,k=(e,t)=>({top:0,left:0,right:e,bottom:t,width:e,height:t}),de=e=>{const t=w(e);if(le(t)){const n=t.innerWidth,o=t.innerHeight;return k(n,o)}return t!=null&&t.getBoundingClientRect?t.getBoundingClientRect():k(0,0)};function ct(e=!1){const t=g(e);return[t,(o=!t.value)=>{t.value=o}]}function lt(e){const t=O(e,null);if(t){const n=H(),{link:o,unlink:r,internalChildren:u}=t;o(n),U(()=>r(n));const c=F(()=>u.indexOf(n));return{parent:t,index:c}}return{parent:null,index:g(-1)}}function fe(e){const t=[],n=o=>{Array.isArray(o)&&o.forEach(r=>{var u;ue(r)&&(t.push(r),(u=r.component)!=null&&u.subTree&&(t.push(r.component.subTree),n(r.component.subTree.children)),r.children&&n(r.children))})};return n(e),t}var I=(e,t)=>{const n=e.indexOf(t);return n===-1?e.findIndex(o=>t.key!==void 0&&t.key!==null&&o.type===t.type&&o.key===t.key):n};function pe(e,t,n){const o=fe(e.subTree.children);n.sort((u,c)=>I(o,u.vnode)-I(o,c.vnode));const r=n.map(u=>u.proxy);t.sort((u,c)=>{const s=r.indexOf(u),i=r.indexOf(c);return s-i})}function dt(e){const t=D([]),n=D([]),o=H();return{children:t,linkChildren:u=>{se(e,Object.assign({link:i=>{i.proxy&&(n.push(i),t.push(i.proxy),pe(o,t,n))},unlink:i=>{const a=n.indexOf(i);t.splice(a,1),n.splice(a,1)},children:t,internalChildren:n},u))}}}function ge(e){let t;W(()=>{e(),te(()=>{t=!0})}),ne(()=>{t&&e()})}function ft(e,t,n={}){if(!m)return;const{target:o=window,passive:r=!1,capture:u=!1}=n;let c=!1,s;const i=l=>{if(c)return;const d=w(l);d&&!s&&(d.addEventListener(e,t,{capture:u,passive:r}),s=!0)},a=l=>{if(c)return;const d=w(l);d&&s&&(d.removeEventListener(e,t,u),s=!1)};U(()=>a(o)),oe(()=>a(o)),ge(()=>i(o));let p;return re(o)&&(p=S(o,(l,d)=>{a(d),i(l)})),()=>{p==null||p(),a(o),c=!0}}var b,T;function me(){if(!b&&(b=g(0),T=g(0),m)){const e=()=>{b.value=window.innerWidth,T.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:b,height:T}}var Ee=/scroll|auto|overlay/i,G=m?window:void 0;function he(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function ye(e,t=G){let n=e;for(;n&&n!==t&&he(n);){const{overflowY:o}=window.getComputedStyle(n);if(Ee.test(o))return n;n=n.parentNode}return t}function pt(e,t=G){const n=g();return W(()=>{e.value&&(n.value=ye(e.value,t))}),n}var v;function gt(){if(!v&&(v=g("visible"),m)){const e=()=>{v.value=document.hidden?"hidden":"visible"};e(),window.addEventListener("visibilitychange",e)}return v}var be=Symbol("van-field");function mt(e){const t=O(be,null);t&&!t.customValue.value&&(t.customValue.value=e,S(e,()=>{t.resetValidation(),t.validateWithTrigger("onChange")}))}function ve(e){const t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)}function L(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)}function X(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function we(e){L(window,e),L(document.body,e)}function Et(e,t){if(e===window)return 0;const n=t?ve(t):X();return de(e).top+n}const Be=ae();function ht(){Be&&we(X())}const Oe=e=>e.stopPropagation();function yt(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),t&&Oe(e)}function bt(e){const t=w(e);if(!t)return!1;const n=window.getComputedStyle(t),o=n.display==="none",r=t.offsetParent===null&&n.position!=="fixed";return o||r}const{width:Te,height:Ce}=me();function f(e){if(E(e))return q(e)?`${e}px`:String(e)}function vt(e){if(E(e)){if(Array.isArray(e))return{width:f(e[0]),height:f(e[1])};const t=f(e);return{width:t,height:t}}}function wt(e){const t={};return e!==void 0&&(t.zIndex=+e),t}let C;function De(){if(!C){const e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;C=parseFloat(t)}return C}function Pe(e){return e=e.replace(/rem/g,""),+e*De()}function xe(e){return e=e.replace(/vw/g,""),+e*Te.value/100}function Ae(e){return e=e.replace(/vh/g,""),+e*Ce.value/100}function Bt(e){if(typeof e=="number")return e;if(Z){if(e.includes("rem"))return Pe(e);if(e.includes("vw"))return xe(e);if(e.includes("vh"))return Ae(e)}return parseFloat(e)}const Fe=/-(\w)/g,J=e=>e.replace(Fe,(t,n)=>n.toUpperCase()),Ot=(e,t,n)=>Math.min(Math.max(e,t),n);function M(e,t,n){const o=e.indexOf(t);return o===-1?e:t==="-"&&o!==0?e.slice(0,o):e.slice(0,o+1)+e.slice(o).replace(n,"")}function Tt(e,t=!0,n=!0){t?e=M(e,".",/\./g):e=e.split(".")[0],n?e=M(e,"-",/-/g):e=e.replace(/-/,"");const o=t?/[^-0-9.]/g:/[^-0-9]/g;return e.replace(o,"")}const{hasOwnProperty:Se}=Object.prototype;function Re(e,t,n){const o=t[n];E(o)&&(!Se.call(e,n)||!R(o)?e[n]=o:e[n]=Q(Object(e[n]),o))}function Q(e,t){return Object.keys(t).forEach(n=>{Re(e,t,n)}),e}var $e={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const j=g("zh-CN"),z=D({"zh-CN":$e}),_e={messages(){return z[j.value]},use(e,t){j.value=e,this.add({[e]:t})},add(e={}){Q(z,e)}};var Ne=_e;function ke(e){const t=J(e)+".";return(n,...o)=>{const r=Ne.messages(),u=_(r,t+n)||_(r,n);return P(u)?u(...o):u}}function A(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((n,o)=>n+A(e,o),""):Object.keys(t).reduce((n,o)=>n+(t[o]?A(e,o):""),""):""}function Ie(e){return(t,n)=>(t&&typeof t!="string"&&(n=t,t=""),t=t?`${e}__${t}`:e,`${t}${A(t,n)}`)}function $(e){const t=`van-${e}`;return[t,Ie(t),ke(t)]}const y="van-hairline",Ct=`${y}--top`,Dt=`${y}--left`,Pt=`${y}--bottom`,xt=`${y}--surround`,At=`${y}--top-bottom`,Ft="van-haptics-feedback",St=Symbol("van-form"),Rt=5;function ee(e){return e.install=t=>{const{name:n}=e;n&&(t.component(n,e),t.component(J(`-${n}`),e))},e}const Le=Symbol();function $t(e){const t=O(Le,null);t&&S(t,n=>{n&&e()})}const[Me,Y]=$("badge"),je={dot:Boolean,max:h,tag:x("div"),color:String,offset:Array,content:h,showZero:ce,position:x("top-right")};var ze=K({name:Me,props:je,setup(e,{slots:t}){const n=()=>{if(t.content)return!0;const{content:s,showZero:i}=e;return E(s)&&s!==""&&(i||s!==0&&s!=="0")},o=()=>{const{dot:s,max:i,content:a}=e;if(!s&&n())return t.content?t.content():E(i)&&q(a)&&+a>+i?`${i}+`:a},r=s=>s.startsWith("-")?s.replace("-",""):`-${s}`,u=F(()=>{const s={background:e.color};if(e.offset){const[i,a]=e.offset,{position:p}=e,[l,d]=p.split("-");t.default?(typeof a=="number"?s[l]=f(l==="top"?a:-a):s[l]=l==="top"?f(a):r(a),typeof i=="number"?s[d]=f(d==="left"?i:-i):s[d]=d==="left"?f(i):r(i)):(s.marginTop=f(a),s.marginLeft=f(i))}return s}),c=()=>{if(n()||e.dot)return B("div",{class:Y([e.position,{dot:e.dot,fixed:!!t.default}]),style:u.value},[o()])};return()=>{if(t.default){const{tag:s}=e;return B(s,{class:Y("wrapper")},{default:()=>[t.default(),c()]})}return c()}}});const Ye=ee(ze),[Ve,_t]=$("config-provider"),Ue=Symbol(Ve),[We,V]=$("icon"),He=e=>e==null?void 0:e.includes("/"),Ke={dot:Boolean,tag:x("i"),name:String,size:h,badge:h,color:String,badgeProps:Object,classPrefix:String};var Ze=K({name:We,props:Ke,setup(e,{slots:t}){const n=O(Ue,null),o=F(()=>e.classPrefix||(n==null?void 0:n.iconPrefix)||V());return()=>{const{tag:r,dot:u,name:c,size:s,badge:i,color:a}=e,p=He(c);return B(Ye,ie({dot:u,tag:r,class:[o.value,p?"":`${o.value}-${c}`],style:{color:a,fontSize:f(s)},content:i},e.badgeProps),{default:()=>{var l;return[(l=t.default)==null?void 0:l.call(t),p&&B("img",{class:V("image"),src:c},null)]}})}}});const Nt=ee(Ze);export{Ge as $,st as A,At as B,ct as C,L as D,Qe as E,St as F,ve as G,Ft as H,Nt as I,it as J,Z as K,pt as L,Bt as M,bt as N,Te as O,Ce as P,we as Q,Et as R,X as S,Je as T,P as U,Tt as V,Ot as W,be as X,tt as Y,ht as Z,gt as _,lt as a,Dt as a0,Ct as a1,xt as a2,vt as a3,Rt as a4,ye as a5,Le as a6,Pt as a7,Ye as b,$ as c,ge as d,Xe as e,ft as f,wt as g,de as h,R as i,at as j,E as k,x as l,ut as m,h as n,$t as o,yt as p,rt as q,N as r,nt as s,ce as t,dt as u,ot as v,ee as w,f as x,mt as y,et as z};
