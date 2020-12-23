import React, { useState } from 'react';
import Link from 'next/link';
import { useViewportScroll } from 'framer-motion';

import {
  Container, Logo, Nav, NavItem, Spacer,
} from './styles';

const Header: React.FC = () => {
  const { scrollY } = useViewportScroll();
  const [isSmall, setSmall] = useState(false);

  scrollY.onChange((value) => setSmall(value > 0));

  return (
    <>
      <Container className={isSmall ? 'small' : ''}>
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
};

export default Header;
