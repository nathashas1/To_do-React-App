import React from 'react';



class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
     }
     this.handleClick = this.handleClick.bind(this)
  }

  handleClick(side,todo) {
    console.log("side",side,todo)
    if (this.props.container === "todo") {
      this.setState({doing: todo})
    }
  }


render(){
  let rightBtn = this.props.right ? "/right.svg" : null
  let leftBtn = this.props.left ? "/left.svg" : null
  return (
    <div className="todoItem">
      <img className="imageIcon" src={leftBtn} alt="" onClick={() => this.handleClick("left",this.props.todo)}/>
      <div>{this.props.todo}</div>
      <img className="imageIcon" src={rightBtn} alt="" onClick={() => this.handleClick("right",this.props.todo)}/>
    </div>
  )
}


}




export default TodoItem;
