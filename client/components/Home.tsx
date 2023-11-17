import weatherapi from '../apis/weatherapi.ts'
import { getAllLocations } from '../../server/db/db.ts'
import { useEffect, useState } from 'react'

export default function Home() {
  const [defaultLocation, setDefaultLocation] = useState({
    city: 'Auckland',
    country: 'New Zealand',
    latitude: -36.86,
    longitude: 174.54,
    imageURL:
      'https://a.cdn-hotels.com/gdcs/production133/d294/4e4195aa-b9ca-42cd-923f-e8a65c8c5c7b.jpg',
  })

  useEffect(() => {
    getWeatherData
  }, [])

  async function getWeatherData() {
    const weatherData = await weatherapi(
      defaultLocation.latitude,
      defaultLocation.longitude,
    )
    return weatherData
  }
  getWeatherData()

  // console.log(weatherData)
  return (
    <>
      <h1>Home Page</h1>

      <div className="image-container">
        <div className="weather-icon">
          <img
            src={
              'https://about.metservice.com/assets/img/icon-exp/_resampled/resizedimage5555-ic-condition-fine-tiny-2.png'
            }
            alt={'the sun'}
          ></img>
        </div>
      </div>
    </>
  )
}
