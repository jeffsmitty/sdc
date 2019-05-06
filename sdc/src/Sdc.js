import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./bundles/usgs/common.css";
import "./Sdc.css";
import "./black.css";
import Usgsheader from "./bundles/usgs/usgsheader.js";
import Usgsfooter from "./bundles/usgs/usgsfooter.js";
import {
  ReactiveBase,
  MultiList,
  DataSearch,
  ReactiveList,
  SelectedFilters
} from "@appbaseio/reactivesearch";
import { Card, Breadcrumb } from "react-bootstrap";

function SdcApp() {
  return (
    <div>
      <Usgsheader />
      <div className="subheader" />
      <div className="navbar">
        <div className="logo">
          USGS Science Data Catalog - Proof of Concept App using React Framework
          and Elasticsearch
        </div>
      </div>
      <Router>
        <div>
          <Route exact path="/" component={Sdchome} />
          <Route path="/search" component={Search} />
          <Route path="/item/:itemId" component={Item} />
        </div>
      </Router>
      <Usgsfooter />
    </div>
  );
}

function Sdchome() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item active>
          <a href="https://www.usgs.gov/core-science-systems/science-analytics-and-synthesis">
            Science, Analytics, and Synthesis
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Science Data Catalog Home</Breadcrumb.Item>
      </Breadcrumb>
      <div>
        <h2>Science Data Catalog Home</h2>
        <Link to="/search">Search the catalog</Link>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item active>
          <a href="https://www.usgs.gov/core-science-systems/science-analytics-and-synthesis">
            Science, Analytics, and Synthesis
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/">Science Data Catalog Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Search</Breadcrumb.Item>
      </Breadcrumb>
      <div>
        <ReactiveBase
          app="sdc_items"
          credentials="ixlwb0m0pz:ammkd2jkkk"
          url="https://sdc-testing-3352148807.us-east-1.bonsaisearch.net"
          themePreset="dark"
        >
          <div className="display">
            <div className="leftSidebar">
              <div className="filterHeader">Filter By:</div>
              <MultiList
                componentId="Keyword"
                dataField="metadata.resourceInfo.keyword.keyword.keyword.keyword"
                title="Keywords"
                URLParams={true}
                react={{
                  and: ["Keyword", "Author"]
                }}
              />
              <MultiList
                componentId="Author"
                dataField="contact.name.keyword"
                title="Authors"
                URLParams={true}
                react={{
                  and: ["Keyword", "Author"]
                }}
              />
            </div>

            <div className="mainBar">
              <SelectedFilters
                showClearAll={true}
                clearAllLabel="Clear filters"
              />
              <DataSearch
                componentId="Text Search"
                dataField={[
                  "metadata.resourceInfo.citation.title",
                  "metadata.resourceInfo.abstract"
                ]}
                autosuggest={true}
                showFilter={true}
                URLParams={true}
              />
              <ReactiveList
                componentId="SearchResult"
                dataField="metadata.resourceInfo.citation.title.keyword"
                pagination={true}
                paginationAt="both"
                react={{
                  and: ["Keyword", "Text Search", "Author"]
                }}
                loader="Loading Results.."
                renderItem={res => (
                  <div className="result-data">
                    <Card border="dark">
                      <Card.Header className="result-title">
                        {res.metadata.resourceInfo.citation.title}
                      </Card.Header>
                      <Card.Body>
                        <Card.Text>
                          {res.metadata.resourceInfo.abstract}
                        </Card.Text>
                        <span className="cardViewLinksTitle">
                          <Card.Link>View as: </Card.Link>
                        </span>
                        <Card.Link href="#">HTML</Card.Link>
                        <Card.Link href="#">JSON</Card.Link>
                        <Card.Link href="#">XML</Card.Link>
                      </Card.Body>
                    </Card>
                  </div>
                )}
                renderResultStats={function(stats) {
                  return `Showing ${stats.displayedResults} of total ${
                    stats.numberOfResults
                  } in ${stats.time} ms`;
                }}
              />
            </div>
          </div>
        </ReactiveBase>
      </div>
    </div>
  );
}

function Item({ match }) {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="https://www.usgs.gov/core-science-systems/science-analytics-and-synthesis">
            Science, Analytics, and Synthesis
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/">Science Data Catalog Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Item #{match.params.itemId} </Breadcrumb.Item>
      </Breadcrumb>

      <div>
        <h2>Sample Item Landing Page - Item {match.params.itemId}</h2>
      </div>
    </div>
  );
}

export default SdcApp;
