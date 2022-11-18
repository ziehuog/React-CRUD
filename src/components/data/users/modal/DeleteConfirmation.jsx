import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
        </Box>
        <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  variant="contained"
                  size="medium"
                  color="secondary"
                  sx={{ mx: 1 }}
                  onClick={() => btnAdd()}
                >
                  Add
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
      </Modal>
    </div>
  );
}