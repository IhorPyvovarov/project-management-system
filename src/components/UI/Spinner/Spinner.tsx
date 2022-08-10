import React from 'react'

import './Spinner.scss'

const Spinner = () => {
    return (
        <div className="spinner">
            <div className="spinner--border spinner--border_green"></div>
            <div className="spinner--border spinner--border_blue"></div>
            <div className="spinner--border spinner--border_red"></div>
        </div>
    )
}

export default Spinner