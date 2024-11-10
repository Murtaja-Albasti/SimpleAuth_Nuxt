import { defineEventHandler } from 'h3';
import { connectToDatabase } from '../db';
import { User } from '../models/User';

export default defineEventHandler(async () => {
  await connectToDatabase(); // Ensure the database connection is established

  try {
    const users = await User.find({}); // Fetch all users from the database
    return { success: true, data: users };
  } catch (error) {
    return { success: false, message: 'Error fetching users', error };
  }
});
