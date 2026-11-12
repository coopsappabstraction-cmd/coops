import {APPS} from "../data.js";
import {member,hasApp,appIcon,appLabel} from "../utils.js";
export function viewMemberApps(l){
  const m=member(l.s),as=APPS.filter(a=>hasApp(a,l.s));
  return `<div class="lh"><button class="back" data-a="back" aria-label="Back">‹</button><h2>${m.n}'s apps</h2><button class="btn" data-a="chat" data-v="${l.s}">Message</button></div><main>${as.length?as.map(a=>{const g=[...a.o[l.s]].filter(x=>x==="1").length;return `<button class="card row" style="width:100%;text-align:left" data-a="app" data-v="${a.n}" data-s="${l.s}">${appIcon(a,l.s)}<div class="grow"><b>${appLabel(a,l.s)}</b><div class="sub">${g} of ${a.p.length} permissions granted</div></div><span class="sub">›</span></button>`}).join(""):'<div class="empty">No apps visible.</div>'}</main>`;
}
