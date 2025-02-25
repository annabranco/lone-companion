import { Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import { Main } from './components/Main';
import { defaultLanguage, defaultSettings } from './config/defaultSettings';
import { LanguagesProvider, SettingsProvider } from './contexts';
import { UserProvider } from './contexts/user/provider';
import { Logs } from './features/Logs/Logs';
import { globalStylesDefinitions } from './styled';
import { SavedData, SettingsState } from './types';
import { SupportedLanguages } from './utils/i18n';
import { getData, StateKeys } from './utils/stateManager';
// import { Header } from './components/Header/Header';

export const App = () => {
  const [savedData, setSavedData] = useState<SavedData>();

  const getSavedData = async (): Promise<SavedData> => {
    const settings: SettingsState | null = await getData(StateKeys.Settings);
    const language: SupportedLanguages | null = await getData(
      StateKeys.Language,
    );
    // const logs: LogState | null = await getData(StateKeys.Logs);

    const loadedData = {
      settings: settings || defaultSettings,
      language: language || defaultLanguage,
      // logs: logs || [],
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
      <SettingsProvider savedSetttings={savedData?.settings || defaultSettings}>
        {/* 	<ToastsProvider>
							<LogProvider savedLogs={savedData.logs}>
                {fontsLoaded && <Main />} */}
   <Global styles={globalStylesDefinitions} />
        <Main />
        <UserProvider>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
              height: '80vh',
            }}
          >
            {/* <Header /> */}
            <Logs />
          </div>
        </UserProvider>

        {/* </LogProvider>
						</ToastsProvider> */}
      </SettingsProvider>
    </LanguagesProvider>
  );
};
