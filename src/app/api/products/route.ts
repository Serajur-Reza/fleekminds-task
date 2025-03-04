import { createConnection } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    // console.log(process.env.HOST);
    const db = await createConnection();

    const [rows] = await db.query("SELECT * FROM products");

    // console.log(rows);
    // res.status(200).json(rows);
    return NextResponse.json(rows);
  } catch (error) {
    console.log(error);
    NextResponse.json({ error: error?.message });
  }
}
