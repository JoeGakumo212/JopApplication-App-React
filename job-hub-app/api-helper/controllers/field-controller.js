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