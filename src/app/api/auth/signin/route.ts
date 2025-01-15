import { NextResponse, NextRequest } from "next/server";
import { User } from "@/models/user.model";
import { DB } from "@/utils/db";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


DB();

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();

    if (!data || !data.email || !data.password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const findUser = await User.findOne({ email: data.email });
    if (!findUser) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    const checkPassword = await bcrypt.compare(data.password, findUser.password);
    if (!checkPassword) {
      return NextResponse.json(
        { message: "Incorrect password" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { userId: findUser._id, email: findUser.email }, 
      "secret", 
      { expiresIn: "1h" } 
    );

    if (!token) {
      return NextResponse.json(
        { message: "Failed to generate token" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Login successful", token },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in login:", error); 
    return NextResponse.json(
      { message: "Internal server error" }, 
      { status: 500 }
    );
  }
};