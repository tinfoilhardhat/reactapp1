import React from 'react'
import { Link } from 'react-router-dom'
import { Subtitle, Title, Page, StyledLink, TeleText } from './styles'

const Home = ({name}) => (
  <Page>
  <Subtitle>Welcome {name}</Subtitle>
  <TeleText>If you're confused, you can visit the About Me below</TeleText>
  <br/><br/>
  <StyledLink to="/PROJ1">TO-DO LIST</StyledLink>
  <TeleText>Basic to-do list</TeleText>
  <StyledLink to="/PROJ2">BOXES</StyledLink>
  <TeleText>Concept similar to the to-do list, but with boxes that can spell words</TeleText>
  <StyledLink to="/PROJ3">ABOUT ME</StyledLink>
  <TeleText>The page that probably should've come before everything else</TeleText>
  <StyledLink to="/PROJ4">HOW I MADE: BOXES</StyledLink>
  <TeleText>How I made the BOXES page on this site</TeleText>
  </Page>

)

export default Home