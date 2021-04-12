import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
    borderRadius: '5px',
    backgroundColor: '#242c2e',
    color: '#f5f5f5'
  },
  login: {
    borderRadius: '5px',
    backgroundColor: 'transparent',
    color: '#f5f5f5',
    border: '2px solid #f5f5f5',
    padding: '10px 20px',
    fontSize: '16px',
    marginLeft: 'auto',
    display: 'flex',
    outline: 'none',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#5578817a',
      // color: '#e0bf2b',
      border: '2px solid #e0bf2b'
    }
  }
}));

const LogInButton = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen} className={classes.login}>
        Log In
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default LogInButton;