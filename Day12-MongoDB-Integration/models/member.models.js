const mongoose = require("mongoose")

const MemberSchema = new mongoose.Schema({

  name :{
    type : String,
    required : true,
    trim : true
  },
  email:{
    type : String,
    required : true,
    unique :true,
    lowercase : true

  }
},{timestamps : true})

module.exports = mongoose.model("Member", MemberSchema)

/*
Notes
*************************************
new mongoose.Schema   | creates the blue print of the data

timestamps            | contain two fiels :  (Used for tracking DB changes)
                          createdAt
                          updatedAt


Schema fields:
--------------------------------------
email                 | unique  : true , field used as two user's can't have same email

name                  | required : true , markss the field mandatory
                      | trim    : true , trims the white spaces while storing
       
mongoose.model("Member", MemberSchema)
----------------------------------------
Member                | the name of the collection
                          >mongo DB changes it to "members" within database
                          >can be used to access several methods :
                              Member.find()                 : finds all memmbers/data
                              new Member().save(data)       : adds new data
                              Member.findByIdAndDelete(id)  : finds by ID and delets
                              Member.findByIdAndUpdate(id)  : finds by ID and updates
*/