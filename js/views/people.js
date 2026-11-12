import {MEMBERS,APPS} from "../data.js";
import {avatar,hasApp} from "../utils.js";
import {ENV} from "../env.js";

// The whole card opens the member’s apps (the .stretch button covers it).
// The Message button sits above it, so it still works on its own.
export const viewPeople=()=>MEMBERS.filter(m=>m.id!=="me").map(m=>{
  const n=APPS.filter(a=>hasApp(a,m.id)).length;
  const canHide=(ENV.granularity_level===1 || ENV.granularity_level===2); 
  return `<div class="card row link">${avatar(m)}<button class="grow stretch" style="text-align:left" data-a="member" data-v="${m.id}" aria-label="View ${m.n}’s apps"><b>${m.n}</b>${canHide ? '<div class="sub">' + n + ' apps visible</div>' : ''}</button><button class="btn ghost msg" data-a="chat" data-v="${m.id}">Message</button></div>`}).join("");
