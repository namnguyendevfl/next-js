import React from "react";
import { StyledContainer, StyledRow, StyledCol, StyledNavItem } from "./HeaderStyles"

export default function Header() {
    return (<>
        <StyledContainer fluid className = "p-0 d-flex align-items-center">
            <StyledRow className = "p-0 m-0 d-flex justify-content-between">
                <StyledCol sm = "2">
                    First colum
                </StyledCol>
                <StyledCol>
                    <StyledRow className = "p-0 d-flex justify-content-end">
                        <StyledNavItem className="m-0 txt-sm fw-5">
                            Home
                        </StyledNavItem >
                        <StyledNavItem className="m-0 txt-sm fw-5">
                            Experiences
                        </StyledNavItem >
                        <StyledNavItem className="m-0 txt-sm fw-5">
                            Projects
                        </StyledNavItem>
                        <StyledNavItem className="m-0 txt-sm fw-5"> 
                            Education
                        </StyledNavItem>
                        <StyledNavItem className="m-0 txt-sm fw-5">
                            Contact
                        </StyledNavItem>
                        <StyledNavItem className="m-0 txt-sm fw-5">
                            Resume
                        </StyledNavItem>
                    </StyledRow>
                </StyledCol>
            </StyledRow>
        </StyledContainer>
    </>)
}