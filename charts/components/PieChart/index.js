import { Pie } from "react-chartjs-2"

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({
        datasets: []
    });

    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: {
                    label: '# Of Votes',
                    data: [10, 6, 15, 20, 12, 4, 5],
                    borderColor: [
                        'rgb(53, 162, 235)',
                        'rgb(23, 162, 65)',
                        'rgb(53, 32, 235)',
                        'rgb(53, 162, 5)',
                        'rgb(123, 2, 35)',
                        'rgb(32, 34, 24)'
                    ],
                    backgroundColor: [
                        'rgb(53, 162, 235, 0.4)',
                        'rgb(23, 162, 65, 0.4)',
                        'rgb(53, 32, 235, 0.4)',
                        'rgb(53, 162, 5, 0.4)',
                        'rgb(123, 2, 35, 0.4)',
                        'rgb(32, 34, 24, 0.4)'
                    ],
                    borderWidth: 1,
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
                <Pie data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}} />
            </div>
        </>
    )
}