import React, { useEffect, useRef, useState } from 'react'
import { navBar } from '../utils'
import { headingText } from '../utils/scratchStyles'
import { AiFillCompass } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { gsap } from 'gsap'
import { Link as LinkScroll } from 'react-scroll'



function Header() {
    const [click, setClick] = useState(false)
    const [scrollY, setScrollY] = useState(0)
    const [hidden, setHidden] = useState('hidden')
    if (!click) {
        setTimeout(() => {
            setHidden('hidden')
        }, 500)
    } else {
        setTimeout(() => {
            setHidden('flex')
        }, .001)
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollY(window.scrollY)
        })

        if (click) {
            gsap.to("#navLinks > div", {
                opacity: 1,
                y: 0,
                stagger: { amount: .6 },
                duration: .3,

            });
            gsap.fromTo("#navLinks", {
                opacity: 0,
                y: -500,
                duration: .3,
                ease: "back.in"

            }, {
                opacity: 1,
                y: 0,
                stagger: { amount: .6 },
                duration: .3,
                ease: "back.in"

            });

        } else {
            gsap.to("#navLinks > div", {
                opacity: 1,
                opacity: 0,
                stagger: { amount: .6 },
                duration: .3,
            });
            gsap.fromTo("#navLinks", {
                opacity: 1,
                y: 0,
                duration: .3,
                ease: "back.out",

            }, {
                opacity: 1,
                y: -500,
                stagger: { amount: .6 },
                ease: "back.out",
                duration: .3,
            });

        }
    }, [click])
    return (
        <div className={`lg:px-[10rem] lg:bg-white px-0 fixed w-full lg:p-5 p-0 flex lg:flex-row flex-col justify-between top-0 items-center  ${(!click && (scrollY < 230)) ? 'z-[99]' : `z-[99]`}`}>
            {/* Logo */}
            <div className='flex lg:bg-transparent lg:p-0 p-5 bg-white justify-between lg:w-[120px] w-full relative z-[2]'>
                <LinkScroll
                    activeClass="active"
                    to={`${navBar[0].link}`}
                    spy={true}
                    smooth={true}
                    duration={1}
                >
                    <div className={`${headingText[0].flexCenter} gap-1 cursor-pointer bg-white`}>
                        <AiFillCompass className='text-[2rem] text-orange-500' />
                        <h2 className={`${headingText[0].secondaryHeading}  font-medium`}>PixelPulse</h2>
                    </div>
                </LinkScroll>
                <div
                    onClick={() => { setClick(!click) }}
                    className='lg:hidden cursor-pointer'>
                    {!click ? <FaBars className='text-[1.5rem] transition-all opacity-1' />
                        : <FaX className={`text-[1.5rem] transition-all ${click ? "opacity-1" : "opacity-0"}`} />}
                </div>
            </div>
            {/* lists */}
            {/* Desktop */}
            <ul className='lg:flex hidden gap-5 '>
                {navBar.map((item, index) => (
                    <div
                        className={`${headingText[0].secondaryParagraph}  ul-container opacity-[1] font-normal cursor-pointer`}
                        key={index}>
                        <LinkScroll
                            activeClass="active"
                            to={`${item.link}`}
                            spy={true}
                            smooth={true}
                            duration={1}
                        >
                            <li>{item.name}</li>
                        </LinkScroll>
                        <div className='line' />
                    </div>
                ))}
            </ul>
            {/* Mobile */}
            <ul id="navLinks" className={` lg:hidden bg-white w-[100vw] text-[2em] pb-5 border-b-2 border-orange-400 justify-center items-center flex overflow-hidden ${(!click) && hidden} cursor-pointer font-seminormal gap-4 transition-all flex-col shadow-sm shadow-orange-100`}>
                {navBar.map((item, index) => (
                    <div
                        className={`${headingText[0].secondaryHeading}  ul-container opacity-[1] cursor-pointer`}
                        key={index}>
                        <LinkScroll
                            onClick={() => setClick(false)}
                            activeClass="active"
                            to={`${item.link}`}
                            spy={true}
                            smooth={true}
                            duration={1}
                        >
                            <li>{item.name}</li>
                        </LinkScroll>
                        <div className='line' />
                    </div>
                ))}
                <div>

                    <Link className='lg:hidden block'>
                        <div className={`border-[1px] border-orange-400 ${headingText[0].secondaryHeading} transition-all font-normal px-[1.5rem] py-[.5rem] rounded-full btn--color`}>
                            Get Template
                        </div>
                    </Link>
                    <Link className='hidden'>
                        <div className={`border-[1px] border-orange-400 ${headingText[0].secondaryHeading} transition-all font-normal px-[1.5rem] py-[.5rem] rounded-full btn--color`}>
                            Get Template
                        </div>
                    </Link>
                </div>

            </ul>
            {/* Button */}
            {/* Desktop */}
            <Link className='lg:flex hidden'>
                <div className={`border-[1px] border-orange-400 ${headingText[0].secondaryHeading} transition-all font-normal px-[1.5rem] py-[.5rem] rounded-full btn--color`}>
                    Get Template
                </div>
            </Link>
            <Link className='hidden'>
                <div className={`border-[1px] border-orange-400 ${headingText[0].secondaryHeading} transition-all font-normal px-[1.5rem] py-[.5rem] rounded-full btn--color`}>
                    Get Template
                </div>
            </Link>
        </div >
    )
}

export default Header
