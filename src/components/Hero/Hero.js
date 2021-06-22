import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {Span, LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To<br/>
        My Portfolio
      </SectionTitle>
      <SectionText>
      My name is <Span>Akash Tripathi</Span> and i am an enthusiastic fresher, highly motivated, having bachelors of engineering degree in Computer Science Engineering and have a good leadership skills. Strong in design and integration with intuitive problem-solving skills. Proficient in C/C++, REACT, and SQL. Passionate about implementing and launching new projects. Ability to translate business equirements into technical solutions. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.
      </SectionText>
      <Button onClick={()=> window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
); 

export default Hero;