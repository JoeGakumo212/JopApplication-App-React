
import mongoose from 'mongoose'
export default function handler(req, res) {
    mongoose.connect(
        "mongodb+srv://Joe32120141_:Joe32120141.@cluster0.1u1z8xx.mongodb.net/?retryWrites=true&w=majority"
    ).then(() => console.log("Connected Successfully"))
        .cathc((err) => console.log(err))
        ;
}