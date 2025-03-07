import { NextRequest, NextResponse } from "next/server";
import { getFacebookVideos } from "@/app/lib/facebook";

export async function GET(req: NextRequest, context: { params: Record<string, string> }) {
  const { playlistId } = context.params;
  const { searchParams } = new URL(req.url);
  const afterCursor = searchParams.get("after") || "";
  
  try {
    const data = await getFacebookVideos(playlistId, afterCursor);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erreur lors de la récupération des vidéos :", error);
    return NextResponse.json({ error: "Erreur lors de la récupération des vidéos" }, { status: 500 });
  }
}


