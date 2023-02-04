
import { addApplicantField, getAllFields } from '../../api-helper/controllers/field-controller';
import { connectToDatabase } from '../../api-helper/utils';
export default async function handler(req, res) {
   await connectToDatabase();

   // checking the database if its has any field captured
   if (req.method ==="GET") {
     return getAllFields(req, res)
   }
   if (req.method === "POST") {
      return addApplicantField(req, res)
   }

}