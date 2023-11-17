import { Link } from 'react-router-dom'
import { getLocations } from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'

export default function Locations() {
  const {
    data: locations,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['locations'],
    queryFn: getLocations,
  })

  if (isError) {
    return <p>There is an error sorry!</p>
  }

  if (isLoading) {
    return <p>Your page is loading...</p>
  }

  return (
    <>
      <h2 className="locationHeading">Display the Weather!</h2>
      <div className="locationContainer">
        {locations?.map((city) => (
          <>
            <Link key={city.id} to={`locations/${city.id}`}>
              <button className="locationButton">
                <img
                  className="locationImg"
                  src={`${city.imageURL}`}
                  alt={`${city.city} of ${city.country}`}
                />
                <div className="locationText">{city.city}</div>
              </button>
            </Link>
          </>
        ))}
      </div>
    </>
  )
}
