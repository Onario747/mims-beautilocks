import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const preferredRegion = "auto";
export const maxDuration = 60;

export async function POST(request: NextRequest) {
  try {
    // Clear the session cookie
    cookies().delete("token");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
