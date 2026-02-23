import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function cleanup() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Drop the users collection to remove all old indexes
    await mongoose.connection.collection("users").drop();
    console.log("✅ Users collection dropped successfully");

    await mongoose.disconnect();
    console.log("✅ Cleanup complete! You can now register new users.");
  } catch (err) {
    console.error("❌ Error:", err.message);
    process.exit(1);
  }
}

cleanup();
