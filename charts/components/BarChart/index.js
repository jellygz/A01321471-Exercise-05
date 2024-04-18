import styles from './BarChart.module.css'
import { Bar } from "react-chartjs-2"

import {
    Chart as ChartJS,
    CategoryScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    LinearScale
} from 'chart.js';
import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function BarChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({
        datasets: []
    });

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"],
            datasets: {
                    label: 'Sales $',
                    data: [10, 6, 15, 20, 12, 4, 5],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53. 162. 235, 0.4)'
                }
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                },
                maintainAspectRatio: false,
                responsive: true
            }
        })

    });

    

    return(
        <>
            <div>
                <Bar data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}} />
            </div>
        </>
    )
}