import React from "react";
import Image from "next/image";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";

const WWConnect = async () => {
  //  Create WalletConnect Provider
  const provider = new WalletConnectProvider({
    infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
  });

  //  Enable session (triggers QR Code modal)
  await provider.enable();
};

const connectWallectHandler = async () => {
  // A Web3Provider wraps a standard Web3 provider, which is
  // what MetaMask injects as window.ethereum into each page
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  // MetaMask requires requesting permission to connect users accounts
  await provider.send("eth_requestAccounts", []);

  // The MetaMask plugin also allows signing transactions to
  // send ether and pay to change state within the blockchain.
  // For this, you need the account signer...
  const signer = provider.getSigner();
  console.log(signer);
};

function Wallet() {
  return (
    <React.Fragment>
      <div className="flex items-center mb-10 justify-between">
        <Link href="/" passHref={true}>
          <button>
            <BsArrowLeft className="text-white" font-size={35} />
          </button>
        </Link>
        <h4 className="sm:text-2xl font-grotesk text-left text-white md:font-normal md:text-5xl">
          Connect your wallet to log in
        </h4>
      </div>
      <div className="sm:grid  p-4  md:grid grid-cols-2 gap-8 ">
        <div
          className="mb-4 bg-slate-50 rounded-lg flex items-center justify-between p-4 cursor-pointer"
          onClick={WWConnect}
        >
          <div className="flex  items-center ">
            <Image
              src="/assets/walletConnect-icon.svg"
              width={100}
              height={100}
            />
            <h4 className="ml-4 font-grotesk font-normal text-2xl">
              walletconnects
            </h4>
          </div>
          <button>
            <BsArrowRight font-size={35} />
          </button>
        </div>
        <div className="mb-4 bg-slate-50 rounded-lg flex items-center justify-between p-4 cursor-pointer">
          <div className="flex  items-center">
            <Image src="/assets/Vector.svg" width={100} height={100} />
            <h4 className="ml-4 font-grotesk font-bold text-4xl">status</h4>
          </div>
          <button>
            <BsArrowRight font-size={35} />
          </button>
        </div>
        <div className="mb-4 bg-slate-50 rounded-lg flex items-center justify-between p-4 cursor-pointer">
          <div className="flex  items-center">
            <Image src="/assets/TWT.svg" width={100} height={100} />
            <h4 className="ml-4 font-grotesk font-normal text-2xl">
              trust Wallet
            </h4>
          </div>
          <button>
            <BsArrowRight font-size={35} />
          </button>
        </div>
        <div
          className="mb-4 bg-slate-50 rounded-lg flex items-center justify-between p-4 cursor-pointer"
          onClick={connectWallectHandler}
        >
          <div className="flex  items-center">
            <Image src="/assets/metamask.svg" width={100} height={100} />
            <h4 className="ml-4 font-grotesk font-normal text-2xl">metamask</h4>
          </div>
          <button>
            <BsArrowRight font-size={35} />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Wallet;
