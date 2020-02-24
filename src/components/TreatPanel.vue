<template>
    <section class="journal-info-panel">
        <p>Content Panel</p>
        <h2>Title: {{ entry.title }}</h2>
        <p>{{ entry.entry_date }}</p>
        <span v-html="entry.interpret_blurb"></span>
        <p>
          <span @click="incEntry('prev')">previous</span> |
          <span v-if="nextExists" @click="incEntry('next')" >next</span>
        </p>

        <div class="journal-image">
            <!-- <img src="@/assets/logo.png"> -->
            <img :src="'images/small/' + entry.slug + '.jpg'">

        </div>

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
        return true; 
      }
    }
  },
  props: {
    entry: {
      type: Object
    },
    incEntry: Function
  },
  computed: {

  }
}
// Could have method here that operat on prop as
// and on any data item Udemy section 8- 110

</script>

<style>

</style>
