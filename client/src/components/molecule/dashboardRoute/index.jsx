import './index.css'
import * as React from 'react';
import DashboardRouteEach from './../../atoms/dashboardRouteEach/index';
import dasboardData from './../../assets/static/dashboardData.js'


const DashboardRoute = (props) => {
    return(
        <>
        <div className="dashboard__inner__display__top__left">
            {
                dasboardData.col1.map((ele)=>{
                    const{id,label,icon,link,color,arrow,colorArrow}=ele;
                    return(
                        <DashboardRouteEach colorArrow={colorArrow} arrow={arrow} color={color} label={label} count={100} id={id} icon={icon} link={link}/>
                    )
                })
            }
        </div>
        </>
    )
}


export default DashboardRoute;