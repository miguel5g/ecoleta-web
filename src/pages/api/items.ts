import { NextApiRequest, NextApiResponse } from 'next';

const items = [
  { id: '01', title: 'Lâmpadas', image: 'lampadas.svg' },
  { id: '02', title: 'Pilhas e Baterias', image: 'baterias.svg' },
  { id: '03', title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
  { id: '04', title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
  { id: '05', title: 'Resíduos Orgânicos', image: 'organicos.svg' },
  { id: '06', title: 'Óleo de Cozinha', image: 'oleo.svg' },
];

async function get(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(items.map((item) => ({ ...item, imageUrl: `/uploads/${item.image}` })));
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      return get(req, res);

    default:
      return res.status(404).send(null);
  }
};
