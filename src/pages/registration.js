import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  return (
    <div className="bg-account intro">
      <h1>REGISTRATION</h1>
      <Link to="/">Retour à la connexion</Link>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">Nom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder=""
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Prenom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder=""
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <Link to="/Dashboard">
          <button type="submit">Continue </button>
        </Link>
      </form>
    </div>
  );
};

export default Registration;
