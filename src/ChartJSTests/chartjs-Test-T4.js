import { getCarData } from "../data/index.js";

const ctx = document.getElementById('chartjs-T4');
const carData = await getCarData();

/**
 * Task 4: Explore the temporal dynamics!
 * You will still be working the Cars dataset. The specification of Cars is as follows:
    {
        "Name":"ford ranger",
        "Miles_per_Gallon":28,
        "Cylinders":4,
        "Displacement":120,
        "Horsepower":79,
        "Weight_in_lbs":2625,
        "Acceleration":18.6,
        "Year":"1982-01-01",
        "Origin":"USA"
    }, ...

 * You are free to choose what type of visualization you want to create, and the style you want to present your insight.
 * However, your exploration should follow the following constraints:
    - You should use the Year field to explore the temporal dynamics of the dataset.
    - You should use at least 2 different variables and show how it changes over time.

 * You can use the following references to help you:
    - https://www.chartjs.org/docs/latest/charts/

 * While doing the task, please think aloud about your actions and the reasons behind them. We will not be interfering with your work, 
   but we will provide necessary assistance if your question is not related to the task.
 */

/* color palette */
const colors = ["#48bbb5", "#fd8f48", "#fb4e7a"];

/* Your code modification starts here ... */


/* Prepare radar chart data */
/* Count cars by country of origin */
const originCount = carData.reduce((acc, car) => {
  const origin = car.Origin?.trim(); // Trim whitespace and normalize case
  if (["USA", "Japan", "Europe"].includes(origin)) {
    acc[origin] = (acc[origin] || 0) + 1;
  }
  return acc;
}, {});

/* Ensure all origins are represented, even if counts are 0 */
const origins = ["USA", "Japan", "Europe"];
origins.forEach((origin) => {
  if (!originCount[origin]) originCount[origin] = 0;
});

/* Prepare Polar Area chart data */
const config = {
  type: "polarArea", // Set chart type to 'polarArea'
  data: {
    labels: origins, // Labels for each segment: ["USA", "Japan", "Europe"]
    datasets: [
      {
        label: "Number of Cars",
        data: origins.map((origin) => originCount[origin]), // Data for each origin
        backgroundColor: colors, // Colors for each segment of the polar chart
        borderWidth: 1, // Thin border between sections
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true, // Display the legend
        position: "top", // Position legend at the top
      },
    },
    scales: {
      r: {
        beginAtZero: true, // Ensure chart starts at zero
        ticks: {
          stepSize: 10, // Step size for ticks
        },
      },
    },
  },
};
/* Your code modification ends here ... */

new Chart(ctx, config);
