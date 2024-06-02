import { useState } from 'react'
import { FQAsArray, FQAsHeading } from '../utils'
import { headingText } from '../utils/scratchStyles'
import IconRenderer from '../utils/IconRenderer'

function FQAs() {
    const [indexSaver, setIndexSaver] = useState([])
    const toggleIndex = (index) => {
        setIndexSaver(prevIndex =>
            prevIndex.includes(index) ? prevIndex.filter(item => item !== index) : [...prevIndex, index]
        )
    }
    return (
        <div className='lg:mt-0 mt-[45rem] sm:mb-[0] mb-[5rem] p-[2rem] flex justify-center items-center flex-col bg-white'>
            <div className='w-full mt-[6rem] relative  xl:w-[68rem]'>
                <div className=' justify-between flex flex-col text-center gap-[1rem] sm:p-0 p-[1rem] font-normal'>
                    <h2 className={`${headingText[0].primaryHeadingSmall} `}>{FQAsHeading[0].h2}</h2>
                    <p className={`${headingText[0].secondaryParagraph}`}>{FQAsHeading[0].p}</p>
                </div>
                <div className='mt-[3rem] w-full'>
                    <ul className='grid gap-[1rem] w-full'>
                        {FQAsArray.map((item, index) => (
                            <div onClick={() => toggleIndex(index)} key={index} className={` ${indexSaver.includes(index) ? "bg-gray-100/50" : "bg-white"} transition-all shadow overflow-hidden shadow-gray-500/40  w-full py-[24px] px-[32px] flex flex-col rounded-2xl cursor-pointer`}>
                                <div className='flex justify-between w-full h-full'>
                                    <h3 className='font-bold opacity-[.8]'>{item.h3}</h3>
                                    <IconRenderer img={FQAsHeading[0].icon} class={`text-[1rem] text-orange-400 transition-all transform-gpu ${(indexSaver.includes(index)) ? "rotate-45" : "rotate-90"}`} />
                                </div>
                                <div className='transition-all max-w-[60rem] opacity-[.8]'>
                                    {!indexSaver.includes(index) ? <div className=' transition-all h-[0]'>
                                        <p className={`opacity-[0] transition-all`} >{item.p}</p>
                                    </div> : indexSaver.includes(index) && <div className={` transition-all duration-500 lg:h-[80px] sm:h-[150px] h-[350px] `}>
                                        <p className={`opacity-[.7] transition-all ${(index != 0 && index != 1) ? "pt-[1rem]" : "pt-[1.5rem]"}  `} >{item.p}</p>
                                    </div>}
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default FQAs
