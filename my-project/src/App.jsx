import Header from "./components/Header";
import Banner from "./components/Banner";

export default function App() {
  return (
    <>
      <div className=" bg-hero-pattern h-full">
        <div className=" bg-no-repeat bg-cover w-full h-full bg bg-black/[40%]">
          <div className="bg-gradiente flex flex-col space-y-40">
            <Header />
            <Banner />
          </div>
        </div>
      </div>
      <Partone />
    </>
  );
}

function Partone() {
  return (
    <div className="w-full h-[526px] ">
      <div className="w-full h-[10px] bg-gray-800"></div>
      <div className="flex justify-center bg-black">
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
      <div className="w-full h-[10px] bg-gray-800"></div>
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
      <div className="w-full h-2 bg-gray-900"></div>
      <div className="flex justify-center bg-black">
        <div className="w-[510px] h-[382px] flex items-center flex-col justify-center bg-black text-white">
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
    </div>
  );
}
