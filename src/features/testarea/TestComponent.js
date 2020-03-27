import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrimentCounter, decrementCounter } from './testActions';
import { Button } from 'semantic-ui-react';
class TestComponent extends Component {
  render() {
    const { incrimentCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1>Test Component</h1>
        <h3>The ans is {this.props.data}</h3>
        <Button onClick={incrimentCounter} positive content="increment" />
        <Button onClick={decrementCounter} negative content="decrement" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.test.data
});

const actions = {
  incrimentCounter,
  decrementCounter
};

export default connect(mapStateToProps, actions)(TestComponent);
