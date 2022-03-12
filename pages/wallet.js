import React from "react";
import { WalletWrapper } from "../components/walletWrapper";
import Wallet from "../components/wallet"
function WalletPage() {
  return (
    <div>
      <WalletWrapper>
        <Wallet/>
      </WalletWrapper>
    </div>
  );
}

export default WalletPage;
