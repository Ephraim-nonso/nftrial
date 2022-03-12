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
      <div className="flex items-center space-x-20">
        <Link href="/" passHref={true} className="cursor-pointer">
          <BackArrow width={42} height={65} />
        </Link>
        <p className="text-6xl leading-[82px] font-normal text-white">
          Leaderboards
        </p>
      </div>
      <div className="bg-white flex flex-col space-y-10 rounded-[50px] w-full mt-12 p-10 pr-8 text-4xl leading-[45px]">
        {scores &&
          scores.map(({ number, address, images }) => {
            return (
              <div key={number} className="flex justify-between items-center">
                <p className="w-full max-w-[9%]">{number}</p>
                <p className="w-full max-w-[21%]">{address}</p>
                <div className="flex justify-between">
                  {images &&
                    images.map((item) => {
                      return (
                        <div
                          key={item}
                          className="w-full flex max-w-[31%] h-[185px]"
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
