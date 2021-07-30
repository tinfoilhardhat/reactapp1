import React from 'react' 
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Subtitle, Page, StyledLink, SuperButton, TeleText, Title, ShyButton } from '../Home/styles'
import CoolBoxAll from './components/CoolBoxAll'
import CoolBoxActive from './components/CoolBoxActive'
const CoolBoxes = () => {

    const [all, setAll] = useState(["E", "D", "A", "N", "L", "L", "W", "E", "U", "D", "I", "T"])
    const [active, setActive] = useState(["R", "O", "Y", "G", "B", "I", "V"])
    let color = "#1E201E";
    const resetBoxes = () => {
        setAll(["E", "D", "A", "N", "L", "L", "W", "E", "U", "D", "I", "T"])
        setActive(["R", "O", "Y", "G", "B", "I", "V"])
    }
    const applyBoxes = () => {
        switch (JSON.stringify(active)) {
            case JSON.stringify(["R", "E", "D"]):
                color = "#880000"
                alert("Made RED!")
                break;
            case JSON.stringify(["O", "R", "A", "N", "G", "E"]):
                color = "#884400"
                alert("Made ORANGE!")
                break;
            case JSON.stringify(["Y", "E", "L", "L", "O", "W"]):
                color = "#888800"
                alert("Made YELLOW!")
                break;
            case JSON.stringify(["G", "R", "E", "E", "N"]):
                color = "#008800"
                alert("Made GREEN!")
                break;
            case JSON.stringify(["B", "L", "U", "E"]):
                color = "#000088"
                alert("Made BLUE!")
                break;
            case JSON.stringify(["I", "N", "D", "I", "G", "O"]):
                color = "#440088"
                alert("Made INDIGO!")
                break;
            case JSON.stringify(["V", "I", "O", "L", "E", "T"]):
                color = "#880088"
                alert("Made VIOLET!")
                break;
            default:
                alert("Made nothing recognized.")
        }

    }
    return (
        <Page color={color}>
            <Title>COOL BOXES</Title>
            <TeleText>Cool boxes! Can you spell all the colors of the rainbow?</TeleText><br/><br/>
            <div id="ALLBOXES">
                <Subtitle>ALL</Subtitle>
                {all.map((text, idx) => <CoolBoxAll 
                key={idx} 
                idx={idx} text={text} 
                all={all} setAll={setAll}
                active={active} setActive={setActive}/>
                )}
            </div>
            
            <div id="ACTIVEBOXES">
                <Subtitle>ACTIVE</Subtitle>
                {active.map((text, idx) => <CoolBoxActive 
                key={idx} 
                idx={idx} text={text} 
                all={all} setAll={setAll}
                active={active} setActive={setActive}/>
                )}<br/>
            </div>
            
            <br/>
            <SuperButton onClick={applyBoxes}>SUBMIT</SuperButton><br/><br/>
            <ShyButton onClick={resetBoxes}>RESET</ShyButton>
            <br/>
            <StyledLink to="/">RETURN TO HOME</StyledLink>
        </Page>

    )
}

export default CoolBoxes