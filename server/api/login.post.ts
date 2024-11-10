// server/api/login.post.ts
import { defineEventHandler, readBody } from 'h3';
import { connectToDatabase } from '../db';
import { User } from '../models/User';
import bcrypt from 'bcrypt';

export default defineEventHandler(async (event) => {
  await connectToDatabase(); // Ensure the database connection is established
  const body = await readBody(event);
  const { email, password } = body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return { success: false, message: 'Invalid email or password' };
    }

    // Compare provided password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { success: false, message: 'Invalid email or password' };
    }

    // If authentication is successful
    return { success: true, message: 'Login successful' };
  } catch (error) {
    return { success: false, message: 'An error occurred during login', error };
  }
});
