import React from 'react';
import { Button } from '@material-ui/core';

const SignedOutMenu = ({ signIn, register }) => {
  return (
    <>
      <Button onClick={signIn}>Login</Button>
      <Button onClick={register}>Register</Button>
    </>
  );
};
