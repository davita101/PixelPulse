import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

function Button() {

    return (
        <div className='btn--color--1 cursor-pointer z-[2] flex items-center '>
            <span>Book a call</span>
            <BsArrowRight className='text-[1.2rem] arrow absolute' />
        </div>
    )
}

export default Button
