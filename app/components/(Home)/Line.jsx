"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'GeeksforGeeks Line Chart',
      data: [65, 59, 80, 81, 56],
      fill: false,
      borderColor: 'pink',
      tension: 0.1,
    },
    {
      label: 'GeeksforGeeks Line Chart',
      data: [22, 5, 85, 61, 66],
      fill: false,
      borderColor: 'cyan',
      tension: 0.1,
    },
  ],
};

const LineChart = () => {
  return (
    <div className='w-full bg-white p-3 rounded-lg shadow-lg '>
      <h1 className='text-black pb-5'>Example 1: Line Chart</h1>
      <Line data={data} />
    </div>
  );
};
export default LineChart;