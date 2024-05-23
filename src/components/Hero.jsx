import { hero, heroImagesFirst } from '../utils'
import { headingText } from '../utils/scratchStyles'
import { Button } from './'
import InfiniteLooper from './InfiniteLooper'
function Hero() {
    return (
        <div className='sm:pt-[7rem] flex justify-center flex-col items-center pt-[4rem]'>
            <div className='w-full max-w-[75rem] flex flex-col justify-center items-center gap-5 sm:p-0 p-[2rem] text-center font-normal'>
                <h1 className={`${headingText[0].primaryHeadingLarge} max-w-[80rem] text-center`}>{hero[0].h1}</h1>
                <p className={`${headingText[0].secondaryParagraph}`}>{hero[0].p}</p>
                <Button />
            </div>
            <InfiniteLooper />
        </div>
    )
}

export default Hero