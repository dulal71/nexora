import { Table } from "@heroui/react";

export interface Customer {
  name: string;
  email: string;
  emailVerified: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}

interface CustomerTableProps {
  customers: Customer[];
}

function formatDate(date: Date | string) {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function CustomerTable({ customers }: CustomerTableProps) {
  return (
    <Table variant="secondary">
      <Table.ScrollContainer>
        <Table.Content aria-label="Customers" className="min-w-[700px]">
          <Table.Header>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Verified</Table.Column>
            <Table.Column>Created At</Table.Column>
          
          </Table.Header>
          <Table.Body>
            {customers.map((customer, index) => (
              <Table.Row key={customer.email ?? index}>
                <Table.Cell>{customer.name}</Table.Cell>
                <Table.Cell>{customer.email}</Table.Cell>
                <Table.Cell>
                  {customer.emailVerified ? "Verified" : "Not Verified"}
                </Table.Cell>
                <Table.Cell>{formatDate(customer.createdAt)}</Table.Cell>

              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}