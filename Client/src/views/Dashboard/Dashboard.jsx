import style from './Dashboard.module.css'
import NavDashboard from '../../components/NavDashboard/NavDashboard'
import FormDashboard from '../../components/FormDashboard/FormDashboard'
import SideNavDashboard from '../../components/SideNavDashboard/SideNavDashboard'
import HomeDashboard from '../../components/HomeDashboard/HomeDashboard'
import ProductsDashboard from '../../components/ProductsDashboard/ProductsDashboard'
import UsersDashboard from '../../components/UsersDashboard/UsersDashboard'
import { useState } from 'react'

const Dashboard = () => {
    const [selectedNavItem, setSelectedNavItem] = useState('home');

    const handleNavItemChange = (navItem) => {
        setSelectedNavItem(navItem);
    };

    return (
        <div className={style.container}>
            <div className={style.sideNavContent}>
                <SideNavDashboard onNavItemChange={handleNavItemChange} selectedNavItem={selectedNavItem}/>
            </div>
            <div className={style.sectionContent}>
                <div className={style.navContent}>
                    <NavDashboard />
                </div>
                <div className={style.mainContent}>
                    {selectedNavItem === 'home' && <HomeDashboard />}
                    {selectedNavItem === 'newProduct' && <FormDashboard />}
                    {selectedNavItem === 'products' && <ProductsDashboard />}
                    {selectedNavItem === 'customers' && <UsersDashboard />}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;