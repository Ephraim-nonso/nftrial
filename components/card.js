import React, { useState } from "react";
import "./utils/GameArena.json";
import { ethers } from "ethers";
import gsap from "gsap";
import { address, alphabet } from "./utils/variables-details";
import Abi from "./utils/GameArena.json";
import { data } from "autoprefixer";

const Card = ({ startGame }) => {
  const [randomArray, setrandomArray] = React.useState([]);
  const [change, setChange] = useState(false);
  const [score, setScore] = useState(0);
  const [trials, setTrails] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [loading, setLoader] = React.useState(false);
  const ref = React.useRef([]);
  ref.current = [];
  const addToRefs = (el) => {
    if (!ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

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
        console.log(data);
        setLoader(false);
        if (data) {
          let dataSet = [];
          for (i = 0; i < data.length; i++) [dataSet.push(data[i].toNumber())];
          setrandomArray(dataSet);
        }
        console.log(randomArray);
      } else {
        setData("Connect to wallet to Play");
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getRandomArray();
  }, []);

  React.useEffect(() => {
    const sendScore = async () => {
      setLoader(true);
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
          setData("Connect to wallet to Play");
        }
      } catch (error) {
        console.log(error);
      }
    };
    sendScore();
  }, [showResults]);

  const correctArray = [1, 2, 3, 4, 5, 6];
  const cardData = [];
  let addState = false;
  const myStateRef = React.useRef(addState);
  const setMyState = (data) => {
    myStateRef.current = data;
  };
  let addTrail = false;
  const randomNumbers = () => {
    for (let i = 0; i < 18; i++) {
      let number = Math.floor(Math.random() * 200);
      let letter = alphabet[Math.floor(Math.random() * 25)];
      cardData.push(number + letter);
    }
  };

  const check = () => {
    if (trials < 7) {
      setTrails(trials + 1);
      console.log(trials);
      return true;
    } else {
      setShowResults(true);
      return false;
    }
  };

  // randomNumbers();
  React.useEffect(() => {
    ref.current &&
      ref.current.forEach((el, idx) => {
        const container = el.querySelector("div");
        const handle = () => {
          const results = check();
          console.log(correctArray.includes(idx));
          if (correctArray.includes(idx) && results) {
            setMyState(true);
            setScore((score) => score + 1);
            console.log(score);
            gsap.to(container, { backgroundColor: "green" });
          } else {
            addTrail = true;
            addState = true;
            gsap.to(container, { backgroundColor: "red" });
          }
        };
        el.addEventListener("click", handle);
        return () => el.removeEventListener("click", handle);
      });
  }, [ref]);

  // React.useEffect(() => {
  //   console.log(myStateRef.current);
  //   myStateRef.current ? setScore(score + 1) : setScore(score + 1);
  //   console.log(score);
  //   addTrail ? setTrails(trials + 1) : setTrails(trials + 1);
  //   console.log(trials);
  // }, [myStateRef.current, addTrail]);

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
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}
        {loocardData.length > 1 &&
          loocardData.map((value, idx) => {
            return (
              <div key={idx} ref={addToRefs}>
                <div className="sm:mb-2 h-24 p-7 cursor-pointer max-w-sm md:max-w-lg item-center bg-slate-400 justify-center mx-1  shadow-lg hover:border-solid hover:border-2 hover:border-yellow-500">
                  <h4 className="font-medium font-grotesk text-align mx-auto content-center justify-center">
                    {value.value}
                  </h4>
                </div>
              </div>
            );
          })}
        {/* <div
          // style={{ backgroundColor: change ? "red" : "#94A3B8" }}
          className="h-24  p-7 cursor-pointer max-w-sm md:max-w-lg  mx-1 bg-slate-400 shadow-lg hover:border-solid hover:border-2 hover:border-yellow-500"
          onClick={() => {
            setChange(!change);
          }}
        >
          <h4 className="font-medium font-grotesk text-align mx-auto">5E</h4>
        </div>
        <div
          style={{ backgroundColor: change ? "red" : "#94A3B8" }}
          className="h-24  p-7 cursor-pointer max-w-sm md:max-w-lg  mx-1 bg-slate-400 shadow-lg hover:border-solid hover:border-2 hover:border-yellow-500"
          onClick={() => {
            setChange(!change);
          }}
        >
          <h4 className="font-medium font-grotesk text-align mx-auto">4C</h4>
        </div>
        <div
          // style={{ backgroundColor: change ? "green" : "#94A3B8" }}
          className="h-24  p-7 cursor-pointer max-w-sm md:max-w-lg  mx-1 bg-slate-400 shadow-lg hover:border-solid hover:border-2 hover:border-yellow-500"
          onClick={() => {
            setChange(!change);
          }}
        >
          <h4 className="font-medium font-grotesk text-align mx-auto">2B</h4>
        </div>
        <div
          className="h-24  p-7 cursor-pointer max-w-sm md:max-w-lg  mx-1 bg-slate-400 shadow-lg hover:border-solid hover:border-2 hover:border-yellow-500"
          onClick={() => {
            setChange(!change);
          }}
        >
          <h4 className="font-medium font-grotesk text-align mx-auto">2F</h4>
        </div>
        <div
          className="h-24  p-7 cursor-pointer max-w-sm md:max-w-lg  mx-1 bg-slate-400 shadow-lg hover:border-solid hover:border-2 hover:border-yellow-500"
          onClick={() => {
            setChange(!change);
          }}
        >
          <h4 className="font-medium font-grotesk text-align mx-auto">6D</h4>
        </div>
      </div>
      <div className="flex my-7">
        <div
          className="h-24 w-18  p-7 cursor-pointer max-w-sm md:max-w-lg  mx-1 bg-slate-400 shadow-lg  hover:border-solid hover:border-2 hover:border-yellow-500"
          onClick={() => {
            setChange(!change);
          }}
        >
          <h4 className="font-medium font-grotesk text-align mx-auto">6C</h4>
        </div>
        <div
          className="h-24 w-18  p-7 cursor-pointer max-w-sm md:max-w-lg  mx-1 bg-slate-400 shadow-lg hover:border-solid hover:border-2 hover:border-yellow-500"
          onClick={() => {
            setChange(!change);
          }}
        >
          <h4 className="font-medium font-grotesk text-align mx-auto">3D</h4>
        </div>
        <div
          className="h-24 w-18  p-7 cursor-pointer max-w-sm md:max-w-lg  mx-1 bg-slate-400 shadow-lg hover:border-solid hover:border-2 hover:border-yellow-500"
          onClick={() => {
            setChange(!change);
          }}
        >
          <h4 className="font-medium font-grotesk text-align mx-auto">2A</h4>
        </div>
        <div
          className="h-24 w-18  p-7 cursor-pointer max-w-sm md:max-w-lg  mx-1 bg-slate-400 shadow-lg hover:border-solid hover:border-2 hover:border-yellow-500"
          onClick={() => {
            setChange(!change);
          }}
        >
          <h4 className="font-medium font-grotesk text-align mx-auto">5F</h4>
        </div>
        <div
          className="h-24 w-18  p-7 cursor-pointer max-w-sm md:max-w-lg  mx-1 bg-slate-400 shadow-lg hover:border-solid hover:border-2 hover:border-yellow-500"
          onClick={() => {
            setChange(!change);
          }}
        >
          <h4 className="font-medium font-grotesk text-align mx-auto">4E</h4>
        </div>
        <div
          className="h-24 w-18  p-7 cursor-pointer max-w-sm md:max-w-lg  mx-1 bg-slate-400 shadow-lg hover:border-solid hover:border-2 hover:border-yellow-500"
          onClick={() => {
            setChange(!change);
          }}
        >
          <h4 className="font-medium font-grotesk text-align mx-auto">1B</h4>
        </div>
      </div>
      <div className="flex my-7">
        <div
          className="h-24 w-18  p-7 cursor-pointer max-w-sm md:max-w-lg  mx-1 bg-slate-400 shadow-lg hover:border-solid hover:border-2 hover:border-yellow-500"
          onClick={() => {
            setChange(!change);
          }}
        >
          <h4 className="font-medium font-grotesk text-align mx-auto">1B</h4>
        </div>
        <div
          className="h-24 w-18  p-7 cursor-pointer max-w-sm md:max-w-lg  mx-1 bg-slate-400 shadow-lg hover:border-solid hover:border-2 hover:border-yellow-500"
          onClick={() => {
            setChange(!change);
          }}
        >
          <h4 className="font-medium font-grotesk text-align mx-auto">2D</h4>
        </div>
        <div
          className="h-24 w-18  p-7 cursor-pointer max-w-sm md:max-w-lg  mx-1 bg-slate-400 shadow-lg hover:border-solid hover:border-2 hover:border-yellow-500"
          onClick={() => {
            setChange(!change);
          }}
        >
          <h4 className="font-medium font-grotesk text-align mx-auto">5E</h4>
        </div> */}
        {/* <div
          className="h-24 w-18  p-7 cursor-pointer max-w-sm md:max-w-lg  mx-1 bg-slate-400 shadow-lg hover:border-solid hover:border-2 hover:border-yellow-500"
          onClick={() => {
            alert();
          }}
        >
          <h4 className="font-medium font-grotesk text-align mx-auto">4A</h4>
        </div>
        <div
          className="h-24 w-18  p-7 cursor-pointer max-w-sm md:max-w-lg  mx-1 bg-slate-400 shadow-lg hover:border-solid hover:border-2 hover:border-yellow-500"
          onClick={() => {
            alert();
          }}
        >
          <h4 className="font-medium font-grotesk text-align mx-auto">3C</h4>
        </div>
        <div
          className="h-24 w-18  p-7 cursor-pointer max-w-sm md:max-w-lg  mx-1 bg-slate-400 shadow-lg hover:border-solid hover:border-2 hover:border-yellow-500"
          onClick={() => {
            alert();
          }}
        >
          <h4 className="font-medium font-grotesk text-align mx-auto">6F</h4>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
