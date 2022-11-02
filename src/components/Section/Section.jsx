import PropTypes from 'prop-types';
import { SectionEl, Container, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionEl>
      <Container>
        <Title>{title}</Title>
        {}
        {children}
      </Container>
    </SectionEl>
  );
};

export default Section;

Section.propType = {
  title: PropTypes.string.isRequired,
};
