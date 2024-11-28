/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTonWallet } from '@tonconnect/ui-react';

export const WalletComponent = () => {
  const wallet: any = useTonWallet();
  return (
    wallet && (
      <ul>
        <li>Connected wallet address: {wallet.account.address}</li>
        <li>Device: {wallet.device.appName}</li>
        <li>Connected via: {wallet.provider}</li>
        {wallet.connectItems?.tonProof?.proof && (
          <li>Ton proof: {wallet.connectItems.tonProof.proof}</li>
        )}

        <li>Connected wallet info:</li>
        <li>
          {wallet.name} <img src={wallet.imageUrl} />
        </li>
      </ul>
    )
  );
};
