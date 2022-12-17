import './index.css'
import * as React from 'react';
import dasboardData from './../../assets/static/dashboardData.js'
import { Pie,Line } from "react-chartjs-2";
// import {Chart, ArcElement} from 'chart.js';
import Chart from 'chart.js/auto';
// Chart.register(ArcElement);


const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        id:0,
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        id:1,
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#fc3503"
      }
    ]
  };


const DashboardChart2 = (props) => {

    
    return(
        <>
        <div className='dashboard__inner__display__top__right3'>
            <Pie data={data}/>
        </div>
        
        </>
    )
}


export default DashboardChart2;