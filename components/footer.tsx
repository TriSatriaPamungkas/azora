"use client";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div id="footer" className="bg-footer w-full h-50 text-white -mt-[20px]">
      <div className="flex flex-row mx-auto justify-between">
        <div className="w-1/2 flex flex-row items-center">
          <Image
            src={"/assets/logo-vertikal-white.png"}
            alt={"footer"}
            width={200}
            height={200}
          ></Image>
          <p className="text-[15px] ">
            Azora Community adalah media komunitas dimana mereka hadir untuk
            memeriahkan, mendokumentasikan, dan mempublikasikan event dari EO
            maupun komunitas khususnya di bidang jejepangan dan gaming.
          </p>
        </div>
        <div className="flex flex-row pt-5 mr-30">
          <div className="w-1/2">
            <h1 className="font-bold text-lg py-2">Collaboration</h1>
            <ul>
              <li>Japanese Event</li>
              <li>Gaming Event</li>
            </ul>
          </div>
          <div className="w-1/2 ml-5">
            <h1 className="font-bold text-lg py-2">Contact us</h1>
            <ul>
              <li className="flex flex-row  items-center pb-2">
                <FaInstagram className="pr-1" /> @azoracommunity._
              </li>
              <li className="flex flex-row  items-center pb-2">
                <FaWhatsapp className="pr-1" /> +62-823-9814-4100
              </li>
              <li className="flex flex-row  items-center pb-2">
                <MdOutlineEmail className="pr-1" />
                azoracommunity@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
