import { Global } from '@emotion/react';
import { globalStylesDefinitions } from '../../styled';
import {
  LanguagesProvider,
  LogProvider,
  SettingsProvider,
} from '../../contexts';
import { Main } from '../Main';
// import { Header } from './components/Header/Header';
import { UserProvider } from '../../contexts/user/UserProvider';
import './resetStyles.css';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <LanguagesProvider>
      <Global styles={globalStylesDefinitions} />
      <SettingsProvider>
        <UserProvider>
          <LogProvider>
            <ToastContainer />
            {/* <Header /> */}

            <Main />
          </LogProvider>
        </UserProvider>
      </SettingsProvider>
    </LanguagesProvider>
  );
};
