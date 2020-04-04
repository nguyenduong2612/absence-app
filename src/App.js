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
    };

    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
    // this.show = this.show(this); //Show "absences" after submitting a form by Form.js(just 4 debug)
  }

  handleClose = () => {
    this.setState({ showModal: false })
  }

  // show(event){
  //     console.log(this.state.absences)
  // } //Show "absences" after submitting a form by Form.js(just 4 debug)

  handleShow = () => {
    this.setState({ showModal: true })
  }

  handleUpdate = (newValue) =>{
    this.setState({absences : newValue});
  }

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-light bg-light">
          <div className="container">
            <a class="navbar-brand">欠席管理</a>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Search />
            </div>

            <div className="col-md-6">
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
          
          <div className="row">
            <AbsenceList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
