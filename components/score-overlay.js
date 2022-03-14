import React from "react";
import { BackArrow } from "./back-arrow";
import Link from "next/link";

const ScoreOverlay = ({ score }) => {
  return (
    <div>
      <div
        className=" overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center"
        id="modal-id"
      >
        <div className="flex h-full items-center">
          <div className="relative w-auto self-center mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center justify-between py-10 px-14 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold font-grotesk">
                  Your Score
                </h3>
                <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <div className="relative py-10 px-14  flex-auto">
                <p className="my-4 text-blueGray-500 text-lg leading-relaxed font-grotesk">
                  Your score is {score} out of 6
                </p>
              </div>
              <div className="flex items-center justify-center p-6 rounded-b">
                <Link href="/" passHref>
                  <div className=" cursor-pointer rounded-xl flex items-center justify-center text-2xl leading-7 space-x-5 font-normal bg-[#55A630] text-white w-56 h-16">
                    <BackArrow width={20} height={25} />
                    <h4>Home Page</h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" opacity-40 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default ScoreOverlay;
