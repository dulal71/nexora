"use client";

import { deleteProduct } from "@/lib/action/deleteProduct";
import {Button, Modal} from "@heroui/react";
import { BiRocket } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "sonner";

interface DeleteProductProps {
  productId: string;
}

const DeleteProduct = ({productId}:DeleteProductProps) => {
 
   const handleDelete = async () => {
    try {
      const data = await deleteProduct(productId);

      if (data.deletedCount > 0) {
        toast.success("Delete Product Successfully");
      } else {
        toast.error("Product not found");
      }

    } catch(error) {
      toast.error("Something went wrong");
    }
  };

    return (
        <Modal>
     <Button
    isIconOnly
    size="sm"
    variant="ghost"
  className={'bg-red-500'}
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
              <Button onClick={handleDelete} className="w-full" slot="close" variant="danger">
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