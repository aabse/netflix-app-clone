import React from 'react';
import IconPlusCircle from '../../components/icons/IconPlusCircle';

export const ProfileAdd = (props: {}) => {
  return (
    <div className="profile-add">
      <div className="icon-add">
        <IconPlusCircle />
      </div>
      <span className="profile-text">Agregar perfil</span>
    </div>
  );
};
