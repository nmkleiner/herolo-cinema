import React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import * as actionCreator from '../store/actions/actions'



const TitleList = ({ movies, isTitleListOpen, closeTitleList }) => {

    return (
        <Drawer className="title-list" open={isTitleListOpen} onClose={closeTitleList} anchor="left">
            <div className="wrapper">
                <h4 className="capitalize">jump to movie</h4>
                <Button onClick={closeTitleList}><i className="far fa-times-circle"></i></Button>
            </div>
            <List>
                {
                    movies.sort((movie1, movie2) => {
                        if (movie1.title < movie2.title) return -1
                        if (movie1.title > movie2.title) return 1
                        return 0;
                    }).map((movie, idx) =>
                        <React.Fragment key={idx}>
                            <a onClick={closeTitleList} className="item" href={'#' + movie.title}>
                                <ListItem className="capitalize">{movie.title}</ListItem>
                            </a>
                            <Divider />
                        </React.Fragment>
                    )
                }
            </List>
        </Drawer>
    )
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
