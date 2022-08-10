import React from "react";

import './ColumnHeader.scss'

const ColumnHeader:React.FC<{title: string, cardsLen: number}> = ({title, cardsLen}) => {
    return (
        <div className="cards-column--head">
            <span className="cards-column--title">{title}</span>
            <span className="cards-column--length">{cardsLen}</span>
        </div>
    )
}

export default ColumnHeader