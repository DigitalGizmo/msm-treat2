<template>
  <section class="journal-info-panel">
      <template v-if="entry.slug === 'intro'">
        <header>
          <h3>Introduction</h3>
          <h2>Explore Joseph Treat's Map and Journal</h2>
        </header>
        <div class="journal-text">
          <span v-html="entry.interpret_blurb"></span>
          <a href = "#" v-on:click = "incEntry('next')">BEGIN EXPLORING</a>
        </div><!-- /journal-text -->
      </template>
      <template v-else>
        <h3><a href="#"
          v-on:click="reSetEntry(0)">INTRO - Explore Joseph Treat's Journey</a>
        </h3>
        <p>
          <a @click="incEntry('prev')">previous</a> |
          <a v-if="nextExists" @click="incEntry('next')" >next</a>
        </p>
        <h2>Title: {{ entry.title }}</h2>

        <p>{{ entry.entry_date }}</p>

        <div class="journal-text">
          <span v-html="entry.interpret_blurb"></span>
        </div>

        <div class="journal-image">
            <!-- <img src="@/assets/logo.png"> -->
            <img :src="'images/small/' + entry.slug + '.jpg'">
        </div>
        <a @click="showLightBox">Show Full Entry</a>
      </template>
    </section>
</template>

<script>
export default {
  data () {
    return {
      nextExists () {
        return true
      }
    }
  },
  props: {
    entry: {
      type: Object
    },
    incEntry: Function,
    reSetEntry: Function,
    showLightBox: Function
  },
  computed: {

  }
}
// Could have method here that operat on prop as
// and on any data item Udemy section 8- 110

</script>

<style lang="scss">
h2 {
  font-size: 1.5em;
  margin: 0.83em 0;
}
header h2 {
  font-style: italic;
  font-size: 2em;
  margin: 0;
}

</style>
