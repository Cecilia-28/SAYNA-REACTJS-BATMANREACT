import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConfirmationModal from './popup'; 

const Subpage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'User',
    lastName: 'SAYNA',
    password: 'Password',
    email: 'email@gmail.com',
    phoneNumber: '+261 00 000 00',
    addressOne: 'madagascar',
    addressTwo: 'madagascar',
  });

  const [newsletter, setNewsletter] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const handleLogoutConfirm = () => {
    setIsModalOpen(false);
    window.location.href = '/account';
  };

  const handleModifyInfoClick = () => {
    setIsEditing(true);
  };

  const handleSaveInfoClick = () => {
    setIsEditing(false);
    
  };

  const handleNewsletterChange = (e) => {
    setNewsletter(e.target.checked);
  };

  return (
    <div className="bg-account intro subpage">
      <h1>SUBPAGE</h1>
      <Link to="/registration">Retour</Link>
      <section>
        <h2>Historique</h2>
        <button onClick={handleLogoutClick}>Deconexion</button>
      </section>
      <section>
  <h2>Personal Info</h2>
        <div>
          <label>Nom</label>
          {isEditing ? (
            <input
              type="text"
              value={userInfo.name}
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            />
          ) : (
            <span>{userInfo.name}</span>
          )}
        </div>
        <div>
          <label>Prenom:</label>
          {isEditing ? (
            <input
              type="text"
              value={userInfo.lastName}
              onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.value })}
            />
          ) : (
            <span>{userInfo.lastName}</span>
          )}
        </div>
        <div>
          <label>Mot de passe</label>
          {isEditing ? (
            <input
              type="password"
              value={userInfo.password}
              onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
            />
          ) : (
            <span>{userInfo.password}</span>
          )}
        </div>
        <div>
          <label>Email</label>
          {isEditing ? (
            <input
              type="email"
              value={userInfo.email}
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
            />
          ) : (
            <span>{userInfo.email}</span>
          )}
        </div>
        <div>
          <label>Numero tel:</label>
          {isEditing ? (
            <input
              type="tel"
              value={userInfo.phoneNumber}
              onChange={(e) => setUserInfo({ ...userInfo, phoneNumber: e.target.value })}
            />
          ) : (
            <span>{userInfo.phoneNumber}</span>
          )}
        </div>
        <div>
          <label>Adresse</label>
          {isEditing ? (
            <input
              type="text"
              value={userInfo.addressOne}
              onChange={(e) => setUserInfo({ ...userInfo, addressOne: e.target.value })}
            />
          ) : (
            <span>{userInfo.addressOne}</span>
          )}
        </div>
        <div>
          <label>Address :</label>
          {isEditing ? (
            <input
              type="text"
              value={userInfo.addressTwo}
              onChange={(e) => setUserInfo({ ...userInfo, addressTwo: e.target.value })}
            />
          ) : (
            <span>{userInfo.addressTwo}</span>
          )}
        </div>
        <button onClick={isEditing ? handleSaveInfoClick : handleModifyInfoClick}>
          {isEditing ? 'Save Info' : 'Modify Info'}
        </button>
      </section>
      <section>
        <h2>Newsletter</h2>
        <div>
          <label>Want to join us:</label>
          <input
            type="checkbox"
            checked={newsletter}
            onChange={handleNewsletterChange}
          />
        </div>
        <button>Enregister</button>
      </section>

    
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleLogoutConfirm}
      />
    </div>
  );
};

export default Subpage;
