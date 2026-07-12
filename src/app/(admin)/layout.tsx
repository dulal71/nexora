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
            <main>
              <div>
                <DashboardSidebar></DashboardSidebar>
                </div>
                <div>
                 {children}    
                    </div>  
            </main>
           
        </div>
    );
};

export default layout;