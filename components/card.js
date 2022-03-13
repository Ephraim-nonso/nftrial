import React, { useState } from "react";
import "./utils/GameArena.json";
import gsap from "gsap";
import { address, alphabet } from "./utils/variables-details";

const Card = () => {
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
  const correctArray = [1, 2, 3, 4, 5, 6];
  const cardData = [];
  const randomNumbers = () => {
    for (let i = 0; i < 18; i++) {
      let number = Math.floor(Math.random() * 200);
      let letter = alphabet[Math.floor(Math.random() * 25)];
      cardData.push(number + letter);
    }
  };
  const check = () => {
    if (trials < 7) {
      setTrails((prevState) => prevState + 1);
      return true;
    } else {
      setShowResults(true);
      return false;
    }
  };
  // randomNumbers();
  React.useEffect(() => {
    ref.current.forEach((el, idx) => {
      const container = el.querySelector("div");

      el.addEventListener("click", (e) => {
        const results = check();
        if (correctArray.includes(idx) && results) {
          console.log(score + 1);
          setScore(score + 1);
          gsap.to(container, { backgroundColor: "green" });
          console.log(score);
        } else {
          gsap.to(container, { backgroundColor: "red" });
        }
      });
    });
  }, [ref]);

  const flip = () => {
    setChange(!change);
  };
  const loocardData = [
    {
      value: "1A",
    },
    {
      value: "2A",
    },
    {
      value: "1A",
    },
    {
      value: "1A",
    },
    {
      value: "1A",
    },
    {
      value: "1A",
    },
    {
      value: "1A",
    },
    {
      value: "1A",
    },
    {
      value: "1A",
    },
    {
      value: "1A",
    },
    {
      value: "1A",
    },
    {
      value: "1A",
    },
    {
      value: "1A",
    },
    {
      value: "1A",
    },
    {
      value: "1A",
    },
    {
      value: "1A",
    },
    {
      value: "1A",
    },
  ];

  return (
    <div className="my-5">
      <div className="flex my-8">
        {loocardData.length > 1 &&
          loocardData.map((value, idx) => {
            return (
              <div key={idx} ref={addToRefs}>
                <div className="h-24 p-7 cursor-pointer max-w-sm md:max-w-lg item-center bg-slate-400 justify-center mx-1  shadow-lg hover:border-solid hover:border-2 hover:border-yellow-500">
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
          // style={{ backgroundColor: change ? "red" : "#94A3B8" }}
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
        <div
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
        </div>
      </div>
    </div>
  );
};

export default Card;
