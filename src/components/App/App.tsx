import { Global } from '@emotion/react';
import { ToastContainer } from 'react-toastify';


// import { Header } from '@/components/Header/Header';
import { zIndex } from '../../config';
import {
  LanguagesProvider,
  LogProvider,
  SettingsProvider,
  UserProvider,
} from '../../contexts';
import { globalStylesDefinitions } from '../../styled';
import { Main } from '../Main';
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
