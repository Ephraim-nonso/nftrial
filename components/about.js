import React from 'react'
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import Image from "next/image"

function AboutUs() {
    return (
        <div className="flex justify-between">
            {/* About us container */}
            <div>
                <div className="flex items-center">
                    <Link href="/" passHref={true}>
                        <button><BsArrowLeft className="text-white" font-size={35} /></button>
                    </Link>
                    <h4 className="sm:text-2xl font-grotesk text-left font-bold ml-4 text-white md:font-normal md:text-2xl">About us</h4>
                </div>

                <h4 className="font-grotesk text-white font-bold mt-20">For the artists & for the culture</h4>
                <p className="font-grotesk text-white font-semibold text-2xl mt-20">
                    Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                </p>
            </div>
            {/* Image */}

            <div className=" w-1/2">
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
                <div className="absolute bottom-1/2 right-24">
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
    )
}

export default AboutUs