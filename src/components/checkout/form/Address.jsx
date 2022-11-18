import React from "react";
import {
  TextField,
  Grid,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";

function Address() {
  return (
    <>
      <Typography variant="h4">Shipping address</Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, md: 2 }}>
        <Grid item xs={2} md={1}>
          <TextField
            label="First name"
            variant="standard"
            required
            fullWidth
            margin="dense"
          />
        </Grid>
        <Grid item xs={2} md={1}>
          <TextField
            id="filled-basic"
            label="Last name"
            variant="standard"
            margin="dense"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="filled-basic"
            label="Address line 1"
            variant="standard"
            margin="dense"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="filled-basic"
            label="Address line 2"
            variant="standard"
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={2} md={1}>
          <TextField
            id="filled-basic"
            label="City"
            variant="standard"
            margin="dense"
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={2} md={1}>
          <TextField
            id="filled-basic"
            label="State/Province/Region"
            variant="standard"
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={2} md={1}>
          <TextField
            id="filled-basic"
            label="Zip/Postal code"
            variant="standard"
            margin="dense"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={2} md={1}>
          <TextField
            id="filled-basic"
            label="Country"
            variant="standard"
            margin="dense"
            required
            fullWidth
          />
        </Grid>
      </Grid>
      <FormControlLabel
        value="ok"
        control={<Checkbox />}
        label="Use this address for payment details"
        labelPlacement="end"
      />
    </>
  );
}

export default Address;
