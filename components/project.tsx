"use client";
import Image from "next/image";

const Project = () => {
  const events = [
    {
      title: "ONGAKUREIJI",
      date: "15 September 2024",
      img: "/assets/ongakureiji-medpar.png",
    },
    {
      title: "XD Isekai Festival",
      date: "28 September 2024",
      img: "/assets/xd-medpar.png",
    },
    {
      title: "DJAFU 13TH Festival",
      date: "17 November 2024",
      img: "/assets/djafu-medpar.png",
    },
    {
      title: "GAMEVERSE",
      date: "1 Desember 2024",
      img: "/assets/gameverse-medpar.png",
    },
  ];
  return (
    <div id="project" className="bg-gray-100 my-20 pt-10 ">
      <div className="container mx-20 py-5 ">
        <div className="text-center ">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">OUR PROJECT</h2>
          <h3 className="font-bold text-3xl">MEDIA PARTNER EVENT</h3>
        </div>
        <div className="my-10 grid grid-cols-4 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative group overflow-hidden  shadow-lg"
            >
              <Image
                src={event.img}
                alt={event.title}
                width={400}
                height={600}
                className="object-cover w-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/60 to-transparent px-4 py-3 text-white text-center">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-sm">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Project;
