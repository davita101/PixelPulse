import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { heroImagesFirst, heroImagesSecond } from '../utils';
import "./InfiniteLooper.css"
function InfiniteLooper() {
  const [amount, setAmount] = useState(5)
  useEffect(() => {

    window.addEventListener('rewindow.innerWidth', () => {
      if (window.innerWidth <= 640) {
        setAmount(2)
      } else if (window.innerWidth >= 1850 && window.innerWidth <= 2550) {
        setAmount(3)

      }
      else if (window.innerWidth >= 2550) {
        setAmount(7)
        console.log('sss')
      }
      else {
        setAmount(3)
      }
    }
    )
    if (window.innerWidth <= 640) {
      setAmount(2)
    } else if (window.innerWidth >= 1850 && window.innerWidth <= 2550) {
      setAmount(3)

    }
    else if (window.innerWidth >= 2550) {
      setAmount(7)
      console.log('sss')
    }
    else {
      setAmount(3)
    }
    gsap.fromTo("#X > img",
      {
        x: 0
      },
      {

        x: window.innerWidth >= 640 ? ((-360 - 16) * 4) : ((-320 - 16) * 4),
        repeat: -1,
        duration: 10,
        ease: "none"

      });
    gsap.fromTo("#Y > img",
      {
        x: window.innerWidth >= 640 ? ((-360 - 16) * 4) : ((-320 - 16) * 4),
      },
      {
        x: 0,
        repeat: -1,
        ease: "none",
        duration: 10,
      });
  }, [amount]);

  return (
    <div className='flex pt-[3rem] flex-col gap-[1rem]'>
      <div id='X' className='mask--white overflow-hidden gap-[16px] flex transition-transform duration-500'>
        {Array.from({ length: amount }).map((_, index) => (
          <React.Fragment key={index}>
            {heroImagesFirst.map((item, i) => (
              <img key={i} src={item.img} alt={item.title} className='sm:w-[360px] w-[320px] sm:h-[360px] h-[320px] rounded-xl object-cover' />
            ))}
          </React.Fragment>
        ))}
      </div>
      <div id='Y' className='mask--white overflow-hidden gap-[16px] flex transition-transform duration-500'>
        {Array.from({ length: amount }).map((_, index) => (
          <React.Fragment key={index}>
            {heroImagesSecond.map((item, i) => (
              <img key={i} src={item.img} alt={item.title} className='sm:w-[360px] w-[320px] sm:h-[360px] h-[320px] rounded-xl object-cover' />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default InfiniteLooper;
