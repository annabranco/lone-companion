import { Global } from '@emotion/react';
import { ToastContainer } from 'react-toastify';

import {
  LanguagesProvider,
  LogProvider,
  SettingsProvider,
} from '../../contexts';
import { globalStylesDefinitions } from '../../styled';
import { Main } from '../Main';
// import { Header } from './components/Header/Header';
import { zIndex } from '../../config';
import { UserProvider } from '../../contexts/user/UserProvider';
import './resetStyles.css';

export const App = () => {
  return (
    <LanguagesProvider>
      <Global styles={globalStylesDefinitions} />
      <SettingsProvider>
        <UserProvider>
          <LogProvider>
            <ToastContainer style={{ zIndex: zIndex.Front }} />
            {/* <Header /> */}

            <Main />
          </LogProvider>
        </UserProvider>
      </SettingsProvider>
    </LanguagesProvider>
  );
};
