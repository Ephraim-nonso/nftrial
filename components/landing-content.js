import Head from "next/head";
import Image from "next/image";
import { Container } from "./container";
import LandingImage from "../assests/landing-page-image.png";
import { LandingArrow } from "./landing-arrow";
import Link from "next/link";

export default function LandingContent() {
  const details = [
    {
      value: "1 NFT",
      description: "PER DAY",
    },
    {
      value: "10K +",
      description: " ARTS",
    },
    {
      value: "1",
      description: "TRIAL",
    },
  ];
  return (
    <Container>
      <div className="flex flex-col order-2 xl:order-none xl:flex-row justify-between items-center w-full xl:pr-6">
        <div className="w-full flex xl:hidden items-center justify-center mb-9 xl:mb-0 xl:max-w-[35%] xl:h-[663px]">
          <Image
            objectFit="contain"
            className="w-full h-full"
            height={400}
            alt="image"
            layout="intrinsic"
            src={LandingImage}
          />
        </div>
        <div className="w-full xl:max-w-[50%] flex flex-col items-center xl:items-start space-y-7 xl:space-y-5 justify-center">
          <p className="text-white font-normal text-2xl leading-6 xl:leading-[52px] xl:text-3xl font-grotesk">
            Discover, Showcase & Win{" "}
          </p>
          <p className="text-4xl leading-[45px] xl:leading-[80px] text-center xl:text-left xl:text-7xl text-[#FF9100] font-normal">
            Your Favorite African Heritage NFTs
          </p>

          <Link href="/gamescreen" className="no-underline" passHref>
            <div className="w-56 h-16 xl:w-80 xl:h-20 flex rounded-xl bg-white cursor-pointer items-center space-x-7 justify-center font-normal text-2xl leading-6  xl:text-4xl xl:leading-[45px] font-grotesk">
              <p>Explore</p>
              <div className="hidden xl:flex">
                <LandingArrow width={35} height={35} />
              </div>
              <div className=" xl:hidden">
                <LandingArrow width={20} height={20} />
              </div>
            </div>
          </Link>
          <div className="pt-6 flex flex-col space-y-10 sm:space-y-0 sm:flex-row w-full  items-center justify-between xl:justify-start  xl:items-start  xl:space-x-20 font-grotesk">
            {details &&
              details.map(({ value, description }) => {
                return (
                  <div
                    key={value}
                    className="max-w-[150px] w-full text-white text-center font-normal text-4xl leading-[45px] uppercase"
                  >
                    <p>{value}</p>
                    <p className="leading-[52px]">{description}</p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="w-full hidden xl:flex max-w-[36%] h-[600px]">
          <Image
            objectFit="contain"
            className="w-full h-full"
            alt="image"
            layout="intrinsic"
            height={600}
            src={LandingImage}
          />
        </div>
      </div>
    </Container>
  );
}
