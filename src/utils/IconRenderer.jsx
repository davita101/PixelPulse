import React from 'react'
function IconRenderer(props) {
    const Icon = props.img
    return (
        <div>
            <img src={props.img} alt={props.title} title={props.title} />
        </div>
    )
}

export default IconRenderer
