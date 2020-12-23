import React from 'react';
import Head from 'next/head';
import { FiArrowRight } from 'react-icons/fi';

import Link from 'next/link';
import Header from '../components/Header';

import {
  Container, LinkBtn, PageDescription, PageTitle, S1Img, Section1,
} from '../styles/pages/Index';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Ecoleta - Marketplace de coleta de resíduos</title>
    </Head>

    <Container>
      <Header />

      <Section1>
        <div>
          <PageTitle>Seu marketplace de coleta de resíduos.</PageTitle>
          <PageDescription>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
          </PageDescription>

          <Link href="/points" passHref>
            <LinkBtn primary>
              <FiArrowRight size="1.4rem" />
              Ver pontos de coleta
            </LinkBtn>
          </Link>
        </div>

        <S1Img src="peoples.svg" />
      </Section1>
    </Container>
  </>
);

export default Home;
