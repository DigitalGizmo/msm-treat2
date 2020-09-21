# Treat Map Maintenance

## Where things are, how to get started

For startup commands see PyDjango docs Vuejs4.md

```
cd /Users/don/Sites/gizmo_dev/msm-treat2
npm run serve
```

##  .env configurations

### Base

.env

- default local tiles
- default live data path
- (child .env needs to supply base data url)

```
VUE_APP_GREENLEAF_URL=tiles/treat/{z}/{x}/{y}.png
VUE_APP_TERRAIN_URL=tiles/osm-world/{z}/{x}/{y}.png
VUE_APP_DATA_PATH=/journal/entries/?format=json
VUE_APP_LOGO_URL=#
```

### Base Production

.env.production

- local data path (overrides .env)
- (child .local will need to supply base_data_url)

```
VUE_APP_DATA_PATH=/data/entries.json
```

### Mainestatemuseum.org - live data

.env.production.local

- live base data url 
- live data path (overrides .env.production)
- logo url to launch page (overrides .env)

```
VUE_APP_BASE_DATA_URL=https://msm-treat-admin.digitalgizmo.com
VUE_APP_DATA_PATH=/journal/entries/?format=json
VUE_APP_LOGO_URL=https://mainestatemuseum.org/learn/traveling-through-maine-200-years-ago/
```

### Mainestatemuseum.org - static data, final

.env.production.local

- static base data url 
- (local data path supplied by .env.production)
- logo url to launch page (overrides .env)

```
VUE_APP_BASE_DATA_URL=https://mainestatemuseum.org/treat-journal/data/entries.json
VUE_APP_LOGO_URL=https://mainestatemuseum.org/learn/traveling-through-maine-200-years-ago/
```

### Museum Display

.env.production.local

- base data url (overrides .env)
- (local data path supplied by .env.production)

```
VUE_APP_BASE_DATA_URL=http://treat-map.mainestatemuseum.org
```

### Staging

.env.staging - for msm-treat.digitalgizmo.com

- base data url 
- (live path supplied by .env)

```
VUE_APP_BASE_DATA_URL=https://msm-treat-admin.digitalgizmo.com
```

### Development

.env.development

Not needed? Since local is via run serve?

- base data url 
- (live path supplied by .env)

```
VUE_APP_BASE_DATA_URL=https://msm-treat-admin.digitalgizmo.com
```

