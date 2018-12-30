import React from 'react';
import Button from '../components/Button/Button';
import Layout from '../layout/Layout'
import H1 from '../components/H1/H1';
import { Link } from 'gatsby'

const AboutPage = () => (
    <Layout>
    <H1 isBig={true}>Hello people, this is about page</H1>
    <Button as={Link} to="/">Go back</Button>
  </Layout>
);

export default AboutPage;