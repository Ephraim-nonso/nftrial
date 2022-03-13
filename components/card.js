import React, { useState } from "react";
import "./utils/GameArena.json";
import gsap from "gsap";

const Card = ({ startGame }) => {
  const [change, setChange] = useState(false);
  const arrOfClicked = [];

  const ref = React.useRef([]);
  ref.current = [];
  const addToRefs = (el) => {
    if (!ref.current.includes(el)) {
      ref.current.push(el);
    }
  };
  React.useEffect(() => {
    ref.current.forEach(
      (el) => {
        const container = el.querySelector("div");

        el.addEventListener("click", (e) => {
          gsap.to(container, { backgroundColor: "green" });
        });
      },
      [ref]
    );
  });

  const cardData = [
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
      <div className="grid grid-rows-3 grid-flow-col gap-2 ">
        {cardData.length > 1 &&
          cardData.map(({ value }) => {
            return (
              <div key={value} ref={addToRefs} onClick={startGame}>
                <div className="h-24 p-7 cursor-pointer max-w-sm md:max-w-lg item-center bg-slate-400 justify-center mx-1  shadow-lg hover:border-solid hover:border-2 hover:border-yellow-500">
                  <h4 className="font-medium font-grotesk text-align mx-auto content-center justify-center">
                    {value}
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
