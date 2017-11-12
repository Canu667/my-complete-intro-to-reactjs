import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {
    state = {
        searchTerm: ''
    }
    handleSearchTermChange = (event) => {
        this.setState({ searchTerm: event.target.value })
    }
    render() {
        return (
            <div className="search">
              <header>
                <h1>{this.state.searchTerm}</h1>
                <input
                    onChange={this.handleSearchTermChange}
                    value={this.state.searchTerm}
                    type="text"
                    placeholder="Search"
                />
              </header>
              <div>
                  {preload.shows.map(show => <ShowCard show={show} key={show.imdbID} />)}
              </div>
            </div>
        );
    }
}

export default Search;