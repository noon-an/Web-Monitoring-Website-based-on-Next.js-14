import Image from 'next/image';
import Arrow from '../../public/assets/arrow.png'

export function Cta (){
   return (
    <div className="w-full rounded-[16px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-[56px] px-[32px] text-center lg:my-[60px] lg:px-[324px] lg:py-[89px]">
        <h1 className="text-white text-[32px] font-medium lg:text-[56px] leading-[64px]">Control your website like an expert</h1>
        <p className="text-white pt-6 lg:pt-12 lg:text-[18px]">Join over 800 satisfied site owners enhancing productivity and efficiency</p>
        <div className="mt-10 flex flex-col w-full items-center font-medium lg:mt-[56px] lg:flex-row lg:justify-center lg:gap-x-10">
         <button className="py-4 px-8 bg-white rounded text-pink-500 w-fit">Subscribe</button>
         <button className="flex w-full items-center justify-center gap-x-3 mt-8 text-white font-medium lg:w-fit lg:mt-0">Contact Sales <span><Image src={Arrow} alt="check"/></span></button>
        </div>
    </div>
    );
}