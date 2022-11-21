import * as React from 'react';
import {Modal, Typography, Button, Box}  from '@mui/material';
import { url } from '../../../../utils/http';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DeleteConfirmation(props) {
  const dispatch = useDispatch();
  const btnDelete = async () => {
    console.log(props.id)
    try {
      await url.delete(`/users/${props.id}`, {
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json',
          'Authorization': 'Bearer 4d53d40da1b60e5a2ce2b7369afa1b9593e7923a8e78fce0cda10c6a7d6bc7d9'
        }     

    })

    // dispatch(listUsers())
    props.handleClose()
    toast.success('Delete user successfully!', {position: toast.POSITION.TOP_RIGHT})
    } catch (error) {
      toast.error('Have some mistakes, please try again!', {position: toast.POSITION.TOP_RIGHT})
    }
  }

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Confirm Delete
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure that you want to delete?
          </Typography>
          <div
                style={{
                  width: "100%",
                  margin: "15px 0",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  variant="contained"
                  size="medium"
                  color="secondary"
                  sx={{ mx: 1 }}
                  onClick={() => btnDelete()}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  size="medium"
                  color="secondary"
                  sx={{ mx: 1 }}
                  onClick={() => props.handleClose()}
                >
                  Cancel
                </Button>
              </div>
        </Box>
      </Modal>
    </div>
  );
}