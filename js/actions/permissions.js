import {state} from "../state.js";
import {findApp,member,toast,appLabel} from "../utils.js";
import {warningMessage} from "../messages.js";
import {render,pushLayer,topLayer} from "../render.js";

// Sets YOUR permission and posts an automatic note to the Community feed.
function setMyPermission(a,i,on,suffix=""){
  const f=[...a.o.me];f[i]=on?"1":"0";a.o.me=f.join("");
  state.feed.unshift({id:Date.now(),who:"me",auto:1,text:`You changed permissions for ${appLabel(a)}: ${a.p[i]} is now ${on?"granted":"denied"}${suffix}.`,likes:0,cm:[]});
}

export const click={
  setmode:()=>{const l=topLayer();l.set=!l.set;render()},
  // Opens a chat with an auto-generated, editable warning about one permission.
  warn:v=>{const [n,s,i]=v.split("|");pushLayer({t:"chat",m:s,draft:warningMessage(n,+i,s)});toast("Message drafted. Edit it before sending.")},
  // Copies another member's setting for one permission onto your own copy of the app.
  sync:v=>{
    const [n,s,i]=v.split("|"),a=findApp(n),idx=+i,p=a.p[idx],who=member(s).n;
    if(!a.o.me)return;
    const theirs=a.o[s][idx]==="1";
    if((a.o.me[idx]==="1")===theirs){toast(`Your ${p} permission already matches ${who}'s`);return}
    setMyPermission(a,idx,theirs,` (synced with ${who})`);
    render();toast(`${p} is now ${theirs?"granted":"denied"} on your ${appLabel(a)}, like ${who}'s`)}};

export const change={
  perm:t=>{const a=findApp(topLayer().app);setMyPermission(a,+t.dataset.perm,t.checked);render();toast("Community feed updated")}};
