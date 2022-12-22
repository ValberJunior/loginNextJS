import React from 'react'
import {  Button, DetailsFooter, Field, Input, Label, LinkElement, LoginComponent, Logo, Text, Wrapper } from './style'

const  LogoImage = 'assets/home/logo.png';

const Homescreen = () => {
  return (
    <Wrapper>
      <LoginComponent>
        <Logo src={LogoImage} alt='logo'/>

          <Field>
            <Label htmlFor='username'>User</Label>
            <Input id='username'/>
          </Field>
          <Field>
            <Label htmlFor='password'>Password</Label>
            <Input id='password'/>
          </Field>
            <Button>Login</Button>
        <DetailsFooter>
          <Text>Ainda não tem conta? <LinkElement href="/create">Crie uma conta</LinkElement></Text>
        </DetailsFooter>
      </LoginComponent>
    </Wrapper>
  )
}

export default Homescreen
