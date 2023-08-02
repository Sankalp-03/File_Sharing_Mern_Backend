// model that validates the data coming from the frontend is correct or not
import mongoose from "mongoose";

// schema contains path , name , downloads
const fileSchema = new mongoose.Schema({
    path : {
        type : String , 
        required : true
    },
    name : {
        type : String ,
        required : true
    },
    downloadCount : {
        type : Number,
        required : true,
        default : 0
    }
})

// creating a model for the given schema
const File = mongoose.model('file' , fileSchema);

export default File;