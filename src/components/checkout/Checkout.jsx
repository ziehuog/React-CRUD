import React from "react";
import "./Checkout.css";
import { Button, Stepper, Step, StepLabel, Typography } from "@mui/material";

import Address from "./form/Address";
import Payment from "./form/Payment";
import Review from "./form/Review";

function Checkout() {
  const steps = ["Shipping address", "Payment details", "Review your order"];
  const [activeStep, setActiveStep] = React.useState(0);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Address />;
      case 1:
        return <Payment />;
      case 2:
        return <Review />;
      default:
        throw new Error("Unknown step");
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <div className="body">
        <div className="container">
          <h1>Checkout</h1>
          <div>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          {activeStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </>
          ) : (
            <>
              <div className="form">{getStepContent(activeStep)}</div>
              <div className="button--position">
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Checkout;
