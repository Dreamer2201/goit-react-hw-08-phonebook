import { Wrapper } from './AppStyled';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import ContactsPage from 'pages/ContactsPage';
import FamilyContactsPage from 'pages/FamilyContactsPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/api/authAPI';
import { useEffect, Suspense, lazy } from 'react';
import PrivateRoute from './PrivateRoute';
import PublicRout from './PublicRout';

// const LoginPage = lazy(() => import('pages/LoginPage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage'));
// const ContactsPage = lazy(() => import('pages/ContactsPage'));

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCurrentUser());
    }, [dispatch]);
    
    return (<Wrapper> 
                {/* <Suspense fallback={<p>Loading content...</p>}>               */}
                    <Routes>
                        <Route path='/' element={ <Layout /> } >
                            {/* <Route element={<PublicRout />}> */}
                                <Route path='register' element={ <RegisterPage />} />
                                <Route path='login' element= {<LoginPage />} />
                            {/* </Route> */}
                            
                            <Route element={<PrivateRoute />} >
                                <Route path='contacts' element={<ContactsPage />}/>
                            </Route>
                            <Route path='family' element={<FamilyContactsPage />} />
                            
                        </Route>
                </Routes>
                {/* </Suspense> */}
            </Wrapper>)
  }

