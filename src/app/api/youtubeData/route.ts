import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    const id = req.nextUrl.searchParams.get('id');

    if (!id) {
        // Handle the case when `id` is not provided in the query params.
        // For example:
        return new NextResponse('Missing id parameter', { status: 400 });
    }

    const apiKey: string = process.env.YOUTUBE_API_KEY || '';
    console.log(apiKey);
    const apiUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${id}&key=${apiKey}`;

    try {
        const apiResponse = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await apiResponse.json();

        if (data.error) {
            return new NextResponse(JSON.stringify({ error: data.error.message }), { status: data.error.code });
        }

        return NextResponse.json(data);
    } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}