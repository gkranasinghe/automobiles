import React from 'react';

const SignedInMenu = () => {
  return (
    <>
      <Button variant='contained' color='primary' component={NavLink} to=''>
        Post Ad
      </Button>
    </>
  );
};

export default SignedInMenu;
