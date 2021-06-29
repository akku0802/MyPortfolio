import React from 'react';
import { DiFirebase, DiReact, DiVisualstudio } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with range of Technologies in the web development world, from Back-end To Front-end and have a through knowledge of problem solving and DSA.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Learning React.js, HTML CSS and JS side by side.</ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Learning Databases and other helpful tools.</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiVisualstudio size="3rem" />
        <ListContainer>
          <ListTitle>Vs Code</ListTitle>
          <ListParagraph>I generally VS code for all my projects but I am also familier with many other IDE's like pycharm, eclips, and many more...</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
