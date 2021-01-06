import styled from 'styled-components';
import { Form } from '@unform/web';
import Button from '../../components/Button';

export const Container = styled.div`
  padding-bottom: 35px;
`;

export const LocalHeader = styled.div`
  display: flex;
  justify-content: space-between;

  width: auto;
  padding: 23px 60px;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const BackButton = styled.a`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.txt.primary};
  font-size: 1.2rem;
  font-weight: bold;

  & > svg {
    color: ${({ theme }) => theme.app.primary};
  }

  &:hover {
    opacity: 0.75;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 60px;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.bg.primary};
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.04);
`;

export const PageTitle = styled.h1`
  margin-bottom: 35px;

  color: ${({ theme }) => theme.txt.primary};
  font-size: 2.2rem;
  font-family: 'Ubuntu', sans-serif;
`;

export const FildTitle = styled.span`
  display: flex;
  align-items: center;

  margin: 35px 0;

  color: ${({ theme }) => theme.txt.primary};
  font-size: 1.6rem;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;

  & > span {
    margin-left: auto;

    color: ${({ theme }) => theme.txt.secondary};
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }
`;

export const InputGroup = styled.div`
  display: flex;

  width: 100%;

  & > label {
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const SelectGroup = styled.div`
  display: flex;

  width: 100%;

  & > label {
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const MapArea = styled.div`
  width: 100%;
  height: 350px;
  margin-bottom: 23px;

  border-radius: 15px;
  overflow: hidden;
`;

export const SubmitButton = styled(Button)`
  margin-left: auto;
  margin-top: 35px;
`;

export const DropZone = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 350px;

  border-radius: 15px;
  background-color: #E1FAEC;

  color: ${({ theme }) => theme.txt.primary};
  font-size: 1.4rem;

  cursor: pointer;
  transition: all 0.2s;

  & > svg {
    margin-bottom: 7px;

    color: ${({ theme }) => theme.app.primary};
    font-size: 1.8rem;
  }

  &::before {
    content: '';

    position: absolute;

    width: calc(100% - 45px);
    height: calc(100% - 45px);
    margin: auto;

    border: dashed 2px ${({ theme }) => theme.app.primary};
    border-radius: 15px;
  }
`;
