import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
// createGlobalStyle to np. usuniecia paddingu z calosci

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
  background: pink;
  position: relative;
`

const H1 = styled.h1`
  font-size: ${({ isBig }) => (isBig ? '5em' : '3em')};
  color: ${({ isBlue }) => (isBlue ? 'blue' : 'white')};
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <StyledWrapper>
      <H1 isBig>Hi people</H1>
      <H1 isBlue>Hi people</H1>
    </StyledWrapper>
  </>
)

export default IndexPage
