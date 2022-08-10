import React from "react";

import {CardData} from "../../typescript/types";

import './ColumnCard.scss'
import user from "../../static/img/user.jpg";

const ColumnCard: React.FC<{data: CardData}> = ({data}) => {
    const {id, title, description, date} = data

    return (
        <div className="list-card">
            <span>{title}</span>
            <div className="list-card-footer list-card-footer_margin-top-1">
                <img src={user} alt="" width="24" height="24" className="user-icon" />
                <div>
                    <span>{date}</span>
                </div>
            </div>
        </div>
    )
}

export default ColumnCard