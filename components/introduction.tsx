"use client";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
const Introduction = () => {
  return (
    <div id="introduction">
      <div className="px-20 py-15 flex justify-between">
        <div className="w-1/2">
          <h3 className="font-bold text-blue-800 py-2">INTRODUCTION</h3>
          <h1 className="font-bold text-3xl pb-3">AZORA COMMUNITY</h1>
          <p className="break-words pr-8">
            Azora Community merupakan media komunitas yang mendukung
            perkembangan cosplay dan event gaming di Bali. Dengan pengalaman
            setiap anggota tim dalam bidang multimedia, Azora Community akan
            membantu menghubungkan, mendokumentasi, bahkan mempublikasikan
            kegiatan, cosplayer, kreator, serta komunitas lainnya untuk
            menciptakan event yang lebih berwarna dan berkesan.
          </p>
          <div className="w-[30rem] my-3 border-1 border-azora/30"></div>
          <button className="px-6 py-2 mt-3 flex justify-between items-center bg-azora  text-white  hover:bg-azoralight hover:cursor-pointer active:scale-95 transition-transform">
            Selengkapnya <IoIosArrowRoundForward size={30} />
          </button>
        </div>
        <div className="">
          <Image
            src={"/assets/introduction.png"}
            alt={"introduction"}
            width={500}
            height={250}
            className="rounded-md "
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
