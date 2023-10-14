import { useState } from "react";
import Accordion from "../Accordion";
import Form from "./Form";
import Footer from "./Footer";

export default function Partone() {
  const [list, setList] = useState([
    {
      question: "What is your name?",
      answer: "My name is Haluk?",
    },
    {
      question: "What is your name?",
      answer: "My name is Haluk?",
    },
    {
      question: "What is your name?",
      answer: "My name is Haluk?",
    },
    {
      question: "What is your name?",
      answer: "My name is Haluk?",
    },
  ]);
  return (
    <div className="w-full h-[626px] ">
      <div className="w-full h-[10px] bg-line"></div>
      <div className="flex justify-center bg-black py-[100px]">
        <div className="w-[510px] h-[382px] flex items-center flex-col justify-center bg-black text-white">
          <h2 className="text-[50px] mr-[100px] font-bold">Enjoy on your TV</h2>
          <p className="text-[25px] ml-[15px]">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="ilkpart w-[510px] h-[382px] bg-black">
          <video
            className="scale-[.70] absolute translate-y-[48px] translate-x-4 z-0"
            autoPlay
            muted
            loop
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
          ></video>
          <img
            className=" scale-90 z-10"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          ></img>
        </div>
      </div>
      <div className="w-full h-[10px] bg-line"></div>
      <div className="h-[544px] w-full flex justify-center bg-black py-[72px] px-[100px]">
        <div className="part1 w-[600px]">
          <video
            className="scale-[.78] absolute translate-y-[12px] translate-x-[55px] z-0"
            autoPlay
            muted
            loop
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
          ></video>
          <img
            className="scale-100 z-10"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
          ></img>
        </div>
        <div className="part2 flex flex-col justify-center w-[600px]  ">
          <h2 className="text-[50px] mr-[100px] font-bold text-white ">
            Watch everywhere
          </h2>
          <p className="text-[25px] ml-[15px] text-white p-[20px] translate-x-[-35px] ">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV
          </p>
        </div>
      </div>
      <div className="w-full h-[10px] bg-line"></div>
      <div className="flex justify-center bg-black">
        <div className="w-[510px] h-[382px] flex items-center flex-col justify-center bg-black text-white ">
          <h2 className="text-[50px] mr-[100px] font-bold">Enjoy on your TV</h2>
          <p className="text-[25px] ml-[15px]">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="ilkpart w-[510px] h-[382px] bg-black">
          <img
            className=" scale-90 z-10"
            src="https://occ-0-1433-1432.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
          ></img>
        </div>
      </div>
      <div className="w-full h-[10px] bg-line"></div>
      <div className="h-[544px] w-full flex justify-center bg-black py-[72px] px-[100px]">
        <div className="part1 w-[600px]">
          <img
            className="scale-100 z-10"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          ></img>
          <div className=" flex  items-center gap-x-4 absolute w-[320px] h-[103px] bg-black border-gray-600 rounded-[12px] border-[2px] translate-x-[140px] translate-y-[-150px]  scale-90">
            <div>
              <img
                className="w-[57px] h-[80px] ml-[10px]"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              ></img>
            </div>
            <div className="flex flex-col justify-center items-center pl-[5px] w-[160px]  ">
              <h2 className="text-white font-bold text-[16px]">
                Stranger Things
              </h2>
              <p className="pr-[40px] text-blue-600 text-[12px]">
                Downloading...
              </p>
            </div>
            <div>
              <img
                className=" scale-75"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                alt="gif"
              ></img>
            </div>
          </div>
        </div>
        <div className="part2 flex flex-col justify-center w-[600px]  ">
          <h2 className="text-[50px] mr-[100px] font-bold text-white ">
            Watch everywhere
          </h2>
          <p className="text-[25px] ml-[15px] text-white p-[20px] translate-x-[-35px] ">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV
          </p>
        </div>
      </div>
      <div className="w-full h-[10px] bg-line"></div>
      <div className="bg-black h-[750px] w-full flex flex-col items-center justify-start">
        <div className="list flex items-center flex-col transition-all">
          <h1 className="font-bold text-[45px] text-white my-[40px] mb-[20px]">
            Frequently Asked Questions
          </h1>
          {list.map((item, key) => (
            <Accordion datas={item} key={key} setList={setList} />
          ))}

          <p className="text-white text-[20px] py-[20px] pt-[35px]">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <Form />
        </div>
        <div className="w-full h-[10px] bg-line mt-[80px]"></div>
      </div>
      <Footer />
    </div>
  );
}
