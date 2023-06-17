import React from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
import { Box, Card, CardHeader } from '@mui/material';
import { fNumber } from '../../../utils/formatNumber';
import { useChart } from '../../../components/chart';

StackedBar.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
};

export default function StackedBar({ title, subheader, chartData, chartColors, ...other }) {
  const chartLabels = chartData.map((i) => i.name);
  const chartSeries = chartData;
  
  // [
  //   { name: "Series 1", data: [2 , 10] },
  //   { name: "Series 2", data: [3 , 18] }
  // ];


  // const chartSeries = chartData.map((i) => i.value);


  const stackedChartSeries = chartLabels.map((label, index) => {
    const values = chartSeries.map(series => series.data[index]);
    return {
      name: label,
      data: values
    };
  });

  const chartOptions = useChart({
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: () => '',
        },
      },
    },
    plotOptions: {
      bar: { horizontal: false, barHeight: '28%', borderRadius: 2, stacked: true },
    },
    xaxis: {
      categories: ["a"],
    },
  
    colors: chartColors,
    chart: {
      stacked: true
    }
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart type="bar" series={chartSeries} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}


  // const chartLabels = chartData.map((i) => i.label);

  // const chartSeries = chartData.map((i) => i.value);