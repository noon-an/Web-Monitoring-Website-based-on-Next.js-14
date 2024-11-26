import Image from 'next/image'
import Feature1 from '../../public/assets/feature-1.svg'
import Feature2 from '../../public/assets/feature-2.svg'
import Feature3 from '../../public/assets/feature-3.svg'
import Check from '../../public/assets/check.svg'
import Bluebutton from '../../public/assets/blue-button.svg'
import Greenbutton from '../../public/assets/green-button.svg'
import Pinkbutton from '../../public/assets/pink-button.svg'
export function Features () {
    return (
        <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
                <Image src={Feature1} alt='feature1 image' className='hidden w-1/2 sm:block'/>
                <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
                    <h3 className="font-medium text-[#0085FF] lg:text-[18px]">Sales Monitoring</h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026]lg:text[42px] leading-[58px]">Simplify your sales monitoring</h1>
                    <Image src={Feature1} alt='feature1 image' className='pt-[24px] sm:hidden'/>
                    <p className='py-[24px] text-[#36485C] lg:text-[18px]'>Stay ahead of the game and enhance your workflow with our innovative features. Get a comprehensive overview with our fully customizable dashboard.</p>
                    <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
                        <li className='flex items-center gap-x-2 text-[#36485C]'>
                            <span><Image src={Check} alt='checkmark'/> </span>
                            Innovative features
                        </li>
                        <li className='flex items-center gap-x-2 text-[#36485C]'>
                            <span><Image src={Check} alt='checkmark'/> </span>
                            Comprehensive overview
                        </li>
                        <li className='flex items-center gap-x-2 text-[#36485C]'>
                            <span><Image src={Check} alt='checkmark'/> </span>
                            Enhanced workflow
                        </li>
                    </ul>
                    <p className='flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px]'>
                        Learn More <span><Image src={Bluebutton} alt='blubutton'/></span>
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-x-6 sm:flex-row">
                <Image src={Feature2} alt='feature2 image' className='hidden w-1/2 sm:block'/>
                <div className='sm:w-1/2 lg:py-[56px] lg:pl-[56px]'>
                    <h3 className="font-medium text-[#00A424] lg:text-[18px]">Customer Support</h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026]lg:text[42px] leading-[58px]">Connect to your customers</h1>
                    <Image src={Feature2} alt='feature2 image' className='pt-[24px] sm:hidden'/>
                    <p className='py-[24px] text-[#36485C] lg:text-[18px]'>Connect with customers via intuitive onboarding, email, in-app messaging, and accessible support channels.</p>
                    <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
                        <li className='flex items-center gap-x-2 text-[#36485C]'>
                            <span><Image src={Check} alt='checkmark'/> </span>
                            Real-time alerts
                        </li>
                        <li className='flex items-center gap-x-2 text-[#36485C]'>
                            <span><Image src={Check} alt='checkmark'/> </span>
                            Incident management
                        </li>
                        <li className='flex items-center gap-x-2 text-[#36485C]'>
                            <span><Image src={Check} alt='checkmark'/> </span>
                            Performance analytics
                        </li>
                    </ul>
                    <p className='flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px]'>
                        Learn More <span><Image src={Greenbutton} alt='greenbutton'/></span>
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
                <Image src={Feature3} alt='feature3 image' className='hidden w-1/2 sm:block'/>
                <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
                    <h3 className="font-medium text-[#E04698] lg:text-[18px]">Growth Monitoring</h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026]lg:text[42px] leading-[58px]">Keep track of new users</h1>
                    <Image src={Feature3} alt='feature3 image' className='pt-[24px] sm:hidden'/>
                    <p className='py-[24px] text-[#36485C] lg:text-[18px]'>Track new user activity in your web monitoring app to gain insights into subscriber behavior, monitor sign-up trends, and optimize user engagement strategies.</p>
                    <div className='flex w-full gap-x-[24px]'>
                        <div className='w-1/2 flex flex-col gap-y-3'>
                            <h3 className='text-[20px] font-medium text-[#172026]'>100+</h3>
                            <p className='text-[#36485C]'>User retention metrics</p>             
                        </div>
                        <div className='w-1/2 flex flex-col gap-y-3'>
                            <h3 className='text-[20px] font-medium text-[#172026]'>800+</h3>
                            <p className='text-[#36485C]'>Conversion rates</p>             
                        </div>
                        <div>

                        </div>
                    </div>
                    <p className='flex items-center gap-x-2 pt-[24px] font-medium text-[#E04698] lg:text-[18px]'>
                        Learn More <span><Image src={Pinkbutton} alt='pinkbutton'/></span>
                    </p>
                </div>
            </div>
        </div>
    )
}