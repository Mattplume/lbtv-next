import { NextRequest, NextResponse } from "next/server";
import { getFacebookVideos } from "@/app/lib/facebook";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ playlistId: string }> }
) {
  const { playlistId } = await params;
  const { searchParams } = new URL(request.url);
  const afterCursor = searchParams.get("after") || "";

  try {
    const data = await getFacebookVideos(playlistId, afterCursor);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erreur lors de la récupération des vidéos :", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des vidéos" },
      { status: 500 }
    );
  }
}



