const express = require("express");
const router = express.Router();

const memberSchema = require("../validation/memberValidation");
const Member = require("../models/member.models");

//Route with filter , sort, pagination
/********************************************************/

router.get('/',async (req, res, next)=>{
    try{
        //Filtering queries
        const queryObject = {...req.query};
        const excludedFields = ["sort","page","limit"];
        excludedFields.forEach(excludedField => delete queryObject[excludedField]);
        let query = Member.find(queryObject); // working object

        //Sorting
        if(req.query.sort){
            let sortBy = req.query.sort.split(",").join(" ");
            query = query.sort(sortBy);
        }

        //Pagination
        let page = parseInt(req.query.page,10) || 1;
        let limit = parseInt(req.query.limit,10) || 10;
        let skip = (page -1) * limit;
        query = query.skip(skip).limit(limit);

        const members = await query;
        if(members.length === 0){
            const error = new Error("Members not found");
            error.status = 404;
            throw error;
        }
        res.json({success: true , data : members});
    }
    catch(err){
        next(err);
    }
});


// Find member by ID
/********************************************************/

router.get('/:id',async (req, res,next)=>{
    try{
        const memberById = await Member.findById(req.params.id);
        if(!memberById){
            const error = new Error("Member not found");
            error.status = 404;
            throw error;
        }
        res.json({success : true, data : memberById});
    }
    catch(err){
        next(err);
    }

});

//creating a new member with validation
/********************************************************/
// Validate request body with Joi before saving/updating

router.post("/", async(req, res,next)=>{
    try{

    const {error} = memberSchema.validate(req.body);
   if(error){
       const err = new Error(error.details.map(data => data.message).join(", "));
       err.status = 400;
       throw err;
   }
   const newMember = new Member(req.body);
   let savedMember =  await newMember.save();
    res.status(201).json({success : true, data : savedMember});
    }
    catch(err){
        next(err);
    }
});

//Put update member with Joi validation
/********************************************************/
// Validate request body with Joi before saving/updating


router.put('/:id', async(req, res,next)=>{
    try{
        const {error} = memberSchema.validate(req.body);
        if(error){
            const err = new Error(error.details.map(data => data.message).join(", "));
            err.status = 400;
            throw err;
        }

        const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body,
            {new :true, runValidators :true });
        if(!updatedMember){
            const error = new Error("Member not found");
            error.status = 404;
            throw error;
        }
        res.json({success : true, data :updatedMember});
    }
    catch(err){
        next(err);
    }
});


//Delete a member
/********************************************************/

router.delete('/:id', async(req,res,next)=>{
    try{

        const deletedMember = await Member.findByIdAndDelete(req.params.id);
        if(!deletedMember){
            const error = new Error("Member not found");
            error.status = 404;
            throw error;
        }
        res.status(200).json({success :true, message : "Member deleted successfully"});
    }
    catch(err){
        next(err);
    }
});


module.exports = router;

/*

Note
*************************************************************

Put/Post:

Validate req.body whenever a data is sent with request.
                    Eg : adding new data, updating data.
*/