import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

export const StyledContainer = styled.div`
    width: 100%;
    height: 65px;
    // border: 1px solid black;
`

export const StyledRow = styled(Row)`
    width: 100%;
    color: white;
`
export const StyledCol = styled(Col)`
    color: white;
   
`

export const StyledNavItem = styled.button`
    width: auto;
    display: flex;
    align-items:center;
    background:none;
    outline:none;
    border:none;
`

export const StyledList = styled.ul `
    list-style: none;
    display: flex;
    align-items:center;
    width: 100%;
`

export const StyledBreak = styled.div `
    height: 50px;
    // width: 100%;
`
