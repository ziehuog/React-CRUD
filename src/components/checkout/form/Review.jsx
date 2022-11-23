import React from "react";
import { makeStyles } from '@mui/styles';
import { ListItem, ListItemText, Typography, Grid } from "@mui/material";
function Review() {

  const useStyles = makeStyles({
    root: {
      color: 'red',
    },
  });

  const classes = useStyles();

  const products = [
    {
      name: "Product 1",
      desc: "A nice thing",
      price: "$9.99",
    },
    {
      name: "Product 2",
      desc: "Another thing",
      price: "$3.45",
    },
    {
      name: "Product 3",
      desc: "Something else",
      price: "$6.51",
    },
    {
      name: "Product 4",
      desc: "Best thing of all",
      price: "$14.11",
    },
    { name: "Shipping", desc: "", price: "Free" },
  ];

  const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];

  const payments = [
    { name: "Card type", detail: "Visa" },
    { name: "Card holder", detail: "Mr John Smith" },
    { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
    { name: "Expiry date", detail: "04/2024" },
  ];

  return (
    <>
      {products.map((product) => (
        <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={product.name} className={classes.root} secondary={product.desc} />
          <ListItemText style={{ display: "flex", justifyContent: "flex-end" }}>
            {product.price}
          </ListItemText>
        </ListItem>
      ))}
      <ListItem sx={{ py: 1, px: 0 }}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          $34.06
        </Typography>
      </ListItem>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Review;
