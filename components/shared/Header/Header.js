import React, { useState } from "react";
import Link from "next/link"
import { StyledContainer, StyledNavItem, StyledList } from "./HeaderStyles"

export default function Header({type}) {
    const [itemclicked, setItemclicked] = useState(type)
    const navItems = ['About', 'Skills', 'Projects', 'Q&A', 'Contact', 'Resume']
    const renderedNavItems = navItems.map((item, idx) => {
        const link = (() => {
            if (item === "About") return '/'
            if (item === 'Q&A') return '/questions-and-anwsers'
            return `/${item.toLowerCase()}`
        })()
        const padding = {
            padding : "0 20px 0 30px"
        }
        const homePadding = {
            padding : "0 20px 0 0px"
        }
        const handleClick = (e) => {
            setItemclicked(() => item)
        }
        return (
        <li key = {idx}>
            <Link href = {link} >
                <StyledNavItem onClick = {handleClick} style = {item !== "Home" ? padding : homePadding} className="m-0 txt-md fw-5 pe-4 txt-gray-7">
                    <span style = {item === itemclicked ? {color:"#2563eb"} : null}>{item}</span> 
                </StyledNavItem >
            </Link>
        </li>
        )
    })
    return (<>
        <StyledContainer fluid className = "p-0 d-flex align-items-center">
            <StyledList className = "m-0 p-0 d-flex justify-content-start">
                {renderedNavItems}
            </StyledList>
        </StyledContainer>
        <hr className="mt-0"></hr>
    </>)
}