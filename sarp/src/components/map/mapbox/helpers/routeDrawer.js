const oneMinuteInSeconds = 60

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
  const legs = data.legs
  const tripInstructions = createInstructionsForSteps(legs)

  instructions.innerHTML = `<p>
                              <strong>Trip distance: ${tripDistance} meter
                            </p>
                            <p>
                              <strong>Trip duration: ${tripDuration} min </strong>
                            </p>
                            <ol>${tripInstructions}</ol>`
}

export const drawRoute = (data, map) => {
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
        'line-color': '#3887be',
        'line-width': 5,
        'line-opacity': 0.75
      }
    })
  }
}
