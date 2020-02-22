<template>
    <section class="journal-info-panel">
        <p>Content Panel</p>
        <h2>Title: {{ entry.title }}</h2>
        <p>{{ entry.entry_date }}</p>
        <span v-html="entry.interpret_blurb"></span>
        <button @click="incEntry('prev')">Decrement Entry</button>
        <button @click="incEntry('next')">Increment Entry</button>

        <div class="journal-image">
            <img src="@/assets/logo.png">

        </div>

        <div class="journal-text">
            <span v-html="entry.entry_text"></span>
        </div><!-- /journal-text -->

    </section>
</template>

<script>
export default {
  // props: ['entry']
  props: {
    entry: {
      type: Object
    },
    incEntry: Function
  }
}
// Could have method here that operat on prop as
// and on any data item Udemy section 8- 110

</script>

<style>

</style>
