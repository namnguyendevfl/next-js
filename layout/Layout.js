import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { StyledBreak } from "./LayoutStyles";

export default function Layout () {
    return (<>
    <Header></Header>
    <StyledBreak />
    <Main></Main>
    <Footer></Footer>
    </>)
}