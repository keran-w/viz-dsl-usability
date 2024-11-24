import { getCarData } from "../data/index.js";

const ctx = document.getElementById('chartjs-T2');
const carData = await getCarData();

/**
 * Task 2: Create a chart that effectively convey the "right" data insight
 * Please be advised for all tasks, we will be using the latest version of Chart.js (4.4.6)
 * 
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

 * For the second task, you should create a figure that have the exact specification as the following:
 * <REPLACE THIS WITH URL!!!!!!!>
    - Show the visual proportion of cars from different origins

 * To finish this task, please replace the skeleton code with your own code from Task 1.
 * Then, modify your code to align with the target specification.

 * You can use the following references to help you.:
    - https://www.chartjs.org/docs/latest/charts/doughnut.html
    - https://www.chartjs.org/docs/latest/axes/labelling.html
    - https://www.chartjs.org/docs/latest/configuration/legend.html

 * While doing the task, please think aloud about your actions and the reasons behind them. We will not be interfering with your work, 
   but we will provide necessary assistance if your question is not related to the task.
 */


/* color palette */
const colors = ["#48bbb5", "#fd8f48", "#fb4e7a"];

/* Your code modification starts here ... */
const originCount = "Please replace this string with your code";
const config = {
   type: "",
   data: {},
   options: {},
};
/* Your code modification ends here ... */

new Chart(ctx, config);
