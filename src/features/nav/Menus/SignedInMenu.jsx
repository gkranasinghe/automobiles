import React from 'react';

const SignedInMenu = ({ signOut, profile, auth }) => {
  return (
    <>
      SignedInMenu
      <ul>
        <li>Create Event</li>
        <li>My Events</li>
        <li>My Network</li>
        <li>My Profile</li>
        <li>Settings</li>
      </ul>
    </>
  );
};

export default SignedInMenu;
