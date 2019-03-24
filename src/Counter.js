import React from 'react';
import {connect} from 'react-redux'

class Counter extends React.Component {
  render() {
    console.log('Counter props: ', this.props)
    return <div>
      <div>Current state: {this.props._value}</div>
      <button>+</button>
      <button>-</button>
    </div>
  }
}

const mapStateToProps = state => ({
    _value: state.counter
})

export default connect(mapStateToProps) (Counter);