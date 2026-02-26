const mongoose = require("mongoose");
const Member = require("./models/member.models.js"); // adjust path if needed

async function run() {
  try {
    // Connect to MongoDB (no extra options needed in Mongoose v7+)
    await mongoose.connect("mongodb://localhost:27017/projectJ");
    console.log("MongoDB connected");

    // Create a new member
    const newMember = new Member({
      name: "Joemon",
      email: "joemon@example.com"
    });

    // Save to database
    const savedMember = await newMember.save();
    console.log("Saved Member:", savedMember);

    // Find all members
    const members = await Member.find();
    console.log("All Members:", members);

  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    // Close connection
    await mongoose.connection.close();
  }
}

run();
