import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <input 
          className="form-control"
          type="text"
          placeholder="検索"
        />
      </div>
    );
  }
}

export default Search;
