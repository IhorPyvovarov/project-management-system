import {CardData} from "./types";

export interface IColumns {
    id: number,
    title: string
}

export interface ICards {
    [columnId:number] : CardData[]
}