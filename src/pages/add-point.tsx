/* eslint-disable global-require */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiArrowLeft, FiUpload } from 'react-icons/fi';

import UnderDev from '../components/UnderDev';

import {
  BackButton,
  Container,
  LocalHeader,
  Logo,
  PageTitle,
  StyledForm,
  FildTitle,
  SubmitButton,
  MapArea,
  DropZone,
} from '../styles/pages/AddPoint';

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

const AddPoint: React.FC = () => {
  // Temporário até eu terminar todo o densenvolvimento
  if (process.env.NODE_ENV === 'production') return <UnderDev />;

  const isClient = process.browser;

  function handleSubmit(data: any) {
    // eslint-disable-next-line no-console
    console.log(data);
  }

  return (
    <>
      <Head>
        <title>Adicionar ponto de coleta</title>
      </Head>

      <Container>
        <LocalHeader>
          <Logo src="logo.svg" />
          <Link href="/points" passHref>
            <BackButton>
              <FiArrowLeft />
              Voltar
            </BackButton>
          </Link>
        </LocalHeader>

        <StyledForm onSubmit={handleSubmit}>
          <PageTitle>
            Cadastrar ponto
            {' '}
            <br />
            {' '}
            de coleta
          </PageTitle>

          <DropZone>
            <FiUpload />
            <span>Imagem do estabelecimento</span>
          </DropZone>

          <FildTitle>Dados</FildTitle>
          <FildTitle>
            Endereço
            <span>Selecione o endereço no mapa</span>
          </FildTitle>

          <MapArea>
            {isClient && <Map />}
          </MapArea>

          <FildTitle>
            Itens de coleta
            <span>Selecione um ou mais ítens abaixo</span>
          </FildTitle>

          <SubmitButton type="submit" primary>Cadastrar ponto de coleta</SubmitButton>
        </StyledForm>
      </Container>
    </>
  );
};

export default AddPoint;
