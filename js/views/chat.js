import {state} from "../state.js";
import {esc,member} from "../utils.js";
export function viewChat(l){
  const m=member(l.m),msgs=state.chats[l.m]||[];
  return `<div class="lh"><button class="back" data-a="back" aria-label="Back">‹</button><h2>${m.n}</h2></div><div class="chat">${msgs.length?msgs.map(x=>`<div class="bub ${x.me?"me":""}">${esc(x.t)}</div>`).join(""):'<div class="empty">Send a private message to give feedback about an app or permission.</div>'}</div>${l.draft?`<p class="sub chat-note">Auto-generated from the app and permission details. Edit it before sending.</p>`:""}<div class="inl chat-input"><textarea id="mi" rows="${l.draft?7:2}" placeholder="Message ${m.n}" aria-label="Message">${esc(l.draft||"")}</textarea><button class="btn" data-a="send" data-v="${l.m}">Send</button></div>`;
}
