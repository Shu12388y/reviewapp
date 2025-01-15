import { NextResponse } from "next/server";
import { DB } from "@/utils/db";
import Review from "@/models/review.model";


DB();

export const POST = async (request: Request, { params }: { params: { id: string } }) => {
  try {
    const { id } = params;
    const data = await request.json()
    if (!id) {
      return NextResponse.json(
        { message: "ID is required" },
        { status: 400 }
      );
    }
    const review = await Review.findByIdAndUpdate(id,data);
    return NextResponse.json(
      { message: "Updated", data: review },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching review:", error); 
    return NextResponse.json(
      { message: "Internal server error" }, 
      { status: 500 }
    );
  }
};