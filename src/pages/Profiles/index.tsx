import React from 'react';
import { ProfileAdd } from './ProfileAdd';
import { ProfileItem } from './ProfileItem';
import { ProfilesManageButton } from './ProfilesManageButton';
import { ProfilesTitle } from './ProfilesTitle';

export const Profiles = (props: {}) => {
  return (
    <div className="list-profiles">
      <ProfilesTitle />
      <div className="choose-profile">
        <ProfileItem />
        <ProfileItem />
        <ProfileItem />
        <ProfileAdd />
      </div>
      <ProfilesManageButton />
    </div>
  );
};
