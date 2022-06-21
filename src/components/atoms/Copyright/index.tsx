/** @packages */
import { Container, Text } from "@nextui-org/react";
import React from "react";

/** @styles */
import styles from "./index.module.scss";

export const Copyright = ({
  text = "Tickety",
}: {
  text?: string;
}): JSX.Element => (
  <Container className={styles.container}>
    <Text h6 className={styles.title}>
      Copyright &copy; {new Date().getFullYear()} {text}
    </Text>
    <Text h6 size={"0.7rem"} className={styles.title}>
      Todos los derechos reservados
    </Text>
  </Container>
);
