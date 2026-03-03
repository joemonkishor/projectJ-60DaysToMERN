const express = require("express");
const router = express.Router();

//Schemas
const Member = require("../models/member.models");

//Middlewares & validators
const memberSchema = require("../validation/memberValidation");
const validateObjectId = require("../middlewares/validateObjectId");

//Router with filtering , sort, pagination
/*******************************************************************************/

router.get("/", async (req,res,next) =>{
    try{
        //Filtering queries
        const requestQueries = { ...req.query};
        const requestsToRemove = ["page","limit","sort"];
        requestsToRemove.forEach(request => delete requestQueries[request]);

        let requestQuery = Member.find(requestQueries);

        //Sorting queries
        if(req.query.sort){

            /*       [   string   ]    [ string-array]    [array- string]   */
            let sort = req.query.sort       .split(",")        .join(" ");

            requestQuery = requestQuery.sort(sort);             //mongoose sort function
        }

        //Pagination with query Page & limit
        let page = parseInt(req.query.page, 10) || 1;
        let limit = parseInt(req.query.limit, 10) || 10;
        let skip = (page-1)* limit;

            requestQuery = requestQuery.skip(skip).limit(limit);//mongoose functions


        let members = await requestQuery;
        if(members.length ===0){
            const error = new Error("Member not found");
            error.status = 404;
            throw error;
        }
        res.json({success : true, data : members});
    }
    catch(err){
        return next(err);
    }
});

//Router to GET with ID
/*******************************************************************************/

router.get("/:id", validateObjectId,async (req,res,next)=>{
    try{
        const memberById = await Member.findById(req.params.id);
        if(!memberById){
            const error = new Error("Member not found");
            error.status = 404;
            throw error;
        }
        res.json({success :true, data : memberById});
    }
    catch(err){
        return next(err);
    }
});

//POST / Create new member | JOI validation
/*******************************************************************************/

router.post("/", async(req, res,next)=>{
    try{

        const {error} = memberSchema.validate(req.body);
        if(error){
            const err = new Error(error.details.map(data=> data.message).join(", "));
            err.status = 400;
            throw err;
        }
        const newMember   = new Member(req.body);
        const savedMember = await newMember.save();
        res.status(201).json({success : true, data : savedMember});
    }
    catch(err){
        return next(err);
    }
});


//PUT / Update member | JOI validation + Object ID validation
/*******************************************************************************/

router.put("/:id", validateObjectId, async(req,res,next)=>{
    try{
        const {error} = memberSchema.validate(req.body);
        if(error){
            const err = new Error(error.details.map(data => data.message).join(" , "));
            err.status = 400;
            throw err;
        }
        const updatedMember = await Member.findByIdAndUpdate(req.params.id,req.body,
            { new : true, runValidators : true});
        if(!updatedMember){
            const error = new Error("Member not found");
            error.status = 404;
            throw error;
        }

        res.json({success : true, data : updatedMember});


    }
    catch(err){
        return next(err);
    }
});

//Delete / Delete member | Object ID validation
/*******************************************************************************/


router.delete("/:id", validateObjectId,async (req, res,next)=>{
   try{

       const deletedMember = await Member.findByIdAndDelete(req.params.id);
       if(!deletedMember){
           const error = new Error ("Member not found");
           error.status =404;
           throw error;
       }

       res.json({success : true, message :"Member deleted successfully"});

   }
   catch(err){
       return next(err);
   }
});

module.exports = router;





