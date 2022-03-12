import Head from "next/head";
import Image from "next/image";
import { Container } from "./container";
import LandingImage from "../assests/landing-page-image.png";
import { LandingArrow } from "./landing-arrow";

export default function LandingContent() {
  return (
    <Container>
      <div className="flex flex-col order-2 xl:order-none xl:flex-row justify-between items-center w-full xl:pr-12">
        <div className="w-full flex xl:hidden items-center justify-center mb-9 xl:mb-0 xl:max-w-[35%] h-[663px]">
          <Image
            objectFit="contain"
            className="w-full h-full"
            alt="image"
            layout="intrinsic"
            src={LandingImage}
          />
        </div>
        <div className="w-full xl:max-w-[46%] flex flex-col items-center xl:items-start space-y-7 xl:space-y-14 justify-center">
          <p className="text-white font-normal text-2xl leading-6 xl:leading-[61px] xl:text-5xl">
            Discover, Showcase & Win{" "}
          </p>
          <p className="text-4xl leading-[45px] xl:leading-[104px] text-center xl:text-left xl:text-7xl text-[#FF9100] font-normal">
            Your Favorite African Heritage NFTs
          </p>
          <div className="w-56 h-16 xl:w-80 xl:h-20 flex bg-white items-center space-x-7 justify-center font-normal text-2xl leading-6  xl:text-4xl xl:leading-[45px] ">
            <p>DISCOVER</p>
            <div className="hidden xl:flex">
              <LandingArrow width={35} height={35} />
            </div>
            <div className="xl:hidden">
              <LandingArrow width={20} height={20} />
            </div>
          </div>
        </div>
        <div className="w-full hidden xl:flex max-w-[36%] h-[663px]">
          <Image
            objectFit="contain"
            className="w-full h-full"
            alt="image"
            layout="intrinsic"
            src={LandingImage}
          />
        </div>
      </div>
      <div className="pt-6 pb-20 flex flex-col w-full  items-center  xl:items-start  space-y-5">
        <div className="flex w-full justify-between xl:justify-start xl:space-x-20">
          <p className="max-w-[150px] w-full text-white text-center font-normal text-4xl leading-[45px]">
            1 NFT
          </p>
          <p className="max-w-[150px] w-full text-white text-center font-normal text-4xl leading-[45px]">
            10K +
          </p>
          <p className="max-w-[150px] w-full text-white text-center font-normal text-4xl leading-[45px]">
            1
          </p>
        </div>
        <div className="flex w-full xl:justify-start justify-between xl:space-x-20">
          <p className="max-w-[150px] w-full text-white text-center font-normal text-4xl leading-[52px]">
            PER DAY
          </p>
          <p className="max-w-[150px] w-full text-white text-center font-normal text-4xl leading-[52px]">
            ARTS
          </p>
          <p className="max-w-[150px] w-full text-white text-center font-normal text-4xl leading-[52px]">
            TRIAL
          </p>
        </div>
      </div>
    </Container>
  );
}
