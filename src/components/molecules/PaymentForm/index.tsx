/** @packages */
import { Col, Grid, Input, Row } from "@nextui-org/react";
import { useState } from "react";
import Cards, { ReactCreditCardProps } from "react-credit-cards";

/** @styles */
import "react-credit-cards/es/styles-compiled.css";

export const PaymentForm = (): JSX.Element => {
  const [payment, setPayment] = useState<ReactCreditCardProps>({
    cvc: "",
    expiry: "",
    focused: "number",
    name: "",
    number: "",
  });

  const handleInputFocus = (e: any) => {
    setPayment({ ...payment, focused: e.target.name });
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setPayment({ ...payment, [name]: value });
  };
  return (
    <Grid.Container>
      <Grid xs={6}>
        <Cards
          cvc={payment.cvc}
          expiry={payment.expiry}
          focused={payment.focused}
          name={payment.name}
          number={payment.number}
        />
      </Grid>
      <Grid xs={6}>
        <Col>
          <Row>
            <Input
              clearable
              label="Number"
              placeholder="4300 0000 0000 0000"
              name="number"
              css={{ width: "100%" }}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              maxLength={19}
              minLength={16}
            />
          </Row>
          <Row>
            <Input
              clearable
              label="Name"
              placeholder="John Max"
              name="name"
              css={{ width: "100%" }}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </Row>
          <Row justify="space-between" align="center">
            <Input
              clearable
              label="Expiration"
              type="month"
              css={{ mw: "70%", width: "100%" }}
              name="expiry"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <Input
              clearable
              label="CVC"
              placeholder="123"
              type="text"
              name="cvc"
              css={{ mw: "25%" }}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              maxLength={3}
            />
          </Row>
        </Col>
      </Grid>
    </Grid.Container>
  );
};
