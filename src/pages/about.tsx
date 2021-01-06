import React from 'react';
import { FiDollarSign, FiShare2 } from 'react-icons/fi';
import Head from 'next/head';

import Button from '../components/Button';
import Header from '../components/Header';

import {
  Container,
  PageDescription,
  PageTitle,
  Section1,
  Section2,
  SectionTitle,
  SectionDescription,
  VSeparator,
  ButtonGroup,
  ButtonLink,
} from '../styles/pages/About';

const About: React.FC = () => (
  <>
    <Head>
      <title>Ecoleta - Sobre nós</title>
    </Head>

    <Container>
      <Header />

      <Section1>
        <PageTitle>Ecoleta</PageTitle>
        <PageDescription>
          Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
        </PageDescription>
      </Section1>

      <Section2>
        <div>
          <SectionTitle>Como ajudar</SectionTitle>
          <SectionDescription>
            Você pode nos ajudar de duas maneiras, fazendo uma doação para podermos manter
            os custos do projeto ou divulgar,
            para que outras pessoas também conheçam. Contamos com você!
          </SectionDescription>

          <ButtonGroup>
            <ButtonLink
              href="https://apoia.se/ecoleta"
              target="_blank"
              rel="noopener noreferrer"
              primary
            >
              <FiDollarSign size="1.5rem" />
              Doar
            </ButtonLink>
            <Button primary>
              <FiShare2 size="1.5rem" />
              Compartilhar
            </Button>
          </ButtonGroup>
        </div>

        <VSeparator />

        <div>
          <SectionTitle>Criador</SectionTitle>
          <SectionDescription>
            Projeto desenvolvido durante a
            {' '}
            <a
              href="https://github.com/rocketseat-education/nlw-01-omnistack"
              target="_blank"
              rel="noopener noreferrer"
            >
              NLW#1

            </a>
            {' '}
            e continuado por
            {' '}
            <a
              href="https://github.com/miguel5g/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Miguel Ângelo

            </a>
            .
          </SectionDescription>
        </div>
      </Section2>
    </Container>
  </>
);

export default About;
