import React from 'react';
import {connect} from 'react-redux'
import { inc, dec } from './store/counter';


class Counter extends React.Component {
  render() {
    console.log('Counter props: ', this.props)
    return <div>
      <div>Current state: {this.props._value}</div>
      <button onClick={this.props._inc}>+</button>
      <button onClick={this.props._dec}>-</button>
    </div>
  }
}

const mapStateToProps = state => ({
    _value: state.counter
})

const mapDispatchToProps = dispatch => ({
    _inc: () => dispatch(inc()),
    _dec: () => dispatch(dec()),

})

export default connect(mapStateToProps, mapDispatchToProps) (Counter);