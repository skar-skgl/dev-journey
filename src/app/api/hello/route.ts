import { debug } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, id: string) {
  const key = process.env.YOUTUBE_API_KEY;

  const response = await fetch('https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id='+id+'&key='+key); {
  const json = await response.json();
  
  console.log(json);

  const { title, description, customUrl } = json.items[0].snippet;
  const image = json.items[0].snippet.thumbnails.medium.url;

  return NextResponse.json({ title, description, customUrl, image });
  }
}