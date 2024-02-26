import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SideBar,
  Header,
  TodaysWeather,
  TimeWiseForcat,
  ContainerWithBgImg,
} from "../Components";

function HomePage() {
  return (
    <ContainerWithBgImg>
      <SideBar />
      <article className="w-full h-full flex flex-col relative ">
        <Header />
        <main className="flex h-max flex-1">
          <TodaysWeather />
          <TimeWiseForcat />
        </main>
      </article>
    </ContainerWithBgImg>
  );
}

export default HomePage;
