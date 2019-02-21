import React from 'react';
import { MyContext } from '../store/provider';

const SwitchButtons = () => {
  return (
    <MyContext.Consumer>
      {(context) => {
        const { showMoviesDetails } = context.state
        const { openMoviesDetails, closeMoviesDetails } = context
        return (
          <div className="switch-buttons">
            <button
              className={!showMoviesDetails ? 'chosen' : undefined}
              onClick={closeMoviesDetails}
            >
              <i className="fas fa-th"></i>
            </button>

            <button
              className={showMoviesDetails ? 'chosen' : undefined}
              onClick={openMoviesDetails}
            >
              <i className="fas fa-list"></i>
            </button>
          </div>
        )
      }}
    </MyContext.Consumer>

  )
}


export default SwitchButtons
