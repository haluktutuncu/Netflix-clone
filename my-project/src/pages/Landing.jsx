import Header from "/Users/haluktutuncu/Desktop/Yazılım Portfolyom/Movie-app/my-project/src/components/Header";
import Banner from "/Users/haluktutuncu/Desktop/Yazılım Portfolyom/Movie-app/my-project/src/components/Banner";
import Partone from "../components/Partone";
export default function Landing() {
  return (
    <>
      <div className=" bg-hero-pattern w-full h-full">
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
