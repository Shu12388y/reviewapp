import { NextResponse } from "next/server";
import { DB } from "@/utils/db";
import Review from "@/models/review.model";

DB();
export const GET = async () => {
  try {
    const data = await Review.find({}).select("-userId");
    if (!data) {
      return NextResponse.json({ message: "Not data" }, { status: 404 });
    }
    return NextResponse.json({ message: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
