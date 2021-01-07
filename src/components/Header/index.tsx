import React from 'react';
import Link from 'next/link';

import {
  Container, Logo, Nav, NavItem, Spacer,
} from './styles';

const Header: React.FC = () => (
  <>
    <Container>
      <Logo src="logo.svg" />

      <Nav>
        <Link href="/" passHref>
          <NavItem>Início</NavItem>
        </Link>
        <Link href="/points" passHref>
          <NavItem>Pontos</NavItem>
        </Link>
        <Link href="/about" passHref>
          <NavItem>Sobre</NavItem>
        </Link>
      </Nav>

    </Container>

    <Spacer />
  </>
);

export default Header;
