import styles from './index.module.css';
import * as React from 'react';
import DashboardRoute from './../../molecule/dashboardRoute/index';
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
                        <div className={styles.dashboard__inner__display__top__right}>

                        </div>
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