

const pages = input.pages.sort(p => p.file.name, 'asc');
const fileNames = pages.map(p => p.file.name).values;

const field1Name = input.field1 || 'sleep';
const field1Label = input.field1Label || 'Sleep (Hours)';
const field2Name = input.field2 || 'productivity';
const field2Label = input.field2Label || 'Productivity (1-5)';

const field1Data = pages.map(p => p[field1Name]).values;
const field2Data = pages.map(p => p[field2Name]).values;

const chartData = {
  type: 'line',
  data: {
    labels: fileNames,
    datasets: [{
      label: field1Label,
      data: field1Data,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    }, {
      label: field2Label,
      data: field2Data,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    }]
  }
};

window.renderChart(chartData, input.container);
