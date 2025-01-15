import { NextResponse } from "next/server";
import { DB } from "@/utils/db";
import Review from "@/models/review.model";

DB();

export const GET = async (
  _: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    await Review.findByIdAndDelete(id);

    return NextResponse.json({ message: "Deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error fetching review:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
