import './MapBox.css'
import config from '../../../config.js'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import { useEffect } from 'react'
import { initializeMap } from './helpers/mapInitializer'
import { drawRoute } from './helpers/routeDrawer'
import haversineDistance from '../../utils/haversine'

const token = config.mapboxToken
mapboxgl.accessToken = token

function MapBox () {
  let placeMarker = false
  let routeType = 'walking'
  let markers = []
  let markersToRemove = []
  let map
  let routeDetails

  function changeRouteType (type) {
    routeType = type
  }

  function changeMarkerPlacerState () {
    placeMarker = !placeMarker
  }

  function removeMarkers (list) {
    list.forEach(element => {
      element.remove()
    })
    markers = markers.filter(item => !list.includes(item))
  }

  function handleMarkerPlacement (coordinates) {
    if (placeMarker) {
      const maximumNumberOfMarkers = 25
      if (markers.length <= maximumNumberOfMarkers) {
        markers.push(new mapboxgl.Marker()
          .setDraggable(true)
          .setLngLat([coordinates.lng, coordinates.lat])
          .addTo(map)
        )
      }
    } else {
      markersToRemove = markers.filter(marker =>
        haversineDistance(marker.getLngLat().lat, marker.getLngLat().lng, coordinates.lat, coordinates.lng) < 30)

      removeMarkers(markersToRemove)
    }
  }

  async function retrieveDirection () {
    try {
      const coordinates = markers.map(
        (marker) => marker.getLngLat().lng + ',' + marker.getLngLat().lat)
        .join(';', ',')

      const response = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/${routeType}/${coordinates}
        ?annotations=distance,duration&overview=full&geometries=geojson&access_token=${token}`)

      routeDetails = await response.json()
      drawRoute(await routeDetails.routes[0], map)
    } catch (error) {
      console.error(error)
    }
  }

  function loadMap () {
    map = initializeMap(handleMarkerPlacement)
  }

  useEffect(() => {
    loadMap()
  }, [])

  return (
    <div className='box'>
      <header>
        <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no"/>
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css' rel='stylesheet' />
      </header>
      <div>
        <div className='settings'>
          <div>
            <label>Place marker</label>
            <input type='checkbox' onClick={() => changeMarkerPlacerState()}/>
          </div>
          <div className='planner'>Route by:</div>
          <div className='routes'>
            <label>Traffic</label>
            <input type='checkbox' onClick={ () => changeRouteType('driving-traffic')}/>
            <label>Driving</label>
            <input type='checkbox' onClick={() => changeRouteType('driving')}/>
            <label>Walking</label>
            <input type='checkbox' onClick={() => changeRouteType('walking')}/>
            <label>Cycling</label>
            <input type='checkbox' onClick={() => changeRouteType('cycling')}/>
          </div>
          <button id='plan-route-button' onClick={() => retrieveDirection()}>Plan route </button>
        </div>
        <div id="map"></div>
        <div id="instructions" ></div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default MapBox
