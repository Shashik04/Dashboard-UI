import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import DashboardHeader from "./DashboardHeader";
import StatsCards from "./StatsCards";
import Graph from "./Graph";

function App() {
  const [route, setRoute] = useState("/");

  // useEffect(() => {
  //   console.log(window.location.pathname);
  //   setRoute(window.location.pathname);
  // }, []);
  return (
    <div>
      <Header />
      <StatsCards />
      <DashboardHeader />
      <Graph />
    </div>
  );
}

export default App;
