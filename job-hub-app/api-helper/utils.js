import mongoose from "mongoose"
export const connectToDatabase = async () => {
    await mongoose
        .connect(
        "mongodb+srv://Joe32120141_:Joe32120141.@cluster0.1u1z8xx.mongodb.net/?retryWrites=true&w=majority"
    )
        .then(() => console.log("Connected Successfully"))
        .catch((err) => console.log(err))
        ;
}