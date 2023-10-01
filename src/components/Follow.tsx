'use client'
import { useEffect, useState } from 'react'
import FollowCard from '@/components/FollowCard';


const Follow = ({ id }: { id: string }) => {
    const [info, setInfo] = useState<any>(null); // Use appropriate type for 'info'
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`/api/youtubeData?id=${id}`);
            const data = await res.json();

            const { title, description, customUrl } = data.items[0].snippet;
            const image = data.items[0].snippet.thumbnails.medium.url;
            const { subscriberCount, videoCount } = data.items[0].statistics;
            setInfo({ title, description, customUrl, image, subscriberCount, videoCount, id });
        };
        fetchData();
    }, [id]);
    return <FollowCard info={info} />;
};
export default Follow
