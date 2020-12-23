import styled from 'styled-components';

import BaseLink from '../../components/BaseLink';

export const Container = styled.main`
  min-height: 100%;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 180px;
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
`;

export const S1Img = styled.img`
  
`;

export const LinkBtn = styled(BaseLink)`
  margin-right: auto;
`;
