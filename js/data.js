// Static sample data. Replace with real API/device data later.
// How each member relates to "you". tie: "close" or "distant" (the paper found
// people are less motivated to oversee, and less willing to be seen by, distant ties).
export const RELATIONSHIPS={
  closeFamily:    {label:"Close family",    tie:"close"},
  extendedFamily: {label:"Extended family", tie:"distant"},
  friend:         {label:"Friend",          tie:"close"},
  distantFriend:  {label:"Distant friend",  tie:"distant"},
  colleague:      {label:"Colleague",       tie:"distant"}};

// Names show the relationship, as they would in a real phone contact list.
// `rel` is a key of RELATIONSHIPS. Order here is the order shown in People.
// (The study used groups of 2-6; this sample has 7 so every type has an example.)
export const MEMBERS=[
  {id:"me",    n:"You",         c:"#4a2a7a", rel:null},
  {id:"mom",   n:"Mom",         c:"#4d7c0f", rel:"closeFamily"},
  {id:"dad",   n:"Dad",         c:"#1d4ed8", rel:"closeFamily"},
  {id:"arisha",n:"Arisha",      c:"#c2410c", rel:"friend"},
  {id:"dylan", n:"Uncle Dylan", c:"#a21caf", rel:"extendedFamily"},
  {id:"maria", n:"Maria",       c:"#0f766e", rel:"distantFriend"},
  {id:"curt",  n:"Curt",        c:"#475569", rel:"colleague"}];

// granularity_level 2: apps you hide from specific people (everything else is shared).
export const HIDDEN_FROM={Chase:["curt","maria","dylan"],Snapchat:["mom","dad"],"V Recorder":["curt"]};

export const PERMISSION_INFO={
  "Camera":"Allows the app to take photos and record video.",
  "Contacts":"Allows the app to read your contact list.",
  "Location":"Allows the app to see where you are, including precise location.",
  "Microphone":"Allows the app to record audio.",
  "Storage":"Allows the app to read files saved on the device."};

// category is the app's Google Play Store category (prestored for now).
// o[memberId] is a string of 1/0 flags, one per entry in p (1 = granted).
export const APPS=[
  {n:"Snapchat",category:"Social",c:"#f5d90a",p:["Camera","Contacts","Location","Microphone"],o:{me:"1110",arisha:"1010",maria:"1000",mom:"1111"}},
  {n:"Uber",category:"Maps & Navigation",c:"#d8d8d8",p:["Location","Contacts"],o:{me:"10",curt:"11",dylan:"10"}},
  {n:"Chase",category:"Finance",c:"#9cc4f5",p:["Camera","Location","Contacts"],o:{me:"110",dad:"101",maria:"100",curt:"000"}},
  {n:"V Recorder",category:"Tools",c:"#f58a8a",p:["Microphone","Storage"],o:{me:"11",dylan:"10"}},
  {n:"Twitter",category:"News & Magazines",c:"#8fd0f5",p:["Camera","Location","Storage"],o:{me:"011",arisha:"010",mom:"110",curt:"000"}},
  {n:"Walmart",category:"Shopping",c:"#ffe27a",p:["Location","Camera"],o:{me:"10",dad:"11",maria:"10",mom:"00"}},
  {n:"Skype",category:"Communication",c:"#8fe0f5",p:["Camera","Contacts","Microphone","Storage"],o:{me:"1101",curt:"1111"}},
  // Apps only your peers have: you only ever see these by category when abstraction_level is 1.
  {n:"Spotify",category:"Music & Audio",c:"#9be3a8",p:["Microphone","Storage"],o:{dad:"01",arisha:"11"}},
  {n:"Strava",category:"Health & Fitness",c:"#f7b58a",p:["Location","Camera"],o:{mom:"11",maria:"10"}},
  {n:"Puzzle Quest",category:"Games",c:"#c7f0a8",p:["Storage","Location"],o:{me:"11",arisha:"10",dylan:"11"}}];

export const TIPS=[
  "Does a flashlight app really need your contacts? If a permission doesn't match what the app does, deny it.",
  "Location set to “always” lets apps follow you all day. Choose “only while using” when you can."];

export const FEED_SEED=[
  {id:1,who:"tip",text:"Week 1 pro tip: "+TIPS[0],likes:3,cm:[{w:"Maria",t:"Checking my camera permissions now."}]},
  {id:2,who:"dylan",auto:1,text:"Uncle Dylan changed permissions for {app:Snapchat}: Location (precise) is now denied.",likes:2,cm:[]},
  {id:3,who:"maria",text:"Hey all, check which apps have microphone access. I found two I didn't expect.",likes:4,cm:[{w:"Mom",t:"Same here. Turned one off."}]},
  {id:4,who:"mom",text:"Does anyone know why a puzzle game would need location?",likes:1,cm:[]}];
