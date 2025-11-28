// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import db from "@/app/utiles/db";

// export default async function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }
import db from "@/app/utiles/db";
import { NextResponse } from "next/server";

export async function GET() {
  // optional: await db.connect();

  return NextResponse.json({
    name: "John Doe",
  });
}
