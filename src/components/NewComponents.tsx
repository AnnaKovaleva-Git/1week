import React from "react";
import {filterType} from "../App";

type MoneyType = {
    banknots: string
    value: number
    number: string
}

type PropsType = {
    currentMoney: MoneyType[]
    onClickFilterHandler: (value: filterType) => void
}
export const NewComponents = (props: PropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })
                }</ul>
        </>
    )
}