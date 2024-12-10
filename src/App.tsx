import { useEffect, useState } from 'react';
//import { TonConnectButton } from '@tonconnect/ui-react';
import WebApp from '@twa-dev/sdk';
import './App.css';
// import Home from './pages/Home';

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

function App() {
  const [userData, setUserData] = useState<UserData | null>(null);
  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      // console.log(WebApp.initDataUnsafe.user);
      setUserData(WebApp.initDataUnsafe.user as UserData);
    }
  }, []);

  return (
    <div>
      {userData ? (
        <ul>
          <li>ID: {userData.id}</li>
          <li>First Name: {userData.first_name}</li>
          <li>Last Name: {userData.last_name || 'N/A'}</li>
          <li>Username: {userData.username || 'N/A'}</li>
          <li>Language Code: {userData.language_code}</li>
          <li>Is Premium: {userData.is_premium ? 'Yes' : 'No'}</li>
        </ul>
      ) : null}
      {/* <Home /> */}

      {/* 
      <h1>Hello World</h1>
      <TonConnectButton /> */}
    </div>
  );
}

export default App;
