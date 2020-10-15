import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export default function ToppingsFilter() {
  // Get a list of all the toppings
  const pizzas = useStaticQuery(graphql`
    query MyQuery {
      allSanityTopping {
        nodes {
          name
          id
          vegetarian
        }
      }
    }
  `);
  // Get a list of all the pizzas with their toppings
  return (
    <div>
      <p> Toppings!!!!</p>
    </div>
  );
}
