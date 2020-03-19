import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'
// For Leaflet map:
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

Vue.use(VueResource)

Vue.config.productionTip = false

Vue.component('l-map', LMap)
Vue.component('l-tile-layer', LTileLayer)
Vue.component('l-marker', LMarker)

// Enable center offset
L.Map.prototype.setViewOffset = function (latlng, offset, targetZoom) {
  var targetPoint = this.project(latlng, targetZoom).subtract(offset)
  var targetLatLng = this.unproject(targetPoint, targetZoom)
  return this.setView(targetLatLng, targetZoom)
}

export const eventBus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
