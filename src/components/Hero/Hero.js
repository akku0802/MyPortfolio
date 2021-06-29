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
      My name is <Span>Akash Tripathi</Span> and i am an enthusiastic fresher, highly motivated, having bachelors of engineering degree in Computer Science and have a good leadership skills. Strong in design and integration with intuitive problem-solving skills. Proficient in C/C++, REACT, and SQL. Passionate about implementing and launching new projects. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.
      </SectionText>
      <Button onClick={()=> window.open('https://drive.google.com/file/d/1dWWDmXpkkZUw2xfnRhvfgTPFmXwbpAiW/view?usp=sharing',"_blank")}>Learn More</Button>
    </LeftSection>
  </Section>
); 

export default Hero;