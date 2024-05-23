import React from 'react'
function IconRenderer(props) {
    const Icon = props.img
    return (
        <div>
            <Icon className={props.class} alt={props.alt} />
        </div>
    )
}

export default IconRenderer
