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
        event.target.style.display = "none";
    }
    render() {
        return (
            <form class='form' onSubmit={this.handleSubmit}>
                <h3 class='card-header bg-primary text-white'>欠席のフォーム</h3>
                <table>
                    <tr >
                        <input class='input-row' placeholder="名前" onChange={this.handleNameChange}/>
                    </tr>
                    <tr>
                        <input class='input-row' placeholder="欠席の理由" onChange={this.handleReasonChange}/>
                    </tr>
                    <tr>
                        <td>
                            <input class='input-small-row' placeholder="開始日" onChange={this.handleStartChange}/>

                            <input class='input-small-row' placeholder="終了日" onChange={this.handleEndChange}/>
                        </td>
                    </tr>
                </table>
                <div class='center-button'>
                    <button className="btn btn-primary submit-button" value="submit">提出</button>
                </div>
            </form>
        );
    }
}

export default Form;
