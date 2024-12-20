import Image from "next/image";
import Logo from '../../public/assets/Logo.svg'
import User from '../../public/assets/User.svg'
import Menu from '../../public/assets/Menu.svg'

const navLinks = [
{name: "Features"},
{name: "Pricing"},
{name: "Enterprise"},
{name: "Careers"},
];

export function Navbar () {
    return (
        <nav className="flex w-full items-center justify-between px-20 py-16 lg:container lg:mx-auto lg:px-20">
            <div className="flex items-center">
                <button><Image src={Logo} alt="Logo"/></button>
                <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
                    {navLinks.map((item, index) => (
                        <p className="text-[#36485C] font-medium  " key={index}>{item.name}</p>
                    ))}
                </div>
            </div>

            <div className="flex gap-x-5">
                <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">Open Account</p>
                <div className="flex items-center gap-x-2">
                    <button><Image src={User} alt="User profile" /></button>
                    <span className="hidden font-medium text-[#36485C] lg:block">Sign in</span>
                </div>
                <div>
                    <Image src={Menu} alt="Menu button" className="lg:hidden" />
                </div>
            </div>
        </nav>
    )
}