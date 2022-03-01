import styled from "styled-components";

export const ButtonStyle = styled.button`
  background-color: var(--color-secondary);
  color: var(--color-text);
  font: normal normal var(--font-primary) 1.5rem;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  transition: 0.2s;
  &:hover {
    color: ${({animate}) => animate ? '#f3bb33' : '#f8f8f8'} ;
    transform: ${({animate}) => animate ? 'scale(1.03)' : ''} ;
  }
`;
