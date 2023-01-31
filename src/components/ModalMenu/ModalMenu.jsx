import React from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { closeModal } from 'redux/auth/auth-Slice';
import { getNameUser } from 'redux/auth/auth-selectors';
import { fetchLogout } from 'redux/api/authAPI';
import { OverlayModal, Modal, BtnUserMenuModal, WrapperModalNavMenu, NavBurgerLink, WellcomeModal, BtnLogOutModal} from './StyledModalMenu';
import { useEffect } from 'react';


const modalRoot = document.getElementById('modal-root');


export default function ModalMenu () {

  const contactsId = nanoid();
    const nameUser = useSelector(getNameUser);
    const dispatch = useDispatch();

  // useEffect (() => {
  //   document.addEventListener('keydown', dispatch(closeModal()))
  // }, [dispatch]);

  

    const closeBurgerMenu = () => {
      dispatch(closeModal());
    }

    

  
    return createPortal(
    <OverlayModal>
      <Modal>
      <WrapperModalNavMenu>
        <li key={contactsId}>
            <NavBurgerLink  to="/contacts">Contacts</NavBurgerLink >
        </li>
        <li>
            <NavBurgerLink to='/family'>Family</NavBurgerLink>
        </li>
        <WellcomeModal>Wellcome, {nameUser}</WellcomeModal>
        <BtnLogOutModal type='button' onClick={() => dispatch(fetchLogout())}>Log out</BtnLogOutModal>
        </WrapperModalNavMenu>
            <BtnUserMenuModal onClick={closeBurgerMenu}>X</BtnUserMenuModal>
        </Modal>
    </OverlayModal>,
    modalRoot
  )
  }


