import Link from "next/link";
import Image from 'next/image'
import webtoolsDescription from "@/data/webtoolsDescription.json";
import { debug } from "console";

const ToolsCard = ({ item }: { item: number }) => {

    interface WebtoolsDescription {
        key: number;
        value: { title: string, description: string, imgurl: string, link: string };
    }

    const filteredData = webtoolsDescription as WebtoolsDescription[];

    const webtool = () => {
        if (item) {
            return filteredData.find(({ key }) => key === item)?.value as any;
        }
        else {
            return 'Loading...'
        }
    }
    const info = webtool();

    function isExternalLink(imgurl: string) {
        return imgurl.startsWith('http://') || imgurl.startsWith('https://');
    }

    return (
        <div>
            <Link href={info.link} rel="noopener noreferrer" target="_blank">
                <div className="flex flex-row items-center px-8 w-full border-2 bg-dark-bg rounded-lg border-neutral-800 py-6 my-4 group/item transition-all duration-300 ease-out hover:bg-neutral-900 hover:border-sky-200 hover:border-opacity-25">
                    <div className="w-40 h-fit">
                        <div className={`text-s font-mono rounded-full border-2 border-emerald-400 bg-dark-bg overflow-clip w-40 h-40 font-light transition-all duration-300 group-hover/item:shadow-glow group-hover/item:shadow-emerald-300/30 group-hover/item:`}>
                            {
                                isExternalLink(info.imgurl) ?
                                    <img
                                        src={info.imgurl}
                                        alt={info.title}
                                        width={200}
                                        height={200}
                                    /> :
                                    <Image
                                        src={info.imgurl}
                                        width={200}
                                        height={200}
                                        alt={info.title}
                                    />
                            }
                        </div>
                    </div>
                    <div className="flex flex-col w-full pl-8 font-light">
                        <div className="text-lg font-mono mb-2 w-full font-light text-sky-200 group-hover/item:text-xl duration-200">{info.title}</div>
                        <div className="text-sm w-full mb-2 font-sans italic font-light">Channel description:</div>
                        <div className="text-sm border-2 border-neutral-800 rounded-lg pr-2 font-sans h-24 transition-all duration-300 ease-out overflow-hidden hover:overflow-y-auto scrollbarSmall w-full p-2 font-light">{info.description}</div>
                    </div>
                </div>
            </Link>
        </div >
    );
}
export default ToolsCard;
