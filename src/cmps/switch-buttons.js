import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'

class SwitchButtons extends Component {

  constructor() {
    super()
    this.state = {
      btn1: false,
      btn2: true,
    }
  }

  chooseBtn(btn) {
    if (btn === 1) {
      this.setState({ btn1: true, btn2: false })
      this.props.onOpenDetailsclick()
    }
    else {
      this.setState({ btn1: false, btn2: true })
      this.props.onCloseDetailsclick()
    }
  }

  render() {
    const {showMoviesDetails} = this.props
    return (
      <div className="switch-buttons">
        <button
          className={showMoviesDetails ? 'chosen' : ''}
          onClick={this.chooseBtn.bind(this, 1)}
        >
          <i className="fas fa-list"></i>
        </button>

        <button
          className={!showMoviesDetails ? 'chosen' : ''}
          onClick={this.chooseBtn.bind(this, 2)}
        >
          <i className="fas fa-th"></i>
        </button>
      </div>

    )
  }
}


function mapStateToProps(state) {
  return {
    showMoviesDetails: state.showMoviesDetails,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onOpenDetailsclick: () => {
      dispatch(actionCreator.openMovieDetails())
    },
    onCloseDetailsclick: () => {
      dispatch(actionCreator.closeMovieDetails())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SwitchButtons)
