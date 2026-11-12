import {APPS} from "../data.js";
import {state} from "../state.js";
import {ENV} from "../env.js";
import {$,esc,appIcon,appLabel,communityOwner,holders} from "../utils.js";
export const viewDiscovery=()=>`<div class="seg"><button data-a="seg" data-v="all" class="${state.seg==="all"?"on":""}">All apps</button><button data-a="seg" data-v="installed" class="${state.seg==="installed"?"on":""}">Installed</button></div><input class="search" id="q" placeholder="Search apps" value="${esc(state.q)}" aria-label="Search apps"><div id="list"></div>`;

// Re-renders only the list so the search box keeps focus.
export function renderAppList(){
  const own=state.seg==="installed";
  const canHide=ENV.granularity_level===1; // hide/unhide apps from the whole community
  const rows=APPS.filter(a=>(own?a.o.me:holders(a).length>0)&&appLabel(a,communityOwner(a)).toLowerCase().includes(state.q.toLowerCase()));
  const item=a=>{
    const n=holders(a).length,hid=state.hidden.has(a.n);
    return `<div class="card row"><button class="row grow" style="text-align:left" data-a="app" data-v="${a.n}" data-s="${a.o.me?"me":holders(a)[0].id}">${appIcon(a,communityOwner(a))}<div class="grow"><b>${appLabel(a,communityOwner(a))}</b><div class="sub">${own&&canHide&&hid?'<span class="hidden-note">Hidden from community</span>':`${n} ${n===1?"member has":"members have"} installed`}</div></div></button>${own&&canHide?`<label class="sw" title="Visible to community"><input type="checkbox" data-hide="${a.n}" ${hid?"":"checked"} aria-label="${appLabel(a)} visible to community"><i></i></label>`:`<span class="count">👥 ${n}</span>`}</div>`};
  $("#list").innerHTML=(own&&canHide?`<p class="sub" style="margin:0 2px 8px">Switch off “Visible” to hide an app from your community.</p>`:"")+(rows.length?rows.map(item).join(""):`<div class="empty">No apps match “${esc(state.q)}”.</div>`);
}
