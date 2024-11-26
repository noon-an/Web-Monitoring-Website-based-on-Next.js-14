import Image from "next/image";
import Logo from '../../public/assets/Logo.svg'
import Facebook from '../../public/assets/Facebook.svg'
import Twitter from '../../public/assets/X.svg'
import Feed from '../../public/assets/Feed.svg'

export function Footer () {
    return (
        <div className="pt-20 pb-10">
            <div className="flex items-center justify-center gap-x-3">
                <Image src={Logo} alt="logo"/>
                <button><p className="font-bold text-[#35485c] text-[17px]">WebSentinel</p></button>
            </div>
            <ul className="flex flex-col items-center gap-y-8 pt-14 text-[#35485c] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
                <button><li>Features</li></button>
                <button><li>Pricing</li></button>
                <button><li>Enterprise</li></button>
                <button><li>Careers</li></button>
            </ul>
            <p className="pt-14 text-center text-[14px]font-medium text-[#5f7896] sm:pt-5">&copy; Copyright 2024. WebSentinel. All rights reserved</p>
            <div className="flex items-center justify-center gap-x-14 pt-10">
            <button><Image src={Facebook} alt="Facebook"/></button>
            <button><Image src={Twitter} alt="Twitter"/></button>
            <button><Image src={Feed} alt="Feed"/></button>
            </div>
        </div>
    );
    
}