import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 200, text: 'Coding Problem solved' },
  { number: 1, text: 'Year Campus Ambassador of Bosch 2019', },
  { number: 1500, text: 'rating on CodeChef', },
  
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Presonal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>

);

export default Acomplishments;
