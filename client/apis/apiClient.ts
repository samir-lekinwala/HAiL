import request from 'superagent'
import { Location } from '../../models/location'

const rootUrl = '/api/v1'

export async function getLocations(): Promise<Location[]> {
  return await request.get(rootUrl).then((res) => {
    return res.body
  })
}
