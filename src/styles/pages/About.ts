import { lighten, shade } from 'polished';
import styled from 'styled-components';

import { IBaseLinkProps } from '../../components/BaseLink/styles';

export const Container = styled.main`
  min-height: 100%;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 180px;
  margin-top: 20px;
`;

export const Section1 = styled(Section)`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;

  margin-bottom: 45px;
`;

export const Section2 = styled(Section)`
  align-items: flex-start;

  padding: 0 30px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 15px;
    width: 50%;

    text-align: center;
  }
`;

export const PageTitle = styled.h1`
  color: ${({ theme }) => theme.txt.primary};
  font-family: 'Ubuntu', sans-serif;
  font-size: 2.2rem;

  margin-bottom: 10px;
`;

export const PageDescription = styled.p`
  color: ${({ theme }) => theme.txt.secondary};
  font-size: 1.2rem;

  max-width: 60%;
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.txt.primary};
  font-size: 1.8rem;

  margin-bottom: 5px;
`;

export const SectionDescription = styled.p`
  color: ${({ theme }) => theme.txt.secondary};
  font-size: 1.2rem;

  & > a {
    color: ${({ theme }) => theme.txt.primary};
    font-style: italic;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;

  margin-top: 25px;

  & > button:last-child {
    margin-left: 7px;
  }
`;

export const ButtonLink = styled.a`
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
  }

  ${({ primary, disable, theme }: IBaseLinkProps) => {
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

export const VSeparator = styled.span`
  width: 1px;
  min-height: 180px;
  background-color: ${lighten(0.85, '#000')};
  margin: auto 20px;
`;
