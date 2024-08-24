import paoFrances from "../assets/imgs/pãoFrancês.jpeg";
import paoDoce from "../assets/imgs/pãoDocejpeg.jpeg";
import paoRecheado from "../assets/imgs/pãoRecheado.jpeg";
import boloChocolate from "../assets/imgs/bolodechocolate.jpeg";
import boloMilho from "../assets/imgs/bolodeMilho.jpeg";
import tortaMaracuja from "../assets/imgs/tortadeMaracujá.jpeg";
import cappuccinoChocolate from "../assets/imgs/capuccinoChocolate.jpeg";
import cappuccinoCanelaMel from "../assets/imgs/capuccinoMel.jpeg";
import cappuccinoItaliano from "../assets/imgs/capuccinoItaliano.jpg";
import coxinhaFrango from "../assets/imgs/coxinha.jpeg";
import bombaQueijoPresunto from "../assets/imgs/bomba.jpeg";
import enroladinho from "../assets/imgs/enrroladinho.jpeg";
import cocaCola from "../assets/imgs/coca.jpeg";
import sucoMaracuja from "../assets/imgs/sucodeMaracujá.jpeg";
import sucoAbacaxi from "../assets/imgs/sucodeAbacaxi.jpeg";
import paoQueijoTradicional from "../assets/imgs/pãodequeijoTradicional.jpeg";
import paoQueijoRecheado from "../assets/imgs/pãesdeQueijoRecheado.jpeg";
import paoQueijoVegano from "../assets/imgs/pãodequeijoVegano.jpeg";

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface Category {
  id: number;
  name: string;
  items: MenuItem[];
}

export const menuItems: Category[] = [
  {
    id: 1,
    name: "Pães",
    items: [
      {
        id: 0,
        name: "Pão Francês",
        price: 0.6,
        image: paoFrances,
      },
      {
        id: 1,
        name: "Pão Doce",
        price: 1.0,
        image: paoDoce,
      },
      {
        id: 2,
        name: "Pão Recheado",
        price: 1.1,
        image: paoRecheado,
      },
    ],
  },
  {
    id: 2,
    name: "Bolos e Tortas",
    items: [
      {
        id: 3,
        name: "Bolo de Chocolate",
        price: 15.0,
        image: boloChocolate,
      },
      {
        id: 4,
        name: "Bolo de Milho",
        price: 15.0,
        image: boloMilho,
      },
      {
        id: 5,
        name: "Torta de Maracujá",
        price: 12.0,
        image: tortaMaracuja,
      },
    ],
  },
  {
    id: 3,
    name: "Cappuccinos",
    items: [
      {
        id: 6,
        name: "Cappuccino de Chocolate",
        price: 4.5,
        image: cappuccinoChocolate,
      },
      {
        id: 7,
        name: "Cappuccino Canela com Mel",
        price: 5.0,
        image: cappuccinoCanelaMel,
      },
      {
        id: 8,
        name: "Cappuccino Italiano",
        price: 5.5,
        image: cappuccinoItaliano,
      },
    ],
  },
  {
    id: 4,
    name: "Salgados",
    items: [
      {
        id: 9,
        name: "Coxinha de Frango",
        price: 0.6,
        image: coxinhaFrango,
      },
      {
        id: 10,
        name: "Bomba de Queijo e Presunto",
        price: 6.0,
        image: bombaQueijoPresunto,
      },
      {
        id: 11,
        name: "Enroladinho",
        price: 5.0,
        image: enroladinho,
      },
    ],
  },
  {
    id: 5,
    name: "Gelados",
    items: [
      {
        id: 12,
        name: "Coca-Cola",
        price: 5.0,
        image: cocaCola,
      },
      {
        id: 13,
        name: "Suco de Maracujá",
        price: 6.0,
        image: sucoMaracuja,
      },
      {
        id: 14,
        name: "Suco de Abacaxi",
        price: 5.0,
        image: sucoAbacaxi,
      },
    ],
  },
  {
    id: 6,
    name: "Pães de Queijo",
    items: [
      {
        id: 15,
        name: "Pão de Queijo Tradicional",
        price: 2.0,
        image: paoQueijoTradicional,
      },
      {
        id: 16,
        name: "Pão de Queijo Recheado",
        price: 3.1,
        image: paoQueijoRecheado,
      },
      {
        id: 17,
        name: "Pão de Queijo Vegano",
        price: 3.5,
        image: paoQueijoVegano,
      },
    ],
  },
];
