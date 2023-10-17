import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EShop = () => {
  const [priceRange, setPriceRange] = useState([0, 200]);

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [name]: parseFloat(value),
    }));
  };

  return (
    <main className=' intro'>
      <div className="bg-eshop intro">
      <div className='titile'>
        <h1>
          RÉCUPEREZ LE FLOW DE BATMAN AVEC NOTRE E-SHOP
        </h1>
      </div>
      <div id="shop">
        <div className="filter">
          <h2>Filtres</h2>
          <div className='pricerange'>
            <h3>Prix</h3>
            <input
              type="range"
              name="minPrice"
              value={priceRange.min}
              min={0}
              max={200}
              step={1}
              onChange={handlePriceRangeChange}
            />
           
            <div className="price">
              <span><p>0$</p></span>
              <span><p>100$</p></span>
              <span><p>200$</p></span>
            </div>
            <p>
                
            </p>
          </div>
          <div className='types'>
            <div className='cadre'>
              <h3>Catégorie</h3>
                  {Array.from({ length: 9 }, (_, index) => (
                    <div key={index}>
                      <label>
                        <input
                          type="checkbox"
                        />
                        Category {index + 1}
                      </label>
                    </div>
                  ))}
            </div>
            <div className='cadre'>
              <h3>Couleur</h3>
                  {Array.from({ length: 3 }, (_, index) => (
                    <div key={index}>
                      <label>
                        <input
                          type="checkbox"
                        />
                        Couleur {index + 1}
                      </label>
                    </div>
                  ))}
            </div>
            <div className='cadre'>
              <h3>Couleur</h3>
                  {Array.from({ length: 5 }, (_, index) => (
                    <div key={index}>
                      <label>
                        <input
                          type="checkbox"
                        />
                        Univers {index + 1}
                      </label>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      {/* 3 ème section*/}
        <div className='stuff'>
                  {Array.from({ length: 20 }, (_, index) => (
                    <div key={index}>
                      <div className="goodies">
                        <div className="sale">
                          <h2 className='buy'>SALE</h2>
                          <div className="info">
                            <p>Buy Whatever This is for god's sake</p>
                            <div className="money">
                              <p>
                                <span className='before'>59$</span>
                                <span>32$</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <Link to="/cart">
                          <div className='button'>
                            AJOUTER AU PANIER
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
        </div>
      </div>
    </div>
    </main>
  );
};

export default EShop;
