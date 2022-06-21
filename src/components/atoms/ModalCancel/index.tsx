import { Button, Link as LinkUi, Modal, Text } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

export const ModalCancel = (): JSX.Element => {
  const [show, setShow] = useState(false);
  const toggleHandler = () => setShow(!show);
  const closeHandler = () => setShow(false);
  return (
    <>
      <Button color="error" light onPress={toggleHandler}>
        Cancel
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={show}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Are you sure you want to cancel the purchase?
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Button auto onPress={closeHandler}>
            No, cancel
          </Button>
          <Button auto flat color="error">
            <Link href="/">
              <LinkUi color="error">Yes, continue</LinkUi>
            </Link>
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};
