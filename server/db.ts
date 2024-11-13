// // server/db.ts
// import mongoose from 'mongoose';

// const MONGODB_URI = 'mongodb://murtaja:murtaja@ac-qojmvpc-shard-00-00.pd0uhnb.mongodb.net:27017,ac-qojmvpc-shard-00-01.pd0uhnb.mongodb.net:27017,ac-qojmvpc-shard-00-02.pd0uhnb.mongodb.net:27017/?replicaSet=atlas-r8m63a-shard-0&ssl=true&authSource=admin/kwaidi-auth';

// export const connectToDatabase = async () => {
//   if (mongoose.connection.readyState === 1) return; // Already connected
//   await mongoose.connect(MONGODB_URI);
// };


// server/db.ts
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://murtaja:murtaja@ac-qojmvpc-shard-00-00.pd0uhnb.mongodb.net:27017,ac-qojmvpc-shard-00-01.pd0uhnb.mongodb.net:27017,ac-qojmvpc-shard-00-02.pd0uhnb.mongodb.net:27017/kwaidi-auth?replicaSet=atlas-r8m63a-shard-0&ssl=true&authSource=admin';

export const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 1) return; // Already connected
  await mongoose.connect(MONGODB_URI);
};
