# CO-oPS mock app

Run from a local server (ES modules do not load from file://):

    python3 -m http.server 8000     # then open http://localhost:8000

## Structure
- index.html              page shell
- css/theme.css           color tokens, light and dark
- css/layout.css          phone frame, header, nav, overlays, toast
- css/components.css      cards, buttons, switches, feed, chat
- js/data.js              sample members (with relationship types), apps, tips
- js/env.js              environment variables (granularity_level)
- js/messages.js         auto-generated warning text
- js/state.js             all mutable state
- js/utils.js             helpers (selectors, lookups, toast)
- js/render.js            draws screens and overlay layers
- js/views/*.js           one file per screen/overlay (return HTML strings)
- js/actions/*.js         one file per feature (click/change handlers)
- js/events.js            wires handlers via data-a / data-* attributes
- js/theme.js, main.js    theme toggle, entry point

## Adding a feature
1. Add data to data.js and state to state.js.
2. Add a view in views/ and register it in render.js.
3. Add handlers in actions/ and list the file in events.js.
