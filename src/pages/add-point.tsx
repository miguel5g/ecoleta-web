/* eslint-disable global-require */
import React, { ChangeEvent, useEffect, useState } from 'react';
import { FiArrowLeft, FiUpload } from 'react-icons/fi';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import axios from 'axios';

import Input from '../components/Input';

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
  InputGroup,
} from '../styles/pages/AddPoint';
import Select from '../components/Select';

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const AddPoint: React.FC = () => {
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  const Map = dynamic(() => import('../components/Map'), {
    ssr: false,
  });

  useEffect(() => {
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then((response) => {
      const ufInitials = response.data.map((uf) => uf.sigla);

      setUfs(ufInitials);
    });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }

    axios
      .get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then((response) => {
        const cityNames = response.data.map((city) => city.nome);

        setCities(cityNames);
      });
  }, [selectedUf]);

  function handleSubmit(data: any) {
    // eslint-disable-next-line no-console
    console.log(data);
  }

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;

    setSelectedUf(uf);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;

    setSelectedCity(city);
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
              Voltar para pontos
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

          <Input
            name="name"
            title="Nome da entidade"
            type="text"
            maxLength={30}
          />

          <InputGroup>
            <Input
              name="email"
              title="Email"
              type="email"
              maxLength={30}
            />
            <Input
              name="whatsapp"
              title="Whatsapp"
              type="tel"
              maxLength={11}
            />
          </InputGroup>

          <FildTitle>
            Endereço
            <span>Selecione o endereço no mapa</span>
          </FildTitle>

          <MapArea>
            <Map />
          </MapArea>

          <InputGroup>
            <Select
              name="uf"
              value={selectedUf}
              onChange={handleSelectUf}
              title="Estado (UF)"
            >
              <option value="0">Selecione uma UF</option>
              {ufs.map((uf) => (
                <option key={uf} value={uf}>{uf}</option>
              ))}
            </Select>

            <Select
              name="city"
              value={selectedCity}
              onChange={handleSelectCity}
              title="Cidade"
            >
              <option value="0">Selecione uma cidade</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </Select>
          </InputGroup>

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
