import React, {PropTypes} from 'react';
import Test from './Test.js'

export default class Cubey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "test1",
    };
  }

  changeTitle(title){
    this.setState({title});
  }

  render() {
    return (
      <div>
        <p>cubey here</p>
        <Test changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
      </div>
    );
  }
}

Cubey.propTypes = {
};
