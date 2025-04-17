"use client";
import Image from "next/image";
const slicePurpose = () => {
  return (
    <div className="my-5">
      <div className="">
        <div className="relative h-50 flex justify-center items-center  bg-linear-to-r  from-azoralight to-azora ">
          <div className="mx-40 text-center">
            <h1 className="font-bold italic text-2xl py-5">
              "Tujuan dari Azora adalah untuk mengembangkan event yang ada di
              Denpasar khususnya di dunia jejepangan dan gaming"
            </h1>
            <p className="text-white py-5">Lead of Azora Community</p>
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <Image
              src={"/assets/bird-left.png"}
              alt={"bird-l"}
              width={50}
              height={100}
            ></Image>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <Image
              src={"/assets/bird-right.png"}
              alt={"bird-r"}
              width={50}
              height={100}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};
export default slicePurpose;
