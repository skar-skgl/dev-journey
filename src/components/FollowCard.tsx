import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import followDescription from '@/data/followDescription.json';

const FollowCard = ({ info }: { info: any }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (info) {
            setLoaded(true)
        }
    }, [info]);

    function GetShortSubscriberCount(subscriberCountString: string) {
        const subscriberCountRegex = /^(\d+)$/;
        const match = subscriberCountString.match(subscriberCountRegex);

        if (match) {
            const subscriberCount = parseInt(match[1], 10);
            const shortSubscriberCount = subscriberCount / 1000;
            const shortSubscriberCountString = `${shortSubscriberCount.toFixed(0)}k`
            return shortSubscriberCountString;
        }
        else {
            return info.subscriberCount;
        }
    }

    interface MyDescription {
        key: string;
        value: string;
    }

    const filteredData = followDescription as MyDescription[];
    const result = () => {
        if (info) {
            return filteredData.find(({ key }) => key === info.id)?.value;
        }
        else {
            return 'Loading...'
        }
    }


    return (
        <div>
            {
                loaded ? (
                    <Link href={'https://www.youtube.com/' + info.customUrl} rel="noopener noreferrer" target="_blank">
                        <div className={`flex flex-row opacity-0 items-center px-8 w-full border-2 bg-dark-bg rounded-lg border-neutral-800 py-6 my-4 group/item transition-all duration-300 ease-out ${loaded ? 'opacity-100 border-opacity-100' : 'opacity-0 border-opacity-0'
                            } hover:bg-neutral-900 hover:border-sky-200 hover:border-opacity-25`}>
                            <div className="text-s font-mono w-40 h-fit font-light">
                                <div className={`text-s font-mono rounded-full border-2 border-emerald-400 bg-dark-bg overflow-clip w-40 h-40 font-light transition-all duration-300 group-hover/item:shadow-glow group-hover/item:shadow-emerald-300/30 group-hover/item:`} >
                                    <Image
                                        src={info.image}
                                        width={200}
                                        height={200}
                                        alt={info.title}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col w-full pl-8 font-light">
                                <div className="text-lg font-mono mb-2 w-full font-light text-sky-200 group-hover/item:text-xl duration-200">{info.title}</div>
                                <div className="text-sm w-full mb-2 font-sans italic font-light">Channel description:</div>
                                <div className="text-sm border-2 border-neutral-800 rounded-lg pr-2 font-sans h-24 transition-all duration-300 ease-out overflow-hidden hover:overflow-y-auto scrollbarSmall w-full p-2 font-light">{info.description}</div>
                            </div>
                            <div className="basis-1/4 flex self-end h-24 flex-row ml-2 border-neutral-800 justify-end">
                                <div className="flex flex-row border-2 border-neutral-800 px-5 rounded-lg">
                                    <div className="text-xl self-center font-mono w-full">{info.videoCount}</div>
                                    <div className="text-md pl-2 self-center font-mono w-full font-light">videos</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ) : (
                    <Link href='#' rel="noopener noreferrer" target="_blank">
                        <div className={`flex flex-row items-center opacity-0 px-8 w-full border-2 border-neutral-800 py-6 my-4 group/item transition-opacity duration-500 delay-100 ease-out hover:bg-neutral-900 hover:border-sky-200 hover:border-opacity-25`}>
                            <div className="text-s font-mono w-40 h-fit font-light">
                                <div className="text-s font-mono rounded-full border-2 bg-dark-bg border-emerald-400 overflow-clip w-40 h-40 font-light group-hover/item:shadow-glow group-hover/item:shadow-emerald-300/30 group-hover/item:">
                                </div>
                                <p className='text-center pt-2'>''</p>
                            </div>
                            <div className="text-s font-mono w-full pl-8 font-light grow">''</div>
                        </div>
                    </Link>
                )
            }
        </div >
    );
}
export default FollowCard