"use client";
import * as Accordion from "@radix-ui/react-accordion";
import Plus from '../../public/assets/Plus.svg';
import Image from "next/image";

const items = [
    {
        question: "What does a web monitoring app do?",
        answer: "A web monitoring app tracks the performance, uptime, and functionality of your website or server, ensuring smooth operation and alerting you to issues like downtime or slow response times."
    },
    {
        question: "How do I set up monitoring for my website?",
        answer: "After creating an account, navigate to the dashboard, click 'Add New Monitor,' input your website’s URL, and configure settings such as check frequency and alert preferences."
    },
    {
        question: "Can I monitor multiple websites or servers?",
        answer: "Yes, you can monitor as many as your subscription plan allows. Upgrade for more capacity if needed."
    },
    {
        question: "What does a web monitoring app do?",
        answer: "A web monitoring app tracks the performance, uptime, and functionality of your website or server, ensuring smooth operation and alerting you to issues like downtime or slow response times."
    },
];

export function Faq() {
    return (
        <div className="flex flex-col w-full py-[48px] lg:py-[16px] lg:flex-row lg:gap-x-6">
            <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
                <h3 className="text-[#E04698] text-[14px] font-medium lg:text-base">Frequently Asked Questions</h3>
                <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">Get answers to your questions</h1>
                <p className="text-[#36485C] pb-[24px]">
                    Obtain answers to the most pressing questions as you navigate the application.
                </p>
            </div>
            <div className="lg:w-2/3">
                <Accordion.Root
                type="single"
                defaultValue="item-1"
                collapsible
                className="flex flex-col gap-y-4">
                    {items.map((item, index)=>(
                        <div key={index}>
                            <Accordion.Item value={`item-${index + 1}`} className="bg-[#E3F1FF] p-[16px] rounded-[8px]">
                              <Accordion.Header>
                                <Accordion.Trigger className="flex w-full items-center justify-between">
                                    <p className="text-left font-medium text-[#172826] lg:text-[18px]">{item.question}</p>
                                    <span>
                                     <Image src={Plus} alt="see more" className="h:10 w-10 lg:h-5 lg:w-5"/> 
                                    </span> 
                                </Accordion.Trigger>
                              </Accordion.Header>
                                <Accordion.Content>
                                    <p className="pt-2 text-[#36485C]">{item.answer}</p>
                                </Accordion.Content>  
                            </Accordion.Item>
                        </div>
                    ))}
                </Accordion.Root>
            </div>
        </div>
    )
}