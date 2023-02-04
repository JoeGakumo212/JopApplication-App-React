import field from "../model/field";
import Field from "../model/field";
// unction for getting all fields
export const getAllFields = async (req, res) => {
    let fields;

    try {
        fields = await Field.find();
    }
    catch (err) {
        return new Error(err);
    }


    if (!fields) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
    if (fields.length===0) {
        return res.status(404).json({ message: "No Data Found" });
    }
    return res.status(200).json({ fields });

};

// function for posting data in the database

export const addApplicantField = async (req, res) => {
    const { name, email, phoneNumber, resume, coverLetter, desiredPosition, skills, availability, additionalInformation } = req.body;
    
    if (
        !name && name.trim() === "" &&
        !email && email.trim() === "" &&
        !phoneNumber && phoneNumber.trim() === "" &&
        !resume && resume.trim() === "" &&
        !coverLetter && coverLetter.trim() === "" &&
        !desiredPosition && desiredPosition.trim() === "" &&
        !skills && skills.trim() === "" &&
        !availability && availability.trim() === "" &&
        !additionalInformation && additionalInformation.trim() === "")
        return res.status(422).json({ message: "Invalid Inputs" });
    
    let field;
    

    try {
        field = new Field({ name, email, phoneNumber, resume, coverLetter, desiredPosition, skills, availability, additionalInformation })
        field = await field.save();
    }
    catch (err) {
        return new Error(err);
        
    }

    if (!field) {
        return res.status(500).json({ messgae: "Internal Server Error" });
    }
    return res.status(201).json({ field });
    
};
// function for updating applicants details

export const updateApplication = async(req, res) => {
    const id = req.query.id;
    console.log(id);

    const { name, email, phoneNumber, resume,
        coverLetter, desiredPosition, skills, availability, additionalInformation } = req.body;
    
    if (
        !name && name.trim() === "" &&
        !email && email.trim() === "" &&
        !phoneNumber && phoneNumber.trim() === "" &&
        !resume && resume.trim() === "" &&
        !coverLetter && coverLetter.trim() === "" &&
        !desiredPosition && desiredPosition.trim() === "" &&
        !skills && skills.trim() === "" &&
        !availability && availability.trim() === "" &&
        !additionalInformation && additionalInformation.trim() === "")
        return res.status(422).json({ message: "Invalid Inputs" });
    
    let field;
    

    try {
        field = await Field.findByIdAndUpdate(id, {
            name, email, phoneNumber,
            resume, coverLetter, desiredPosition,
            skills, availability, additionalInformation
        })
       
    }
    catch (err) {
        return console.log(err);
        
    }

    if (!field) {
        return res.status(500).json({ messgae: "Internal Server Error" });
    }
    return res.status(201).json({ message:" Congratulation, You have Successfully Updated Your Application,All The Best " });
    
};
// delete function for application details
export const deleteApplication = async (req, res) => {
    const id = req.query.id;

    let field;
    try {
        field = await Field.findByIdAndRemove(id);

    } catch (err) {
        return new Error(err);
    }
    if (!field) {
        return res.status(500).json({ message: "Unable to Delete Application" });
    } return res.status(200).json({ message: "Application Deleted Successfully" });
};
// creating job/seacrhing job
export const getJobForApplication = async (req, res) => {
    const id = req.query.id;

    let field;
    try {
        field = await Field.findById(id);
    } catch (err) {
        return new Error(err)
    }
    if (!field) {
        return res.status(404).json({ message: "No Such Job Found" })
    }
    return res.status(200).json({ field });
};