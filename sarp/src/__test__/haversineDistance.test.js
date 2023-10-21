/* eslint-disable no-undef */
import haversineDistance from '../components/utils/haversine'

test('Calculated haversine distance is in 20 meter from base coordinate', () => {
  const baseLatitude = 47.102809
  const baseLongitude = 17.909302
  const twentyMeterFromBaseLatitude = 47.102934
  const twentyMeterFromBaseLongitude = 17.909492
  const baseCoordinates = { lat: baseLatitude, lng: baseLongitude }
  const twentyMeterFromBaseCoordinates = { lat: twentyMeterFromBaseLatitude, lng: twentyMeterFromBaseLongitude }

  const result = haversineDistance(baseCoordinates, twentyMeterFromBaseCoordinates)

  const expectedDistanceInMeters = 20

  expect(result).toBe(expectedDistanceInMeters)
})
