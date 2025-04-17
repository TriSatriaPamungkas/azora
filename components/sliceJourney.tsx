"use client";
import Image from "next/image";

const sliceJourney = () => {
  return (
    <div className="my-5 bg-[url(/assets/slice.png)]">
      <div className="relative h-70 flex justify-center items-center">
        <div className="mb-30 text-black mt-10">
          <div className="absolute flex flex-nowrap mx-50 text-center text-white left-0">
            <div className="mx-8">
              <h2 className="text-3xl">400+</h2>
              <h4>Happy Cosplayer</h4>
            </div>
            <div className="mx-8 ">
              <h2 className="text-3xl">1+</h2>
              <h4>Years of Experience</h4>
            </div>
            <div className="mx-8">
              <h2 className="text-3xl">26K+</h2>
              <h4>Account Reached</h4>
            </div>
            <div className="mx-8">
              <h2 className="text-3xl">50+</h2>
              <h4>as Media Partner</h4>
            </div>
          </div>
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
  );
};
export default sliceJourney;
