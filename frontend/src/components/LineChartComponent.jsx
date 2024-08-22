import { Line } from "react-chartjs-2";
import './dashboardStyle.css'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChartComponent = ({ totalEmissionDateWise }) => {
  // Convert the totalEmissionDateWise object to an array of objects
  const data = Object.entries(totalEmissionDateWise).map(([date, totalEmission]) => ({
    date,
    totalEmission
  }));

  // Extract the dates and emissions separately
  const dates = data.map(item => item.date);
  const emissions = data.map(item => item.totalEmission);
  dates.reverse();
  emissions.reverse();
  const dataVisualize = {
    labels: dates,  // Use the extracted dates here
    datasets: [
      {
        label: "CO2 Emissions",
        data: emissions,  // Use the extracted emissions here
        fill: false,
        borderColor: "white",
        backgroundColor: "white"
        
      }
    ]
  };

  const options = {
    scales:{
      x:{
        title:{
          display: true,
          text: "Date",
          color: 'white'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Lighter grid lines
        },
        ticks: {
          color: 'white', // Set the color of the tick labels
        },
        // backgroundColor: 'white',
      },
      y:{
        title:{
          display:true,
          text: "Total CO2 Emissions (kg)",
          color: 'white'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Lighter grid lines
        },
        ticks: {
          color: 'white', // Set the color of the tick labels
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'white', // Set the color of the legend text
        },
      },
    },
  };

  return (
    <div style={{ width: '1000px', height: '500px', align:"center" }}>
      <h2>Total CO2 Emissions by Date</h2>
      <Line data={dataVisualize} options={options} />
    </div>
  );
};

export default LineChartComponent;
