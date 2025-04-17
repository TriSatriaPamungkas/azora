"use client";
import Image from "next/image";

const whymustazora = () => {
  return (
    <div id="whymustazora" className="pt-5">
      <div className="flex justify-between my-20">
        <div className="w-1/2 ">
          <Image
            src={"/assets/whymust.png"}
            alt={"whymust"}
            width={500}
            height={250}
          ></Image>
        </div>
        <div className="w-1/2 my-5">
          <h1 className="font-bold text-blue-800 text-4xl ">WHY MUST AZORA?</h1>
          <h3 className="font-bold  py-2">
            Kenapa Harus Sebagai Komunitas Media?
          </h3>
          <p className="break-words pr-22 my-5">
            Event jejepangan di Bali merupakan sebuah kegiatan dimana penggiat
            culture jejepangan mengadakan kegiatan yang berisikan hal-hal berbau
            jejepangan seperti Live performance songs, Idol, hingga sebuah
            kegiatan bernama Cosplay. Cosplay (<b>コスプレ</b>) bukan sekedar
            seseorang mengenakan kostum saja tetapi bagaimana sang cosplayer
            dapat meniru baik ekspresi maupun perilaku dari karakter yang dia
            perankan.
          </p>
          <p className="break-words pr-22 my-5">
            Azora Community disini hadir sebagai media komunitas yang mendukung
            perkembangan cosplay di Bali. Azora Community akan membantu
            menghubungkan, mendokumentasi, bahkan mempublikasikan kegiatan,
            cosplayer, kreator, serta komunitas lainnya untuk menciptakan event
            yang lebih berwarna dan berkesan.
          </p>
        </div>
      </div>
    </div>
  );
};
export default whymustazora;
