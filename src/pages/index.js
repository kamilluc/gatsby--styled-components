import React from 'react'
import {Link} from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
// createGlobalStyle to np. usuniecia paddingu z calosci
import {colors} from '../utils/colors'

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    color: white;
  }

  *, *::before, *::after{
      box-sizing: border-box;
  }
`

//konwencja nazewnicza dla zewnetrzengo div'a
//nazwy cammel-case
//styled.div === styled('div')
//mozna uzywac ${} np.
// display: ${{props}=>props.isFlex ? 'flex' : 'block'};
const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.dark};
  position: relative;
`

const H1 = styled.h1`
  font-size: ${({ isBig }) => (isBig ? '5em' : '3em')};
  color: ${({ isBlue }) => (isBlue ? 'blue' : 'white')};
`

const BlueH1=styled(H1)`
color: blue;
`
const StyledLink=styled(Link)`
text-decoration: none;
color: white;
font-size: 2em;
font-weight: 700;
`
const Button = styled.button`
  width: ${({width})=>width};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 40px;
  border-radius: 50px;
  border: none;
  color: ${colors.white};
  background: ${colors.primary};
  font-size: 1em;
  font-weight: 800;
  transition: box-shadow .3s ease;
  
  &.coral{
    background: coral;
  }

  :hover {
    box-shadow: 0 10px 20px -15px red;
  }
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <StyledWrapper>
      {/* <H1 isBig>Hi people</H1> */}
      {/* <H1 isBlue>Hi people</H1> */}
      {/* <BlueH1 isBig>Hi people</BlueH1> */}
      {/* <StyledLink to="404">About Page</StyledLink> */}
      {/* <Button as='a' href='/404'>About Page</Button> */}
      {/* <Button className='coral' as={Link} to='/about'>About Page</Button> */}
      <Button width='500px' as={Link} to='/about'>About Page</Button>
    
    </StyledWrapper>
  </>
)

export default IndexPage
