import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

const manifestUrl =
  'https://walletbot.me/tonconnect-proxy/https://abc123.ngrok.io/tonconnect-manifest.json';
//localhost:5173/tonconnect-manifest.json';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TonConnectUIProvider
      manifestUrl={manifestUrl}
      actionsConfiguration={{
        twaReturnUrl: 'https://t.me/imadnih_bot/testapp',
      }}
    >
      <App />
    </TonConnectUIProvider>
  </StrictMode>
);
