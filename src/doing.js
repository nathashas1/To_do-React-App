import React from 'react';
import TodoItem from './todo_item.js';


class Doing extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {

     }
  }


    render() {
    //   let doings = (this.state.doings).map((doing,i) => {
    //   return (
    //     <TodoItem
    //       key={i}
    //       todo={doing}
    //       right={"yes"}
    //       left={"yes"}
    //     />
    //   );
    // });

      return (
        <div>
          <h1>Doing</h1>

        </div>
      )
    }

  }

    export default Doing;
