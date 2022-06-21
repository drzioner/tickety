/** @packages */
import { Container, Row } from "@nextui-org/react";

/** @application */
import { Logo } from "@components/atoms";

export const Header = (): JSX.Element => {
  return (
    <Container
      fluid={true}
      css={{ boxShadow: "var(--nextui-shadows-md)", mw: "100%" }}
    >
      <Row css={{ py: "0.5rem", mx: "1.5rem" }}>
        <Logo />
      </Row>
    </Container>
  );
};
