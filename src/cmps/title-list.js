import React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import { MyContext } from '../store/provider';


const TitleList = ({ movies }) => {

    return (
        <MyContext.Consumer>
            {(context) => {
                const { isTitleListOpen } = context.state
                const { toggleTitleList } = context
                return (
                    <Drawer className="title-list" open={isTitleListOpen} onClose={toggleTitleList} anchor="left">
                        <div className="wrapper">
                            <h4 className="capitalize">jump to movie</h4>
                            <Button onClick={toggleTitleList}><i className="far fa-times-circle"></i></Button>
                        </div>
                        <List>
                            {
                                movies.sort((movie1, movie2) => {
                                    if (movie1.title < movie2.title) return -1
                                    if (movie1.title > movie2.title) return 1
                                    return 0;
                                }).map((movie, idx) =>
                                    <React.Fragment key={idx}>
                                        <Divider />
                                        <a onClick={toggleTitleList} className="item" href={'#' + movie.title}>
                                            <ListItem className="capitalize">{movie.title}</ListItem>
                                        </a>
                                        <Divider />
                                    </React.Fragment>
                                )
                            }
                        </List>
                    </Drawer>

                )
            }}
        </MyContext.Consumer>
    )
}
function mapStateToProps(state) {
    return {
        movies: state.movies
    }
}


export default connect(mapStateToProps, {})(TitleList)
