import {ENV} from "../env.js";
const ICONS={
  people:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M16 5a3.3 3.3 0 010 6.5M18 14c2.2.6 3.5 2.6 3.5 6"/>',
  discovery:'<circle cx="11" cy="11" r="6.5"/><path d="M16 16l5 5"/>',
  sharing:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  feed:'<path d="M4 5h16v11H9l-5 4z"/>'};
const ALL=[["people","People","Your community"],["discovery","Discovery","Apps and permissions"],["sharing","Sharing","Who sees your apps"],["feed","Community","Shared feed"]];
// The Sharing tab only exists when granularity_level is 2.
export const getTabs=()=>ALL.filter(t=>t[0]!=="sharing"||ENV.granularity_level===2);
export const viewNav=tab=>getTabs().map(([k,l])=>`<button data-a="tab" data-v="${k}" class="${tab===k?"on":""}"><svg viewBox="0 0 24 24">${ICONS[k]}</svg>${l}</button>`).join("");
