import React from "react";
import Link from "next/link"
import { StyledContainer, StyledNavItem, StyledList } from "./HeaderStyles"

export default function Header() {
    const navItems = ['Home', 'Skills', 'Projects', 'Q&A', 'Contact', 'Resume']
    const renderedNavItems = navItems.map((item, idx) => {
        const link = (() => {
            if (item === "Home") return '/'
            if (item === 'Q&A') return '/questions-and-anwsers'
            return `/${item.toLowerCase()}`
        })()
        return (
        <li key = {idx}>
            <Link href = {link} key = {idx}>
                <StyledNavItem key = {idx} className="m-0 txt-md fw-5 px-4 txt-gray-7">
                    {item}
                </StyledNavItem >
            </Link>
        </li>
        )
    })
    return (<>
        <StyledContainer fluid className = "p-0 d-flex align-items-center">
            <StyledList className = "m-0 p-0 d-flex justify-content-center">
                {renderedNavItems}
            </StyledList>
        </StyledContainer>
        <hr className="mt-0"></hr>
    </>)
}