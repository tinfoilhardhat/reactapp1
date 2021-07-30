import React from 'react'

import { Link } from 'react-router-dom'
import { Subtitle, Title, Page, StyledLink, TeleText } from '../Home/styles'

const AboutMe = () => {

    return (
        <Page>
            <Subtitle>
                ABOUT ME
            </Subtitle>
            <TeleText>
                This page probably should've been made first
            </TeleText>
            <StyledLink to="/">BACK TO HOME</StyledLink><br/>
            <br/><br/><img style={{width: '1000px', height: '500px'}} src={"https://i.ibb.co/JmtYstR/preview.png"}/>
            <br/><br/>
            <TeleText>
                My name is Robert and I've got a few hobbies. Some of them were used to create this website.
                <br/>
                I like to play games and make them, although I've had limited success with the second part.
                <br/>
                Some games I've played to 100% are FEZ, The Room, and Stick Fight: The Game.
                <br/>
                I also like to play Garry's Mod, Superfighters Deluxe, and Team Fortress 2.
                <br/>
                I know how to program best in Python, but I have also learned C++/C#, Java, and JavaScript.
                <br/>
                I have experience with HTML/CSS (manually writing it as well as using React).
                <br/>
                I've worked with some stranger languages in the past, but I haven't really used database tools much yet.
                <br/>
                I have experience with UI/UX design, but haven't done anything with it yet.
                <br/>
                I've programmed a few chatbots in JS and Python, but I'm still looking for a place to host them.
                <br/>
                (Yes, I wrote all the code in the image above. The panel in the middle displays code that was used to make this website.)
            </TeleText>
        </Page>
    )
}

export default AboutMe