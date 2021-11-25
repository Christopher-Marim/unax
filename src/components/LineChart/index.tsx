import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface DataProps{
  labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
    }[];
}

interface Props{
  data:DataProps;
}


export function LineChart({data}:Props) {
 const options = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
        line: {
            tension: 0.3 // disables bezier curves
        }
	},
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Produção de Relatórios',
      },
    },
  };
  
  return <Line options={options} height={300} data={data} />;
}
