import NavBar from 'components/NavBar/NavBar';
import { Wrapper } from './AppStyled';
import { Route, Routes } from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage';
import RegisterPage from 'pages/RegisterPage';
export default function App() {
    return (<Wrapper>
                <NavBar />
                    
        <Routes>
            <Route path='/register' element={ <RegisterPage />} />
            <Route path='/contacts' element={<ContactsPage />} />

        </Routes>
          </Wrapper>)
  }

