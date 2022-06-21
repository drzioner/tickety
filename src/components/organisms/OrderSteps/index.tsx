/** @packages */
import { Button, Collapse, Grid, Row } from "@nextui-org/react";
import { useState } from "react";

/** @application */
import { ModalCancel, ModalPay } from "@components/atoms";
import {
  BillingForm,
  CustomerForm,
  PaymentForm,
  ShippingForm,
} from "@components/molecules";

export const OrderSteps = (): JSX.Element => {
  const [expandedStepOne, setExpandedStepOne] = useState(true);
  const [expandedStepTwo, setExpandedStepTwo] = useState(false);
  const [expandedStepThree, setExpandedStepThree] = useState(false);
  const [expandedStepFour, setExpandedStepFour] = useState(false);
  const swicthStep = (step: number): void => {
    if (step === 1) {
      setExpandedStepTwo(false);
      setExpandedStepThree(false);
      setExpandedStepFour(false);
      setExpandedStepOne(true);
    }
    if (step === 2) {
      setExpandedStepOne(false);
      setExpandedStepThree(false);
      setExpandedStepFour(false);
      setExpandedStepTwo(true);
    }
    if (step === 3) {
      setExpandedStepOne(false);
      setExpandedStepTwo(false);
      setExpandedStepFour(false);
      setExpandedStepThree(true);
    }
    if (step === 4) {
      setExpandedStepOne(false);
      setExpandedStepTwo(false);
      setExpandedStepThree(false);
      setExpandedStepFour(true);
    }
  };

  return (
    <Grid.Container gap={2}>
      <Grid>
        <Collapse.Group splitted>
          <Collapse title="Customer" expanded={expandedStepOne}>
            <CustomerForm />
            <Grid css={{ pt: "$10" }}>
              <Button color="success" onPress={() => swicthStep(2)}>
                Next
              </Button>
            </Grid>
          </Collapse>
          <Collapse title="Shipping" expanded={expandedStepTwo}>
            <ShippingForm />
            <Grid css={{ pt: "$10" }}>
              <Button color="success" onPress={() => swicthStep(3)}>
                Next
              </Button>
            </Grid>
          </Collapse>
          <Collapse title="Billing" expanded={expandedStepThree}>
            <BillingForm />
            <Grid css={{ pt: "$10" }}>
              <Button color="success" onPress={() => swicthStep(4)}>
                Next
              </Button>
            </Grid>
          </Collapse>
          <Collapse title="Payment" expanded={expandedStepFour}>
            <PaymentForm />
            <Row css={{ pt: "$10" }} justify="space-between">
              <ModalPay />
              <ModalCancel />
            </Row>
          </Collapse>
        </Collapse.Group>
      </Grid>
    </Grid.Container>
  );
};
