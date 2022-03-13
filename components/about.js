import React from 'react'
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import Image from "next/image"

function AboutUs() {
    return (
        <div>
            <div className="flex items-center">
                <Link href="/" passHref={true}>
                    <button><BsArrowLeft className="text-white" font-size={35} /></button>
                </Link>
                <h4 className="sm:text-2xl font-grotesk text-left font-bold ml-4 text-white md:font-normal md:text-2xl">About us</h4>
            </div>
            <div className="flex flex-col-reverse lg:grid grid-cols-2 gap-10">
                {/* About us container */}
                <div>
                    <p className=" sm:text-xs font-grotesk text-white font-normal lg:text-lg mt-10 w-full">
                        NFTrials is a free to play game that allows players to earn NFTs. Each player has an equal chance of winning. NFTrials also seeks to acquaint players with the concept of NFTs while promoting African culture by integrating art created by Africans.
                    </p>
                    <p className="sm:text-xs font-grotesk text-white font-normal lg:text-lg mt-10 w-full">
                        Players get access to the game by first connecting their wallet. After successfully connecting, they proceed to a page where they get a trial per day to correctly guess the right combination that reveal an NFT. The combination of each NFT of the day is divided into six (6) components. These components are randomly distributed into eighteen (18) different tiles from which players make their guesses.
                    </p>
                    <p className="sm:text-xs font-grotesk text-white font-normal lg:text-lg mt-10 w-full">
                        Players that successfully guess all six components get rewarded with an NFT. Similarly, players with the highest number of correct guesses are featured in the leaderboard.
                    </p>
                </div>
                {/* Image */}

                <div>
                    <div>
                        <Image
                            objectFit="contain"
                            className="w-full h-full"
                            alt="afro"
                            layout="intrinsic"
                            src="/assets/woman.svg"
                            width={300}
                            height={500}

                        />
                    </div>
                    <div className=" right-16 absolute flex  lg:absolute bottom-1/2 lg:right-48">
                        <Image
                            objectFit="contain"
                            className="w-full h-full"
                            alt="african-woman"
                            layout="intrinsic"
                            src="/assets/afro.svg"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs