import { Wrapper } from './AppStyled';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import ContactsPage from 'pages/ContactsPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/api/authAPI';
import { useEffect, Suspense, lazy } from 'react';
import PrivateRoute from '../Routs/PrivateRoute';
import RedirectRoute from '../Routs/RedirectRoute';
import HomePage from 'pages/HomePage';

const FamilyContactsPage = lazy(() => import("pages/FamilyContactsPage"));

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCurrentUser());
    }, [dispatch]);
    
    return (<Wrapper> 
            <Suspense fallback={<p>Loading...</p>} >
              <Routes>
                <Route path='/' element={ <Layout /> } >
                        <Route index element={<HomePage />} />
                        <Route path='register' element={ <RegisterPage />} />
                        <Route path='login' element={
                            <RedirectRoute component={LoginPage} redirect='/contacts' />
                        } />                   
                        <Route path='contacts' element={
                            <PrivateRoute conponent={<ContactsPage />} redirect='/login' />
                        }/>
                    <Route path='family' element={
                    <PrivateRoute conponent={<FamilyContactsPage />} redirect='/login' />
                    } />
                </Route>
        </Routes>
        </Suspense>
    </Wrapper>)
  }

