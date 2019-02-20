import React from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'

const SwitchButtons = ({showMoviesDetails,onOpenDetailsclick,onCloseDetailsclick}) => {

  const chooseBtn = (btn) => {
    if (btn === 1) {
      onOpenDetailsclick()
    }
    else {
      onCloseDetailsclick()
    }
  }

    return (
      <div className="switch-buttons">
        <button
          className={!showMoviesDetails ? 'chosen' : ''}
          onClick={chooseBtn.bind(this, 2)}
        >
          <i className="fas fa-th"></i>
        </button>

        <button
          className={showMoviesDetails ? 'chosen' : ''}
          onClick={chooseBtn.bind(this, 1)}
        >
          <i className="fas fa-list"></i>
        </button>
      </div>

    )
}


function mapStateToProps(state) {
  return {
    showMoviesDetails: state.showMoviesDetails,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onOpenDetailsclick: () => {
      dispatch(actionCreator.openMoviesDetails())
    },
    onCloseDetailsclick: () => {
      dispatch(actionCreator.closeMovieDetails())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SwitchButtons)
