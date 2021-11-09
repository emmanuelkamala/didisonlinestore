import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    console.log(`MongoDB is connected`);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;