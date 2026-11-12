import {state} from "../state.js";
import {member,toast,findApp,appLabel} from "../utils.js";
import {render} from "../render.js";
export const click={
  shareBy:v=>{state.shareBy=v;render()},
  shareOpen:v=>{state.shareOpen.has(v)?state.shareOpen.delete(v):state.shareOpen.add(v);render()}};
export const change={
  share:t=>{
    const key=t.dataset.share,[app,id]=key.split("|"),set=state.shares[app];
    t.checked?set.add(id):set.delete(id);
    render();
    const again=[...document.querySelectorAll("[data-share]")].find(e=>e.dataset.share===key);if(again)again.focus(); // keep keyboard focus
    toast(`${appLabel(findApp(app))} is now ${t.checked?"visible to":"hidden from"} ${member(id).n}`)}};
