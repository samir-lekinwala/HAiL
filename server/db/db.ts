import db from './connection.ts'
import { Location } from '../../models/location.ts'

export async function getAllLocations(): Promise<Location[]> {
  return db('locations').select()
}
