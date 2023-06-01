import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {NewComponents} from "./components/NewComponents";

export type filterType = "all" | "RUBLS" | "Dollars"

function App() {

    const Button1Foo = (money: filterType) => {
        setFilter(money)
    }

    const Button2Foo = (money: filterType) => {
        setFilter(money)
    }

    const Button3Foo = (money: filterType) => {
        setFilter(money)
    }

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<filterType>("all")

    let currentMoney = money;
    if (filter === "Dollars") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "Dollars")
    }
    if (filter === "RUBLS") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "RUBLS")
    }

    const onClickFilterHandler = (nameButton: filterType) => {
        setFilter(nameButton)
    }

    return (
        <>
            <NewComponents onClickFilterHandler={onClickFilterHandler} currentMoney={currentMoney}/>
            <div style={{display: "flex", marginLeft: '35px'}}>
                <Button name={"all"} callBack={() => Button1Foo("all")}/>
                <Button name={"RUBLS"} callBack={() => Button2Foo("RUBLS")}/>
                <Button name={"Dollars"} callBack={() => Button3Foo("Dollars")}/>
            </div>
        </>
    )
}
export default App;
