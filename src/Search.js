import React, { Component } from 'react';
import './Searh.css';
class Search extends Component {
     constructor(props){
        super(props);
        this.state = {
            search:'',
        }
    }
  getSearchValue = async(e)=>{
    const absencesList = this.props.absences;
    await this.setState({search: e.target.value });
    const filteredList = absencesList.filter(absence => {
        return absence.name.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1
    })
    this.props.getSearch(filteredList);
    // console.log(this.props.absences);
  }
  render() {
    return (
      <div className="search">
          <input className="form-control" type="text" placeholder="検索" onChange={(e)=>this.getSearchValue(e)}/>
      </div>
    );
  }
}

export default Search;
