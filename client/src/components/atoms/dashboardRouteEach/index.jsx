import './index.css'
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useLocation,useNavigate} from 'react-router-dom'


const DashboardRouteEach = (props) => {
    const navigate=useNavigate();
    return(
        <>
        <div className="dashboard__inner__display__top__left__each" style={{backgroundColor:props.color}} onClick={()=>{navigate(props.link)}}>
            <div className='dashboardroute__each__inner'>
                <div className='dashboardroute__each__inner__left'>
                    <FontAwesomeIcon icon={props.icon} size="lg" color="black" style={{cursor:"pointer"}} />
                </div>
                <div className='dashboardroute__each__inner__right'>
                    <div className='dashboardroute__each__inner__right__top'>
                        {props.label}
                    </div>
                    <div className='dashboardroute__each__inner__right__bottom'>
                        {props.count} {'\u00A0'} <FontAwesomeIcon icon={props.arrow} size="sm" color={props.colorArrow} style={{cursor:"pointer"}} />
                    </div>
                </div>
            </div>
        </div>  
        </>
    )
}


export default DashboardRouteEach;