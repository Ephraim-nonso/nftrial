import React, { useState } from "react";
import Card from "../components/card";
import { Container } from "../components/container";
import { BsInfoLg } from "react-icons/bs";
import { ethers } from "ethers";

function GameScreen() {
  const [open, setOpen] = useState(false);

  const beginGame = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const gameContract = new ethers.Contract(address, Abi.abi, signer);
        console.log(gameContract);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openHandler = () => {
    setOpen(!open);
  };
  return (
    <Container>
      <div className="sm:flex sm:items-center justify-between py-12">
        <div>
          <div className="font-cont">
            <h1 className="text-white text-4xl font-bold font-grotesk">
              Game arena
            </h1>
          </div>

          <Card startGame={beginGame} />
        </div>

        <div className="sm:items-center lg:items-end flex flex-col justify-end">
          <div
            className="hover:border-solid hover:border-2 hover:border-yellow-500 info text-3xl rounded-3xl bg-white p-3 h-11 w-11 text-center place-items-center cursor-pointer"
            onClick={openHandler}
          >
            <div>
              <BsInfoLg className="text-black" font-size={20} />
            </div>

            <div
              style={{ display: open ? "block" : "none" }}
              className="bg-white max-w-2xl py-10 px-10 z-50 absolute right-[22rem] top-[8rem] left-75"
            >
              <h4 className="font-bold font-grotesk">HOW TO PLAY:</h4>
              <ul className="font-grotesk">
                <ol className="my-2 text-2xl">1. Connect your wallet</ol>
                <ol className="my-2 text-2xl">2. Go to the Game Arena</ol>
                <ol className="my-2 text-2xl">
                  3. Click on the tiles to unveil NFT Components{" "}
                </ol>
                <ol className="my-2 text-2xl">
                  4. You get a chance a day to pick the correct components of an
                  NFT
                </ol>
                <ol className="my-2 text-2xl">5. Guessing all six.</ol>
                <ol className="my-2 text-2xl">
                  6. components correctly wins you an NFT
                </ol>
              </ul>
            </div>
          </div>
          <div className="z-0 h-96 w-80 flex justify-between items-center p-10 bg-slate-400 mt-5 content-center">
            <h3 className="text-xl font-bold font-grotesk">A1</h3>
            <h3 className="text-xl font-bold font-grotesk">1B</h3>
            <h3 className="text-xl font-bold font-grotesk">2D</h3>
            <h3 className="text-xl font-bold font-grotesk">3F</h3>
            <h3 className="text-xl font-bold font-grotesk">4E</h3>
            <h3 className="text-xl font-bold font-grotesk">5C</h3>
            <h3 className="text-xl font-bold font-grotesk">6A</h3>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default GameScreen;
