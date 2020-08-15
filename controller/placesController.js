'use strict';

const csv=require("csvtojson");
const {PLACESDB}=require("./places");
const Place = require("../model/place");

const csvFilePath=("./Rental Data - Datafiniti - Palm Springs Vacation Rentals.csv");


exports.populateDB= async () =>{
    try{
        console.log('Populating DB!');
        DATABASE=await readFile();
        console.log(DATABASE.slice(0,4));
    }
    catch(error){
        console.error(`Error: ${error}`);
    }
   
}
/**
 * Method to get places from the Rental Data CSV file.
 * This method will fetch places based on the limit 10 places
 * per page. If the places database is empty it will load the places
 *  into the temp DB so the consequent operations will be fast.
 * @param {
 * } req the request object
 * @param {*} res the response object
 */

exports.getPlaces=async(req,res) => {   
    try{                  
        
        if(PLACESDB.length < 1){        
            
            console.log('No records. Fetching from File');
            await readFile();            
            console.log(PLACESDB.slice(0,4));            
        }
        
        let limit=req.query.limit || 10;
        let page=req.query.page || 1;
        console.log(`limit: ${limit} - page : ${page}`);
        let start=(page-1) * limit;
        let end=limit*page;
        const responseBody=[];
        PLACESDB.slice(start,end).forEach(placeFromDB=>{
            let place=new Place(placeFromDB);                        
            responseBody.push(place);
            console.log(place);
        })
        
        
        if(responseBody.length < 1)
            return res.status(404).send(generateNotFoundError("No records found!"));
        return res.status(200).send(responseBody);
    } 
    catch(error){
        console.error(error);
        res.status(500).send(generateUnexpectedError(error.message));
    }
  
}

exports.getPlacesById=async(req,res) => {
    try{
        const id=req.params.id;
        console.log(`ID: ${req.params.id}`);
        
        if(PLACESDB.length < 1)
        {
            console.log('Database is empty!');
            return res.status(404).send(generateNotFoundError("No record found!"));
        }
        const response=PLACESDB.find(place => {
            //console.log(place);
            return place.id === id;
        });
        if(response === undefined || response.length < 1){
            console.log('No record present in the Database');
            return res.status(404).send(generateNotFoundError("No record found!"));
        }
        return res.status(200).send(response);
    }
    catch(error){
        console.error(error);
        res.status(500).send(generateUnexpectedError(error.message));
    }
}

function generateNotFoundError(message){
    const errorResponse={
        "Response":message
    }
    return errorResponse;
}

function generateUnexpectedError(message){
    const errorResponse={
        "Response":message
    }
    return errorResponse;
}

const readFile = async ()=>{
    console.log(`Reading file from path : ${csvFilePath}`);
    
    const jsonResponse= await (await csv().fromFile(csvFilePath)).forEach(place =>{
        const urlParts=place.imageUrl.split('/');
        place.imageUrl=`${urlParts[0]}//${urlParts[2]}/id/${place.id}/${urlParts[3]}/${urlParts[4]}`;
        console.log(place.imageUrl);
        PLACESDB.push(place);
    });
    return jsonResponse;

}