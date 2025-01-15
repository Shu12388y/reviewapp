import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { DB } from "@/utils/db";
import Review from "@/models/review.model";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "@/models/user.model";


DB()
export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();
    if (!data) {
      return NextResponse.json({ message: "Input required" }, { status: 400 });
    }
    const Header = await headers();
    const authHeader = Header.get("auth") as string;
    const verifyToken = jwt.verify(authHeader, "secret") as JwtPayload;
    if (!verifyToken) {
      return NextResponse.json(
        { message: "Invalid Auth Token" },
        { status: 401 }
      );
    }
    const validateUserId = await User.findById({
      _id: verifyToken.userId,
    });
    if (!validateUserId) {
      return NextResponse.json({ message: "Invalid user" }, { status: 401 });
    }
    const submissionInfo = {
      userId: validateUserId._id,
      name: data.name,
      question: data.question,
    };
    const newSubmission = await new Review(submissionInfo);
    await newSubmission.save();

    return NextResponse.json({ message: newSubmission }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
