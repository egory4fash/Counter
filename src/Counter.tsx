import React from "react";


type CounterPropsType={
    num: number
    maxNum: number
}

export const Counter = (props: CounterPropsType) => {
    return (
        <h1 className= {props.num <props.maxNum ? "norm" : "red"}> {props.num} </h1>
    )
}