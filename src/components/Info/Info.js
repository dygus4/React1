import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { info } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={info.title} heroImage={info.image}/>
    {info.subtitle}
  </Container>
);

export default Info;