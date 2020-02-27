<template>
  <section class="journal-info-panel">
      <template v-if="entry.slug === 'intro'">
        <header>
          <h3>Introduction</h3>
          <h2>Explore Joseph Treat&rsquo;s Map and Journal</h2>
        </header>
        <div class="journal-text">
          <span v-html="entry.interpret_blurb"></span>
          <a href = "#" v-on:click = "incEntry('next')">BEGIN EXPLORING</a>
        </div><!-- /journal-text -->
      </template>
      <template v-else>
         <p class="nav">
          <a @click="incEntry('prev')">previous</a> |
          <a v-if="nextExists" @click="incEntry('next')" >next</a>
        </p>

         <header>
            <h3>
              <a href="#"
              v-on:click="reSetEntry(0)">INTRO - Explore Joseph Treat&rsquo;s Journey</a>
            </h3>
            <h2>{{ entry.title }}</h2>
            <p>{{ entry.entry_date }}</p>
          </header>

        <div class="journal-text">
          <span v-html="entry.interpret_blurb"></span>
        </div>

        <div class="journal-image">
          <h3><a @click="showLightBox">View Treat&rsquo;s Journal Entry for this Site</a></h3>
          <img :src="'images/small/' + entry.slug + '.jpg'">
        </div>

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

  .nav {
    float: right;
  }

  .journal-info-panel {
    padding: 1.6em;
    grid-row: 1;
    grid-column: 1;
    background-color: rgba(53, 53, 36, 0.6);
    position: relative;
    z-index: 15;

    h3 {
      font-size: 1em;
      font-variant: small-caps;
      letter-spacing: .05em;
    }
  }

  .journal-image img {
    max-width: 45%;
    padding: 2px;
    border: 1px solid #b3aa98;
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
    height: 30%;
    overflow: scroll;
    padding: 0.8em;
    margin-bottom: 1em;
  }

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
