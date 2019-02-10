import React from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';

const DeleteMsg = ({ isDeleteMsgOpen, handleClose, handleYes }) => {

  return (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={isDeleteMsgOpen}
        onClose={handleClose}
        message={<span id="message-id">Are you sure?</span>}
        action={[
          <Button
            key="ok"
            color="inherit"
            size="small"
            onClick={handleYes}>
            ok
          </Button>,
          <Button
            key="cancel"
            color="inherit"
            size="small"
            onClick={handleClose}
          >
            cancel
        </Button>,
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
