import React from 'react'
import { featuresHeading } from '../utils'
import { headingText } from '../utils/scratchStyles'
import { Box } from "./"
function Features() {
    return (
        <div className='sm:pt-[3rem] flex flex-col items-center pt-[2rem] sm:pb-[3rem] pb-[3rem] mt-[5rem] bg-[#f9f9f9]'>
            <div className='max-w-[75rem] flex flex-col justify-center items-center gap-5 sm:p-0 p-[1rem] text-center font-normal'>
                <h2 className={`${headingText[0].primaryHeadingSmall} max-w-[80rem] text-center`}>{featuresHeading[0].h2}</h2>
                <Box />
            </div>
        </div>
    )
}

export default Features
