import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

class DeleteMsg extends Component {

  handleClose() {

  }

  render() {
    return (
      <React.Fragment>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={this.props.isDeleteMsgOpen}
          onClose={this.props.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Are you sure?</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.props.handleYes}>
              <i className="fas fa-trash"></i>
              &nbsp;yes
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.props.handleClose}
            >
              x
        </IconButton>,
          ]}
        />
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    isDeleteMsgOpen: state.isDeleteMsgOpen,
    deletedMovie: state.deletedMovie,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    handleClose: () => {
      dispatch(actionCreator.closeDeleteMsg())
    },
    handleYes: () => {
      dispatch(actionCreator.deleteMovie())
    dispatch(actionCreator.closeDeleteMsg())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMsg)
