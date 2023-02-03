import React from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { NavBarLink, ListItemsUserMenu, WellcomeBlock, Wellcome, BtnLogOut, WrapperUserNavMenu } from './StyledNavBar';
import { getNameUser } from 'redux/auth/auth-selectors';
import { fetchLogout } from 'redux/api/authAPI';
import { RxAvatar } from "react-icons/rx";


export default function UserNavMenu() {
    const contactsId = nanoid();
    const nameUser = useSelector(getNameUser);
    const dispatch = useDispatch();
    
    return (
        <WrapperUserNavMenu>
            <ListItemsUserMenu>
                <li key={contactsId}>
                    <NavBarLink  to="/contacts">Contacts</NavBarLink >
                </li>
                <li>
                    <NavBarLink to='/family'>Family</NavBarLink>
                </li>
            </ListItemsUserMenu>
            <WellcomeBlock>
                <RxAvatar color='#737373' size='40px'/>
                <Wellcome>{nameUser}</Wellcome>
            </WellcomeBlock>
            <BtnLogOut type='button' onClick={() => dispatch(fetchLogout())}>Log out</BtnLogOut>
        </WrapperUserNavMenu>
    )
}
