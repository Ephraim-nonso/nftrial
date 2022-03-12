import React from "react";
import { Container } from "../components/container";
import win from "../assests/win.svg";
import Image from "next/image";

function Success() {
  return (
    <Container>
      <div className="flex justify-between py-12">
        <div>
          <div className="font-cont">
            <h1 className="text-white text-4xl font-bold">Congratulations</h1>
          </div>
          <div className=" mt-5">
            <Image
              src={win}
              alt="Picture of the author"
              width={250}
              height={400}
            />
          </div>
          s
        </div>

        <div className="my-auto">
          {/* Congratulations of the winner. */}
          <div className="py-3">
            <h4 className="text-white tracking-wide text-xl font-medium mb-10">
              You just won:
            </h4>
            <h2 className="text-4xl text-orange-500 font-bold py-3">
              TERRAFORMA WOMAN
            </h2>
            <p className="w-56 tracking-wide text-white">
              A celebration of the African culture by an African artist.
            </p>
          </div>

          <div>
            <div className="bg-white w-32 p-3 my-9">
              <h4 className="font-medium">FLOOR PRICE</h4>
              <p className="font-normal">2.00 ETH</p>
            </div>
            <div className="flex mt-10">
              <button class="px-5 py-2 text-sm text-black font-semibold rounded-full border bg-white hover:text-white hover:bg-transparent  hover:border-white focus:outline-none focus:ring-2 focus:ring-white-600 focus:ring-offset-2">
                CLAIM
              </button>
              <button class="px-5 mx-5 py-2 text-sm text-white font-semibold rounded-full border bg-green-600  hover:text-green-600 hover:bg-transparent hover:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
                OPENSEA
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Success;
