import React from "react";
import Card from "../components/card";
import { Container } from "../components/container";

function GameScreen() {
  return (
    <Container>
      <div className="flex justify-between py-12">
        <div>
          <div className="font-cont">
            <h1 className="text-white text-4xl font-bold">Game arena</h1>
          </div>

          <Card />
        </div>

        <div className="flex flex-col justify-end items-end">
          <div
            className="info text-3xl rounded-3xl bg-white p-6 h-12 w-12 text-center cursor-pointer"
            onClick={() => {
              alert();
            }}
          >
            <h4>?</h4>
          </div>
          <div className="h-96 w-80 p-10 bg-slate-400 mt-5">Hello</div>
        </div>
      </div>
    </Container>
  );
}

export default GameScreen;
