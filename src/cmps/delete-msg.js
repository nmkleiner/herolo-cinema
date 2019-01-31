import React from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const DeleteMsg = ({ isDeleteMsgOpen, handleClose, handleYes }) => {

  return (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={isDeleteMsgOpen}
        onClose={handleClose}
        message={<span id="message-id">Are you sure?</span>}
        action={[
          <Button key="yes" color="secondary" size="small" onClick={handleYes}>
            yes&nbsp;<i className="fas fa-trash"></i>
          </Button>,
          <IconButton
            key="x"
            color="inherit"
            onClick={handleClose}
          >
            x
        </IconButton>,
        ]}
      />
    </React.Fragment>
  )
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
