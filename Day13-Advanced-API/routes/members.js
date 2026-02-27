const express = require("express");
const router = express.Router();

const Member = require("../models/member.models");




//Get members

router.get("/",async (req, res,next)=>{
 try{

//Adding filtering:

const queryObject = { ...req.query };
const excludeFields = ["sort", "page", "limit"];
excludeFields.forEach(field=> delete queryObject[field]);
let query = Member.find(queryObject);

//sort

if(req.query.sort){
  const sortBy = req.query.sort.split(",").join(" ");
  query = query.sort(sortBy);
}


//Pagination

const page = parseInt(req.query.page, 10) || 1; 
const limit = parseInt(req.query.limit, 10) || 10; 
const skip = (page - 1) * limit; 

query = query.skip(skip).limit(limit);

   const member = await query;
  if(member.length === 0){
    const error = new Error("Member not found");
    error.status = 404;
    throw error;
    
  }
  res.json({success : true, data : member});
 }
 catch(err){
  next(err);
 }
});

//get member by ID

router.get('/:id',async(req, res,next)=>{
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
})

//Post create new member

router.post('/',async(req, res,next)=>{
  try{
    const {name, email} = req.body;
    if(!name || !email){
      const error = new Error("Name and e-mail is required");
      error.status = 400;
      throw error;
    }
    const newMember = new Member({name, email});
    const savedMember =  await newMember.save();
    res.status(201).json({success: true, data: savedMember})
  }
  catch(err){
    next(err);
  }
})

//Put edit a member

router.put('/:id',async(req, res, next)=>{
  try{
    const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body,
        {new : true, runValidators : true}
    )
    if(!updatedMember){
      const error = new Error ("Member not found");
      error.status = 404;
      throw error;
    }
    res.json({success : true, data : updatedMember});

  }
  catch(err){
    next(err);
  }
})

//Delete a member

router.delete('/:id',async(req, res, next)=>{
  try{
    const deleteMember = await Member.findByIdAndDelete(req.params.id);
    if(!deleteMember){
      const error = new Error ("Member not found");
      error.status = 404;
      throw error;
    }
    res.status(200).json({success : true, message :"Member deleted successfully"});
  }
  catch(err){
    next(err);
  }
});

module.exports = router;