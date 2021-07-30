import React from 'react'
import { Link } from 'react-router-dom'
import { Subtitle, Title, Page, StyledLink, TeleText } from '../Home/styles'

const BTSBoxes = () => {
    return (
        <Page>
            <Subtitle>HOW I MADE: COOL BOXES</Subtitle>
            <TeleText>(Assumption: You know what react.js is and the file structure of a react app is)</TeleText><br/><br/>
            <StyledLink to="/">BACK TO HOME</StyledLink><br/>
            <StyledLink to="/PROJ2">CHECK OUT THE BOXES PROJECT HERE</StyledLink><br/><br/>
            <img src="https://i.ibb.co/gPKJk2P/1.png"/><br/>
            <TeleText>I started by making two new styled components for the buttons that were active/inactive.</TeleText>
            <TeleText>I used a hover modifier to show which button was moused over.</TeleText>
            <br/>
            <img src="https://i.ibb.co/S7BwP50/2.png"/><br/>
            <TeleText>In the main index.js file, I imported the two Box types (active and inactive), and used</TeleText>
            <TeleText>two state variables to keep track of them. I probably should've named it "inactive" instead of "all".</TeleText>
            <br/>
            <img src="https://i.ibb.co/TgFJH88/3.png"/><br/>
            <TeleText>The CoolBoxActive and CoolBoxAll component files.</TeleText>
            <br/>
            <img src="https://i.ibb.co/vs0wMv2/4.png"/><br/>
            <TeleText>They look very similar because I copied and inverted one to make the other.</TeleText>
            <TeleText>The all2active/active2all function in each modifies the state variables from</TeleText>
            <TeleText>earlier, first removing the box from its current list and then putting it</TeleText>
            <TeleText>into the list where it belongs.</TeleText>
            <TeleText>If that looks familiar, that's because it is. I took it from the to-do list code.</TeleText>
            <br/>
            <img src="https://i.ibb.co/zsgspQ9/5.png"/>
            <TeleText>This code displays the boxes in their sections. It took me way too long to debug</TeleText>
            <TeleText>this area because in an earlier version I forgot to switch every "active" out for "all".</TeleText>
            <TeleText>The extra divs are not necessary, but it helped me organize the site while I was making it</TeleText>
            <TeleText>and I decided to just keep it in.</TeleText>
            <br/>
            <img src="https://i.ibb.co/vqRdS72/6.png"/><br/>
            <TeleText>This makes the SUBMIT and RESET buttons. The RESET button's code is explained earlier</TeleText>
            <TeleText>in this page, but the SUBMIT button was much harder to make.</TeleText>
            <br/>
            <img src="https://i.ibb.co/hZXnF8J/7.png"/><br/>
            <TeleText>This is some of the ugliest code I think I have ever written. However, it works.</TeleText>
            <TeleText>The switch statement looks at what the active boxes spell out as a word. Then, it</TeleText>
            <TeleText>runs through every case statement to find a match. The break keyword is needed because</TeleText>
            <TeleText>a switch statement will run through as much of the code as possible, jumping from case</TeleText>
            <TeleText>to case. The break keyword makes it so that when one case is run, the code skips the rest.</TeleText>
            <br/>
            <img src="https://i.ibb.co/QMFVj60/8.png"/><br/>
            <TeleText>Writing case statement is arguably some of the most tedious work in programming, but it works.</TeleText>
            <TeleText>At the end, there's a bit of code called default. It normally runs no matter what at the</TeleText>
            <TeleText>end of a switch statement, but thanks to all the breaks earlier, this only runs if none of</TeleText>
            <TeleText>the cases get triggered.</TeleText>
            <br/>
            <TeleText>I did consider adding anything special if you typed in a real word that wasn't a color, like</TeleText>
            <TeleText>READ or GONE, but I decided that was too much work after realizing how boring it was to make.</TeleText>
            <TeleText>Also, originally I considered having the Page change color or display an image based on if a</TeleText>
            <TeleText>word was put in (RED would make the background red). I kept running into trouble with this though,</TeleText>
            <TeleText>and ultimately decided it would be a bit of an eyesore (also, typing in GREEN would've made</TeleText>
            <TeleText>it impossible to read.)</TeleText><br/>
            <StyledLink to="/">BACK TO HOME</StyledLink><br/>
        </Page>
    )
}
export default BTSBoxes