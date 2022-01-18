import React, { useState } from "react"

export default function Test() {
    const [clicked, setClicked] = useState(false)
    const emptyBtn = ' border-outline-none bg-none'
    const down = 'arrow down' + emptyBtn
    const up = 'arrow up' + emptyBtn
    const handleClick = ({target}) => {
        setClicked(() => !clicked)
    }
    return (
        <button className={clicked ? up : down} onClick = {handleClick}>
            <span className="left-bar"></span>
            <span className="right-bar"></span>
        </button>
    )
}