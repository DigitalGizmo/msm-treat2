<template>
    <section class="journal-info-panel">
      <template v-if="entry.slug === 'intro'">

        <header>
          <h3>Introduction</h3>
          <h1>Explore Joseph Treat&rsquo;s Map and Journal</h1>
        </header>

        <div class="journal-text">
          <span v-html="entry.interpret_blurb"></span>
          <a href = "#" v-on:click = "incEntry('next')">Begin Exploring</a>
        </div><!-- /journal-text -->

      </template>

      <template v-else>
         <p class="nav">
          <a @click="incEntry('prev')">&#8604; Previous</a> &bull; Site X &bull; <a v-if="nextExists" @click="incEntry('next')" >Next &#8605;</a>
        </p>

         <header>
            <h3>
              <a href="#"
              v-on:click="reSetEntry(0)">Intro &bull; <span class="subtitle">Explore Joseph Treat&rsquo;s Journey</span></a>
            </h3>
            <h1>{{ entry.title }}</h1>
            <p>{{ entry.entry_date }}</p>
          </header>

        <div class="journal-text">
          <span v-html="entry.interpret_blurb"></span>
        </div>

        <div class="journal-image">
          <h3><a @click="showLightBox">View Treat&rsquo;s Journal Entry for This Site</a></h3>
          <a @click="showLightBox"><img :src="'images/small/' + entry.slug + '.jpg'"></a>
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
    font-size: 1em;
    font-variant: small-caps;
    letter-spacing: .05em;
    margin-top: -4px;
  }

  .journal-info-panel {
    background-color: rgba(53, 53, 36, 0.75);
    border: 1px solid #b3aa98;
    grid-row: 1;
    grid-column: 1;
    padding: 1.6em 3em;
    position: relative;
    z-index: 15;

    h3 {
      font-size: 1em;
      font-variant: small-caps;
      letter-spacing: .05em;

      .subtitle {
        font-variant: normal;
        font-style: italic;
        letter-spacing: normal;
      }
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
    font-size: 1.15em;
    height: 35%;
    overflow: scroll;
    padding: 0.8em;
    margin: 1em 0;
  }

  header h1 {
    font-style: italic;
    font-size: 2em;
    margin: 0;
  }

</style>
