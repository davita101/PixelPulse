import React from 'react'
import { payingHeading, payingPremiumArray, payingStarter, payingStarterArray } from '../utils'
import { headingText } from '../utils/scratchStyles'
import IconRenderer from '../utils/IconRenderer'
import Button from './Button'

function Pricing() {
    return (
        <div className='bg-[#f9f9f9] md:p-[2rem] p-[1rem] mt-[1rem] z-[99] flex flex-col absolute lg:bottom-[-54rem]  md:bottom-[-100rem] bottom-[-105rem] pt-[2rem] justify-center w-full items-center'>
            {/* heading */}
            <div className='xl:w-[68rem] w-full justify-center flex flex-col gap-10 items-center'>
                <div className='lg:flex w-full sm:max-w-full max-w-[15rem] relative grid text-center flex-col gap-5'>
                    <h2 className={`${headingText[0].primaryHeadingSmall}`}>{payingHeading[0].h2}</h2>
                    <p className={`${headingText[0].secondaryParagraph} text-center`}>{payingHeading[0].p}</p>
                </div>
                {/* content container */}
                <div className='flex lg:flex-nowrap flex-wrap w-[100%] justify-between items-center gap-[2rem]'>
                    <div className='w-full'>
                        {/* first */}
                        <div className='grid gap-[3rem] w-[100%] bg-white rounded-2xl shadow-lg p-[1rem]'>
                            <div className='bg-black w-[6rem] p-[.2rem] rounded-full text-white text-center'>Starter</div>
                            <div className='w-full'>
                                <div className='text-[60px] flex  items-center font-bold gap-2'>$999 <span className='font-normal text-[24px]'>/mo</span></div>
                            </div>
                            <ul className='grid gap-3'>
                                {payingStarterArray.map((item, index) => (
                                    <div key={`${index}S`} className='flex gap-2'>
                                        <div className='rounded-full bg-orange-400 p-[.2rem] text-[1rem] text-white'>
                                            <IconRenderer img={payingStarter[0].icon} />
                                        </div>
                                        <li className={`${(index == 0 || index == 1) && "font-bold opacity-[1]"} opacity-[.8] sm:text-[16px] text-[15px]`}>{item}</li>
                                    </div>
                                ))}
                            </ul>
                            <div className='flex flex-col justify-center text-center gap-3 w-full'>
                                <Button value={"Subscribe"} className={"justify-center"} />
                                <h5>2 Spots avalable</h5>
                            </div>
                        </div>
                    </div>
                    {/* second */}
                    <div className='w-full'>
                        <div className='flex flex-col w-full gap-[3rem] bg-orange-100 rounded-2xl shadow-lg p-[1rem]'>
                            <div className='bg-black w-[6rem] p-[.2rem] rounded-full text-white text-center'>Premium</div>
                            <div className="w-full">
                                <div className='text-[60px] flex  items-center font-bold gap-2'>$2499 <span className='font-normal text-[24px]'>/mo</span></div>
                            </div>
                            <ul className='grid gap-3'>
                                {payingPremiumArray.map((item, index) => (
                                    <div key={index} className='flex gap-2'>
                                        <div className='rounded-full bg-orange-400 p-[.2rem] text-[1rem] text-white'>
                                            <IconRenderer img={payingStarter[0].icon} />
                                        </div>
                                        <li className={`${(index == 0 || index == 1) && "font-bold opacity-[1]"} opacity-[.8] sm:text-[16px] text-[15px]`}>{item}</li>
                                    </div>
                                ))}
                            </ul>
                            <div className='flex flex-col justify-center text-center gap-3 w-full'>
                                <Button value={"Subscribe"} className={"justify-center"} />
                                <h5>2 Spots avalable</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
