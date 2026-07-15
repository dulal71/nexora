import Footer from '@/components/Footer';
import Navbar from '@/components/shared/Navbar';
import { ReactNode } from 'react';

interface HomePageLayoutProps {
  children: ReactNode;
}
const HomePageLayout = ({children}:HomePageLayoutProps) => {
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