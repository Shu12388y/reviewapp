import { NextResponse } from "next/server";
import { DB } from "@/utils/db";
import Review from "@/models/review.model";

DB();

export const POST = async (
  _: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    const review = await Review.findById(id);
    if (!review) {
      return NextResponse.json(
        { message: "Review not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Review fetched successfully", data: review },
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
