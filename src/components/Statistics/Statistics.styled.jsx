import styled from 'styled-components';

export const StatBlock = styled.div``;

export const Text = styled.p`
  display: flex;
  margin-bottom: ${props => props.theme.spacing(2)};
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fontSizes.medium};
`;
export const Value = styled.span`
  font-weight: ${props => props.theme.fontWeight.mediumPlus};
`;
