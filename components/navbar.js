import React from "react";
import Link from "next/link";
import { Container } from "../components/container";

function Navbar() {
  return (
    <Container>
      <nav className="pt-12 pb-20 flex justify-between items-center">
        <Link href="/" className="no-underline">
          <h3 className="text-5xl text-[#FF9100] font-normal leading-[61px]">
            NFTrials
          </h3>
        </Link>
        <ul className="hidden xl:flex space-x-5 text-white text-center font-normal text-4xl leading-[45px]">
          <li>
            <Link href="/about">
              <a className="text-red">About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/leaderboard">
              <a>Leaderboard</a>
            </Link>
          </li>
        </ul>

        <Link href="/wallet">
          <div className="rounded-xl hidden xl:flex items-center justify-center text-2xl leading-7 font-normal bg-[#55A630] text-white w-56 h-24">
            <h4>Connect Wallet</h4>
          </div>
        </Link>
      </nav>
    </Container>
  );
}

export default Navbar;
