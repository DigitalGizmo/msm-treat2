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

// // Leaflet marker fix
// // eslint-disable-next-line
// delete L.Icon.Default.prototype._getIconUrl
// // eslint-disable-next-line
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// })

// // From http://blog.charliecroom.com/index.php/web/numbered-markers-in-leaflet
// L.NumberedDivIcon = L.Icon.extend({
//   options: {
//     // iconUrl: '<%= image_path("images/markers/treat-marker-icon-2x.png") %>',
//     iconUrl: 'images/markers/treat-marker-icon-2x.png',
//     number: '',
//     shadowUrl: null,
//     iconSize: new L.Point(25, 4),
//     iconAnchor: new L.Point(13, 41),
//     popupAnchor: new L.Point(0, -33),
    
//     iconAnchor: (Point)
//     popupAnchor: (Point)
    
//     className: 'leaflet-div-icon'
//   },

//   createIcon: function () {
//     var div = document.createElement('div')
//     var img = this._createImg(this.options.iconUrl)
//     var numdiv = document.createElement('div')
//     numdiv.setAttribute('class', 'number')
//     numdiv.innerHTML = this.options.number || ''
//     div.appendChild(img)
//     div.appendChild(numdiv)
//     this._setIconStyles(div, 'icon')
//     return div
//   }
// })

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
