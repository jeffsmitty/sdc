import React from "react";
import { Breadcrumb } from "react-bootstrap";

const Item = ({ match }) => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="https://www.usgs.gov/core-science-systems/science-analytics-and-synthesis">
          Science, Analytics, and Synthesis (SAS)
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/">Science Data Catalog Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/search">Search</Breadcrumb.Item>
        <Breadcrumb.Item active>Item #{match.params.itemId} </Breadcrumb.Item>
      </Breadcrumb>
      <div>
        <h2>Sample Item Landing Page - Item {match.params.itemId}</h2>
      </div>
    </div>
  );
};

export default Item;
