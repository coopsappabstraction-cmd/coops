import {PERMISSION_INFO} from "../data.js";
import {findApp,member,holders,appLabel} from "../utils.js";
// l = {app, s: whose permissions are shown, set: Android-settings mode}
export function viewPermissions(l){
  const a=findApp(l.app),s=l.s,mine=s==="me",tot=holders(a).length,canSync=!!a.o.me,name=appLabel(a,s);
  const rows=a.p.map((p,i)=>{
    const on=a.o[s][i]==="1",g=holders(a).filter(m=>a.o[m.id][i]==="1").length;
    const status=l.set
      ?`<label class="sw"><input type="checkbox" data-perm="${i}" ${on?"checked":""} aria-label="${p}"><i></i></label>`
      :`<span class="chip ${on?"ok":"no"}">${on?"Granted":"Denied"}</span>`;
    const actions=(l.set||mine)?"":`<div class="perm-actions"><button class="btn ghost" data-a="warn" data-v="${a.n}|${s}|${i}">Warn</button><button class="btn ghost" data-a="sync" data-v="${a.n}|${s}|${i}" ${canSync?"":"disabled"} title="${canSync?`Set my ${p} permission to match ${member(s).n}'s`:"Install this app to sync"}">Sync to mine</button></div>`;
    return `<div class="perm"><div class="pr"><b>${p}</b>${status}</div>${l.set?"":`<p>${PERMISSION_INFO[p]}</p>`}<small>${g} of ${tot} members granted</small>${actions}</div>`}).join("");
  const action=mine?`<button class="btn" data-a="setmode">${l.set?"Done":"SETTINGS"}</button>`:"";
  const note=l.set?'<p class="sub">This mimics Android Settings. Changing a permission posts to the Community feed.</p>'
    :(!mine&&!canSync?`<p class="sub">You don't have this app installed, so Sync is unavailable.</p>`:"");
  return `<div class="lh"><button class="back" data-a="back" aria-label="Back">‹</button><h2>${l.set?"Android settings: ":""}${name}${mine?"":" · "+member(s).n}</h2>${action}</div><main>${note}${rows}</main>`;
}
