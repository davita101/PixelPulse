import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

function Button(props) {

    return (
        <div className={`btn--color--1  cursor-pointer relative flex items-center ${props.className}`}>
            <span >{props.value ? props.value : "Book a call"}</span>
            <BsArrowRight className='text-[1.2rem] arrow absolute' />
        </div>
    )
}

export default Button
