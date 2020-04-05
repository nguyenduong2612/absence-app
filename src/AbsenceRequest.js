import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './AbsenceRequest.css';

class AbsenceRequest extends Component {
  render() {
    return (
      <tr>
        <td style={{ minWidth: "200px"}}>{this.props.name}</td>
        <td>{this.props.reason}</td>
        <td>{this.props.start}</td>
        <td>{this.props.end}</td>
        <td style={{width: "100px"}}>
          <Button className="btn-danger" onClick={this.props.onClick}>削除</Button>
        </td>
      </tr>
    );
  }
}

export default AbsenceRequest;
