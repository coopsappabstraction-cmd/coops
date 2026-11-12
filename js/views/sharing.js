// Sharing tab (granularity_level 2): choose who can see each of your apps.
import {APPS,MEMBERS} from "../data.js";
import {state} from "../state.js";
import {avatar,appIcon,appLabel} from "../utils.js";

const others=()=>MEMBERS.filter(m=>m.id!=="me");
const mine=()=>APPS.filter(a=>a.o.me);
const sw=(a,m)=>`<label class="sw"><input type="checkbox" data-share="${a.n}|${m.id}" ${state.shares[a.n].has(m.id)?"checked":""} aria-label="Share ${appLabel(a)} with ${m.n}"><i></i></label>`;

// One collapsible card. `head` is always visible, `rows` only when expanded.
function group(key,icon,title,sub,rows){
  const open=state.shareOpen.has(key);
  return `<div class="card"><button class="row share-head" data-a="shareOpen" data-v="${key}" aria-expanded="${open}">${icon}<div class="grow"><b>${title}</b><div class="sub">${sub}</div></div><span class="chev ${open?"open":""}" aria-hidden="true">›</span></button>${open?`<div class="share-body">${rows}</div>`:""}</div>`;
}

export function viewSharing(){
  const byPerson=state.shareBy==="person";
  const seg=`<div class="seg"><button data-a="shareBy" data-v="person" class="${byPerson?"on":""}">By person</button><button data-a="shareBy" data-v="app" class="${byPerson?"":"on"}">By app</button></div>`;
  const intro=`<p class="sub" style="margin:0 2px 10px">Switch an app off to hide it from that person. They won't see it or its permissions.</p>`;
  const cards=byPerson
    ?others().map(m=>{
        const n=mine().filter(a=>state.shares[a.n].has(m.id)).length;
        const rows=mine().map(a=>`<div class="row share-row">${appIcon(a)}<span class="grow">${appLabel(a)}</span>${sw(a,m)}</div>`).join("");
        return group("person:"+m.id,avatar(m),m.n,`${n} of ${mine().length} apps shared`,rows)}).join("")
    :mine().map(a=>{
        const n=state.shares[a.n].size;
        const rows=others().map(m=>`<div class="row share-row">${avatar(m)}<span class="grow">${m.n}</span>${sw(a,m)}</div>`).join("");
        return group("app:"+a.n,appIcon(a),appLabel(a),`Shared with ${n} of ${others().length} people`,rows)}).join("");
  return seg+intro+cards;
}
