import { Button, Loading, Modal, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState } from "react";

export const ModalPay = (): JSX.Element => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const toggleHandler = async () => {
    setShow(true);
    await setTimeout(() => setShow(false), 2000);
    router.push("/");
  };
  const goHome = () => [];
  return (
    <>
      <Button color="success" onPress={toggleHandler}>
        Pay
      </Button>
      <Modal blur aria-labelledby="modal-title=pay" open={show}>
        <Modal.Header>
          <Text id="modal-title=pay" h3>
            Your payment is being processed
          </Text>
        </Modal.Header>
        <Modal.Body css={{ my: "$6", py: "$6", minHeight: "15vh" }}>
          <Loading size="xl" type="gradient" />
        </Modal.Body>
      </Modal>
    </>
  );
};
