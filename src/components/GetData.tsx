import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import FollowCard from './FollowCard';

type YoutubeData =
    {
        title: string
        description: string
        customUrl: string
        image: string
        subscriberCount: string
        videoCount: string
        id: string
    }

const StaticFollow = ({ id }: { id: string }) => {
    const getStaticProps: GetStaticProps<{ youtubeData: YoutubeData }> = async () => {
        const res = await fetch('https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=' + id + '&key=' + 'AIzaSyCQiiZuNPYsmNXreyv-ubkI8SK9yryPVr8')
        const data = await res.json()
        const { title, description, customUrl } = data.items[0].snippet;
        const image = data.items[0].snippet.thumbnails.medium.url;
        const { subscriberCount, videoCount } = data.items[0].statistics;

        const youtubeData: YoutubeData = {
            title,
            description,
            customUrl,
            image,
            subscriberCount,
            videoCount,
            id
        };
        return <FollowCard info={youtubeData} />;
    }
    return <FollowCard info={getStaticProps} />;
};
export default StaticFollow