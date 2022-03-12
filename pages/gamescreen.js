import React from "react";
import Card from "../components/card";
import { Container } from "../components/container";
import { BsInfoLg } from "react-icons/bs";

function GameScreen() {
  return (
    <Container>
      <div className="sm:flex sm:items-center justify-between py-12">
        <div>
          <div className="font-cont">
            <h1 className="text-white text-4xl font-bold font-grotesk">
              Game arena
            </h1>
          </div>

          <Card />
        </div>

        <div className="sm:items-center lg:items-end flex flex-col justify-end">
          <div
            className=" info text-3xl rounded-3xl bg-white p-3 h-11 w-11 text-center place-items-center cursor-pointer"
            onClick={() => {
              alert();
            }}
          >
            <div>
              <BsInfoLg className="text-black" font-size={20} />
            </div>
          </div>
          <div className="h-96 w-80 flex justify-between items-center p-10 bg-slate-400 mt-5 content-center">
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
