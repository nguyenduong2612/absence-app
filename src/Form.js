import React, {Component} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./Form.css";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          reason: "",
          start: new Date(),
          end:  new Date()
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleReasonChange = this.handleReasonChange.bind(this);
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleNameChange(event) {
      this.setState({name :event.target.value})
    }

    handleReasonChange(event) {
      this.setState({reason : event.target.value})
    }

    handleStartChange(date){
        this.setState({start : date});
    }

    handleEndChange(date){
        this.setState({end : date});
    }

    handleSubmit(event){
        const absence_list = this.props.absences;
        event.preventDefault();
        absence_list.push({
            name: this.state.name,
            reason: this.state.reason,
            start : this.state.start.toLocaleDateString('ja-JP'),
            end: this.state.end.toLocaleDateString('ja-JP'),
        });
        this.props.handleUpdate(absence_list);
    }
    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <h3 className='card-header bg-primary text-white mb-4'>欠席のフォーム</h3>
                <div className="row px-3">
                    <input 
                        className='form-control'
                        placeholder="名前" 
                        onChange={this.handleNameChange}
                        required
                    />
                </div>
                <div className="row px-3">
                    <textarea 
                        className='form-control'
                        placeholder="欠席の理由" 
                        onChange={this.handleReasonChange}
                        required
                    />
                </div>
                <div className="row"> 
                    <div className="col-md-6">
                        <p className="mb-1">開始日</p>
                        <DatePicker
                            className='form-control'
                            selected={ this.state.start }
                            onChange={this.handleStartChange}
                            dateFormat='yyyy年MM月dd日'
                        />
                    </div>
                    <div className="col-md-6">
                        <p className="mb-1">終了日</p>
                        <DatePicker 
                            className='form-control'
                            selected={ this.state.end }
                            onChange={this.handleEndChange}
                            dateFormat='yyyy年MM月dd日'
                        />
                    </div>
                </div>
                <div className='center-button'>
                    <button className="btn btn-primary submit-button mb-4" value="submit">提出</button>
                </div>
            </form>
        );
    }
}

export default Form;
