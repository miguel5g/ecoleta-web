/* eslint-disable global-require */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiArrowLeft, FiUpload } from 'react-icons/fi';
import dynamic from 'next/dynamic';

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

const AddPoint: React.FC = () => {
  // Temporário até eu terminar todo o densenvolvimento
  // if (process.env.NODE_ENV === 'production') return <UnderDev />;

  const Map = dynamic(() => import('../components/Map'), {
    ssr: false,
  });

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
            <Map />
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
