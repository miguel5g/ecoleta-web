/* eslint-disable global-require */
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import React from 'react';
import { FiArrowLeft, FiPlus } from 'react-icons/fi';

import {
  Container, Description, Logo, MapArea, SideBar, Title, CreateButton, ButtonLink,
} from '../styles/pages/Points';

const Points: React.FC = () => {
  const Map = dynamic(() => import('../components/Map'), {
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>Ecoleta - Pontos de coleta</title>
      </Head>

      <Container>
        <SideBar>
          <Logo src="logo.svg" />

          <Title>Pontos de coleta.</Title>
          <Description>Selecione um ponto no mapa para mais informações.</Description>

          <Link href="/" passHref>
            <ButtonLink primary>
              <FiArrowLeft size="1.4rem" />
              Voltar
            </ButtonLink>
          </Link>
        </SideBar>

        <MapArea>
          <Map />

          <Link href="/add-point" passHref>
            <CreateButton primary><FiPlus size="2rem" /></CreateButton>
          </Link>
        </MapArea>
      </Container>
    </>
  );
};

export default Points;
