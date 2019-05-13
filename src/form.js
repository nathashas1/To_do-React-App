import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      todo:"",
     }
     this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    console.log("form text",e.target.value)
    this.setState({todo: e.target.value})
  }

  render() {
    return (
      <div className="">
        I am form
        <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
        />
        <div className="" onClick={this.props.addCard(this.state.todo)}>Add Card</div>

      </div>
    )
    }

  }





export default Form;
