import React, { useEffect, useRef, useState } from 'react'
import {
  Button,
  Modal,
  Fade,
  Box,
  Typography,
  Grid,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select, InputLabel, MenuItem
} from "@mui/material";
import { url } from '../../../../utils/http';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../../redux/users/usersAction';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function EditUser(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [status, setStatus] = useState('')
  
  useEffect(() => {
    setName(props.user.name)
    setEmail(props.user.email)
    setGender(props.user.gender)
    setStatus(props.user.status)

  }, [props.user])


  const data = useSelector((state) => state.users);
  const dispatch = useDispatch()
  const btnUpdate = async () => {

    console.log(props.user.id)
    try {
      let modifiedUser = await url.patch(`/users/${props.user.id}`, {name, email, gender, status}, {
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json',
          'Authorization': 'Bearer 4d53d40da1b60e5a2ce2b7369afa1b9593e7923a8e78fce0cda10c6a7d6bc7d9'
        }     

    })
     let index = data.findIndex(user => user.id === props.user.id)
      data.splice(index, 1)

    dispatch(updateUser([modifiedUser.data, ...data]))
    toast.success('Update user successfully!', {position: toast.POSITION.TOP_RIGHT})
    
      props.handleClose()
    } catch (error) {
    toast.error('Have some mistakes, please try again!', {position: toast.POSITION.TOP_RIGHT})
    }

  }

  return ( 
    <>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        // onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h4" component="h2">
              Edit user
            </Typography>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 1, md: 2 }}
            >
              <Grid item xs={2}>
                <TextField
                  label="Name"
                  variant="standard"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  margin="dense"
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id="filled-basic"
                  value={email}
                  label="Email"
                  variant="standard"
                  margin="dense"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  fullWidth
                />
              </Grid>

              <Grid item xs={2} md={1}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  value={gender ? gender : 'female'}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </Grid>

              <Grid item xs={2} md={1}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={status ? status : 'active'}
                  onChange={(e) => setStatus(e.target.value)}
                  autoWidth
                  label="Age"
                >
                  <MenuItem value='active'>Active</MenuItem>
                  <MenuItem value='inactive'>Inactive</MenuItem>
                </Select>
              </Grid>
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
                  onClick={() => btnUpdate()}
                >
                  Update
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
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </>
   );
}

export default EditUser;