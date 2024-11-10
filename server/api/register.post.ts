import { defineEventHandler, readBody } from 'h3';
import { connectToDatabase } from '../db';
import { User } from '../models/User';
import bcrypt from 'bcrypt';

export default defineEventHandler(async (event) => {
  await connectToDatabase();
  const body = await readBody(event);
  const { name , email, password } = body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { success: false, message: 'Email is already registered' };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = new User({ name , email , password: hashedPassword });
    await newUser.save();

    return { success: true, message: 'Registration successful' };
  } catch (error) {
    return { success: false, message: 'Error registering user', error };
  }
});
