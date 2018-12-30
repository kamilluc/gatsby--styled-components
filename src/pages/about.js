import React, { Component } from 'react'
import Button from '../components/Button/Button'
import Layout from '../layout/Layout'
import H1 from '../components/H1/H1'
import { Link } from 'gatsby'
import styled from 'styled-components'
import posed from 'react-pose'
const data = [
  {
    title: 'Hello Kamil',
  },
  {
    title: 'Hello Adam',
    ad: 'lorem ipsum dolor sit amet',
  },
  {
    title: 'Hello Wojciech',
  },
  {
    title: 'Hello Franek',
    ad: 'lorem ipsum dolor sit amet',
  },
]

const StyleWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const PosedH2 = posed.h2({
  visible: {
    x: 0,
    opacity: 1,
  },
  hidden: {
    x: '-150%',
    opacity: 0,
  },
})

const StyledH2 = styled(PosedH2)`
  font-size: 2em;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  grid-column-start: ${({ order }) => (order % 2 === 0 ? '2' : '1')};
`

const StyledAd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: aqua;
  border-radius: 18px;
  height: 98%;
  width: 98%;
`

class AboutPage extends Component {
  state = {
    visible: false,
  }

  toggleHeaders = () => {
    this.setState(prevState => ({ visible: !prevState.visible }))
  }

  render() {
    return (
      <Layout>
        <h1>{this.state.visible ? 'visible' : 'hidden'}</h1>
        <Button onClick={this.toggleHeaders}>Switch state</Button>
        <StyleWrapper>
          {data.map((element, index) => {
            return (
              <React.Fragment key={element.title}>
                <StyledH2
                  order={index}
                  pose={this.state.visible ? 'visible' : 'hidden'}
                >
                  {element.title}
                </StyledH2>
                {element.ad ? <StyledAd>{element.ad}</StyledAd> : null}
              </React.Fragment>
            )
          })}
        </StyleWrapper>
        <Button as={Link} to="/">
          Go back
        </Button>
      </Layout>
    )
  }
}
export default AboutPage
