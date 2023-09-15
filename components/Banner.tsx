"use client";
import Image from "next/image";
import { FC, useState } from "react";
import { Button } from "./ui/Button";
import { ClientIcons } from "./ui/ClientIcons";
import Modal from "./Modal";
import YoutubeTrailer from "./YoutubeTrailer";

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  const handleModal = () => {
    setToggleModal((prevState) => !prevState);
  };

  return (
    <div className="text-white h-screen overflow-hidden relative bg-black bg-opacity-50">
      {toggleModal && (
        <Modal toggleModal={handleModal}>
          <YoutubeTrailer videoId="qEVUtrk8_B4" />
        </Modal>
      )}
      <Image
        src="https://www.themoviedb.org/t/p/original/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg"
        width={3840}
        height={2160}
        alt="John Wick 3"
        className="h-full w-full object-cover object-center absolute z-[-3]"
      />
      <div className="h-full w-full flex items-center wrapper">
        <div className="space-y-5 max-w-xs md:max-w-sm">
          <h2 className="font-semibold text-3xl md:text-5xl">
            John Wick 3: Parabellum
          </h2>
          <div className="flex gap-6">
            <div className="flex gap-2">
              <ClientIcons.imdb />
              <span className="text-sm">8.6 / 10</span>
            </div>
            <div className="flex gap-2">
              <ClientIcons.tomato />
              <span className="text-sm">97%</span>
            </div>
          </div>
          <p className="font-medium text-xs md:text-base">
            John wick is on the run after killing a member of the international
            assassins guild and with a $14 million price tag on his head, he is
            the target of hit men and women everywhere.
          </p>
          <Button className={`bg-[#BE123C] space-x-2`} onClick={handleModal}>
            <ClientIcons.play />
            <span className="font-medium">WATCH TRAILER</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
