import styled from 'styled-components';

export const SectionEl = styled.section`
  padding: ${props => props.theme.spacing(8)} 0;
`;

export const Container = styled.div`
  width: 400px;
  padding: 0 ${props => props.theme.spacing(4)};
  margin: 0 auto;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.light};
  text-align: center;
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: ${props => props.theme.spacing(6)};
`;
