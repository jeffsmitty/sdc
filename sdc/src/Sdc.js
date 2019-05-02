import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Sdc.css";
import "./bundles/usgs/common.css";
import "./bundles/usgs/custom.css";
import Usgsheader from "./bundles/usgs/usgsheader.js";
import Usgsfooter from "./bundles/usgs/usgsfooter.js";
import {
  ReactiveBase,
  MultiList,
  DataSearch,
  ReactiveList,
  SelectedFilters
} from "@appbaseio/reactivesearch";
import { Card } from "react-bootstrap";

function SdcApp() {
  return (
    <div>
      <Usgsheader />
      <div className="navbar">
        <div className="logo">
          USGS Science Data Catalog - Proof of Concept App using React Framework
          and Elasticsearch
        </div>
      </div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">SDC Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/items">Item Landing Page</Link>
            </li>
          </ul>
          <Route exact path="/" component={Sdchome} />
          <Route path="/search" component={Search} />
          <Route path="/items" component={Items} />
        </div>
      </Router>
      <Usgsfooter />
    </div>
  );
}

function Sdchome() {
  return (
    <div>
      <h2>Science Data Catalog Home</h2>
    </div>
  );
}

function Search() {
  return (
    <div>
      <ReactiveBase
        app="sdc_items"
        credentials="ixlwb0m0pz:ammkd2jkkk"
        url="https://sdc-testing-3352148807.us-east-1.bonsaisearch.net"
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
  );
}

function Items({ match }) {
  return (
    <div>
      <h2>Item Landing Page</h2>
      <ul>
        <li>
          <Link to={`${match.url}/1`}>Item 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/2`}>Item 2</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:itemId`} component={Item} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select an item</h3>}
      />
    </div>
  );
}

function Item({ match }) {
  console.info(match.params.itemId);
  return (
    <div>
      <h3>Item {match.params.itemId}</h3>
    </div>
  );
}

export default SdcApp;
