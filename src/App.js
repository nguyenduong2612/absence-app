import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Search from './Search';
import Form from './Form';
import AbsenceList from './AbsenceList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      absences: [],
      filteredAbsences: [],
      search:'',
    };

    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.getSearch = this.getSearch.bind(this)
  }
  getSearch =  async(filteredList,search)=>{
    await this.setState({filteredAbsences:filteredList,search:search});
    // console.log(this.state.search);
    // console.log(this.state.filteredAbsences); 
  }
  
  handleClose = () => {
    this.setState({ showModal: false })
  }

  handleShow = () => {
    this.setState({ showModal: true })
  }

  handleUpdate = (newValue) =>{
    this.setState({absences : newValue});
    this.setState({showModal: false});
    // console.log(this.state.absences)
  }

  handleDelete = (index) => {
    this.state.absences.splice(index, 1)
    this.setState({ absences: this.state.absences })
  }
  
  render() {
    let list;
    if(this.state.search===''){
        list = <AbsenceList absences = {this.state.absences} onDelete={this.handleDelete}/>
    }else{
        list = <AbsenceList absences = {this.state.filteredAbsences} onDelete={this.handleDelete}/>
    }
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand">欠席管理</a>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-md-6 px-0">
              <Search getSearch = {this.getSearch} absences={this.state.absences}/>
            </div>

            <div className="col-md-6 px-0">
              <Button className="create-btn" variant="success" onClick={() => this.handleShow()}>
                欠席届を作る
              </Button>
              <Modal show={this.state.showModal} onHide={() => this.handleClose()}>
                <Form
                  absences ={this.state.absences}
                  handleUpdate ={this.handleUpdate}
                />
              </Modal>
            </div>
          </div>
            
          <div className="row pt-5">
            {list}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
