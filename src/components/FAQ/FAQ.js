import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faq } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faq.title} heroImage={faq.image}/>
    {faq.subtitle}
  </Container>
);

export default FAQ;