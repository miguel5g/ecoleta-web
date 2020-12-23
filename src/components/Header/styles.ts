import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 13px 60px;
  width: 100%;
  height: max-content;

  background-color: ${({ theme }) => theme.bg.primary};
  border-bottom: solid 1px rgba(0, 0, 0, 0.04);
  box-shadow: 0 7px 6px 0 rgba(33, 43, 54, 0.04);

  transition: padding 0.15s;
`;

export const Logo = styled.img`
  margin-right: 40px;

  height: 40px;
`;

export const Nav = styled.nav`
`;

export const NavItem = styled.a`
  margin: 0 10px;

  color: ${({ theme }) => theme.txt.secondary};
  font-size: 1.3rem;
  font-family: 'Roboto', sans-serif;

  transition: 0.15s;

  &:hover {
    color: ${({ theme }) => shade(0.75, theme.txt.secondary)};
  }
`;

export const Spacer = styled.div`
  width: 100%;
  height: 67px;
`;
