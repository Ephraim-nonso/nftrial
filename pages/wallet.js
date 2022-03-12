import React from "react";
import { WalletWrapper } from "../components/walletWrapper";
import Image from "next/image";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

function Wallet() {
  return (
    <div>
      <WalletWrapper>
        <div className="flex items-center mb-10 justify-between">
          <Link href="/">
            <button>
              <BsArrowLeft className="text-white" font-size={35} />
            </button>
          </Link>

          <h4 className="sm:text-2xl grotesk text-left text-white md:font-normal md:text-5xl">
            Connect your wallet to log in
          </h4>
        </div>
        <div className="sm:grid  p-4  md:grid grid-cols-2 gap-8 ">
          <div className="mb-4 bg-slate-50 rounded-lg flex items-center justify-between p-4">
            <div className="flex  items-center ">
              <Image
                src="/assets/walletConnect-icon.svg"
                width={100}
                height={100}
              />
              <h4 className="ml-4 grotesk font-normal text-2xl">
                walletconnects
              </h4>
            </div>
            <button>
              <BsArrowRight font-size={35} />
            </button>
          </div>
          <div className="mb-4 bg-slate-50 rounded-lg flex items-center justify-between p-4">
            <div className="flex  items-center">
              <Image src="/assets/Vector.svg" width={100} height={100} />
              <h4 className="ml-4 grotesk font-bold text-4xl">status</h4>
            </div>
            <button>
              <BsArrowRight font-size={35} />
            </button>
          </div>
          <div className="mb-4 bg-slate-50 rounded-lg flex items-center justify-between p-4">
            <div className="flex  items-center">
              <Image src="/assets/TWT.svg" width={100} height={100} />
              <h4 className="ml-4 grotesk font-normal text-2xl">
                trust Wallet
              </h4>
            </div>
            <button>
              <BsArrowRight font-size={35} />
            </button>
          </div>
          <div className="mb-4 bg-slate-50 rounded-lg flex items-center justify-between p-4">
            <div className="flex  items-center">
              <Image src="/assets/metamask.svg" width={100} height={100} />
              <h4 className="ml-4 grotesk font-normal text-2xl">metamask</h4>
            </div>
            <button>
              <BsArrowRight font-size={35} />
            </button>
          </div>
        </div>
      </WalletWrapper>
    </div>
  );
}

export default Wallet;
