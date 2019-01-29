import React from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'
import Button from '@material-ui/core/Button';
import icon from '../assets/img/icon.png';

function Navbar(props) {
    return (
        <header className="nav-bar">

            <img src={icon} alt="logo" />
            <h3 className="capitalize pointer"><i className="fas fa-video"></i>Herolo Cinema</h3>
            <Button color="primary" variant="contained" onClick={props.onAddMovieClick}>
                +Add Movie
            </Button>
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
  
  