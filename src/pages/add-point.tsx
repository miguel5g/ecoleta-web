import React, {
  ChangeEvent, useEffect, useMemo, useState,
} from 'react';
import { FiArrowLeft, FiUpload } from 'react-icons/fi';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import axios from 'axios';

import api from '../utils/Api';
import Input from '../components/Input';
import Select from '../components/Select';

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
  ItemsList,
  Item,
} from '../styles/pages/AddPoint';

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

interface IItem {
  id: string;
  title: string;
  image: string;
  imageUrl: string;
}

const AddPoint: React.FC = () => {
  const [items, setItems] = useState<IItem[]>([]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const Map = dynamic(() => import('../components/MapSelect'), {
    ssr: false,
  });

  const MemoMap = useMemo(() => Map, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);

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

  useEffect(() => {
    api.get('items').then((response) => {
      setItems(response.data);
    });
  }, []);

  function handleSubmit(data: any) {
    // eslint-disable-next-line no-console
    console.log(data);
  }

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;

    if (selectedCity !== '0') setSelectedCity('0');

    setSelectedUf(uf);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;

    setSelectedCity(city);
  }

  function handleSelectItem(id: string) {
    const alreadySelected = selectedItems.findIndex((item) => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== id);

      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

  function handleMapClick(loc: [number, number]) {
    setSelectedPosition(loc);
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
            Cadastrar ponto de coleta
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
            {/* <Map initialPosition={initialPosition} onClick={handleMapClick} /> */}
            <MemoMap initialPosition={initialPosition} onClick={handleMapClick} />
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

          <ItemsList>
            {items.map((item) => (
              <Item
                key={item.id}
                onClick={() => handleSelectItem(item.id)}
                selected={selectedItems.includes(item.id)}
              >
                <img src={item.imageUrl} alt={item.title} />
                <span>{item.title}</span>
              </Item>
            ))}
          </ItemsList>

          <SubmitButton type="submit" primary>Cadastrar ponto de coleta</SubmitButton>
        </StyledForm>
      </Container>
    </>
  );
};

export default AddPoint;
