"use client";

import {Button, Modal} from "@heroui/react";
import { BiRocket } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";

const DeleteProduct = () => {
    return (
        <Modal>
     <Button
    isIconOnly
    size="sm"
    variant="light"
    color="danger"
     >
    <FiTrash2 className="w-4 h-4" />
    </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-default text-foreground">
                <BiRocket className="size-5" />
              </Modal.Icon>
              <Modal.Heading> Delete Product?</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              </Modal.Body>
            <Modal.Footer>
              <Button className="w-full" slot="close" variant="danger">
               Delete
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    );
};

export default DeleteProduct;