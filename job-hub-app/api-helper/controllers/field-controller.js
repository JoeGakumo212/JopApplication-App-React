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