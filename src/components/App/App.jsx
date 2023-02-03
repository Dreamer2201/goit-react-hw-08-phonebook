import { useEffect, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Wrapper } from './AppStyled';
import { fetchCurrentUser } from 'redux/api/authAPI';
import Layout from 'components/Layout/Layout';
import PrivateRoute from '../Routs/PrivateRoute';
import RedirectRoute from '../Routs/RedirectRoute';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import HomePage from 'pages/HomePage/HomePage';

const FamilyContactsPage = lazy(() => import("pages/FamilyPage/FamilyContactsPage"));

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
                        <Route path='register' element={
                            <RedirectRoute component={RegisterPage} redirect='/contacts' />
                        } />
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

