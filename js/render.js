// Draws the current state. Views are pure functions that return HTML strings.
import {state} from "./state.js";
import {$} from "./utils.js";
import {viewNav,getTabs} from "./views/nav.js";
import {viewPeople} from "./views/people.js";
import {viewDiscovery,renderAppList} from "./views/discovery.js";
import {viewFeed} from "./views/feed.js";
import {viewSharing} from "./views/sharing.js";
import {viewMemberApps} from "./views/memberApps.js";
import {viewPermissions} from "./views/permissions.js";
import {viewChat} from "./views/chat.js";

const SCREENS={people:viewPeople,discovery:viewDiscovery,feed:viewFeed,sharing:viewSharing};
const LAYERS={member:viewMemberApps,perm:viewPermissions,chat:viewChat};

export function render(){
  const [,title,sub]=getTabs().find(t=>t[0]===state.tab);
  $("#title").textContent=title;$("#subt").textContent=sub;
  $("#nav").innerHTML=viewNav(state.tab);
  $("#main").innerHTML=SCREENS[state.tab]();
  if(state.tab==="discovery")renderAppList();
  const last=state.layers.length-1;
  $("#layers").innerHTML=state.layers.map((l,i)=>`<div class="layer ${state.anim&&i===last?"in":""}">${LAYERS[l.t](l)}</div>`).join("");
  const c=$(".chat");if(c)c.scrollTop=c.scrollHeight;
}
export function pushLayer(l){state.layers.push(l);state.anim=true;render();state.anim=false}
export const topLayer=()=>state.layers[state.layers.length-1];
