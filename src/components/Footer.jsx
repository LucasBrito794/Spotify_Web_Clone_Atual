import MusicLogo from "../assets/music_player.jpeg";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineFastBackward } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillForward } from "react-icons/ai";
import { AiOutlineSync } from "react-icons/ai";
import { AiFillPlaySquare } from "react-icons/ai";
import { AiOutlineLaptop } from "react-icons/ai";
import { AiFillSound } from "react-icons/ai";
import { AiOutlineExpandAlt } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-neutral-800 border-t-2 border-neutral-400/20 p-3 flex">
        <div className="flex-1">
          <div className="flex items-center">
            <img src={MusicLogo} width="12%" alt="Imagem da música dreaming on" />
            <div className="ml-4">
              <p className="font-bold">Dreaming On</p>
              <span className="text-xs font-bold text-gray-500">NEFFEX</span>
            </div>
            <div className="ml-6">
              <AiFillHeart size={20} className="text-green-500 cursor-pointer"/>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col items-center">
            <div className="flex gap-4 items-center">
              <AiOutlineUnorderedList size={20} className="cursor-pointer text-neutral-400 hover:text-white"/>
              <AiOutlineFastBackward size={20} className="cursor-pointer text-neutral-400 hover:text-white"/>
              <AiFillPlayCircle size={40} className="cursor-pointer hover:scale-110"/>
              <AiFillForward size={20} className="cursor-pointer text-neutral-400 hover:text-white"/>
              <AiOutlineSync size={20} className="cursor-pointer text-neutral-400 hover:text-white"/>
            </div>
            <div className="flex gap-2 items-center mt-2">
              <span className="text-xs font-bold text-neutral-400">2:11</span>
              <div className="w-96 border-t-2 border-b-2 border-neutral-400 rounded-full bg-neutral-800">
                <div className="w-80 border-t-2 border-b-2 border-white rounded-full"></div>
              </div>
              <span className="text-xs font-bold text-neutral-400">2:42</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex ml-96 items-center gap-2 mt-2">
            <AiFillPlaySquare size={18} className="cursor-pointer text-neutral-400 hover:text-white"/>
            <AiOutlineLaptop size={18} className="cursor-pointer text-neutral-400 hover:text-white"/>
            <AiFillSound size={18} className="cursor-pointer text-neutral-400 hover:text-white"/>
            <div className="w-20 border-t-2 border-b-2 border-neutral-400 rounded-full bg-neutral-800">
                <div className="w-16 border-t-2 border-b-2 border-white rounded-full"></div>
              </div>
            <AiOutlineExpandAlt size={18} className="cursor-pointer text-neutral-400 hover:text-white"/>
          </div>  
        </div>
      </footer>
    )
}

export default Footer;