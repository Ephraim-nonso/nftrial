import React from "react";
import Link from "next/link";
import { Container } from "../components/container";
import { Hamburger } from "./hamburger";
import { ethers } from "ethers";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [connected, setConnected] = React.useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length !== 0) {
        const account = accounts[0];
        setConnected("Connected");
      } else {
        setConnected("Connect Wallet");
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  return (
    <Container>
      <nav className="pt-10 pb-10 xl:pb-12 flex justify-between items-center font-grotesk">
        <div className="flex justify-between w-full xl:w-auto">
          <Link href="/" passHref={true} className="no-underline">
            <h3 className="text-2xl leading-[45px] cursor-pointer lg:text-5xl text-[#FF9100] font-normal lg:leading-[61px] font-grotesk">
              NFTrials
            </h3>
          </Link>
          <button
            className="cursor-pointer xl:hidden focus:bg-transparent"
            onClick={() => setOpen(!open)}
          >
            <Hamburger className="fill-white" />
          </button>
        </div>
        <ul className="hidden xl:flex space-x-20 text-white text-center font-normal text-4xl leading-[45px]">
          <li className=" relative before:content-[''] before:absolute before:w-full before:scale-0 before:h-[3px] before:bottom-0 before:right-0 before:bg-[#FF9100] before:origin-bottom-right before:transition-transform before:duration-300 before:ease-out hover:before:scale-100 hover:before:origin-bottom-left ">
            <Link href="/about" passHref>
              <a className="">About Us</a>
            </Link>
          </li>
          <li className=" relative before:content-[''] before:absolute before:w-full before:scale-0 before:h-[3px] before:bottom-0 before:right-0 before:bg-[#FF9100] before:origin-bottom-right before:transition-transform before:duration-300 before:ease-out hover:before:scale-100 hover:before:origin-bottom-left ">
            <Link href="/leaderboard" passHref>
              <a>Leaderboard</a>
            </Link>
          </li>
        </ul>

        <Link href="/wallet" passHref>
          <div className=" cursor-pointer rounded-xl hidden xl:flex items-center justify-center text-2xl leading-7 font-normal bg-[#55A630] text-white w-56 h-16">
            <h4>{connected}</h4>
          </div>
        </Link>
      </nav>
      <div
        className={`w-64  h-[100vh] shadow-md bg-[#212529] px-8 top-0 left-0 z-50 xl:hidden  fixed bottom-0 ${
          open ? "fixed" : "hidden"
        }`}
      >
        <div>
          <ul className="relative  space-y-16 text-white text-left font-normal pt-20 text-2xl leading-6">
            <li className="">
              <Link href="/about" passHref>
                <a className="">About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/leaderboard" passHref>
                <a>Leaderboard</a>
              </Link>
            </li>
            <li>
              <Link href="/wallet" passHref>
                <div className=" cursor-pointer rounded-xl flex items-center justify-center text-sm leading-6 font-normal bg-[#55A630] text-white w-32 h-14">
                  <h4>{connected}</h4>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
