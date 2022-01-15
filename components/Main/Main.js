import React from "react";
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
                    Info
                </StyledCol>
            </StyledRow>
        </StyledContainer>
        </>
    )
}