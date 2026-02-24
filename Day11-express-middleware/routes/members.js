//routes/members.js

const express = require("express");
const router = express.Router();

//Sample Data (will replace with database as we proceed)
/********************************************************/
let members = [ 
  { id: 1, name: "Alice", email: "alice@example.com" }, 
  { id: 2, name: "Bob", email: "bob@example.com" }, 
  { id: 3, name: "Charlie", email: "charlie@example.com" } 
  ];


  // 1.Get all member details in JSON
  /********************************************************/
  router.get("/",(req, res,next)=>{
    try{
      res.json(members);

    }
    catch(err){
      next(err)               //**note
    }
  })
  
  //2. Get a single member by ID
  /********************************************************/

  router.get("/:id",(req,res,next)=>{
    try{
      const member = members.find(m=> m.id === parseInt(req.params.id));
      if(!member){
        const error = new Error("Member not found");
        error.status = 404;
        throw error;
      }
      res.json(member)

    }
    catch(err){
      next(err)
    }
  })

  //3.POST a new member
  /********************************************************/

  router.post("/",(req,res,next)=>{
    try{
      const newMember ={
        id : members.length + 1,
        name : req.body.name,     //**note
        email: req.body.email
      };
      if(!newMember.name || !newMember.email){
        const error = new Error("name and E-mail are required");
        error.status = 400;
        throw error;
      }
      members.push(newMember);
      res.status(201).json(newMember);
    }
    catch(err){
      next(err)
    }
  })


  //4.PUT update member
  /********************************************************/
  router.put("/:id",(req, res, next)=>{
    try{
      const member = members.find(m=>m.id === parseInt(req.params.id));
      if(!member){
        const error = new Error("Member not found");
        error.status = 404;
        throw error;
      }
      member.name  = req.body.name || member.name;
      member.email = req.body.email || member.email;
      res.status(200).json(member);

    }
    catch(err){
      next(err)
    }
  })
  
  //5.DELETE member
  /********************************************************/
  router.delete("/:id",(req,res,next)=>{
    try{
    const index = members.findIndex(m=> m.id === parseInt(req.params.id)); //**note
    if(index === -1){                     //**note
      const error = new Error("Member not found");
      error.status = 404;
      throw error;
    }
    members.splice(index,1)
    res.status(200).json({message :"Member deleted successfully"})


    }
    catch(err){
      next(err)
    }

  })

  module.exports = router;
  
  /*
  
  Notes:
  *************************************************

    next(err)        | handing over the error handling to errorHandler.js
    router.post      | express.json() parses the post request values as an object in req.body
    findIndex        | used to execute the condition directly to array
    index === -1     | return value in the absense of index value provided
   
  
  */