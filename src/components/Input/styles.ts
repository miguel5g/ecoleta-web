import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: 13px;
  width: 100%;

  color: ${({ theme }) => theme.txt.secondary};
  font-size: 1.1rem;
  font-family: 'Roboto', sans-serif;
`;

export const StyledInput = styled.input`
  margin-top: 3px;
  padding: 8px;

  font-size: 1.4rem;

  background-color: #F0F0F5;
  border: none;
  border-radius: 5px;
`;
