import { NextResponse } from "next/server";
import { detectFraud } from "@/lib/detector";

export async function POST(req) {
  try {
    const { text } = await req.json();
    if (!text) {
      return NextResponse.json({ error: "No text provided" }, { status: 400 });
    }

    const result = detectFraud(text);
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
