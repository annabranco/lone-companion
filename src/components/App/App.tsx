import { Global } from '@emotion/react';
import { globalStylesDefinitions } from '../../styled';
import { LanguagesProvider, LogProvider, SettingsProvider } from '../../contexts';
import { Main } from '../Main';
// import { Header } from './components/Header/Header';
import { UserProvider } from '../../contexts/user/UserProvider';
import './resetStyles.css';

export const App = () => {

  return (
    <LanguagesProvider>
      <Global styles={globalStylesDefinitions} />
      <SettingsProvider>
        <UserProvider>
            {/* 	<ToastsProvider> */}
            <LogProvider>

              <Main />
              {/* <Header /> */}

            </LogProvider>
        </UserProvider>

        {/*		</ToastsProvider> */}
      </SettingsProvider>
    </LanguagesProvider>
  );
};
