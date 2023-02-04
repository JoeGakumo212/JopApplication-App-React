
import mongoose from 'mongoose'
import { connectToDatabase } from '../../api-helper/utils'
export default async function handler(req, res) {
   await connectToDatabase();

}