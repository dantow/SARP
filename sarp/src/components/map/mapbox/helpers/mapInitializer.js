import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from 'mapbox-gl-geocoder'

export const initializeMap = (addMarker) => {
  const veszpremCoordinates = { longitude: 17.909302, latitude: 47.102809 }
  const containerId = 'map'
  const zoomLevel = 12
  const geocoder = createGeocoder(addMarker)

  return new mapboxgl.Map({
    container: containerId,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [veszpremCoordinates.longitude, veszpremCoordinates.latitude],
    zoom: zoomLevel
  }).on('click', (event) => {
    const mouseCoordinate = event.lngLat.wrap()
    addMarker(mouseCoordinate)
  }).addControl(new mapboxgl.NavigationControl(), 'bottom-right')
    .addControl(geocoder)
}

const createGeocoder = (addMarker) => {
  return new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  }).on('result', (event) => {
    const resultLongitude = event.result.center[0]
    const resultLatitude = event.result.center[1]
    const geocoderResultCoordinates = { lng: resultLongitude, lat: resultLatitude }

    addMarker(geocoderResultCoordinates)
  })
}
