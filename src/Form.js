import React, {Component} from 'react';
import "./Form.css";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          reason: "",
          start: "",
          end: "",
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

    handleStartChange(event){
        this.setState({start : event.target.value});
    }

    handleEndChange(event){
        this.setState({end : event.target.value});
    }

    handleSubmit(event){
        const absence_list = this.props.absences;
        event.preventDefault();
        absence_list.push({
            name: this.state.name,
            reason: this.state.reason,
            start : this.state.start,
            end: this.state.end,
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
                    />
                </div>
                <div className="row px-3">
                    <input 
                        className='form-control'
                        placeholder="欠席の理由" 
                        onChange={this.handleReasonChange}
                    />
                </div>
                <div className="row"> 
                    <div className="col-md-6">
                        <input 
                            className='form-control' 
                            placeholder="開始日" 
                            onChange={this.handleStartChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <input 
                            className='form-control' 
                            placeholder="終了日" 
                            onChange={this.handleEndChange}
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
