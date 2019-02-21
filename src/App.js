import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from './store/store';
import * as actionCreator from './store/actions/actions'
import DeleteMsg from './cmps/delete-msg';
import Navbar from './cmps/navbar';
import MoviesPage from './views/movies-page.js';
import Footer from './cmps/footer';
import {Provider} from './store/provider.js';

class App extends Component {
  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    return (
      <Provider>
        <div className="App">
          <DeleteMsg />
          <Navbar store={store} />
          <MoviesPage store={store} />
          <Footer />
        </div>
      </Provider>
    );
  }
}


function mapStateToProps(state) {
  return {
    movies: state.movies,
    isDeleteMsgOpen: state.isDeleteMsgOpen
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      dispatch(actionCreator.loadMovies())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
