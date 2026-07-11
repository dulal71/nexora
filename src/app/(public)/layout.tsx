import Footer from '@/components/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const HomePageLayout = ({children}) => {
    return (
        <div>
         <Navbar></Navbar>  
         <main className='min-h-screen'>
            {children}
            </main> 
<Footer></Footer>
        </div>
    );
};

export default HomePageLayout;