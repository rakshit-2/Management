import styles from './index.module.css';
import * as React from 'react';
import DashboardRoute from './../../molecule/dashboardRoute/index';
import DashboardChart1 from '../../molecule/dashboardChart1';
import DashboardChart2 from '../../molecule/dashboardChart2';
import DashboardChart3 from '../../molecule/dashboardChart3';
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
                        <div className={styles.dashboard__inner__display__bottom__left}>
                            <div className={styles.dashboard__inner__display__bottom__left__head}>
                                <div className={styles.dashboard__inner__display__bottom__left__head__left}>
                                    Returned Books
                                </div>
                                <div className={styles.dashboard__inner__display__bottom__left__head__right}>
                                    View All
                                </div>
                            </div>
                            <div className={styles.dashboard__inner__display__bottom__left__display}>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                    <th scope="col">Book Name</th>
                                    <th scope="col">Member</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Total Issues</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>  
                        </div>
                        <div className={styles.dashboard__inner__display__bottom__right}>
                            <DashboardChart3/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default Dashboard;