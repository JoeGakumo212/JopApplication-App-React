import axios from "axios";


export const sendApplication = async (data) => {
    const res = await axios.post("http://localhost:3000/api/fields", {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        resume: data.resume,
        coverLetter: data.coverLetter,
        desiredPosition: data.desiredPosition,
        skills: data.skills,
        availability: data.availability,
        additionalInformation: data.additionalInformation,
    });
    if (res.status !== 201) {
        return new Error("Database Request Rejected");
        
    }
    const resData = await res.data;
    return resData;
};