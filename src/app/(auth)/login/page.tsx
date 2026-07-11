
import LoginForm from "@/components/forms/LoginForm";
import { Suspense } from "react";


const LoginPage = () => {
    return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
          <LoginForm></LoginForm>
          </Suspense>  
        </div>
    );
};

export default LoginPage;