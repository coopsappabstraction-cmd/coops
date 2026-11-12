// One delegated listener per event type. Add a feature by exporting
// `click` / `change` handler maps from a file in actions/ and listing it here.
import * as nav from "./actions/nav.js";
import * as discovery from "./actions/discovery.js";
import * as permissions from "./actions/permissions.js";
import * as chat from "./actions/chat.js";
import * as feed from "./actions/feed.js";
import * as sharing from "./actions/sharing.js";

const mods=[nav,discovery,permissions,chat,feed,sharing];
const click=Object.assign({},...mods.map(m=>m.click||{}));
const change=Object.assign({},...mods.map(m=>m.change||{}));

export function initEvents(){
  document.addEventListener("click",e=>{
    const b=e.target.closest("[data-a]");
    if(b&&click[b.dataset.a])click[b.dataset.a](b.dataset.v,b);
  });
  document.addEventListener("change",e=>{
    const key=Object.keys(change).find(k=>k in e.target.dataset);
    if(key)change[key](e.target);
  });
  document.addEventListener("input",e=>{if(e.target.id==="q")discovery.onSearch(e.target.value)});
  document.addEventListener("keydown",e=>{
    if(e.key!=="Enter"||e.target.tagName!=="INPUT")return;
    const b=e.target.parentElement.querySelector("[data-a=send],[data-a=csend]");
    if(b)b.click();
  });
}
