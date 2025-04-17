"use client";
import Image from "next/image";
const Navbar = () => {
  return (
    <div>
      <nav className="top-0 left-0 w-full z-50 fixed py-3 bg-white">
        <div className="container mx-auto flex justify-between items-center">
          <Image
            src={"/assets/logo-navbar.png"}
            alt={"logo-navbar"}
            width={100}
            height={60}
          ></Image>
          <div className="space-x-4 right-10">
            <a href="#home" className="hover:text-blue-600">
              HOME
            </a>
            <a href="#introduction" className="hover:text-blue-600">
              INTRODUCTION
            </a>
            <a href="#whymustazora" className=" hover:text-blue-600">
              WHY MUST AZORA
            </a>
            <a href="#project" className=" hover:text-blue-600">
              PROJECT
            </a>
            <a href="#ourteam" className=" hover:text-blue-600 ">
              OUR TEAM
            </a>
            <a href="#contact" className=" hover:text-blue-600 ">
              CONTACT
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
