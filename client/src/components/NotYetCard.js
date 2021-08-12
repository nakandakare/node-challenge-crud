import React from 'react'

const NotYetCard = (props) => {
    return (
        <div className="notYetCard">
            <span>{props.children}</span>
        </div>
    )
}

export default NotYetCard
