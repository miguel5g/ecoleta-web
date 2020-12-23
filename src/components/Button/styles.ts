/* eslint-disable import/prefer-default-export */
import styled, { DefaultTheme } from 'styled-components';
import { lighten, shade } from 'polished';

interface IProps {
  primary?: boolean;
  disable?: boolean;
  theme: DefaultTheme;
}

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;

  color: ${({ theme }) => theme.app.primary};

  font-size: 1.4rem;
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 400;

  background: ${({ theme }) => lighten(0.4, theme.app.primary)};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${({ theme }) => lighten(0.45, theme.app.primary)};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

    color: ${({ theme }) => theme.app.primary};
  }

  ${({ primary, disable, theme }: IProps) => {
    let css = '';

    if (disable) {
      css = `
      background-color: #D7D5D5 !important;
      box-shadow: none !important;
      color: #9E9E9E !important;
      cursor: not-allowed !important;
    `;
    } else if (primary) {
      css = `
      color: ${theme.txt.highLight};
      background-color: ${theme.app.primary};
      
      &:hover {
        color: ${theme.txt.highLight};
        background-color: ${shade(0.1, theme.app.primary)};
      }
    `;
    }

    return css;
  }};


  & > svg {
    margin-right: 3px;
  }
`;
