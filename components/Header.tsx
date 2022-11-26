import Image from "next/image";
import { useState } from "react";

export default function Header() {
  let [openHam, setOpenHam] = useState(false);

  const handleMenu = () => {
    setOpenHam(!openHam);
  };

  return (
    <nav className="shadow-lg flex justify-center py-5">
      <div className="container flex items-center justify-between px-4 md:px-0">
        <div className="flex flex-col items-center">
          <p className="text-xl font-bold">
            <span className="text-red-600">Himalayan </span>Diaries Adventure
            and CO.
          </p>
          <p className="italic">Your next destination partner</p>
        </div>
        <ul className="hidden md:flex items-center font-semibold gap-5">
          <li>Destinations</li>
          <li>Stories</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <div className="border-l-2 border-gray-700 h-12" />
          <li>Login</li>
          <button className="bg-black text-white py-4 px-5 shadow-md rounded-md">
            Register Now
          </button>
        </ul>
        {/* hamburger icon */}
        <div
          onClick={handleMenu}
          className={`md:hidden z-50 ${
            openHam && "invert"
          } transition ease-in-out delay-300 cursor-pointer`}
        >
          <Image src="/icons/hamburger.png" width={24} height={24} alt="menu" />
        </div>
        {/* small screen hamburger menu */}
        <div
          className={`fixed w-screen h-screen bg-red-600 transition ease-in-out delay-300 top-0 left-0 ${
            !openHam && "opacity-0 pointer-events-none"
          } flex items-center text-xl justify-start pl-16 z-40 text-white`}
        >
          <ul className="flex gap-2 flex-col">
            <li>Destinations</li>
            <li>Stories</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <hr className="my-3 border-y-[1px]" />
            <li>Login</li>
            <button>Register Now</button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
