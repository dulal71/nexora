import { CustomerTable } from '@/components/admin/CustomersTable';
import { CustomerList } from '@/lib/api/customerList';


const CustomersPage = async () => {
  const { users: customers, total } = await CustomerList();

  return (
    <div className=' max-w-7xl mx-auto  p-6'>
      <div>
        <h1>Customers</h1>
        <p>Total: {total}</p>
      </div>

      <div>
        {customers.length > 0 ? (
          <CustomerTable customers={customers} />
        ) : (
          <p>No customers found.</p>
        )}
      </div>
    </div>
  );
};

export default CustomersPage;