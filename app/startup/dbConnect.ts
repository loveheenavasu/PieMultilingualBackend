const mongoose=require('mongoose');

export async function dbConnect() {
    await mongoose.connect(process.env.MONGO_URI);
}

