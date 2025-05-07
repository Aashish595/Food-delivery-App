import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongo_url);
        console.log("Database Connected");
    } catch (error) {
        console.error("Database Connection Error:", error.message);
        process.exit(1); // Exit process with failure
    }
}