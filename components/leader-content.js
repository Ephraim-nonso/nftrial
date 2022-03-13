import Head from "next/head";
import Image from "next/image";
import { Container } from "./container";
import { BackArrow } from "./back-arrow";
import Link from "next/link";
import LeaderImageOne from "../assests/leader-image-one.png";
import LeaderImageTwo from "../assests/leader-image-two.png";
import LeaderImageThree from "../assests/leader-image-three.png";

export default function LeaderContent() {
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
      <div className=" flex flex-col space-y-1 md:space-y-2  w-full mt-6 md:mt-12 text-sm leading-4 md:text-4xl md:leading-[45px] font-grotesk text-white">
        <div className="bg-[#1a1e21] flex flex-row px-6 py-3.5 md:px-10 md:py-6 justify-between items-center font-vppixel rounded-t-xl">
          <p className="w-full max-w-[20%] md:max-w-[10%] text-left">Rank</p>
          <p className="w-full max-w-[30%] md:max-w-[23%]">User</p>
          <p className="w-full max-w-[30%] text-right">Score</p>
        </div>
        {scores &&
          scores.map(({ number, address, score }, idx) => {
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
    </Container>
  );
}
