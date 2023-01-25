import NavBar from 'components/NavBar/NavBar';
import { Wrapper } from './AppStyled';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import ContactsPage from 'pages/ContactsPage';
import RegisterPage from 'pages/RegisterPage';
export default function App() {
    return (<Wrapper>               
                <Routes>
                    <Route path='/' element={ <Layout /> } >
                    <Route path='register' element={ <RegisterPage />} />
                    <Route path='contacts' element={<ContactsPage />} />
                    </Route>
                </Routes>
          </Wrapper>)
  }

