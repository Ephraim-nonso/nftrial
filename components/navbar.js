import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <Link href="/">
        <h3 className="text-3xl font-bold underline">NFTrials</h3>
      </Link>
      <ul>
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
        <h4>Connect Wallet</h4>
      </Link>
    </nav>
  );
}

export default Navbar;
