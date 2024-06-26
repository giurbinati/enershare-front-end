import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register required components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const labels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'];

const data = {
    labels: labels,
    datasets: [
        {
            label: 'My First Dataset',
            backgroundColor: '#18e5b0',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            borderColor: '#18e5b0',
            tension: 0.1,
            pointBackgroundColor: '#18e5b0', // Color of the points
            pointRadius: 5, // Size of the points
            pointHoverRadius: 7, // Size of the points on hover
        },
    ],
};

const options = {
    plugins: {
        legend: {
            labels: {
                color: 'white', // Change legend text color to white
                font: {
                    size: 23, // Increase legend font size
                },
            },
        },
    },
    scales: {
        x: {
            ticks: {
                color: 'white', // Change x-axis tick color to white
                font: {
                    size: 16, // Increase x-axis tick font size
                },
            },
            grid: {
                display: false, // Hide x-axis grid lines
            },
            border: {
                color: 'white', // Change x-axis line color to white
            },
            title: {
                display: true, // Display x-axis title
                text: 'Timestamp', // Set x-axis title text
                color: 'white', // Set x-axis title color
                font: {
                    size: 20, // Set x-axis title font size
                },
            },
        },
        y: {
            ticks: {
                color: 'white', // Change y-axis tick color to white
                font: {
                    size: 16, // Increase y-axis tick font size
                },
            },
            grid: {
                display: false, // Hide y-axis grid lines
            },
            border: {
                color: 'white', // Change y-axis line color to white
            },
            title: {
                display: true, // Display y-axis title
                text: 'Values', // Set y-axis title text
                color: 'white', // Set y-axis title color
                font: {
                    size: 20, // Set y-axis title font size
                },
            },
        },
    },
};

export default function LineChartComponent() {
    return (
        <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden', color: 'white', backgroundColor: 'black' }}>
            <Line data={data} options={options} />
        </div>
    );
}
