import {state} from "../state.js";
import {render,pushLayer} from "../render.js";
export const click={
  tab:v=>{state.tab=v;state.layers=[];render()},
  seg:v=>{state.seg=v;render()},
  back:()=>{state.layers.pop();render()},
  member:v=>pushLayer({t:"member",s:v}),
  app:(v,b)=>pushLayer({t:"perm",app:v,s:b.dataset.s})};
