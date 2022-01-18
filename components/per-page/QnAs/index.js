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
        QnA_answer:[
            {title: "Debugging", description: "",}
        ],
    },
    {
        QnA_id: "2",
        QnA_question: "Why do I decide to become a web developer ?",
        QnA_answer:[
            {title: "Debugging", description: "",}
        ],
    },
    {
        QnA_id: "3",
        QnA_question: "Why should you have me on board?",
        QnA_answer:[
            {title: "Debugging", description: "",}
        ],
    },
    {
        QnA_id: "4",
        QnA_question: "What are my strengths?",
        QnA_answer:[
            {title: "Debugging", description: "",}
        ],
    },
    {
        QnA_id: "5",
        QnA_question: "What are my weaknesses?",
        QnA_answer:[
            {title: "Debugging", description: "",}
        ],
    },
    {
        QnA_id: "6",
        QnA_question: "How come medicine related to computer programming?",
        QnA_answer:[
            {title: "Debugging", description: "Physicians diagnose and treat patient's illnesses. The more difficult and important part is diagnosing what's going on with a patient which is actually a debugging task because there are methods for each illness. This task requires us to approach the issue efficiently. For instance, a person comes to a clinic with a complaint of headache. There are a million causes of it, so physicians have to first rule out common causes which can be treated with simple methods such as stopping taking additive drugs, caffeine, etc. and modifying lifestyle behavior. In terms of computer science, bugs are inevitable. Having a useful technique to identify them is extremely advantages because it reduces the developing time.",}
        ],
    },
]

const Arrow = ({type}) => {
    const [clicked, setClicked] = useState(false)
    const down = 'arrow down me-4' 
    const up = 'arrow up me-4' 
    const handleClick = ({target}) => {
        setClicked(() => !clicked)
    }
    return (
        <div className={type === "up" ? up : down} onClick = {handleClick}>
            <span className="left-bar"></span>
            <span className="right-bar"></span>
        </div>
    )
}

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
            border: idClicked === idx && '1px solid blue'
        }
        
        const renderedAnswer = qna.QnA_answer.map((topic, topicIdx) => {
            return (
                <div key = {topicIdx} className="ms-4">
                    <p  className="txt-md ms-3 my-2 txt-gray-6 m-0">{topic.title}</p>
                    <p  className="txt-md ms-4 my-2 txt-gray-6 m-0">{topic.description}</p>
                </div>
            )
        })
        return (
            <div key = {idx}>
                <StyledQuestion id = {idx} onClick = {handleClick} onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave} style = {style} className={" d-flex align-items-center justify-content-between ps-4 fw-6 txt-md txt-gray-6"}>
                    <span style = {{fontFamily : "cursive"}}> {qna.QnA_question}
                    </span>
                    <Arrow type = {idClicked !== idx ? "down" : "up"}/>
                </StyledQuestion>
                <div>
                { idClicked === idx  
                ?   renderedAnswer
                :   <div className="py-2"></div>
                }
                </div>
            </div>
        )
    })
    return (<>
        <div className="mt-2">
            {renderedQnAs}
        </div>
    </>)
}