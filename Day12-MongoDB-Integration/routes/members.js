const express = require('express');
const router = express.Router();
const Member = require('../models/member.models')

//Search all members
/**********************************************/
router.get('/', async(req,res,next)=>{
try{
  const members = await Member.find();
  res.json(members);
}
catch(err){
  next(err);
}
});

// Get member by ID
/**********************************************/
router.get('/:id',async (req, res,next)=>{
  try{
    const memberById = await Member.findById(req.params.id);
    if(!memberById){
      const error = new Error("Member not found");
      error.status = 404;
      throw error;
    }
    res.status(200).json(memberById);
  }
  catch(err){
    next(err);
  }

});

//Post member (create new member)
/**********************************************/

router.post('/', async (req, res, next)=>{
  try{
    const {name , email} = req.body;
    if(!name || !email){
      const error = new Error("Name and email required");
      error.status = 400;
      throw error;
    }
    const newMember = new Member({name, email});
    const savedMember = await newMember.save();
    res.status(201).json(savedMember);
  }
  catch(err){
    next(err)
  }
});


//Put member (update an existing member)
/**********************************************/

router.put('/:id', async (req, res, next)=>{
  try{
    const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body,
      {new: true, runValidators : true});
      if(!updatedMember){
        const error = new Error("Member not found")
        error.status = 404;
        throw error;
      }
      res.json(updatedMember);
  }
  catch(err){
    next(err);
  }
});


//Delete member (delete a member from DB)
/**********************************************/

router.delete('/:id',async (req,res,next)=>{
try{

  const deletedMember = await Member.findByIdAndDelete(req.params.id);
  if(!deletedMember){
    const error = new Error("Member not found");
    error.status = 404;
    throw error;
  }
  res.json({message :"Member Deleted"})
}
catch(err){
  next(err);
}
});

module.exports = router;