import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { requireRole } from '@/lib/api/userSession';
import React from 'react';
interface LayoutProps{
 children: React.ReactNode;   
}
const layout =async ({children}:LayoutProps) => {
   await requireRole('admin')
   
    return (
        <div>
            <header>
               <DashboardNavbar></DashboardNavbar> 
            </header>
            <main className='flex '>
              <div>
                <DashboardSidebar></DashboardSidebar>
                </div>
                <div className='flex-1 md:p-5 min-h-screen !bg-gray-50 dark:!bg-black py-5'>
                 {children}    
                    </div>  
            </main>
           
        </div>
    );
};

export default layout;