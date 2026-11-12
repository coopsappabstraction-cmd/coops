// Builds the auto-generated warning text. Edit the wording here.
import {PERMISSION_INFO} from "./data.js";
import {findApp,member,holders,appLabel} from "./utils.js";

export function warningMessage(appName,permIndex,memberId){
  const a=findApp(appName),m=member(memberId),p=a.p[permIndex],name=appLabel(a,memberId);
  const on=a.o[memberId][permIndex]==="1";
  const tot=holders(a).length;
  const g=holders(a).filter(h=>a.o[h.id][permIndex]==="1").length;
  const lead=`Hi ${m.n}, I was checking apps in CO-oPS and noticed ${name} has the ${p} permission ${on?"granted":"denied"} on your phone.`;
  const what=`What it does: ${PERMISSION_INFO[p]}`;
  const crowd=`${g} of the ${tot} ${tot===1?"member who has":"members who have"} ${name} installed ${g===1?"has":"have"} granted it.`;
  const ask=on
    ?`If ${name} doesn’t really need this to work, it may be worth turning it off in Settings. Want to look at it together?`
    :`I’d keep it that way unless ${name} clearly needs it.`;
  return [lead,what,crowd,ask].join("\n\n");
}
