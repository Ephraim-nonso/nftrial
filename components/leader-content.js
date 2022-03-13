import React from "react";
import Head from "next/head";
import Image from "next/image";
import { ethers } from "ethers";
import { Container } from "./container";
import { BackArrow } from "./back-arrow";
import Link from "next/link";
import LeaderImageOne from "../assests/leader-image-one.png";
import LeaderImageTwo from "../assests/leader-image-two.png";
import LeaderImageThree from "../assests/leader-image-three.png";
import { address } from "./utils/variables-details";
import Abi from "./utils/GameArena.json";

export default function LeaderContent() {
  const [allLeaders, setAllLeaders] = React.useState([]);
  const [data, setData] = React.useState("");
  const [loading, setLoader] = React.useState(false);
  const leaderScores = async () => {
    setLoader(true);
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const gameContract = new ethers.Contract(address, Abi.abi, signer);

        const leaders = await gameContract.displayLeaderBoard();
        const eventData = await leaders.wait();
        setLoader(false);
        eventData?.events[0]?.args
          ? setAllLeaders(eventData?.events[0]?.args)
          : setAllLeaders([]);
        allLeaders.length > 1 ? setData("full") : setData("empty");
      } else {
        setData("Connect to wallet to view leaderboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    leaderScores();
  }, []);

  const scores = [
    {
      number: "1",
      address: "0x1234",
      score: "5000",
    },
    {
      number: "2",
      address: "0x1234",
      score: "5000",
    },
    {
      number: "3",
      address: "0x1234",
      score: "5000",
    },
    {
      number: "4",
      address: "0x1234",
      score: "5000",
    },
    {
      number: "5",
      address: "0x1234",
      score: "5000",
    },
  ];
  return (
    <Container>
      <div className="flex items-center space-x-5 md:space-x-20 font-grotesk">
        <div>
          <div className="hidden cursor-pointer md:flex">
            <Link href="/" passHref={true}>
              <BackArrow width={42} height={65} />
            </Link>
          </div>
          <div className="cursor-pointer md:hidden m-0 flex">
            <Link href="/" passHref={true} className="cursor-pointer md:hidden">
              <BackArrow width={20} height={25} />
            </Link>
          </div>
        </div>
        <p className="text-2xl leading-6 md:text-6xl md:leading-[82px] font-normal text-white">
          Leaderboards
        </p>
      </div>
      <div>
        {loading && (
          <div className="mt-40 w-full flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-20 w-20 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}
        {data === "Connect to wallet to view leaderboard" && (
          <p className=" font-vppixel text-7xl leading-[80px] text-center mt-40 text-[#FF9100]">
            Connect to wallet to view Leaderboard
          </p>
        )}
        {data === "empty" && (
          <p className=" font-vppixel text-7xl leading-[80px] text-center mt-40 text-[#FF9100]">
            No Players Yet
          </p>
        )}
      </div>
      {data === "full" && allLeaders && allLeaders.length > 1 && (
        <div className=" flex flex-col space-y-1 md:space-y-2  w-full mt-6 md:mt-12 text-sm leading-4 md:text-4xl md:leading-[45px] font-grotesk text-white">
          <div className="bg-[#1a1e21] flex flex-row px-6 py-3.5 md:px-10 md:py-6 justify-between items-center font-vppixel rounded-t-xl">
            <p className="w-full max-w-[20%] md:max-w-[10%] text-left">Rank</p>
            <p className="w-full max-w-[30%] md:max-w-[23%]">User</p>
            <p className="w-full max-w-[30%] text-right">Score</p>
          </div>
          {allLeaders &&
            allLeaders.length > 1 &&
            allLeaders.map(({ number, address, score }, idx) => {
              return (
                <div
                  key={number}
                  className={`bg-[#1a1e21] flex flex-row px-6 py-3.5 md:px-10 md:py-6 justify-between items-center font-vppixel ${
                    scores?.length === idx + 1 ? "rounded-b-xl" : ""
                  }`}
                >
                  <p className="w-full max-w-[20%] md:max-w-[10%] text-left">
                    {number}
                  </p>
                  <p className="w-full max-w-[30%] md:max-w-[23%]">{address}</p>
                  <p className="w-full max-w-[30%] text-right">{score}</p>
                </div>
              );
            })}
        </div>
      )}
    </Container>
  );
}
