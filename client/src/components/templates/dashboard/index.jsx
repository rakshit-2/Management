import Dashboard_main from './../../organisms/dashboard';
import Nav from './../../organisms/nav'
import * as React from 'react';


const Dashboard = (props) => {
    return(
        <>
        <div className='template__outer'>
            <div className='template__inner'>
                <div className='template__inner__nav'>
                    <Nav/>
                </div>
                <div className='template__inner__main'>
                    <Dashboard_main/>
                </div>
            </div>
        </div>
        </>
    )
}


export default Dashboard;