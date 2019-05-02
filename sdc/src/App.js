import React, { Component } from "react";
import {
  ReactiveBase,
  MultiList,
  DataSearch,
  ReactiveList,
  SelectedFilters
} from "@appbaseio/reactivesearch";
import Usgsheader from "./bundles/usgs/usgsheader.js";
import Usgsfooter from "./bundles/usgs/usgsfooter.js";
import { Card } from "react-bootstrap";
import "./App.css";
import "./bundles/usgs/common.css";
import "./bundles/usgs/custom.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  toggleState = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible
    });
  };

  render() {
    return (
      <ReactiveBase
        app="sdc_items"
        credentials="ixlwb0m0pz:ammkd2jkkk"
        url="https://sdc-testing-3352148807.us-east-1.bonsaisearch.net"
      >
        <Usgsheader />
        <div className="navbar">
          <div className="logo">
            USGS Science Data Catalog - Proof of Concept App using React
            Framework and Elasticsearch
          </div>
        </div>
        <div className="display">
          <div className={`leftSidebar ${this.state.visible ? "active" : ""}`}>
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
            />{" "}
            {/* <TagCloud
							componentId="KeywordCloud"
							dataField="metadata.resourceInfo.keyword.keyword.keyword.keyword"
						/> */}
          </div>
        </div>
        <Usgsfooter />
      </ReactiveBase>
    );
  }
}

export default App;
