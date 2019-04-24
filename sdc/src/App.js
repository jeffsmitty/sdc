import React, { Component } from 'react';
import {
	ReactiveBase,
	MultiList,
	DataSearch,
	ReactiveList,
	SelectedFilters
} from '@appbaseio/reactivesearch';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
	}

	toggleState = () => {
		const { visible } = this.state;
		this.setState({
			visible: !visible,
		});
	};

	render() {
		return (
			<ReactiveBase
				app="sdc_items"
				credentials="ixlwb0m0pz:ammkd2jkkk"
				url="https://sdc-testing-3352148807.us-east-1.bonsaisearch.net"
			>
				<div className="navbar">
					<div className="logo">
						SDC ReactiveSearch Concept App
					</div>
				</div>
				
				<div className="display">
					
					<div className={`leftSidebar ${this.state.visible ? 'active' : ''}`}>				
						<div className = "filterHeader">Filter By:</div>
						<MultiList
							componentId="Keyword"
							dataField="metadata.resourceInfo.keyword.keyword.keyword.keyword"
							title="Keywords"
							URLParams={true}
						/>	
						<MultiList
							componentId="Author"
							dataField="contact.name.keyword"
							title="Authors"
							URLParams={true}
						/>	
					</div>
					
					<div className="mainBar">
						<SelectedFilters
    						showClearAll={true}
    						clearAllLabel="Clear filters"
						/>
						<DataSearch
							componentId="Text Search"
							dataField={["metadata.resourceInfo.citation.title", "metadata.resourceInfo.abstract"]}
							autosuggest={true}
							showFilter={true}
							URLParams={true}
						/>
						<ReactiveList
							componentId="SearchResult"
							dataField="metadata.resourceInfo.citation.title.keyword"
							pagination={true}
							paginationAt="bottom"
							react={{
								"and": ["Keyword","Text Search","Author","KeywordCloud"]
							}}
							loader="Loading Results.."
							renderItem={(res) => 
							
							<div className="result-data">
							<div className = "result-item">
							<div className = "result-title">{res.metadata.resourceInfo.citation.title}</div><br/>
							<div className = "result-abstract">{res.metadata.resourceInfo.abstract}</div>

							</div>
							</div>
							}
							renderResultStats={
								function(stats){
									return (
										`Showing ${stats.displayedResults} of total ${stats.numberOfResults} in ${stats.time} ms`
									)
								}
							}
						/>
						 {/* <TagCloud
							componentId="KeywordCloud"
							dataField="metadata.resourceInfo.keyword.keyword.keyword.keyword"
						/> */}
					</div>
				</div>
			</ReactiveBase>
		);
	}
}

export default App;
