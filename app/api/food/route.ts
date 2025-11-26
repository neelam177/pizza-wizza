import { NextResponse } from "next/server";
import db from "@/app/utiles/db";
import Food from "@/app/models/Food";

export async function GET() {
  try {
    await db.connect();
    
    // MongoDB se data fetch karo
    const foods = await Food.find({});
    
    await db.disconnect();

    return NextResponse.json({ 
      success: true, 
      data: foods 
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch foods" },
      { status: 500 }
    );
  }
}