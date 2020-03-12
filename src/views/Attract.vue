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
import { TimelineMax, Power1 } from 'gsap'

export default {
  data () {
    return {
      testparam: 'voila',
      xEllipse: 50,
      yEllipse: 800
    }
  },
  name: 'Attract',
  mounted () {
    const { map } = this.$refs
    const { panel } = this.$refs
    const mapTimeline = new TimelineMax ()
    const panelTimeline = new TimelineMax ()

    // try to make this act like the circle
    // to see if progress 0.5 is working
    mapTimeline.set(map, {
      // xPercent: 10, // 10
      yPercent: 60 // 60
      // x: -this.xEllipse,
      // y: -this.yEllipse

    })
    mapTimeline.from(map, 120, {
      yPercent: -60,
      // y: this.yEllipse,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut
    })
    // mapTimeline.to(map, 70, {
    //   xPercent: -30,
    //   // x: this.xEllipse,
    //   repeat: -1,
    //   yoyo: true,
    //   ease: Power1.easeInOut
    // }).progress(0.5)
    panelTimeline.set(panel, {
      x: 300,
      y: 200,
      autoAlpha: 0
    })
    // panelTimeline.set(panel, { x: '-100%' })
    // panelTimeline.to(panel, 20, {
    //   x: 400
    // })
    panelTimeline.to(panel, 5, { autoAlpha: 1, repeat: 1, yoyo: true })
      .set(panel, { x: 400 })
      panelTimeline.to(panel, 5, { autoAlpha: 1 })

    // master timeline? move, then repeat?
  }
}
</script>

<style lang="scss">

  .map {
    width: 200%;
    position: absolute;
  }

  .attract-wrapper {
    background: #DFDFD0;
    /*added by Don*/
    /*height: 500;*/
  }

  .attract-panel {
    background-color: rgba(53, 53, 36, 0.8);
    padding: 3px;
    width: 50%;
    /*don wuz here*/
    position: absolute;
  }

  .border {
    border: 1px solid #b3aa98;
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
