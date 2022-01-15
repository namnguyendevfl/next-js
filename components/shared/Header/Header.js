import React from "react";
import Link from "next/link"
import { StyledContainer, StyledRow, StyledCol, StyledNavItem, StyledList, StyledBreak } from "./HeaderStyles"

export default function Header() {
    const navItems = ['Home', 'Experiences', 'Projects', 'Education', 'Q&A', 'Contact', 'Resume']
    const renderedNavItems = navItems.map((item, idx) => {
        
        const link = item === "Home" ? `/` : `/${item.toLowerCase()}`
        return (<>
        <li key = {idx}>
            <Link href={link}>
                <StyledNavItem className="m-0 txt-md fw-5 px-2 txt-gray-7">
                    {item}
                </StyledNavItem >
            </Link>
        </li>
        </>)
    })
    return (<>
        <StyledContainer fluid className = "p-0 d-flex align-items-center">
            <StyledList className = "m-0 p-0 d-flex justify-content-center">
                {renderedNavItems}
            </StyledList>
        </StyledContainer>
    </>)
}