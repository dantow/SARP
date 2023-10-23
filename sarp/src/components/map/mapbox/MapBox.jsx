import './MapBox.css'
import mapboxgl from 'mapbox-gl'
import config from '../../../config.js'
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import { useEffect } from 'react'
import { initializeMap } from './helpers/mapInitializer'
import { drawRoute, getFastestRouteDetails } from './helpers/routeProvider'
import haversineDistance from '../../utils/haversine'
import InformationPopUp from '../../elements/InformationPopUp'

const maximumNumberOfMarkers = 25
const minimumDistanceInMeter = 30
const defaultColor = '#3887be'
const token = config.mapboxToken
mapboxgl.accessToken = token

function MapBox () {
  let map
  let markers = []
  let markersToRemove = []
  let placeMarker = false
  let routeType = 'walking'
  let fastestRouteDetails
  let color = defaultColor
  function changeRouteType (type) {
    routeType = type
  }

  function changeMarkerPlacerState () {
    placeMarker = !placeMarker
  }

  function changeRouteColour (e) {
    color = e.target.value
  }

  function removeMarkers (list) {
    list.forEach(element => {
      element.remove()
    })
    markers = markers.filter(item => !list.includes(item))
  }

  function handleMarkerPlacement (coordinates) {
    if (placeMarker) {
      if (markers.length <= maximumNumberOfMarkers) {
        markers.push(new mapboxgl.Marker()
          .setDraggable(true)
          .setLngLat([coordinates.lng, coordinates.lat])
          .addTo(map)
        )
      }
    } else {
      markersToRemove = markers.filter(marker =>
        haversineDistance(marker.getLngLat(), coordinates) < minimumDistanceInMeter)

      removeMarkers(markersToRemove)
    }
  }

  async function drawFastestRoute () {
    try {
      const coordinates = markers.map(
        (marker) => marker.getLngLat().lng + ',' + marker.getLngLat().lat)
        .join(';', ',')

      fastestRouteDetails = await getFastestRouteDetails(routeType, coordinates, token)

      drawRoute(fastestRouteDetails, map, color)
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
        <InformationPopUp
          information='When the Place marker checkbox is unticked you can remove placed markers'
        />
        <label>Place marker</label>
        <input type='checkbox' onClick={() => changeMarkerPlacerState()}/>
        <div className='settings'><strong>Route by:</strong>
          <div className='routes'>
            <label>Traffic</label>
            <input type='checkbox' onClick={ () => changeRouteType('driving-traffic')}/>
            <label>Driving</label>
            <input type='checkbox' onClick={() => changeRouteType('driving')}/>
            <label>Walking</label>
            <input type='checkbox' onClick={() => changeRouteType('walking')}/>
            <label>Cycling</label>
            <input type='checkbox' onClick={() => changeRouteType('cycling')}/>
            <label>Set route colour</label>
            <input className='colour-picker' type='color' defaultValue={color}
              onChange={(e) => changeRouteColour(e)}/>
          </div>
          <button id='plan-route-button' onClick={() => drawFastestRoute()}>Plan route </button>
        </div>
        <div id="map"></div>
        <div id="instructions" />
        <div>
        </div>
      </div>
    </div>
  )
}

export default MapBox
