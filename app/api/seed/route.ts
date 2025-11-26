import { NextResponse } from "next/server";
import db from "@/app/utiles/db";
import Food from "@/app/models/Food";

export async function POST() {
  try {
    await db.connect();
    
    // JSON data import karo
    const cardData = await import("@/app/store/cardData.json");
    
    // Pehle existing data delete karo (optional)
    await Food.deleteMany({});
    
    // Naya data insert karo
    await Food.insertMany(cardData.default);
    
    await db.disconnect();

    return NextResponse.json({ 
      success: true, 
      message: "Data seeded successfully" 
    });
  } catch (error) {
    console.error("Seed Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to seed data" },
      { status: 500 }
    );
  }
}
