import chart from './config.js'

const chartConfig = encodeURIComponent(JSON.stringify(chart));
const chartUrl = `https://quickchart.io/chart?c=${chartConfig}`;
document.getElementById('chart-image').src = chartUrl;