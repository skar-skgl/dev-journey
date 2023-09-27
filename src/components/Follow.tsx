'use client'
import { useEffect, useState } from 'react'
import FollowCard from '@/components/FollowCard';


const Follow = ({ id }: { id: string }) => {
    const [info, setInfo] = useState<any>(null); // Use appropriate type for 'info'
    useEffect(() => {
        const GetInfo = async () => {
            const apiKey: string = process.env.YOUTUBE_API_KEY as string;
            console.log(apiKey);
            const res = await fetch('https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id='+id+'&key='+'AIzaSyCQiiZuNPYsmNXreyv-ubkI8SK9yryPVr8', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json()
            const { title, description, customUrl } = data.items[0].snippet;
            const image = data.items[0].snippet.thumbnails.medium.url;
            const { subscriberCount, videoCount } = data.items[0].statistics;
            setInfo({ title, description, customUrl, image, subscriberCount, videoCount, id });
        };
        GetInfo();
    }, [id]);
    return <FollowCard info={info} />;
};
export default Follow
