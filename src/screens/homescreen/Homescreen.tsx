import React from 'react';
import { Button, DetailsFooter, LoginComponent, Logo, Text, Wrapper } from './style';
import FormField from '../../components/FormField';

const LogoImage = 'assets/home/logo.png';

const Homescreen = () => {
  return (
    <Wrapper>
      <LoginComponent>
        <Logo src={LogoImage} alt='logo' />
        <FormField id='username' label='User' />
        <FormField id='password' label='Password' type='password' />
        <Button>Login</Button>
        <DetailsFooter>
          <Text>Ainda não tem conta? <a href="/create">Crie uma conta</a></Text>
        </DetailsFooter>
      </LoginComponent>
    </Wrapper>
  );
};

export default Homescreen;