import React, {useState, useEffect} from 'react';

import {Button} from '../components/UI'
import {ColumnHeader, ColumnCard} from '../components'
import {IColumns, ICards} from "../typescript/interfaces";

const initCols = [
    {id: 1, title: "To do"},
    {id: 2, title: "In progress"},
    {id: 3, title: "PR created"}
]
const initCards = {
    1: [
        {id: 1, title: 'Title 1', description: '', date: new Date().toString()},
        {id: 3, title: 'Title 3', description: '', date: new Date().toString()}
    ],
    2: [
        {id: 2, title: 'Title 2', description: '', date: new Date().toString()},
        {id: 4, title: 'Title 4', description: '', date: new Date().toString()}
    ],
    3: []
}

const Taskboard = () => {
    const [columns, setColumns] = useState<IColumns[]>(initCols)
    const [cards, setCards] = useState<ICards>(initCards)

    useEffect(() => {
        const columns = JSON.parse(window.localStorage.getItem('columns') || "[]") as IColumns[]
        const cards = JSON.parse(window.localStorage.getItem('cards') || "{}") as ICards
        setColumns(columns)
        setCards(cards)
    }, []);

    useEffect(() => {
        window.localStorage.setItem('columns', JSON.stringify(columns))
        window.localStorage.setItem('cards', JSON.stringify(cards))
    }, [columns, cards]);

    return(
        <main className="container-fluid full-height--main main_gray-background">
            <div className="main-wrapper main-wrapper_taskboard">
                <h1>Task Manager</h1>
                <div className="main-wrapper_horizontal-scroll h-100">
                {columns.map(column => {
                    const cardsInColumn = cards[column.id]
                    return (
                        <div className="cards-column" key={column.id}>
                            <ColumnHeader
                                title={column.title}
                                cardsLen={cardsInColumn.length}/>
                            <Button
                                classes="btn btn--center btn--gray mb-1"
                                clickHandler={() => console.log('hah')}>
                                +
                            </Button>
                            {cardsInColumn.map(card => {
                                return <ColumnCard key={card.id} data={card} />
                            })}
                        </div>
                    )
                })}</div>
            </div>
        </main>
    )
}

export default Taskboard