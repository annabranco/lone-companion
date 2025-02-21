import { UserProvider } from './contexts/user/provider';
import './App.css';
import { Header } from './components/Header/Header';
import { Logs } from './features/Logs/Logs';

function App() {
  return (
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
        <Header />
        <Logs />
      </div>
    </UserProvider>
  );
}

export default App;
