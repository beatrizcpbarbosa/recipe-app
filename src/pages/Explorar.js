import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Explorar() {
  return (
    <>
      <Header title="Explorar" show={ false } />

      <div className="explore">
        <Link to="/explorar/comidas">
          <button
            data-testid="explore-food"
            type="button"
          >
            Explorar Comidas
          </button>
        </Link>
        <Link to="/explorar/bebidas">
          <button
            data-testid="explore-drinks"
            type="button"
          >
            Explorar Bebidas
          </button>
        </Link>
      </div>

      <Footer />
    </>);
}

export default Explorar;
