import { useEffect, useState } from 'react';
import { Global } from '@emotion/react';
import { defaultLanguage, defaultSettings, defaultState } from './config/defaultState';
import { getData, StateKeys } from './utils/stateManager';
import { globalStylesDefinitions } from './styled';
import { LanguagesProvider, LogProvider, SettingsProvider } from './contexts';
import { Main } from './components/Main';
import { SavedData, SettingsState } from './types';
import { SupportedLanguages } from './utils/i18n';
import { UserProvider } from './contexts/user/provider';
// import { Header } from './components/Header/Header';

export const App = () => {
  const [savedData, setSavedData] = useState<SavedData>(defaultState);

  const getSavedData = async (): Promise<SavedData> => {
    const settings: SettingsState | null = await getData(StateKeys.Settings);
    const language: SupportedLanguages | null = await getData(
      StateKeys.Language,
    );

    const loadedData = {
      settings: settings || defaultSettings,
      language: language || defaultLanguage,
    };

    setSavedData(loadedData);

    console.log('❗️ App.tsx:27 >> loadedData', loadedData);

    return loadedData;
  };

  useEffect(() => {
    getSavedData();
  }, []);

  return (
    <LanguagesProvider savedLanguage={savedData?.language || defaultLanguage}>
      <Global styles={globalStylesDefinitions} />
      <SettingsProvider savedSetttings={savedData?.settings || defaultSettings}>
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
