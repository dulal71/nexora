import { Table, Button, Tooltip } from "@heroui/react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import DeleteProduct from "./DeleteProduct";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  category: string;
  brand: string;
  price: string;
  [key: string]: any;
}

interface ProductTableProps {
  products: Product[];
  
}

export function ProductTable({ products }: ProductTableProps) {
  return (
    <Table variant="secondary">
      <Table.ScrollContainer>
        <Table.Content aria-label="Product list" className="min-w-[700px]">
          <Table.Header>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Category</Table.Column>
            <Table.Column>Brand</Table.Column>
            <Table.Column>Price</Table.Column>
            <Table.Column>Actions</Table.Column>
          </Table.Header>
          <Table.Body>
            {products.map((product) => (
              <Table.Row key={product._id}>
                <Table.Cell>{product.name}</Table.Cell>
                <Table.Cell>{product.category}</Table.Cell>
                <Table.Cell>{product.brand}</Table.Cell>
                <Table.Cell>${product.price}</Table.Cell>
                <Table.Cell>
                  <div className="flex gap-2">
                    <Tooltip content="Edit product">
                     <Link href={`/admin/products/${product._id}`}>
                      <Button
                        isIconOnly
                        size="sm"
                        variant="light"
                       
                      >
                        <FiEdit2 className="w-4 h-4" />
                      </Button>
                      </Link>
                    </Tooltip>
                    <Tooltip content="Delete product" color="danger">
                      <DeleteProduct productId={product._id}></DeleteProduct>
                    </Tooltip>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}