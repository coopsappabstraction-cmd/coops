import {$} from "./utils.js";
export function initTheme(){
  $("#theme").addEventListener("click",()=>{
    const r=document.documentElement;
    const dark=r.dataset.theme==="dark"||(r.dataset.theme!=="light"&&matchMedia("(prefers-color-scheme:dark)").matches);
    r.dataset.theme=dark?"light":"dark";
  });
}
