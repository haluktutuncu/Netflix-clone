import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

export default function Home() {
  return (
    <>
      <div className="bg-[#201f1f]">
        <Main />
        <Row title="UpComing" fetchURL={requests.requestUpcoming} />
        <Row title="Popular" fetchURL={requests.requestPopular} />
        <Row title="Trending" fetchURL={requests.requestTrending} />
        <Row title="TopRated" fetchURL={requests.requestTopRated} />
        <Row title="Horror" fetchURL={requests.requestHorror} />
      </div>
    </>
  );
}
