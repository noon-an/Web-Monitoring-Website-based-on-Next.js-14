import Image from "next/image";
import Check from '../../public/assets/check.svg'

export function Pricing() {
    return (
        <div className="py-[48px] lg:py-[60px]">
        <h1 className="text-[#172026] text-center text-[24px] font-medium text-2xl lg:text-[42px]">Tailored plans to suit your needs</h1>
        <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]">Transparent pricing, no surprises</p>
        <div className="flex flex-col gap-x-[24px] gap-y-6 lg:flex-row">
            <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
                <div>
                    <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">Subscribe Trial</h3>
                    <p className="pt-[12px] text-[#36485C] lg:text-[18px]">Great for trying things out</p>
                    <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">0$<span className="text-[#5F7896]">/month</span></h2>
                    <ul className="flex flex-col gap-y-2 pt-4 text-[#5f7896]">
                        <li className="flex items-center gap-x-2">
                        <span>
                        <Image src={Check} alt="checklist" />
                        </span>
                        Cancel subscription at any time 
                        </li>
                        <li className="flex items-center gap-x-2">
                        <span>
                        <Image src={Check} alt="checklist" />
                        </span>
                        Access premium features 
                        </li>
                        <li className="flex items-center gap-x-2">
                        <span>
                        <Image src={Check} alt="checklist"/>
                        </span>
                        24/7 Support available
                        </li>
                    </ul>
                </div>
                <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">Subscribe</button>
            </div>
            <div className="w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col lg:justify-between">
                <div>
                    <h3 className="font-medium text-white text-[18px] lg:text-xl">Business</h3>
                    <p className="pt-[12px] text-[#f4f8fa] lg:text-[18px]">Great for small businesses</p>
                    <h2 className="pt-4 text-2xl font-medium text-white lg:text-[32px]">500$<span className="text-[#f4f8fa]">/month</span></h2>
                    <ul className="flex flex-col gap-y-2 pt-4 text-[#f4f8fa]">
                        <li className="flex items-center gap-x-2">
                        <span>
                        <Image src={Check} alt="checklist"/>
                        </span>
                        Early access to premium features
                        </li>
                        <li className="flex items-center gap-x-2">
                        <span>
                        <Image src={Check} alt="checklist" />
                        </span>
                        Customizable options 
                        </li>
                        <li className="flex items-center gap-x-2">
                        <span>
                        <Image src={Check} alt="checklist" />
                        </span>
                        Priority support
                        </li>
                        <li className="flex items-center gap-x-2">
                        <span>
                        <Image src={Check} alt="checklist" />
                        </span>
                        Advanced AI tools for analytics
                        </li>
                        <li className="flex items-center gap-x-2">
                        <span>
                        <Image src={Check} alt="checklist" />
                        </span>
                        Ehnanced notification channels
                        </li>
                    </ul>
                </div>
                <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">Get started</button>
            </div>
            <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
                <div>
                    <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">Enterprise</h3>
                    <p className="pt-[12px] text-[#36485C] lg:text-[18px]">Great for big companies</p>
                    <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">Custom</h2>
                    <p className="pt-4 text-[16px] text-[#36485c]">Cater to the unique needs of your company through advanced analytics, seamless integration with existing systems, robust security, scalable infrastructure, and flexible user management.</p>
                    <p className="pt-4 text-[16px] text-[#36485c]"> With tailored solutions, priority support, and dedicated account management, these features enhance productivity, security, and scalability to meet unique business needs.</p>
                </div>
                <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">Contact us</button>
            </div>
        </div>
        </div>
    );
}