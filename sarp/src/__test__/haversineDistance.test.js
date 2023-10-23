/* eslint-disable no-undef */
import haversineDistance from '../components/utils/haversine'

test('Calculated haversine distance is in 20 meter from base coordinate', () => {
  const baseCoordinates = { lat: 47.102809, lng: 17.909302 }
  const twentyMeterFromBaseCoordinates = { lat: 47.102934, lng: 17.909492 }

  const result = haversineDistance(baseCoordinates, twentyMeterFromBaseCoordinates)

  const expectedDistanceInMeters = 20

  expect(result).toBe(expectedDistanceInMeters)
})
