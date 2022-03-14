import React, { useState } from "react";
import "./utils/GameArena.json";
import { ethers } from "ethers";
import gsap from "gsap";
import { address, alphabet } from "./utils/variables-details";
import Abi from "./utils/GameArena.json";
import { data } from "autoprefixer";
import { BackArrow } from "./back-arrow";
import Link from "next/link";
import ScoreOverlay from "./score-overlay";

const Card = ({ startGame }) => {
  const [randomArray, setRandomArray] = useState([]);
  const [change, setChange] = useState(false);
  const [score, setScore] = useState(1);
  const [trials, setTrails] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [data, setData] = React.useState("");
  const [showGame, setShowGame] = useState(false);
  const [loading, setLoader] = React.useState(false);
  const ref = React.useRef([]);
  const dataSet = [];
  ref.current = [];
  const addToRefs = (el) => {
    if (!ref.current.includes(el)) {
      ref.current.push(el);
    }
  };
  const myStateRef = React.useRef(trials);
  const setMyState = (data) => {
    myStateRef.current = data;
    setTrails(data);
  };

  // get random array from contract;
  const getRandomArray = async () => {
    setLoader(true);
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const gameContract = new ethers.Contract(address, Abi.abi, signer);

        const shuffledArray = await gameContract.shuffleCards();
        const eventData = await shuffledArray.wait();
        const data = eventData?.events[0]?.args[0];
        setLoader(false);
        if (data) {
          console.log(data.length);
          for (let i = 0; i < data.length; i++) {
            dataSet.push(data[i].toNumber());
          }
        }
        setRandomArray(randomArray.concat(dataSet));
        setShowGame(true);
      } else {
        setLoader(false);
        setData("Connect to wallet to Play");
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getRandomArray();
  }, []);

  // update gamer score in contract;
  React.useEffect(() => {
    const sendScore = async () => {
      try {
        const { ethereum } = window;
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const gameContract = new ethers.Contract(address, Abi.abi, signer);

          const sendResults = await gameContract.displayLeaderBoard({
            _player: signer,
            _score: score,
          });
          const eventData = await sendResults.wait();
          const data = eventData?.events[0]?.args[0];
        } else {
          // setData("Connect to wallet to Play");
        }
      } catch (error) {
        console.log(error);
      }
    };
    sendScore();
  }, [showResults]);

  // update state;
  const setTrials = () => {
    if (trials < 7) {
      setMyState(trials + 1);
      console.log(trials);
      return true;
    } else {
      setShowResults(true);
      return false;
    }
  };

  // update state;
  const handle = (idx) => {
    const results = setTrials();
    if (dataSet.includes(idx) && results) {
      setScore((prevState) => {
        return prevState + 1;
      });
      console.log(score);
    }
  };
  const check = () => {
    console.log(myStateRef.current);
    if (myStateRef.current < 7) {
      return true;
    } else {
      return false;
    }
  };

  // set colors
  React.useEffect(() => {
    ref.current &&
      ref.current.forEach((el, idx) => {
        const container = el.querySelector("div");
        const handle = () => {
          const answer = check();
          console.log(answer);
          if (dataSet.includes(idx) && answer) {
            gsap.to(container, { backgroundColor: "green" });
          } else if (answer) {
            gsap.to(container, { backgroundColor: "red" });
          }
        };
        el.addEventListener("click", handle);
        return () => el.removeEventListener("click", handle);
      });
  }, [ref]);

  const flip = () => {
    setChange(!change);
  };
  const loocardData = [
    {
      value: "1",
    },
    {
      value: "2",
    },
    {
      value: "3",
    },
    {
      value: "4",
    },
    {
      value: "5",
    },
    {
      value: "6",
    },
    {
      value: "7",
    },
    {
      value: "8",
    },
    {
      value: "9",
    },
    {
      value: "10",
    },
    {
      value: "11",
    },
    {
      value: "12",
    },
    {
      value: "13",
    },
    {
      value: "14",
    },
    {
      value: "15",
    },
    {
      value: "16",
    },
    {
      value: "17",
    },
    {
      value: "18",
    },
  ];

  return (
    <div>
      <div className="my-5">
        <div className="flex my-8">
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
          <div className={`${showGame ? "flex" : "hidden"}`}>
            {loocardData.length > 1 &&
              loocardData.map((value, idx) => {
                return (
                  <div key={idx} ref={addToRefs} onClick={(e) => handle(idx)}>
                    <div className="sm:mb-2 h-24 p-7 cursor-pointer max-w-sm md:max-w-lg item-center bg-slate-400 justify-center mx-1  shadow-lg hover:border-solid hover:border-2 hover:border-yellow-500">
                      <h4 className="font-medium font-grotesk text-align mx-auto content-center justify-center">
                        {value.value}
                      </h4>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {data === "Connect to wallet to Play" && (
        <p className=" font-vppixel text-7xl leading-[80px] text-center mt-40 text-[#FF9100]">
          Connect to wallet to Play
        </p>
      )}
      {showResults && <ScoreOverlay score={score - 1} />}
    </div>
  );
};

export default Card;
