import { deleteApplication, getJobForApplication, updateApplication } from "../../../api-helper/controllers/field-controller";
import { connectToDatabase } from "../../../api-helper/utils";

export default async function handler(req, res) {
    await connectToDatabase();

    if (req.method === "PUT") {
        return updateApplication(req, res);
    } else if (req.method === "DELETE") {
        return deleteApplication(req, res); 
    }
    else if (req.method === "GET") {
        return getJobForApplication(req.res);
    }
}