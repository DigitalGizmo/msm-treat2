<template>
  <div>
    <div  class="wrapper">
      <p>This could be a Maine State Museum banner</p>
      <treat-map
          :entry="entry"
          :entries="entries"
          :reSetEntry="setEntry"
      ></treat-map>
      <treat-panel
          :entry="entry"
          :incEntry="incrementEntry"
          :showLightBox="showLightBox"
      ></treat-panel>
    </div>
    <full-entry
      v-if="lightBoxOn"
        :entry="entry"
        :closeLightBox="closeLightBox"
    ></full-entry>
  </div>
</template>

<script>
import TreatPanel from '../components/TreatPanel.vue'
import TreatMap from '../components/TreatMap.vue'
import FullEntry from '../components/FullEntry.vue'
import { eventBus } from '../main'

export default {
  data: function () {
    return {
      currIndex: 0,
      lightBoxOn: false,
      entries: [
        { title: "Joseph Treat's Journal", slug: 'intro', entry_date: '16 September, 1820', lat: 46.15, lon: -68.767824, zoom_level: 8, is_flippable: false, entry_text: '<p>Joseph Treat set out to explore the new state of Maine by canoeing along the Penobscot and St. Johns rivers with his guide Neptune, a member of the Abenaki Penobscot tribe. Their trip lasted four months and they traveled over 500 miles.</p><p>Each marker on the map represents a written description of that place taken from Treat&apos;s journal. Tap a marker or tap &quot;BEGIN EXPLORING&quot; to start at the journey&apos;s beginning.</p>', interpret_blurb: '', interpret_more: '' },
        { title: 'Start - Bangor', slug: 'bangor', entry_date: '17 September, 1820', lat: 44.7971185, lon: -68.767824, zoom_level: 9, is_flippable: false, entry_text: '<p>Bangor, 16th Sept. 1820</p><p>This day received Instructions from His Excellency William King, dated the 11th instant, directing me to preceed up the Penobscot...</p>', interpret_blurb: '<p>Lorem ipsum dolor sit amet consectetur adipiscing elit, semper nascetur phasellus himenaeos quis commodo, fermentum nisl elementum nunc etiam diam. Penatibus feugiat potenti ad interdum curae sodales hendrerit sociis eros semper, nibh auctor fermentum senectus ultrices ligula class fringilla sociosqu nunc tellus</p>', interpret_more: '<p>Suspendisse eget tellus justo hac ante nisl massa nam maecenas, lectus mus duis mi nullam porttitor habitasse rutrum torquent praesent, ac venenatis sociosqu montes nibh ad quisque suscipit. Tortor hendrerit fringilla lobortis penatibus aliquam varius nibh tempor scelerisque ante, bibendum duis curae venenatis porta suscipit leo luctus vulputate velit enim, blandit netus justo at cubilia hac senectus dui facilisi. Gravida congue dapibus feugiat nam dictum mollis nostra cursus, metus augue tempus ad sollicitudin curabitur sociosqu, felis lobortis praesent aptent erat netus interdum.</p>' },
        { title: 'First Stop', slug: 'day-two', entry_date: '18 September, 1820', lat: 44.880163, lon: -68.659326, zoom_level: 10, is_flippable: true, entry_text: '<p>[Very cool thing -- this content is now coming from https://msm-treat-admin.digitalgizmo.com/admin/ ]</p>', interpret_blurb: '<p>Suspendisse eget tellus justo hac ante nisl massa nam maecenas, lectus mus duis mi nullam porttitor habitasse rutrum torquent praesent, ac venenatis sociosqu montes nibh ad quisque suscipit. Tortor hendrerit fringilla lobortis penatibus aliquam varius nibh tempor scelerisque ante.</p>', interpret_more: '' },
        { title: 'Old Town/Indian Island', slug: 'old-town', entry_date: '26 September, 1820', lat: 44.5842, lon: -68.406, zoom_level: 10, is_flippable: false, entry_text: '<p>Arrived at Old Town at 1. P.M. &ndash; left there at 3. P.M. the Present residence of the Penobscot Indians, and since their residence has been on the Penobscot or Rocky Island the whole River has taken the same name &ndash; this has not been their chief place of Residence they say more than 1 or 200 years &ndash; their Towns were formerly on Now,at,kee,mongon and Passadunkee Islands.</p>', interpret_blurb: '<table border="1" cellpadding="0" cellspacing="0" width="937"><tbody><tr><td valign="top" width="186">Map shows Indian Island, Freese Island (Now,at,kee,mongon)</td></tr></tbody></table>', interpret_more: '<table border="1" cellpadding="0" cellspacing="0" width="937"><tbody><tr><td valign="top" width="186">other Indian names of rivers, falls, rips<br></td></tr></tbody></table>' }
      ],
      // entry: entries[0]
      entry: { title: "Joseph Treat's Journal", slug: 'intro', entry_date: '16 September, 1820', lat: 46.15, lon: -68.767824, zoom_level: 8, is_flippable: false, entry_text: '<p>Joseph Treat set out to explore the new state of Maine by canoeing along the Penobscot and St. Johns rivers with his guide Neptune, a member of the Abenaki Penobscot tribe. Their trip lasted four months and they traveled over 500 miles.</p><p>Each marker on the map represents a written description of that place taken from Treat&apos;s journal. Tap a marker or tap &quot;BEGIN EXPLORING&quot; to start at the journey&apos;s beginning.</p>', interpret_blurb: '', interpret_more: '' }
    }
  },
  components: {
    treatPanel: TreatPanel,
    treatMap: TreatMap,
    fullEntry: FullEntry
  },
  methods: {
    incrementEntry: function (nextOrPrev) {
      if (nextOrPrev === 'next') {
        this.setEntry(this.currIndex + 1)
      } else {
        this.setEntry(this.currIndex - 1)
      }
    },
    setEntry (newEntIndex) {
      // Set the current journal entry index.
      this.currIndex = newEntIndex
      // Update data to contain new journal entry
      this.entry = this.entries[this.currIndex]
      // In Vue2 Leaflet we can't pan and zoom at the same time,
      // so here's an event to trigger use of the native
      // Leaflet setView.
      eventBus.$emit('reSetView')
    },
    showLightBox () {
      this.lightBoxOn = true
    },
    closeLightBox () {
      this.lightBoxOn = false
    }
  }
}
</script>

