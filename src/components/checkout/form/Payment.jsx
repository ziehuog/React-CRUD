import React from "react";
import {
  TextField,
  Grid,
  Checkbox,
  FormControlLabel,
  Typography
} from "@mui/material";

function Payment() {
  return (
    <>
      <Typography variant="h4">Payment method</Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, md: 2 }}>
        <Grid item xs={2} md={1}>
          <TextField
            label="Name on card"
            variant="standard"
            required
            fullWidth
            margin="dense"
          />
        </Grid>
        <Grid item xs={2} md={1}>
          <TextField
            id="filled-basic"
            label="Card number"
            variant="standard"
            margin="dense"
            required
            fullWidth
          />
        </Grid>
        
        <Grid item xs={2} md={1}>
        <TextField
          id="filled-basic"
          label="Expiry date"
          variant="standard"
            margin="dense"
            required
          fullWidth
        />
        </Grid>

        <Grid item xs={2} md={1}>
        <TextField
          id="filled-basic"
          label="CVV"
          helperText="Last three digits on signature strip"
          variant="standard"
            margin="dense"
            fullWidth
        />
        </Grid>
        
      </Grid>
        <FormControlLabel
          value="ok"
          control={<Checkbox />}
          label="Remember credit card details for next time"
          labelPlacement="end"
        />
    </>
  );
}

export default Payment;
