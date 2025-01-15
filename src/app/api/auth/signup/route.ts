import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/user.model";
import { DB } from "@/utils/db";
import bcrypt from "bcrypt";

DB();

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();

    if (!data || !data.name || !data.email || !data.password || !data.country) {
      return NextResponse.json(
        { message: "All fields are required: name, email, password, country" },
        { status: 400 }
      );
    }

    const findUser = await User.findOne({ email: data.email });
    if (findUser) {
      return NextResponse.json(
        { message: "User already exists with this email" },
        { status: 409 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Create a new user
    const userInfo = {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      country: data.country,
    };

    const createNewUser = new User(userInfo);
    await createNewUser.save();
    return NextResponse.json(
      { message: "User created successfully"},
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in user creation:", error); 
    return NextResponse.json(
      { message: "Internal server error" }, 
      { status: 500 }
    );
  }
};
