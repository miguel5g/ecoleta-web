import styled from 'styled-components';

import BaseLink from '../../components/BaseLink';

export const Container = styled.main`
  min-height: 100%;

  padding-bottom: 25px;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80vw;
  margin: 0 auto;
  margin-top: 20px;

  & > div {
    max-width: 50%;
  }
`;

export const PageTitle = styled.h1`
  color: ${({ theme }) => theme.txt.primary};
  font-family: 'Ubuntu', sans-serif;
  font-size: 3.5rem;
  line-height: 3.6rem;
  
  margin-bottom: 20px;
`;

export const PageDescription = styled.p`
  color: ${({ theme }) => theme.txt.secondary};
  font-size: 1.5rem;

  margin-bottom: 40px;
`;

export const Section1 = styled(Section)`
  & > div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 900px) {
    width: 90vw;

    & > div {
      max-width: 80%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;

    & > div {
      margin-bottom: 25px;

      text-align: center;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const S1Img = styled.img`
  width: 100%;
  max-height: 450px;

  @media (max-width: 900px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 75%;
  }
`;

export const LinkBtn = styled(BaseLink)`
  margin-right: auto;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;
