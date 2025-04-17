// components/TeamSection.tsx
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const teamMembers = [
  {
    name: "Satria Pamungkas",
    role: "Lead of Azora Community",
    image: "/assets/eka.png",
    link: "https://www.instagram.com/karachiii_",
  },
  {
    name: "Ferdy Pratama",
    role: "Content Creator",
    image: "/assets/ferdy.jpeg",
    link: "https://www.instagram.com/dytam.a",
  },
  {
    name: "Anom Mahesa",
    role: "Photographer",
    image: "/assets/anom.jpeg",
    link: "https://www.instagram.com/wiitzy_",
  },
];

const OurTeam = () => {
  return (
    <div id="ourteam" className="py-5 bg-white">
      <div className="max-w-5xl mx-auto px-4 ">
        <h3 className="text-blue-600 text-center font-semibold text-lg mb-1">
          OUR TEAM
        </h3>
        <h2 className="text-3xl font-bold text-center mb-10">
          BEHIND THE SCENE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-3">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="flex  items-center space-y-3 border-r last:border-none border-gray-300 px-4"
            >
              <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="object-cover rounded-full"
                />
              </div>
              <div className="pl-5">
                <p className="font-bold">{member.name.toUpperCase()}</p>
                <p className="text-sm text-gray-600">{member.role}</p>
                <a
                  href={member.link}
                  className="text-sm text-blue-500 hover:underline mt-1 inline-flex items-center"
                >
                  More <IoIosArrowRoundForward size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurTeam;
