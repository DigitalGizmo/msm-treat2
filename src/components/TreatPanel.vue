<template>
    <section class="journal-info-panel">
      <img src="images/msm-logo.gif" class="logo">
      <template v-if="entry.slug === 'intro'">

        <header class="intro">
          <h3>Introduction</h3>
          <h1>{{ entry.title }}</h1>
        </header>

        <div class="intro-text">
          <span v-html="entry.interpret_blurb"></span>
        </div><!-- /journal-text -->

        <h3><a href = "#" v-on:click = "incEntry('next')">Begin Exploring</a></h3>

        <div class="intro-image">
          <img :src="'images/small/' + entry.slug + '.jpg'">
          <h3><a @click="showCredits">Credits</a></h3>
        </div>

      </template>

      <template v-else>
         <p class="nav">
          <a v-if="prevExists"  @click="incEntry('prev')">&#8604; Previous</a>
          <span v-else style="color:#bbb;">&#8604; Previous</span> &bull;
          Site {{ currIndex }} &bull;
          <a v-if="nextExists" @click="incEntry('next')" >Next &#8605;</a>
          <span v-else style="color:#bbb;">Next &#8605;</span>
        </p>

         <header>
            <h3>
              <a href="#"
              v-on:click="reSetEntry(0)">Intro &bull; <span class="subtitle">Traveling Through Maine 200 Years Ago</span></a>
            </h3>
            <h1>{{ entry.title }}</h1>
            <p>{{ entry.entry_date }}</p>
          </header>

        <div class="journal-text">
          <span v-html="entry.interpret_blurb"></span>
        </div>

        <div class="journal-image">
          <h3><a @click="showFullEntry">View Treat&rsquo;s Journal Entry for This Site</a></h3>
          <a @click="showFullEntry"><img :src="'images/small/' + entry.slug + '.jpg'"></a>
        </div>

      </template>
    </section>
</template>

<script>
export default {
  props: {
    entry: {
      type: Object
    },
    incEntry: Function,
    reSetEntry: Function,
    showFullEntry: Function,
    showCredits: Function,
    nextExists: Boolean,
    prevExists: Boolean,
    currIndex: Number
  },
  methods: {
    // @click="countTouches($event)"
    // countTouches (e) {
    //   // var x = event.targetTouches.length;
    //   console.log(' num target touches: ' + e.targetTouches.length)
    //   console.log(' num target name: ' + e.target.getAttribute('class'))
    // }
  }
}
// Could have method here that operat on prop as
// and on any data item Udemy section 8- 110

</script>

<style lang="scss">

  header {
    clear: left;
  }

  .nav {
    color: #FFBF00;
    float: right;
    font-size: 1em;
    font-variant: small-caps;
    letter-spacing: .05em;
    margin-top: -4px;
  }

  .journal-info-panel h3 {
    font-size: 1.25em;
    font-variant: small-caps;
    letter-spacing: .05em;
    margin-bottom: 0;
  }

  .journal-info-panel h3.subtitle {
    font-variant: normal;
    font-style: italic;
    letter-spacing: normal;
  }

  .intro-image img {
    border: 1px solid #b3aa98;
    max-width: 75%;
    padding: 2px;
  }

  .journal-image {
    height: 35%;

    img {
      border: 1px solid #b3aa98;
      padding: 2px;
      max-height: 100%;
    }
  }

  .journal-text {
    background-color: rgba(53, 53, 36, 0.8);
    border: 1px solid #b3aa98;
    font-size: 1.25em;
    height: 35%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0.8em;
    margin: 1em 0;
  }

  .intro-text {
    font-size: 1.25em;
  }

  header h1 {
    font-style: italic;
    font-size: 2.75em;
    margin: 0;
  }

  header p {
    font-size: 1.25em;
  }

  .journal-info-panel {
    background-color: rgba(53, 53, 36, 0.75);
    border: 1px solid #b3aa98;
    grid-row: 1;
    grid-column: 1;
    position: relative;
    z-index: 15;
    /*for super wide displays, greater than 1800px*/
    padding: 2em 4em;
  }

  /*for medium displays, less than or equal to 1800px and greater than 1200px*/
  @media screen and (max-width: 1800px) {
    .journal-info-panel {
      /*background-color: maroon;*/
      padding: 1.6em 3em;
    }
  }

  /*for small displays, less than or equal to 1200px and greater than 800px*/
  @media screen and (max-width: 1200px) {
    .journal-info-panel {
      /*background-color: green;*/
      font-size: 0.85em;
      padding: 1em;
    }
  }

  /*for tiny displays, less than or equal to 800px*/
  @media screen and (max-width: 800px) {
    .journal-info-panel {
      /*background-color: navy;*/
      font-size: 0.7em;
      padding: 1em;
    }
  }

</style>
