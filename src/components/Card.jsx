import React from 'react'

import './Card.css'

const color = (props) => {
    if (props.red) return 'Red'
    if (props.green) return 'Green'
    if (props.blue) return 'Blue'
    if (props.purple) return 'Purple'
}

export default props => {

    return (
        <div className={`Card ${color(props)}`}>
            <div className='Header'>
                <span className='Title'>{ props.title }</span>
            </div>
            <div className='Content'>
                { props.children }
            </div>
        </div>
    )
}