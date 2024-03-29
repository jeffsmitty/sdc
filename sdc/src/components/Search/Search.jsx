import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/common.css";
import "../../styles/sdc.css";
import "../../styles/black.css";
import {
  ReactiveBase,
  MultiList,
  DataSearch,
  ReactiveList,
  SelectedFilters
} from "@appbaseio/reactivesearch";
import { Card, Breadcrumb } from "react-bootstrap";

const Search = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="https://www.usgs.gov/core-science-systems/science-analytics-and-synthesis">
          Science, Analytics, and Synthesis (SAS)
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
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
                        <Card.Link href={"item/" + res._id}>HTML</Card.Link>
                        <Card.Link href="#">mdJSON</Card.Link>
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
};

export default Search;
