<template>
    <section class="journal-info-panel">
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
        <a @click="showFullEntry">Show Full Entry</a>

        <div class="journal-text">
            <span v-html="entry.entry_text"></span>
        </div><!-- /journal-text -->

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
    showFullEntry: Function
  },
  computed: {

  }
}
// Could have method here that operat on prop as
// and on any data item Udemy section 8- 110

</script>

<style>
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
