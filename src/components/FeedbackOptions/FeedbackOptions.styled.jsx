import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-right: ${props => props.theme.spacing(5)};
  }
`;

export const Btn = styled.button`
  cursor: pointer;

  display: block;
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};
  border: ${props => `1px solid ${props.theme.colors.accent}`};
  border-radius: ${props => props.theme.radii.normal};
  text-transform: capitalize;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeight.medium};
  color: ${props => props.theme.colors.accent};
  background-color: ${props => props.theme.colors.dark};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.light};
    background-color: ${props => props.theme.colors.accent};
  }
`;
