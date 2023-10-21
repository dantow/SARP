export default function haversineDistance (markerCoordinate, mouseCoordinate) {
  const markerLatitude = markerCoordinate.lat
  const markerLongitude = markerCoordinate.lng
  const mouseLatitude = mouseCoordinate.lat
  const mouseLongitude = mouseCoordinate.lng
  const earthRadius = 6371000

  // Convert latitude and longitude from degrees to radians
  const markerLatitudeRad = (markerLatitude * Math.PI) / 180
  const markerLongitudeRad = (markerLongitude * Math.PI) / 180
  const mouseLatitudeRad = (mouseLatitude * Math.PI) / 180
  const mouseLongitudeRad = (mouseLongitude * Math.PI) / 180

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
