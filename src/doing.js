import React from 'react';
// import DoingItem from './doing_item.js';


class Doing extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      doings: [this.props.doing]
     }
  }


    render() {


      return (
        <div>
          <h1>Doing</h1>
        </div>
      )
    }

  }

    export default Doing;
