import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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


export function BarHorizontal({data}:Props) {
    let options = {
        indexAxis: 'y' as const,
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right' as const,
          },
          title: {
            display: true,
            text: 'Metas novembro de 2021',
          },
        },
      };
      
       
     
  return <Bar options={options} height={300} data={data} />;
}
