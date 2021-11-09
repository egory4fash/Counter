import React, {useState} from "react";
import {Counter} from './Counter'
import {Button} from "./Button";


export const Display = () => {
    let maxNum = 5
    let minNum = 0
    let [num, setNum] = useState(minNum)



    const increaseNum = () => {
        if (num < maxNum) {
            setNum(num + 1)
        }
    }

    const resetNum = () => {
        setNum(minNum)
    }

    const incOff = num===maxNum
    const resetOff = num===minNum

    return (
        <div>
            <Counter num={num}
            maxNum={maxNum}/>
            <div>
                <Button
                    title="inc"
                    callBack={increaseNum}
                offMode={incOff}/>
                <Button
                    title="reset"
                    callBack={resetNum}
                offMode={resetOff}/>
            </div>
        </div>
    )
}