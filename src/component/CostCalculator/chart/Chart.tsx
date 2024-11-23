import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './Chart.css'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const PieChart = () => {
  const [chartData, setChartData] = useState({
    labels: [
      'Home Design & Approval',
      'Brickwork and Plastering',
      'Excavation',
      'Footing & Foundation',
      'RCC Work - Columns & Slabs',
      'Roof Slab',
      'Door',
      'Flooring & Tiling',
      'Electric Wiring',
      'Water Supply & Plumbing',
    ],
    datasets: [
      {
        label: 'House Construction Cost',
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], // Replace with actual data
        backgroundColor: [
          'yellow',
          'pink',
          'green',
          'black',
          'blue',
          'red',
          'brown',
          'purple',
          'gray',
          'orange',
        ],
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  });

  


  return (
    <div className='chart-container'>
      <h2>House Construction Cost Breakdown</h2>
      <Pie data={chartData}  />
    </div>
  );
};

export default PieChart;