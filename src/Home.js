import React from "react";
import Header from "./Container/Header";
import Table from "./Container/Table";
import Filters from "./Container/Filters";
import Card from "./Container/Card";

const Home = () => {
  return (
    <div>
      <center>
        <Header />
        <Table />
        <Filters />
        <Card />
      </center>
    </div>
  );
};

export default Home;
