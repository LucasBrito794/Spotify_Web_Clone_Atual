import Like from "../assets/like.png";
import Neffex from "../assets/neffex.jpg";
import Kda from "../assets/KDA.png";
import LikeSong from "../assets/like_song.png";
import Electronic from "../assets/Electronic.png";
import Weekly from "../assets/weekly.png";
import Moditation from "../assets/Moditation.png";
import Words from "../assets/Words.png";
import Alexa from "../assets/Alexa.png";
import Stories from "../assets/stories.png";
import Motivation from "../assets/Motivation.png";

import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";

const Main = () => {
  return (
    <main className="flex-1 p-4">
      <div className="flex gap-2">
        <AiOutlineLeftCircle size={32} className="cursor-pointer" />
        <AiOutlineRightCircle size={32} className="cursor-pointer" />
      </div>
      <h1 className="text-2xl mt-6 font-bold mb-6">Good Morning</h1>
      <div className="grid grid-cols-4 gap-3">
        <div className="bg-neutral-700 border-0 rounded-md flex items-center gap-2 cursor-pointer">
          <img src={Like} width="25%" alt="" />
          <p>Liked Songs</p>
        </div>
        <div className="bg-neutral-700 border-0 rounded-md flex items-center gap-2 cursor-pointer">
          <img src={Neffex} width="25%" alt="" />
          <p>Neffex Playlist</p>
        </div>
        <div className="bg-neutral-700 border-0 rounded-md flex items-center gap-2 cursor-pointer">
          <img src={Kda} width="25%" alt="" />
          <p>K/DA</p>
        </div>
        <div className="bg-neutral-700 border-0 rounded-md flex items-center gap-2 cursor-pointer">
          <img src={LikeSong} width="25%" alt="" />
          <p>Liked Songs</p>
        </div>
        <div className="bg-neutral-700 border-0 rounded-md flex items-center gap-2 cursor-pointer">
          <img src={Electronic} width="25%" alt="" />
          <p>Dance/ Electronic Mix</p>
        </div>
      </div>
      <h2 className="text-xl mt-6 font-bold mb-6">Shows you might like</h2>
      <div className="grid grid-cols-6 gap-4">
        <div className="bg-neutral-900 border-0 rounded-md flex flex-col gap-2 p-2 cursor-pointer">
          <img src={Weekly} alt="" />
          <p>Weekly Motivation</p>
          <span className="text-xs text-neutral-500 font-bold">
            Ben Ina Scott
          </span>
        </div>
        <div className="bg-neutral-900 border-0 rounded-md flex flex-col gap-2 p-2 cursor-pointer ">
          <img src={Moditation} alt="" />
          <p>MEDITATION SELF</p>
          <span className="text-xs text-neutral-500 font-bold">
            Ibn Hussain Aleen
          </span>
        </div>
        <div className="bg-neutral-900 border-0 rounded-md flex flex-col gap-2 p-2 cursor-pointer">
          <img src={Words} alt="" />
          <p>Words beyond act...</p>
          <span className="text-xs text-neutral-500 font-bold">
            Samuel Scott
          </span>
        </div>
        <div className="bg-neutral-900 border-0 rounded-md flex flex-col gap-2 p-2 cursor-pointer">
          <img src={Alexa} alt="" />
          <p>The Alexa Show</p>
          <span className="text-xs text-neutral-500 font-bold">
            Adriana Tom
          </span>
        </div>
        <div className="bg-neutral-900 border-0 rounded-md flex flex-col gap-2 p-2 cursor-pointer">
          <img src={Stories} alt="" />
          <p>The Stories of Ma...</p>
          <span className="text-xs text-neutral-500 font-bold">Lexus</span>
        </div>
        <div className="bg-neutral-900 border-0 rounded-md flex flex-col gap-2 p-2 cursor-pointer">
          <img src={Motivation} alt="" />
          <p>Motivation Daily b...</p>
          <span className="text-xs text-neutral-500 font-bold">
            Georgina Martha
          </span>
        </div>
      </div>
    </main>
  );
};

export default Main;
