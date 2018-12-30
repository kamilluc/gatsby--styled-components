import React from 'react';
import Button from '../components/Button/Button';
import Layout from '../layout/Layout'
import H1 from '../components/H1/H1';
import { Link } from 'gatsby'
import styled from 'styled-components'

const data = [
    {
        title: 'Hello Kamil'
    },
    {
        title: 'Hello Adam',
        ad: 'lorem ipsum dolor sit amet'
    },
    {
        title: 'Hello Wojciech'
    },
    {
        title: 'Hello Franek',
        ad: 'lorem ipsum dolor sit amet'
    }
];

const StyleWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const StyledH2 = styled.h2`
    font-size: 2em;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    color: ${({theme})=>theme.colors.white};
    grid-column-start: ${({order})=>order%2===0 ? '2' : '1'};
`;

const StyledAd=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: aqua;
    border-radius: 18px;
    height: 98%;
    width: 98%;
`;

const AboutPage = () => (
    <Layout>
    <H1 isBig={false}>Hello people, this is about page</H1>
    <Button as={Link} to="/">Go back</Button>
    <StyleWrapper>
        {data.map((element, index)=>{
            return(
            <>
                <StyledH2 order={index}>{element.title}</StyledH2>
                {element.ad ? <StyledAd>{element.ad}</StyledAd> : null}
            </>)
        })}
    </StyleWrapper>
  </Layout>
);

export default AboutPage;