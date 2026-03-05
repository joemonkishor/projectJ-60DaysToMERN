const express = require("express");
const router = express.Router();

const Member = require("../models/member.models");
const validateObjectId = require("../middlewares/validateObjectId");
const memberSchema = require("../validation/memberValidation");

//Home route with filter,sort, pagination
router.get("/", async(req, res,next)=>{
    try{
        const requestQueries = {...req.query};
        const excludeFields = ["page","limit","sort"];
        excludeFields.forEach(field => delete requestQueries[field]);

        let query = Member.find(requestQueries);


        if(req.query.sort){
            let sort = req.query.sort.split(",").join(" ");
            query = query.sort(sort);
        }

        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 10;
        let skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);

        const members = await query;
        if(members.length ===0){
            const error = new Error("Member not found");
            error.status = 404;
            throw error;
        }
        res.json({success : true, data :members});
    }
    catch(err){
        return next(err);
    }
});

//Get member by ID
router.get("/:id", validateObjectId,async (req,res,next)=>{
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
      return next(err);
    }
});

//POST Member

router.post("/", async (req, res,next)=>{
    try{

        const {error} = memberSchema.validate(req.body);
        if(error) {
            const err = new Error(error.details.map((data) => data.message).join(", "));
            err.status = 400;
            throw err;
        }

        const newMember = new Member(req.body);
        const savedMember = await newMember.save();

        res.status(201).json({success : true, data : savedMember});
    }
    catch(err){
        return next(err);

    }
});


//PUT update member

router.put("/:id", validateObjectId, async(req, res,next)=>{
    try{

        const {error} =memberSchema.validate(req.body);
        if(error){
            const err= new Error(error.details.map(data=> data.message).join(", "));
            err.status = 400;
            throw err;
        }

        const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body,
            {new : true, runValidators : true});
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

//Delete user

router.delete("/:id",validateObjectId,async (req,res, next)=>{
    try{

        const deletedUser = await Member.findByIdAndDelete(req.params.id);
        if(!deletedUser){
            const error = new Error("Member not found");
            error.status = 404;
            throw error;

        }
        res.json({success : true , message :"Member deleted successfully"})
    }
    catch(err){
        return next(err);
    }
});


module.exports = router;