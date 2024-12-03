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

 * For the second task, you should create a figure that have the exact specification as the provided image
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
