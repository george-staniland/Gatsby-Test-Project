import { graphql } from 'gatsby';
import React from 'react';
import PizzaList from '../components/PizzaList';
import ToppingsFilter from '../components/ToppingsFilter';

export default function PizzaPage({ data }) {
  const pizzas = data.pizzas.nodes;
  console.log('test');
  return (
    <>
      <ToppingsFilter />
      <PizzaList pizzas={pizzas} />
    </>
  );
}

export const query = graphql`
  query MyQuery {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
