import styled from 'styled-components';

export const Text = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fontSizes.medium};
`;
