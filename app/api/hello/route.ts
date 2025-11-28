// import { NextResponse } from "next/server";
// import db from "@/app/utiles/db";

// export async function GET() {
//   try {
//     await db.connect();
    
//     return NextResponse.json({ 
//       message: "API is working",
//       database: "Connected successfully",
//       endpoints: {
//         food: "/api/food",
//         seed: "/api/seed",
//         hello: "/api/hello"
//       }
//     });
//   } catch (error) {
//     return NextResponse.json(
//       { 
//         message: "API is working but database connection failed",
//         error: error instanceof Error ? error.message : "Unknown error"
//       },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";
import db from "@/app/utiles/db";

export async function GET() {
  await db.connect();

  return NextResponse.json({
    message: "MongoDB connected successfully!",
  });
}
