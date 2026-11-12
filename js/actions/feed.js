import {state} from "../state.js";
import {$,toast} from "../utils.js";
import {render} from "../render.js";
const post=id=>state.feed.find(p=>p.id==id);
export const click={
  like:v=>{const p=post(v);p.liked=!p.liked;p.likes+=p.liked?1:-1;render()},
  cmt:v=>{const p=post(v);p.open=!p.open;render()},
  csend:v=>{const t=$("#ci"+v).value.trim();if(!t)return;const p=post(v);p.cm.push({w:"You",t});p.open=false;render();toast("Comment added")},
  post:()=>{const t=$("#np").value.trim();if(!t){toast("Write something to post first");return}
    state.feed.unshift({id:Date.now(),who:"me",text:t,likes:0,cm:[]});render();toast("Posted to community")}};
