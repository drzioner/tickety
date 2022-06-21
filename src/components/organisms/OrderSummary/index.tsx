/** @packages */
import { Avatar, Card, Col, Grid, Row, Spacer, Text } from "@nextui-org/react";

/** @application */
import { ShowType } from "@components/organisms";

export interface propsOrderSummary {
  show: ShowType;
}

export const OrderSummary = ({ show }: propsOrderSummary): JSX.Element => {
  const price = show?.price ?? 0;
  const tax = price * 0.21;
  const total = price + tax;
  return (
    <Card css={{ p: "$6", mw: "500px", my: "1rem" }}>
      <Card.Header css={{ mb: "$6" }}>
        <Grid.Container>
          <Grid xs={12}>
            <Text h2 css={{ lineHeight: "$xs" }}>
              Order Summary
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Spacer y={2} />
        <Row align="center" justify="space-between">
          <Text h3>Show: </Text>
        </Row>
        <Grid.Container css={{ my: "$4", width: "100%" }}>
          <Grid xs={12} css={{ mb: "$5" }}>
            <Row justify="flex-start">Presenter</Row>
            <Row justify="center">Hour</Row>
            <Row justify="flex-end">Price</Row>
          </Grid>
          <Grid xs={12}>
            <Col>
              <Avatar squared src={show?.avatar} css={{ size: "$10" }}></Avatar>
              <Row>
                <Text h4 css={{ color: "grey" }}>
                  {show?.title}
                </Text>
              </Row>
            </Col>
            <Row justify="center" align="flex-end">
              <Text h4 css={{ color: "grey" }}>
                {show?.hour}
              </Text>
            </Row>
            <Row justify="flex-end" align="flex-end">
              <Text h4 css={{ color: "grey" }}>
                ${price?.toFixed(2)} USD
              </Text>
            </Row>
          </Grid>
          <Spacer y={2} />
          <Grid xs={12}>
            <Col>
              <Row justify="space-between" align="center">
                <Text span>Subtotal:</Text>
                <Text span>${price?.toFixed(2)} USD</Text>
              </Row>
              <Row justify="space-between" align="center">
                <Text span>Shipping:</Text>
                <Text span>Free</Text>
              </Row>
              <Row justify="space-between" align="center">
                <Text span>Tax:</Text>
                <Text span>${tax?.toFixed(2)} USD</Text>
              </Row>
            </Col>
          </Grid>
        </Grid.Container>
      </Card.Body>
      <Card.Footer>
        <Row align="center" justify="space-between">
          <Text h3>Total: </Text>
          <Text h2>${total?.toFixed(2)} USD</Text>
        </Row>
      </Card.Footer>
    </Card>
  );
};
