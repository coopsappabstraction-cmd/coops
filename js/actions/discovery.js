import {state} from "../state.js";
import {toast,findApp,appLabel} from "../utils.js";
import {renderAppList} from "../views/discovery.js";
export const change={
  hide:t=>{const n=appLabel(findApp(t.dataset.hide));t.checked?state.hidden.delete(t.dataset.hide):state.hidden.add(t.dataset.hide);renderAppList();
    toast(t.checked?`${n} is visible to your community`:`${n} is hidden from your community`)}};
export function onSearch(v){state.q=v;renderAppList()}