<style lang="scss">
/* changed #mapdiv to .mapdiv or not */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
nav,
section,
summary {
  display: block;
}

audio,
canvas,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

[hidden], template {
  display: none;
}

html {
  background: #fff;
  color: #000;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

html,
button,
input,
select,
textarea {
  font-family: sans-serif;
}

body {
  margin: 0;
}

a {
  background: transparent;
}
a:focus {
  outline: thin dotted;
}
a:hover, a:active {
  outline: 0;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

h3 {
  font-size: 1.17em;
  margin: 1em 0;
}

h4 {
  font-size: 1em;
  margin: 1.33em 0;
}

h5 {
  font-size: 0.83em;
  margin: 1.67em 0;
}

h6 {
  font-size: 0.75em;
  margin: 2.33em 0;
}

abbr[title] {
  border-bottom: 1px dotted;
}

b,
strong {
  font-weight: bold;
}

dfn {
  font-style: italic;
}

mark {
  background: #ff0;
  color: #000;
}

code,
kbd,
pre,
samp {
  font-family: monospace, serif;
  font-size: 1em;
}

pre {
  white-space: pre;
  white-space: pre-wrap;
  word-wrap: break-word;
}

q {
  quotes: "\201C" "\201D" "\2018" "\2019";
}

q:before, q:after {
  content: '';
  content: none;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

img {
  border: 0;
}

svg:not(:root) {
  overflow: hidden;
}

figure {
  margin: 0;
}

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

legend {
  border: 0;
  padding: 0;
  white-space: normal;
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  vertical-align: baseline;
}

button, input {
  line-height: normal;
}

button,
select {
  text-transform: none;
}

button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}

button[disabled],
input[disabled] {
  cursor: default;
}

button::-moz-focus-inner, input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

textarea {
  overflow: auto;
  vertical-align: top;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input[type="search"] {
  -webkit-appearance: textfield;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

html {
  box-sizing: border-box;
}

*, *::after, *::before {
  box-sizing: inherit;
}

button, input[type="button"], input[type="reset"], input[type="submit"] {
  appearance: none;
  background-color: #b12b00;
  border: 0;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Libre Baskerville", serif;
  font-size: 1em;
  -webkit-font-smoothing: antialiased;
  font-weight: 600;
  line-height: 1;
  padding: 0.8em 1.6em;
  text-decoration: none;
  transition: background-color 150ms ease;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}
button:hover, button:focus, input[type="button"]:hover, input[type="button"]:focus, input[type="reset"]:hover, input[type="reset"]:focus, input[type="submit"]:hover, input[type="submit"]:focus {
  background-color: #8e2200;
  color: #fff;
}
button:disabled, input[type="button"]:disabled, input[type="reset"]:disabled, input[type="submit"]:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
button:disabled:hover, input[type="button"]:disabled:hover, input[type="reset"]:disabled:hover, input[type="submit"]:disabled:hover {
  background-color: #b12b00;
}

a:link {
  color: #b12b00;
}

a:visited {
  color: #8e2200;
}

a:hover {
  color: #d94a38;
  text-decoration: underline;
}

fieldset {
  background-color: transparent;
  border: 0;
  margin: 0;
  padding: 0;
}

legend {
  font-weight: 600;
  margin-bottom: 0.4em;
  padding: 0;
}

label {
  display: block;
  margin-bottom: 0.4em;
}

input,
select {
  display: block;
  font-family: "Libre Baskerville", serif;
  font-size: 1em;
}

input[type="color"], input[type="date"], input[type="datetime"], input[type="datetime-local"], input[type="email"], input[type="month"], input[type="number"], input[type="password"], input[type="search"], input[type="tel"], input[type="text"], input[type="time"], input[type="url"], input[type="week"], input:not([type]), textarea,
select[multiple] {
  background-color: #fff4e4;
  border: 1px solid #b3aa98;
  border-radius: 3px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  font-family: "Libre Baskerville", serif;
  font-size: 1em;
  margin-bottom: 0.8em;
  padding: 0.5333333333em;
  transition: border-color 150ms ease;
  width: 100%;
}
input[type="color"]:hover, input[type="date"]:hover, input[type="datetime"]:hover, input[type="datetime-local"]:hover, input[type="email"]:hover, input[type="month"]:hover, input[type="number"]:hover, input[type="password"]:hover, input[type="search"]:hover, input[type="tel"]:hover, input[type="text"]:hover, input[type="time"]:hover, input[type="url"]:hover, input[type="week"]:hover, input:not([type]):hover, textarea:hover,
select[multiple]:hover {
  border-color: #8f887a;
}
input[type="color"]:focus, input[type="date"]:focus, input[type="datetime"]:focus, input[type="datetime-local"]:focus, input[type="email"]:focus, input[type="month"]:focus, input[type="number"]:focus, input[type="password"]:focus, input[type="search"]:focus, input[type="tel"]:focus, input[type="text"]:focus, input[type="time"]:focus, input[type="url"]:focus, input[type="week"]:focus, input:not([type]):focus, textarea:focus,
select[multiple]:focus {
  border-color: #b12b00;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.06), 0 0 5px rgba(152, 37, 0, 0.7);
  outline: none;
}
input[type="color"]:disabled, input[type="date"]:disabled, input[type="datetime"]:disabled, input[type="datetime-local"]:disabled, input[type="email"]:disabled, input[type="month"]:disabled, input[type="number"]:disabled, input[type="password"]:disabled, input[type="search"]:disabled, input[type="tel"]:disabled, input[type="text"]:disabled, input[type="time"]:disabled, input[type="url"]:disabled, input[type="week"]:disabled, input:not([type]):disabled, textarea:disabled,
select[multiple]:disabled {
  background-color: #f2e8d9;
  cursor: not-allowed;
}
input[type="color"]:disabled:hover, input[type="date"]:disabled:hover, input[type="datetime"]:disabled:hover, input[type="datetime-local"]:disabled:hover, input[type="email"]:disabled:hover, input[type="month"]:disabled:hover, input[type="number"]:disabled:hover, input[type="password"]:disabled:hover, input[type="search"]:disabled:hover, input[type="tel"]:disabled:hover, input[type="text"]:disabled:hover, input[type="time"]:disabled:hover, input[type="url"]:disabled:hover, input[type="week"]:disabled:hover, input:not([type]):disabled:hover, textarea:disabled:hover,
select[multiple]:disabled:hover {
  border: 1px solid #b3aa98;
}

textarea {
  resize: vertical;
}

[type="search"] {
  appearance: none;
}

[type="checkbox"],
[type="radio"] {
  display: inline;
  margin-right: 0.4em;
}

[type="file"] {
  margin-bottom: 0.8em;
  width: 100%;
}

select {
  margin-bottom: 1.6em;
  max-width: 100%;
  width: auto;
}

ul,
ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

dl {
  margin-bottom: 0.8em;
}
dl dt {
  font-weight: 600;
  margin-top: 0.8em;
}
dl dd {
  margin: 0;
}

ul.indented {
  margin: 0 0 0.8em 0.8em;
}

table {
  border-collapse: collapse;
  margin: 0.8em 0;
  table-layout: fixed;
  width: 100%;
}

th {
  border-bottom: 1px solid #868072;
  font-weight: 600;
  padding: 0.8em 0;
  text-align: left;
}

td {
  border-bottom: 1px solid #b3aa98;
  padding: 0.8em 0;
}

tr,
td,
th {
  vertical-align: middle;
}

html {
  background-color: #fff4e4;
}

body {
  color: #7d7664;
  font-family: "Libre Baskerville", serif;
  font-size: 1em;
  line-height: 1.6;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Libre Baskerville", serif;
  font-size: 1em;
  font-weight: normal;
  line-height: 1.2;
  margin: 0 0 0.8em 0;
}

p {
  margin: 0 0 0.8em;
}

a {
  color: #b12b00;
  text-decoration: none;
  transition: color 150ms ease;
}
a:active, a:focus, a:hover {
  color: #852000;
}

hr {
  border-bottom: 1px solid #b3aa98;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  margin: 1.6em 0;
}

img,
picture {
  margin: 0;
  max-width: 100%;
}

blockquote {
  font-style: italic;
}

/*.map-empty {
  overflow: visible;
}*/

/*@media screen and (min-width: 55em) {
  .map-empty {
    overflow: auto;
  }
}*/
.wrapper {
  display: grid;
  grid-template-rows: 100vh;
  grid-template-columns: 50% 50%;
  grid-gap: 0px;
  height: 100vh;
  margin: 0;
}

.map-wrapper {
  grid-row: 1;
  grid-column: 1 / 3;
  position: relative;
}

/*.map-wrapper {
  float: none;
  width: 100%;
}
@media screen and (min-width: 55em) {
  .map-wrapper {
    float: right;
    width: 50%;
  }
}*/

/* @media screen and (min-width: 55em) {
  .journal-info-panel {
   display: block;
    margin-right: 50%;
    width: 50%;

    }
}*/

/*@media screen and (min-width: 55em) {
  .map-control-panel {
    display: block;
    float: left;
    width: 3%;
  }
}*/

.map-area {
  display: block;
  height: 100vh;
  position: relative;
  z-index: 1;
}

#mapdiv {
  height: 100%;
  /*height: 600px;
  z-index: 85;*/
}

.journal-info-panel {
  color: #fff4e4;
  padding: 1.6em;
  /*height: 100vh;*/
  grid-row: 1;
  grid-column: 1;
  background-color: rgba(53, 53, 36, 0.6);
  position: relative;
  z-index: 15;
}

header h2 {
  font-style: italic;
  font-size: 2em;
  margin: 0;
}

header h3 {
  font-style: italic;
  font-size: 1em;
  margin: .25em 0;
}

.journal-image img {
  max-height: 50vh;
  max-width: 70%;
  padding: 2px;
  border: 1px solid #b3aa98;
  float: left;
  margin-right: 20px;
  margin-bottom: 1.6em;
}

.journal-info-panel a:link, .journal-info-panel a:visited {
  color: #FFDC72;
}

.journal-info-panel a:hover {
  color: #fff4e4;
  text-decoration: underline;
}

.journal-text {
  background-color: rgba(53, 53, 36, 0.8);
  border: 1px solid #b3aa98;
  clear: left;
  height: 30%;
  overflow: scroll;
  padding: 0.8em;
}

.map-layers-controls {
  background-color: rgba(53, 53, 36, 0.8);
  border: 1px solid #b3aa98;
  font-size: .75em;
  padding: 1em;
  position: absolute;
  right: 2%;
  top: 2%;
  width: 10%;
  z-index: 17;
}

/*just a hack*/
input {
  float:left;
}

/* Needed to keep the pointer over markers -- otherwise reverts to grab on change*/
.leaflet-overlay-pane path,
.leaflet-marker-icon {
  cursor: pointer;
}

</style>
