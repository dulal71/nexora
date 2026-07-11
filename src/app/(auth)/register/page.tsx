import RegisterForm from '@/components/forms/RegisterForm';
import React, { Suspense } from 'react';

const RegisterPage = () => {
    return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
          <RegisterForm></RegisterForm>
          </Suspense>  
        </div>
    );
};

export default  RegisterPage;