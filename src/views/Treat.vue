<template>
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
      ></treat-panel>
    </div>
</template>

<script>
import TreatPanel from '../components/TreatPanel.vue'
import TreatMap from '../components/TreatMap.vue'
import { eventBus } from '../main'

export default {
  data: function () {
    return {
      currIndex: 0,
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
    treatMap: TreatMap
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
    }
  }
}
</script>

<style>

</style>
