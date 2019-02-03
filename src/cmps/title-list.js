import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import * as actionCreator from '../store/actions/actions'

class TitleList extends Component {


    render() {
        const { movies, isTitleListOpen, closeTitleList } = this.props
        return (
            <Drawer open={isTitleListOpen} onClose={closeTitleList} anchor="left">
                <h4 className="capitalize text-center mt-20">jump to movie</h4>
                <List className="title-list">

                    {
                        movies.sort((movie1, movie2) => {
                            if (movie1.title < movie2.title) return -1
                            if (movie1.title > movie2.title) return 1
                            return 0;
                        }).map((movie, idx) =>
                            <a onClick={closeTitleList} className="item" key={idx} href={'#' + movie.title}>
                                <ListItem className="capitalize">{movie.title}</ListItem>
                            </a>
                        )
                    }

                </List>
            </Drawer>
        )
    }
}
function mapStateToProps(state) {
    return {
        isTitleListOpen: state.isTitleListOpen,
        movies: state.movies
    }
}

function mapDispatchToProps(dispatch) {
    return {
        closeTitleList: () => {
            dispatch(actionCreator.closeTitleList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleList)
