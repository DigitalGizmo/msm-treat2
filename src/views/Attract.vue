<template>
  <div class="attract-wrapper">
    <div class="map">
      <img ref="map" :src="'images/big-bg.jpg'" alt="map">
    </div>
    <section ref="panel" class="attract-panel">
      <div class="border">
        <article class="attract-text">
            <h1>
              Traveling through Maine<br>
              200 Years Ago with<br>
              Joseph Treat and John Neptune
            </h1>
            <p>
              Paddling two birch bark canoes full of supplies for what would surely be a difficult journey, Joseph Treat, John Neptune, and Jacob Holyoke headed north up the Penobscot River on September 27, 1820.
            </p>
            <p>
              <router-link to="/">
                Tap anywhere to join this expedition and explore northern Maine in 1820
              </router-link>
            </p>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import { TimelineLite, Power1 } from 'gsap'

export default {
  data () {
    return {
      testparam: 'voila'
    }
  },
  name: 'Attract',
  mounted () {
    const { map } = this.$refs
    const { panel } = this.$refs
    const mapTimeline = new TimelineLite ()
    const panelTimeline = new TimelineLite ()

    mapTimeline.set(map, { x: 0 })
    // mapTimeline.yoyo(true)
    // gsap.timeline({repeat: 1, yoyo: true});
    mapTimeline.from(map, 20, {
      y: -1300,
      repeat: -1, 
      yoyo: true,
      ease: Power1.easeInOut
    })
    panelTimeline.set(panel, { x: 200 })
    panelTimeline.to(panel, 20, {
      x: 400,
    })
  }
}
</script>

<style lang="scss">

  .map {
    width: 100%;
    position: absolute;
  }

  .attract-wrapper {
    background: #DFDFD0;
  }

  .attract-panel {
    background-color: rgba(53, 53, 36, 0.8);
    height: 100vh;
    margin: 0 auto;
    padding: 0 3px;
    width: 50%;
    /*don wuz here*/
    position: absolute;
  }

  .border {
    border-left: 1px solid #b3aa98;
    border-right: 1px solid #b3aa98;
    height: 100vh;
    padding: 4em;
  }

  .attract-text {
    text-align: center;

    h1 {
      font-size: 3em;
      font-style: italic;
    }

    p{
      font-size: 1.5em;
      line-height: 1.5em;
      margin-top: 2em;
    }
  }

</style>
