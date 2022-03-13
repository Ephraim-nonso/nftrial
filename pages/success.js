import React from "react";
import { Container } from "../components/container";
import win from "../assests/win.svg";
import Image from "next/image";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

function Success() {
  return (
    <Container>
      <div className="sm:flex justify-between py-12 px-7">
        <div>
          <div className="font-cont">
            <h1 className="text-white text-4xl font-bold font-grotesk">
              Congratulations
            </h1>
          </div>
          <div className=" mt-5">
            <Image
              src={win}
              alt="Picture of the author"
              width={250}
              height={400}
            />
          </div>
        </div>

        <div className="my-auto font-grotesk">
          {/* Congratulations of the winner. */}
          <div className="py-3">
            <h4 className="text-white tracking-wide text-xl font-medium mb-10">
              You just won:
            </h4>
            <h2 className="text-4xl text-[#FF9100] font-bold py-3">
              TERRAFORMA WOMAN
            </h2>
            <p className="w-60 tracking-wide text-white">
              A celebration of the African culture by an African artist.
            </p>
          </div>

          <div>
            <div className="bg-white w-32 p-3 my-9">
              <h4 className="font-medium">FLOOR PRICE</h4>
              <p className="font-normal">2.00 ETH</p>
            </div>
            <div className="flex mt-10">
              <button class="flex items-center px-10 py-2 text-sm text-black font-semibold rounded-full border bg-white hover:text-white hover:bg-transparent  hover:border-white focus:outline-none focus:ring-2 focus:ring-white-600 focus:ring-offset-2">
                CLAIM
                <BsArrowRight className="ml-3" font-size={20} />
              </button>
              <button class="flex px-10 mx-5 py-2 text-sm text-white font-semibold rounded-full border bg-green-600  hover:text-green-600 hover:bg-transparent hover:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
                OPENSEA
                <BsArrowRight className="ml-3" font-size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Success;
