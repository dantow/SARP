const earthRadius = 6371000
const degreesToRadiansConversionFactor = 180

function convertDegreeToRadian (degree) {
  // Convert degrees to radians by multiplying with π and dividing by 180
  return (degree * Math.PI) / degreesToRadiansConversionFactor
}

export default function haversineDistance (markerCoordinate, mouseCoordinate) {
  const markerLatitudeRad = convertDegreeToRadian(markerCoordinate.lat)
  const markerLongitudeRad = convertDegreeToRadian(markerCoordinate.lng)
  const mouseLatitudeRad = convertDegreeToRadian(mouseCoordinate.lat)
  const mouseLongitudeRad = convertDegreeToRadian(mouseCoordinate.lng)

  // Haversine formula
  const differenceInLatitude = mouseLatitudeRad - markerLatitudeRad
  const differenceInLongitude = mouseLongitudeRad - markerLongitudeRad

  const chordLengthSquared =
    Math.sin(differenceInLatitude / 2) ** 2 +
    Math.cos(markerLatitudeRad) * Math.cos(mouseLatitudeRad) *
    Math.sin(differenceInLongitude / 2) ** 2

  const angularDistance =
    2 * Math.atan2(Math.sqrt(chordLengthSquared), Math.sqrt(1 - chordLengthSquared))

  const distance = earthRadius * angularDistance

  return Math.round(distance)
}
