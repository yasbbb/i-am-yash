import Link from "next/link"

interface SocialIconProps {
    url: string,
    icon: React.ReactNode
}
const SocialIcon = ({ url, icon }: SocialIconProps) => {
    return (
        <div>
            <Link href={url} target="_blank">
                {icon}
            </Link>
        </div>
    )
}

export default SocialIcon;