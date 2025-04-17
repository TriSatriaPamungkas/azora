"use client";
import Image from "next/image";

const contact = () => {
  return (
    <div id="contact" className="mt-5 bg-[url(/assets/bg-contact.png)]">
      <div className="container mx-auto relative h-120 flex justify-between items-center">
        <div className=" w-1/2 text-white mt-25 ">
          <h1 className="text-3xl font-bold ">TERTARIK UNTUK KOLABORASI?</h1>
          <p className="py-8 pr-5">
            Please contact us and we will discuss about your project, don't
            forget we are always here for you
          </p>
        </div>
        <div className="w-1/2 mt-25">
          <div className="flex flex-row items-center space-x-2 white p-1 bg-white rounded-full w-full justify-between">
            <input
              type="text"
              className="pl-8 w-1/2 "
              name="#"
              placeholder="Saya mau berkolaborasi dalam..."
            />
            <button className=" bg-azora rounded-full w-35 p-3 text-white hover:cursor-pointer hover:bg-azoralight">
              Sumbit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default contact;
