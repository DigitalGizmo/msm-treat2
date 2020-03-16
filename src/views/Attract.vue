<template>
  <div class="attract-wrapper" @click="leaveAttract">
    <div class="map" @click="leaveAttract">
      <img ref="map" :src="'images/big-bg.jpg'" alt="map">
    </div>
    <section ref="panel" class="attract-panel" @click="leaveAttract">
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
// Need to import from 'gsap/dist/gsap' rather than from 'gsap'
import { TimelineMax, Power1 } from 'gsap/dist/gsap'

export default {
  data () {
    return {
      startX: 600
    }
  },
  name: 'Attract',
  computed: {
    deltaX () {
      return this.startX + Math.floor(Math.random() * 400)
    }
  },
  methods: {
    leaveAttract () {
      console.log('-- got to leaveAttract')
      this.$router.push('/')
    }
  },
  mounted () {
    const { map } = this.$refs
    const { panel } = this.$refs
    const mapTimeline = new TimelineMax()
    // const masterPanelTimeline = new TimelineMax ({ repeat: 5 })
    const panelTimeline = new TimelineMax()
    // const startX = 200

    // Map scrolling up and down
    mapTimeline.set(map, {
      y: 0,
      x: 0
    })
    mapTimeline.to(map, 120, {
      yPercent: -40,
      repeat: -1,
      yoyo: true,
      ease: 'none'
      // ease: Power1.easeInOut
    })

    // Panel fading in and out with moves between
    panelTimeline.set(panel, {
      x: this.startX,
      y: 150,
      opacity: 0
    })

    // var tl = new TimelineMax({ repeat: 3 })
    //   tl.fromTo(panel, 3, { autoAlpha: 0 }, { autoAlpha: 1 })
    //     .to(panel, 1, { x: '+=100' })

    // myTimeline.fromTo(element, 1, {left:0, opacity:1}, {left:100, opacity:0.5});

    // panelTimeline.fromTo(panel, 3, { autoAlpha: 0 }, { autoAlpha: 1 })
    //   .set(panel, { x: '+=100' })

    // function panelOnOff () {
    //   var tl = new TimelineMax(0)
    //   tl.fromTo(panel, 2, { autoAlpha: 0 }, { autoAlpha: 1 })
    //   return tl;
    // }
    // function panelMove () {
    //   var tl = new TimelineMax(0)
    //   tl.set(panel, { x: '+=100' })
    //   return tl;
    // }

    // masterPanelTimeline.add(panelOnOff())
    //   .add(panelMove())

    var tl = new TimelineMax({ repeat: -1 })
    tl.to(panel, 10, { autoAlpha: 1, ease: Power1.easeOut })
    tl.to(panel, 10, { autoAlpha: 0, ease: Power1.easeIn })
    tl.set(panel, { x: 620, y: 170 })
    tl.to(panel, 10, { autoAlpha: 1, ease: Power1.easeOut })
    tl.to(panel, 10, { autoAlpha: 0, ease: Power1.easeIn })
    tl.set(panel, { x: 590, y: 200 })
    tl.to(panel, 10, { autoAlpha: 1, ease: Power1.easeOut })
    tl.to(panel, 10, { autoAlpha: 0, ease: Power1.easeIn })
    tl.set(panel, { x: 630, y: 180 })

    // var tl = new TimelineMax({ repeat: 3, repeatDelay: 1 });
    // tl.to(panel, 2, { autoAlpha: 1 });
    // tl.to(panel, 2, { autoAlpha: 0 },2);
    // tl.to(panel, 2, panel, { x: startX + Math.floor(Math.random() * 400) }, 4);

    // masterPanelTimeline.add(panelTimeline.fromTo(panel, 2, { autoAlpha: 0 }, { autoAlpha: 1 }),
    // masterPanelTimeline.add(panelTimeline.set(panel, { x: startX + Math.floor(Math.random() * 200) }, 2));

    // panelTimeline.fromTo(panel, 2, { autoAlpha: 0 }, { autoAlpha: 1 })

    // panelTimeline.set(panel, { x: startX + Math.floor(Math.random() * 200) })

    // panelTimeline.fromTo(panel, 2, { autoAlpha: 0 }, { autoAlpha: 1 })

    // panelTimeline.set(panel, { x: startX + Math.floor(Math.random() * 200) })

    // panelTimeline.fromTo(panel, 2, { autoAlpha: 0 }, { autoAlpha: 1 })

    // panelTimeline.set(panel, { x: startX + Math.floor(Math.random() * 200) })

    // panelTimeline.fromTo(panel, 2, { autoAlpha: 0 }, { autoAlpha: 1 })
    //   .set(panel, { x: '+=100' })

    // masterPanelTimeline.to(panel, 3, { autoAlpha: 0, yoyo: true })
    //   .set(panel, { x: '+=100' })
    // panelTimeline.to(panel, 5, { autoAlpha: 1 })
  }
}
</script>

<style lang="scss">

  .map {
    position: absolute;
  }

  .attract-wrapper {
    background: #eff0de;
    overflow-y: hidden;
  }

  .attract-panel {
    background-color: rgba(53, 53, 36, 0.8);
    padding: 3px;
    width: 675px;
    position: absolute;
  }

  .border {
    border: 1px solid #b3aa98;
    padding: 3em;
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
