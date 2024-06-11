import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";

import StotifyLogo from "../assets/Spotify_logo.svg";

const Navbar = () => {
  return (
    <aside className="w-60 p-3 bg-neutral-950">
      <nav>
        <img
          src={StotifyLogo}
          width="60%"
          alt="Logo do Spotify"
          className="cursor-pointer"
        />
        <div className="flex flex-col mt-4">
          <div className="flex items-center space-x-4 mt-2 hover:hover:bg-neutral-700 p-2 rounded-md cursor-pointer">
            <AiFillHome size={25} />
            <a href="#" className="text-sm font-bold">
              Home
            </a>
          </div>
          <div className="flex items-center space-x-4 mt-2 hover:hover:bg-neutral-700 p-2 rounded-md cursor-pointer">
            <AiOutlineSearch size={25} />
            <a href="#" className="text-sm font-bold">
              Search
            </a>
          </div>
          <div className="flex items-center space-x-4 mt-2 hover:hover:bg-neutral-700 p-2 rounded-md cursor-pointer">
            <AiOutlineBook size={25} />
            <a href="#" className="text-sm font-bold">
              Your library
            </a>
          </div>
        </div>
      </nav>
      <nav className="mt-6 border-t border-zinc-800 flex flex-col gap-4">
        <div className="mt-4 hover:text-green-500 cursor-pointer">
          <a href="#">FAV</a>
        </div>
        <div className="hover:text-green-500 cursor-pointer">
          <a href="#">Daily Mix 1</a>
        </div>
        <div className="hover:text-green-500 cursor-pointer">
          <a href="#">Discover Weekly</a>
        </div>
        <div className="hover:text-green-500 cursor-pointer">
          <a href="#">Malayalam</a>
        </div>
        <div className="hover:text-green-500 cursor-pointer">
          <a href="#">Dance/Electronic Mix</a>
        </div>
        <div className="hover:text-green-500 cursor-pointer">
          <a href="#">EDM/ Popular</a>
        </div>
      </nav>
    </aside>
  );
};

export default Navbar;
