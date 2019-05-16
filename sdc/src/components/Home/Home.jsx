import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="https://www.usgs.gov/core-science-systems/science-analytics-and-synthesis">
          Science, Analytics, and Synthesis (SAS)
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Science Data Catalog Home</Breadcrumb.Item>
      </Breadcrumb>
      <div>
        <h2>Science Data Catalog Home</h2>
        <Link to="/search">Search the catalog</Link>
      </div>
    </div>
  );
};

export default Home;
