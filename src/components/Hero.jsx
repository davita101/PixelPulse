import { hero, heroImagesFirst } from '../utils'
import { headingText } from '../utils/scratchStyles'
import InfiniteLooper from './InfiniteLooper'
function Hero() {
    return (
        <div>
            <div className='w-full flex flex-col justify-center items-center gap-5'>
                <h1 className={`${headingText[0].primaryHeadingLarge} max-w-[80rem] text-center`}>{hero[0].h1}</h1>
                <p className={`${headingText[0].secondaryParagraph}`}>{hero[0].p}</p>
            </div>
            <div id='imgUp' className='flex  overflow-hidden '>
                <div className='flex gap-[2rem] object-fill object-center w-[360px] h-[360px]  mt-[2rem]'>
                    {heroImagesFirst.map((item, index) => (
                        <img className='rounded-2xl object-cover w-full h-[full] ' src={item.img} alt={item.title} title={item.title} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Hero