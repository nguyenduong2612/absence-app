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
    };

    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.getSearch = this.getSearch.bind(this)
  }
  getSearch =  async(filteredList)=>{
    await this.setState({filteredAbsences:filteredList});
    console.log(this.state.filteredAbsences);  // Show filtered list of absences
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
    console.log(this.state.absences)
  }
  
  render() {
    let list;
    if(this.state.filteredAbsences.length===0){
        list = <AbsenceList absences = {this.state.absences}/>
    }else{
        list = <AbsenceList absences = {this.state.filteredAbsences}/>
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
              {/*<button onClick={this.show}>Show "absences" after submitting a form by Form.js</button>*/}
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
