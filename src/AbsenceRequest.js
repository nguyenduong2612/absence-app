import React, { Component } from 'react';
import './AbsenceRequest.css';

class AbsenceRequest extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.reason}</td>
        <td>{this.props.start}</td>
        <td>{this.props.end}</td>
      </tr>
    );
  }
}

export default AbsenceRequest;
