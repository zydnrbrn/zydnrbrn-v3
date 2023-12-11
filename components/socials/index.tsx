import Link from "next/link";
import { GithubLogo, InstaLogo, MailLogo, MediumLogo } from "../icons";

export default function Socials() {
    return (
        <div className="flex gap-1">
            <Link href={'https://github.com/zydnrbrn'}>
                <GithubLogo size={25} />
            </Link>
            <Link href={'mailto:zidanreborn@gmail.com'}>
                <MailLogo size={25} />
            </Link>
            <Link href={'https://www.instagram.com/zydnrbrn/'}>
                <InstaLogo size={25} />
            </Link>
            <Link href={'https://medium.com/@zydnrbrn'}>
                <MediumLogo size={25} />
            </Link>
        </div>
    )
}