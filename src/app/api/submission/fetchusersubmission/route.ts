import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { DB } from "@/utils/db";
import Review from "@/models/review.model";
import jwt, { JwtPayload } from "jsonwebtoken";


DB()
export const POST = async (_: NextRequest) => {
  try {

    const Header = await headers();
    const authHeader = Header.get("auth") as string;
    console.log(authHeader)
    const verifyToken = jwt.verify(authHeader, "secret") as JwtPayload;
    if (!verifyToken) {
      return NextResponse.json(
        { message: "Invalid Auth Token" },
        { status: 401 }
      );
    }
    const posts =  await Review.find({
        userId:verifyToken.userId
    })
    return NextResponse.json({ message: posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
