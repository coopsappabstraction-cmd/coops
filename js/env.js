// Environment variables. Edit values here, then reload the page.
// Use numbers, not strings.
export const ENV={
  // Controls how finely people can control what the community sees.
  //   1 -> you can hide and unhide your apps from the entire community
  //        (the "Visible" switches on Discovery > Installed)
  //   2 -> a "Sharing" tab is added where you choose, per person and per app,
  //        who can see each of your apps
  //   any other value -> neither feature is shown
  granularity_level:0,

  // Controls how much app identity is revealed.
  //   1 -> you still see the real names of your own apps, but your peers' apps
  //        appear only by Play Store category (e.g. "Social" instead of "Snapchat")
  //   any other value -> real app names are shown for everyone
  abstraction_level:0
};
