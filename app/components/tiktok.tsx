import Link from "next/link";

interface TikTokProps {
    id: number,
    url: string
}

const TikTok = ({ id, url }: TikTokProps) => {
    return (
            <div className="w-1/4 h-full">
                <Link href={url} target="_blank">
                    <img
                        className="w-full h-full rounded-3xl object-cover transition-all duration-300 hover:p-5"
                        src={`/tiktok${id}.png`}
                    />
                </Link>
            </div>
    )
}

export default TikTok;