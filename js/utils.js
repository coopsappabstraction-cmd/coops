import {MEMBERS,APPS} from "./data.js";
import {state} from "./state.js";
import {ENV} from "./env.js";
export const $=s=>document.querySelector(s);
export const member=id=>MEMBERS.find(m=>m.id===id);
export const findApp=n=>APPS.find(a=>a.n===n);
// Is this member's copy of the app visible to the community?
export const hasApp=(a,id)=>{
  if(!a.o[id])return false;
  if(id!=="me")return true;
  if(ENV.granularity_level===1)return !state.hidden.has(a.n);       // hidden from everyone
  if(ENV.granularity_level===2)return state.shares[a.n].size>0;      // shared with at least one person
  return true;
};
export const holders=a=>MEMBERS.filter(m=>hasApp(a,m.id));
export const esc=s=>s.replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
export const avatar=m=>`<span class="av" style="background:${m.c}">${m.n.split(" ").pop()[0]}</span>`;
// What to show for an app. `owner` is whose copy is being shown.
// With abstraction_level 1 you see real names only for your own apps ("me");
// peers' apps show as their Play Store category.
export const appLabel=(a,owner="me")=>ENV.abstraction_level===1&&owner!=="me"?a.category:a.n;
// For community-wide lists: it is "your" app if you have it installed too.
export const communityOwner=a=>a.o.me?"me":"peers";
// Replaces {app:Name} tokens in stored text. `owner` is who wrote the text.
export const resolveApps=(t,owner="me")=>t.replace(/\{app:([^}]+)\}/g,(_,n)=>appLabel(findApp(n),owner));
export const appIcon=(a,owner="me")=>`<span class="ic" style="background:${a.c}">${appLabel(a,owner)[0]}</span>`;
let timer;
export function toast(t){const e=$("#toast");e.textContent=t;e.classList.add("show");clearTimeout(timer);timer=setTimeout(()=>e.classList.remove("show"),2200)}
