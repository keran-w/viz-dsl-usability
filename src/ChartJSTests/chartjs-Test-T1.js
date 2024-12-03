import { getCarData } from "../data/index.js";

const ctx = document.getElementById('chartjs-T1');
const carData = await getCarData();

/**
 * Task 1: Create a bar chart using Chart.js
 * Please be advised for all tasks, we will be using the latest version of Chart.js (4.4.6)
 * 
 * You will be working on a dataset named Cars. The specification of Cars is as follows:
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
 * For the first task, you should create a figure that have the exact specification as the following:
 * https://drive.google.com/file/d/1q4Bvme59hzIY1cBGJHw5pAePeCTxs7tW (top-left chart)
   - The x-axis is the country of origin (Origin attribute)
   - The y-axis is the count of cars from each country
 * 
 * You can use the following references to help you.:
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   - https://www.chartjs.org/docs/latest/charts/bar.html
   - https://www.chartjs.org/docs/latest/axes/labelling.html
   - https://www.chartjs.org/docs/latest/configuration/legend.html

 * While doing the task, please think aloud about your actions and the reasons behind them. We will not be interfering with your work, 
   but we will provide necessary assistance if your question is not related to the task.
 */

/* color palette */
const colors = ["#48bbb5", "#fd8f48", "#fb4e7a"];

/* Your code modification starts here ... */
/* Calculate the origin count */
const originCount = carData.reduce((acc, car) => {
  acc[car.Origin] = (acc[car.Origin] || 0) + 1;
  return acc;
}, {});

// Prepare data for the chart
const labels = Object.keys(originCount); // Unique origins (e.g., USA, Europe, Japan)
const data = Object.values(originCount); // Count of cars for each origin

/* Chart configuration */
const config = {
  type: "bar", // Bar chart
  data: {
      labels: labels, // X-axis labels
      datasets: [
          {
              label: "", // Empty label to match the design
              data: data, // Data points
              backgroundColor: colors, // Bar colors
              // borderRadius: 5, // Rounded corners on bars
              borderSkipped: false, // Remove border skips to match style
          },
      ],
  },
  options: {
      responsive: true,
      plugins: {
          legend: {
              display: false, // Hide legend to match the design
          },
          title: {
              display: false, // Hide title to match the design
          },
      },
      scales: {
          x: {
              title: {
                  display: true,
                  text: "Country of Origin", // X-axis label
              },
              grid: {
                  display: true, // Hide x-axis gridlines
              },
          },
          y: {
              beginAtZero: true, // Start y-axis at 0
              title: {
                  display: true,
                  text: "Number of Cars", // Y-axis label
              },
              grid: {
                  color: "#eaeaea", // Light gray gridlines
                  lineWidth: 1, // Thin gridlines
              },
          },
      },
  },
};

new Chart(ctx, config);
/* Your code modification ends here ... */

new Chart(ctx, config);
