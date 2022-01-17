import { StyledQuestion } from "./QnAsStyles"
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs"
import React, { useState } from "react"
import { IconContext } from "react-icons";

export const Caret = ({type}) => {
    return <IconContext.Provider value={{ color: "#6b7280", className: "" }}>
    <div className="border-outline-none bg-none element-center">
        {type === "down" ? <BsFillCaretDownFill /> : <BsFillCaretUpFill/>}
    </div>
  </IconContext.Provider>
}


const data = [
    {
        QnA_id: "1",
        QnA_question: "Why do I quit a medical career ?",
        QnA_answer:"Answer 1",
    },
    {
        QnA_id: "2",
        QnA_question: "Why do I decide to become a web developer ?",
        QnA_answer:"Answer 2",
    },
    {
        QnA_id: "3",
        QnA_question: "Why should you have me on board?",
        QnA_answer:"Answer 3",
    },
    {
        QnA_id: "4",
        QnA_question: "What are my strengths?",
        QnA_answer:"Answer 3",
    },
    {
        QnA_id: "5",
        QnA_question: "What are my weaknesses?",
        QnA_answer:"Answer 3",
    },

]

export default function QnAs() {
    const [idClicked, setIdClicked] = useState(null)
    const [idEntered, setIdEntered] = useState(null)
    const renderedQnAs = data.map((qna, idx) => {
        const handleClick = ({target}) => {
            if (idClicked === idx) setIdClicked(null)
            else setIdClicked(() => idx)
        }
        const handleMouseEnter = () => {
            setIdEntered(() => idx)
        }
        const handleMouseLeave = () => {
            setIdEntered(null)
        }

        const style = {
            boxShadow: idEntered === idx && '1px 2px 6px 1px #d1d5db',
            border: idClicked === idx && '2px solid blue'
        }
        return (
            <div key = {idx}>
                <StyledQuestion key = {idx} id = {idx} onClick = {handleClick} onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave} style = {style} className={" d-flex align-items-center justify-content-between ps-4 fw-6 txt-md txt-gray-6"}>
                    <span style = {{fontFamily : "cursive"}}> {qna.QnA_question}
                    </span>
                    <Caret key = {idx} type = {idClicked !== idx ? "down" : "up"} />
                </StyledQuestion>
                <div>
                { idClicked === idx  
                ?   <div key = {idx} className="ms-5">
                    <p key = {idx} className="txt-md my-2 txt-gray-6 m-0">{qna.QnA_answer}</p>
                    </div>
                :   <div  className="py-2"></div>
                }
                </div>
            </div>
        )
    })
    return (<>
        <div>
            {renderedQnAs}
        </div>
    </>)
}