import { getSession } from "@/lib/api/userSession";
import { redirect } from "next/navigation";


const CheckoutPage =async () => {
    const user = await getSession()
    if(!user){
        redirect('/login')
    }
    return (
        <div>
            
        </div>
    );
};

export default CheckoutPage;