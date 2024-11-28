/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTonWallet } from '@tonconnect/ui-react';

export const WalletComponent = () => {
  const wallet: any = useTonWallet();
  return (
    wallet && (
      <div>
        <span>Connected wallet address: {wallet.account.address}</span>
        <span>Device: {wallet.device.appName}</span>
        <span>Connected via: {wallet.provider}</span>
        {wallet.connectItems?.tonProof?.proof && (
          <span>Ton proof: {wallet.connectItems.tonProof.proof}</span>
        )}

        <div>Connected wallet info:</div>
        <div>
          {wallet.name} <img src={wallet.imageUrl} />
        </div>
      </div>
    )
  );
};
