import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Title = styled.h1`
    color: #04D900;
    font-style: bold;
    font-size: 40pt;
    font-family: monospace, monospace;
`
export const Subtitle = styled(Title)`
    margin: 2px;
`

export const Page = styled.div`
    background-color: ${props => props.color || "#1E201E"};
    padding: 10px;
    padding-top: 0px;
`

export const StyledLink = styled(Link)`
    color: #04D900;
    font-style: bold underline;
    font-family: monospace, monospace;

`
export const Item = styled.li`
    color: #04D900;
    font-style: bold;
    font-family: monospace, monospace;
`
export const SuperButton = styled.button`
    background-color: #028800;
    color: #04D900;
    font-family: monospace, monospace;
    border: 1px double #025C00;
`

export const ShyButton = styled.button`
    background-color: #1E201E;
    color: #028800;
    font-family: monospace, monospace;
    border: 4px double #028800;
`

export const Input = styled.input`
    background-color: #04D900;
    color: black;
    font-family: monospace, monospace;
    border: 1px double #025C00;    
`

export const TeleText = styled.p`
    font-family: monospace, monospace;
    color: #080;
    margin: 0px;
`
export const CoolButtonAll = styled.button`
    font-family: monospace, monospace;
    background-color: #080;
    color: #04D900;
    height: 60px;
    width: 60px;
    border: 1px double #025C00;
    margin: 5px;

    &:hover {
        background-color: #0A0
    }
`
export const CoolButtonActive = styled.button`
    font-family: monospace, monospace;
    background-color: #04D900;
    color: black;
    height: 60px;
    width: 60px;
    border: 1px double #025C00;
    margin: 5px;

    &:hover {
        background-color: white;
    }
`

export const ColorPage = styled.button`
    background-color: #025C00;
`