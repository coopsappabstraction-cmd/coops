// All mutable app state lives here.
import {FEED_SEED,APPS,MEMBERS,HIDDEN_FROM} from "./data.js";
export const state={
  tab:"people",          // people | discovery | sharing | feed
  seg:"installed",       // Discovery tab: installed | all
  q:"",                  // Discovery search text
  layers:[],             // overlay stack: {t:"member"|"perm"|"chat", ...}
  anim:false,            // animate the newest layer
  hidden:new Set(),      // app names hidden from the community
  shareBy:"person",      // Sharing tab: person | app
  shareOpen:new Set(),   // expanded groups, e.g. "person:mom" or "app:Chase"
  // appName -> Set of member ids who can see your copy of the app (granularity_level 2)
  shares:Object.fromEntries(APPS.filter(a=>a.o.me).map(a=>[a.n,new Set(MEMBERS.filter(m=>m.id!=="me"&&!(HIDDEN_FROM[a.n]||[]).includes(m.id)).map(m=>m.id))])),
  chats:{},              // memberId -> [{me:boolean,t:string}]
  feed:structuredClone(FEED_SEED)};
