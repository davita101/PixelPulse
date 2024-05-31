import React, { useEffect } from 'react'
import { communityArray, communityHeading } from '../utils'
import { headingText } from "../utils/scratchStyles"
import IconRenderer from '../utils/IconRenderer'
import "./InfiniteLooper.css"
import gsap from 'gsap'
function community() {
    useEffect(() => {

        gsap.fromTo("#Cont > div",
            {
                x: 0
            },
            {
                x: `${(-398 - 16) * 4}px`,
                repeat: -1,
                duration: 25,
                ease: 'none'
            })

        return () => {

        }
    }, [])

    return (
        <div className='bg-[#f9f9f9] w-[98vw] pb-[1rem] sm:m-[0] flex flex-col justify-center items-center mb-[30rem]'>
            <div className='w-full mt-[6rem] relative  xl:w-[68rem]'>
                <div className=' justify-between flex flex-col text-center gap-[1rem] p-0 sm:p-[1rem] font-normal'>
                    <h2 className={`${headingText[0].primaryHeadingSmall} `}>{communityHeading[0].h2}</h2>
                    <p className={`${headingText[0].secondaryParagraph}`}>{communityHeading[0].p}</p>
                </div>

            </div>
            <div className='flex xl:w-[68rem] h-full w-full mask--white--v1 overflow-hidden p-[1rem]'>
                <div id={`Cont`} className='flex gap-[16px] w-full h-[380px] overflow-hidden'>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <React.Fragment key={index}>
                            {communityArray.map((item, index) => (
                                <div key={index} className=' rounded-xl justify-between bg-white h-[360px] p-[1.5rem] flex flex-col shadow-lg gap-[1rem]'>
                                    <div className='text-[1.5rem] text-orange-400 flex gap-[.7rem]'>
                                        <IconRenderer img={communityHeading[0].img} />
                                        <IconRenderer img={communityHeading[0].img} />
                                        <IconRenderer img={communityHeading[0].img} />
                                        <IconRenderer img={communityHeading[0].img} />
                                        <IconRenderer img={communityHeading[0].img} />
                                        <IconRenderer img={communityHeading[0].img} />
                                    </div>
                                    <div className='w-[350px]'>
                                        <p className='opacity-[.8]'>{item.p}</p>
                                    </div>
                                    <div className='flex gap-[1rem] w-[350px]'>
                                        <div className='w-[3rem] h-[3rem] rounded-full overflow-hidden'>
                                            <img src={item.img} alt={item.h4} className='w-full h-full object-cover' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <h4 className='font-bold fs-secondary-300'>{item.title}</h4>
                                            <span className='opacity-[.5] fs-secondary-200'>{item.span}</span>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </React.Fragment>
                    ))}

                </div>

            </div>

        </div>
    )
}

export default community
