import React from "react";
import Link from "next/link";
import { Container } from "../components/container";
import { Hamburger } from "./hamburger";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Container>
      <nav className="pt-12 pb-10 xl:pb-20 flex justify-between items-center">
        <div className="flex justify-between w-full xl:w-auto">
          <Link href="/" passHref={true} className="no-underline">
            <h3 className="text-2xl leading-[45px] lg:text-5xl text-[#FF9100] font-normal lg:leading-[61px]">
              NFTrials
            </h3>
          </Link>
          <button
            className="xl:hidden focus:bg-transparent"
            onClick={() => setOpen(!open)}
          >
            <Hamburger className="fill-white" />
          </button>
        </div>
        <ul className="hidden xl:flex space-x-5 text-white text-center font-normal text-4xl leading-[45px]">
          <li>
            <Link href="/about">
              <a className="text-red">About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/leaderboard" passHref={true}>
              <a>Leaderboard</a>
            </Link>
          </li>
        </ul>

        <Link href="/wallet" passHref={true}>
          <div className="rounded-xl hidden xl:flex items-center justify-center text-2xl leading-7 font-normal bg-[#55A630] text-white w-56 h-24">
            <h4>Connect Wallet</h4>
          </div>
        </Link>
      </nav>
      <div
        className={`w-64  h-[100vh] shadow-md bg-[#212529] px-8 top-0 left-0 z-50  absolute ${
          open ? "absolute" : "hidden"
        }`}
      >
        <ul className="relative  space-y-10 text-white text-left font-normal pt-20 text-2xl leading-6">
          <li>
            <Link href="/about">
              <a className="text-red">About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/leaderboard" passHref={true}>
              <a>Leaderboard</a>
            </Link>
          </li>
          <li>
            <Link href="/wallet" passHref={true}>
              <div className="rounded-xl flex items-center justify-center text-sm leading-6 font-normal bg-[#55A630] text-white w-28 h-12">
                <h4>Connect Wallet</h4>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Navbar;
