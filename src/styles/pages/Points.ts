import { lighten } from 'polished';
import styled from 'styled-components';

import BaseLink from '../../components/BaseLink';

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
`;

export const MapArea = styled.div`
  width: calc(100% - 325px);
  height: 100%;
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 325px;
  height: 100%;
  padding: 25px;
  z-index: 1000;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => lighten(0.5, theme.app.primary)};
`;

export const Logo = styled.img`
  width: 80%;
  margin-bottom: 64px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;

  color: ${({ theme }) => theme.txt.primary};
  font-family: 'Ubuntu', sans-serif;
  font-size: 2.4rem;
`;

export const Description = styled.p`
  margin-bottom: auto;

  font-size: 1.3rem;
`;

export const ButtonLink = styled(BaseLink)`
`;

export const CreateButton = styled(BaseLink)`
  position: fixed;
  right: 40px;
  bottom: 40px;

  z-index: 1000;
`;
