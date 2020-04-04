import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import AbsenceRequest from './AbsenceRequest';
import './AbsenceList.css';

class AbsenceList extends Component {
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>名前</th>
            <th>欠席理由</th>
            <th>開始日</th>
            <th>終了日</th>
          </tr>
        </thead>
        <tbody>
          { 
            this.props.absences.map((absence, index) => (
              <AbsenceRequest
                key={index} 
                name={absence.name}
                reason={absence.reason}
                start={absence.start}
                end={absence.end}
              />
            ))
          }
        </tbody>
      </Table>
    );
  }
}

export default AbsenceList;
