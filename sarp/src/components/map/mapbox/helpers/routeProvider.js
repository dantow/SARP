const indexOfFastestRoute = 0
const oneMinuteInSeconds = 60
const lineWidthInPixels = 5
const lineWidthOpacity = 0.75

export async function getFastestRouteDetails (routeType, coordinates, token) {
  const response = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/${routeType}/${coordinates}
    ?annotations=distance,duration&overview=full&geometries=geojson&access_token=${token}`)

  const routeDetails = await response.json()
  const fastestRouteDetails = routeDetails.routes[indexOfFastestRoute]
  return fastestRouteDetails
}

function createInstructionsForSteps (legs) {
  let instructionOfSteps = ''
  for (const step of legs) {
    const destination = step.summary.split(',').join(' => ', ',')
    const stepDistance = Math.round(step.distance)
    const stepDuration = Math.floor(step.duration / oneMinuteInSeconds)

    instructionOfSteps += `<li id='instruction-item'> ${destination}
                                <div>${stepDistance} meter </div>
                                <div>${stepDuration} min </div>
                             </li>`
  }
  return instructionOfSteps
}

function setInsturctions (data) {
  const instructions = document.getElementById('instructions')
  const tripDistance = Math.round(data.distance)
  const tripDuration = Math.floor(data.duration / oneMinuteInSeconds)
  const tripInstructions = createInstructionsForSteps(data.legs)

  instructions.innerHTML = `<div id='instruction-box'>
                              <p>
                                <strong>Route details</strong>
                                <br/>
                                <strong>Trip distance: ${tripDistance} meter
                              </p>
                              <p>
                                <strong>Trip duration: ${tripDuration} min </strong>
                              </p>
                              <ol>${tripInstructions}</ol>
                            </div>`
}

export const drawRoute = (data, map, color) => {
  setInsturctions(data)

  const route = data.geometry.coordinates
  const geojson = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: route
    }
  }

  if (map.getSource('route')) {
    map.setPaintProperty('route', 'line-color', color)
    map.getSource('route').setData(geojson)
  } else {
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: geojson
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': color,
        'line-width': lineWidthInPixels,
        'line-opacity': lineWidthOpacity
      }
    })
  }
}
