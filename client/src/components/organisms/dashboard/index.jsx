import styles from './index.module.css';
import * as React from 'react';
import DashboardRoute from './../../molecule/dashboardRoute/index';
import DashboardChart1 from '../../molecule/dashboardChart1';
import DashboardChart2 from '../../molecule/dashboardChart2';
import dashboardData from '../../assets/static/dashboardData';


const Dashboard = (props) => {
    return(
        <>
        <div className={styles.dashboard__outer}>
            <div className={styles.dashboard__inner}>
                <div className={styles.dashboard__inner__head}>
                    {dashboardData.head}
                </div>
                <div className={styles.dashboard__inner__display}>
                    <div className={styles.dashboard__inner__display__top}>
                        <DashboardRoute/>
                        <DashboardChart2/>
                        <DashboardChart1/>
                    </div>
                    <div className={styles.dashboard__inner__display__bottom}>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default Dashboard;