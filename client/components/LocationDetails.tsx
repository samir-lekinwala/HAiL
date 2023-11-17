import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getLocations } from '../apis/apiClient'

export default function LocationDetails() {
  const idObject = useParams()
  const id = idObject.id
  const { data, isError, isLoading } = useQuery({
    queryKey: ['locations'],
    queryFn: getLocations,
  })

  if (isError) {
    return <p>There is an error sorry!</p>
  }

  if (isLoading) {
    return <p>Your page is loading...</p>
  }

  const city = data.find((city) => city.id == Number(id))
  console.log(city)
  console.log(id)
  console.log(data)
  return (
    <>
      <div key={city?.id} className="hero-image">
        <img src={city?.imageURL} alt={city?.city} />
        <div className="hero-text">
          <h1>{city?.city}</h1>
          <p>Sunny 21c</p>
          {/* <button>Hire me</button> */}
        </div>
      </div>
    </>
  )
}
