import React from 'react';
import { Link } from 'react-router-dom';
import { NameHomePage, WrapperLetsGo, TitleHomePage, LogoContacts, LetsGo , Content } from './StyledHomePage';
import { RiContactsBookFill } from "react-icons/ri";

export default function HomePage() {
  return (
    <>
      <NameHomePage>
        <LogoContacts to="/contacts"><RiContactsBookFill color='#FFA500' size='40px' /></LogoContacts>
        <TitleHomePage>PHONEBOOK</TitleHomePage>
      </NameHomePage>
      
        <Content>Nowadays, it is impossible to imagine a person without a mobile phone. Productive and fast communication of people is an integral part of our life. And this device helps you to organize your phonebook: add or delete your contacts, and also create separate groups of contacts, for example family group contacts.</Content>
        <WrapperLetsGo>
      <LetsGo >Let's start to create your favorite contacts!</LetsGo >
      <LogoContacts to="/contacts"><RiContactsBookFill color='#FFA500' size='40px' /></LogoContacts>
      </WrapperLetsGo>
    </>
  )
}
