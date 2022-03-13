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
      images: [LeaderImageOne, LeaderImageTwo, LeaderImageThree],
    },
    {
      number: "2",
      address: "0x1234",
      images: [LeaderImageOne, LeaderImageTwo, LeaderImageThree],
    },
    {
      number: "3",
      address: "0x1234",
      images: [LeaderImageOne, LeaderImageTwo, LeaderImageThree],
    },
    {
      number: "4",
      address: "0x1234",
      images: [LeaderImageOne, LeaderImageTwo, LeaderImageThree],
    },
    {
      number: "5",
      address: "0x1234",
      images: [LeaderImageOne, LeaderImageTwo, LeaderImageThree],
    },
  ];
  return (
    <Container>
      <div className="flex items-center space-x-5 xl:space-x-20 font-grotesk">
        <div className="hidden cursor-pointer md:flex">
          <Link href="/" passHref={true}>
            <BackArrow width={42} height={65} />
          </Link>
        </div>
        <div className="cursor-pointer md:hidden">
          <Link href="/" passHref={true} className="cursor-pointer xl:hidden">
            <BackArrow width={20} height={25} />
          </Link>
        </div>
        <p className="text-2xl leading-6 md:text-6xl md:leading-[82px] font-normal text-white">
          Leaderboards
        </p>
      </div>
      <div className="bg-white flex flex-col space-y-4 xl:space-y-10 rounded-[25px] xl:rounded-[50px] w-full mt-12 p-10 pr-8 text-4xl leading-[45px] font-grotesk">
        {scores &&
          scores.map(({ number, address, images }) => {
            return (
              <div
                key={number}
                className="flex flex-col space-y-5 xl:space-y-0 xl:flex-row xl:justify-between xl:items-center"
              >
                <div className="w-full flex space-x-7 xl:space-x-0  xl:max-w-[30%] xl:justify-between">
                  <p className="xl:w-full xl:max-w-[35%]">{number}</p>
                  <p className="xl:w-full max-w-[50%]">{address}</p>
                </div>
                <div className="flex w-full xl:max-w-[65%] justify-between">
                  {images &&
                    images.map((item) => {
                      return (
                        <div
                          key={item}
                          className="w-full flex max-w-[31%] xl:h-[185px]"
                        >
                          <Image
                            objectFit="contain"
                            className="w-full h-full"
                            alt="image"
                            layout="intrinsic"
                            src={item}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </Container>
  );
}
