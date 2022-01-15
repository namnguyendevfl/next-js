import React from "react";
import About from "./About";
import GeneralInfo from "./GeneralInfo";
import { StyledContainer, StyledRow, StyledCol } from "./MainStyles"

export default function Main () {
    return (
        <>
        <StyledContainer fluid >
            <StyledRow>
                <StyledCol sm="4">
                    <GeneralInfo />
                </StyledCol>
                <StyledCol>
                    <div>
                        <About />
                    </div>
                </StyledCol>
            </StyledRow>
        </StyledContainer>
        </>
    )
}