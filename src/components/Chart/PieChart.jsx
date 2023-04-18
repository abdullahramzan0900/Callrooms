import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  const canvasRef = useRef(null);

  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        data: [12, 20, 6, 9, 15],
        backgroundColor: [
          '#ff6384',
          '#36a2eb',
          '#ffce56',
          '#4bc0c0',
          '#9966ff',
        ],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const chart = new Chart(canvas, {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            callbacks: {
              label: (context) => {
                const label = data.labels[context.dataIndex];
                const value = context.formattedValue;
                return `${label}: ${value}`;
              },
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
};

export default PieChart;