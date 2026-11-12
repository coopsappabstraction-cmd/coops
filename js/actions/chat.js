import {state} from "../state.js";
import {$} from "../utils.js";
import {render,pushLayer,topLayer} from "../render.js";
export const click={
  chat:v=>{const t=topLayer();if(t&&t.t==="chat")return;pushLayer({t:"chat",m:v})},
  send:v=>{
    const t=$("#mi").value.trim();if(!t)return;
    const top=topLayer();if(top)top.draft="";
    (state.chats[v]=state.chats[v]||[]).push({me:true,t});render();
    // Simulated reply.
    setTimeout(()=>{state.chats[v].push({me:false,t:"Thanks for the heads-up. I'll check my permissions."});
      const l=topLayer();if(l&&l.t==="chat"&&l.m===v)render()},1300)}};
