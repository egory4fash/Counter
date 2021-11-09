import React from "react";


type ButtonType = {
    title: string
    callBack: () => void
    offMode: boolean
}
export const Button = (props: ButtonType) => {
    return (
        <button
            className = {props.offMode ? "off" : ""}
            disabled={props.offMode}
            onClick={props.callBack}>
            {props.title}
        </button>
    )
}