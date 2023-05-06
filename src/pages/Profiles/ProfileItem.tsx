import React from 'react';
import './styles.scss';
import defaultImage from './img/default-1.jpg';

export const ProfileItem = (props: {}) => {
  return (
    <div className="profile">
      <div className="avatar-wrapper">
        <img class="profile-icon" src={defaultImage} alt="" />
      </div>
      <span className="profile-text">Nombre</span>
    </div>
  );
};
