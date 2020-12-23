/* eslint-disable global-require */
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { FiArrowLeft, FiPlus } from 'react-icons/fi';

import {
  Container, Description, Logo, MapArea, SideBar, Title, CreateButton, ButtonLink,
} from '../styles/pages/Points';

const Map: React.FC = () => {
  const {
    MapContainer, TileLayer,
  } = require('react-leaflet');

  return (
    <MapContainer
      center={[-8.2884698, -35.9696649]}
      zoom={15}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWlndWVsNWciLCJhIjoiY2tnYmpvNHp3MGhueTJycXU1cjRuZnR1NiJ9.ykp683SpzbSwoBny0JvydQ" />
    </MapContainer>
  );
};

const Points: React.FC = () => {
  const isClient = process.browser;

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
          {isClient && <Map />}

          <Link href="/add-point" passHref>
            <CreateButton primary><FiPlus size="2rem" /></CreateButton>
          </Link>
        </MapArea>
      </Container>
    </>
  );
};

export default Points;
