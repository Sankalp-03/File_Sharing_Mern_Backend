// import { response } from "express";
import File from "../models/file.js";
const BASE_URL = process.env.BASE_URL


export const uploadImage = async ( req , resp ) => {
    const fileObj = {
        path : req.file.path,
        name : req.file.originalname
    }
    try {
        const file = await File.create(fileObj) // creates an object with details of the file in the File model of mongodb
        resp.status(200).json({ path : `${BASE_URL}/file/${file._id}` }) 
        // when we are downloading the file we need to pass the correct path that is localhost/file's correct model/id of the file in the db
    } catch (error) {
        console.error(error.message)
        resp.status(500).json({ error : error.message })
    }
};


export const downloadImage = async ( req , resp ) =>{
    try {
        const file = await File.findById(req.params.Id) // since we mentioned in the routes that Id is being used to fetch the image to be downloaded
        file.downloadCount++; // update the downloadCount as file has been downloaded once.
        await file.save(); // save the updated file
        resp.download( file.path , file.name )
    } catch (error) {
        console.error(error.message)
        return resp.status(500).json({ error : error.message })
    }
}