import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const fieldSchema = new Schema({
   
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        resume: {
            type: String,
            required: true,
        },
        coverLetter: {
            type: String,
            required: true,
        },
        desiredPosition: {
            type: String,
            required: true,
        },
        skills: {
            type: String,
            required: true,
        },
        availability: {
            type: String,
            required: true,
        },
        additionalInformation: {
            type: String,
            required: true,
        }
    
});


export default mongoose.model("Field", fieldSchema);
