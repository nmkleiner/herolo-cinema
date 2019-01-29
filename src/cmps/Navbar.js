import React from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'

function Navbar(props) {
    return (
        <header className="nav-bar">
            <h3 className="capitalize pointer"><i className="fas fa-video"></i>Herolo Cinema</h3>
            <button modifier="outline" className="white" onClick={props.onAddMovieClick}>
                +Add Movie
            </button>
        </header>

    )
}



function mapStateToProps(state) {
    return {

    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        onAddMovieClick: () => {
            dispatch(actionCreator.selectMovie(null))
        }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
  
  