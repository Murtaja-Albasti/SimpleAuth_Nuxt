// server/db.ts
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/kwaidi-auth';

export const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 1) return; // Already connected
  await mongoose.connect(MONGODB_URI);
};
