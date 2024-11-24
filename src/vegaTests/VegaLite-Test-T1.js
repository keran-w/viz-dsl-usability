import { getCarData } from "../data/index.js";
const carData = await getCarData();

console.log(carData);

/*
* Task 1: Create a bar chart using Vega-Lite
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
* <REPLACE THIS WITH URL!!!!!!!>
  - The x-axis is the country of origin (Origin attribute)
  - The y-axis is the count of cars from each country

* You can use the following references to help you.:
  - https://vega.github.io/vega-lite/docs/aggregate.html
  - https://vega.github.io/vega-lite/docs/mark.html
  - https://vega.github.io/vega-lite/docs/encoding.html

* While doing the task, please think aloud about your actions and the reasons behind them. We will not be interfering with your work, 
  but we will provide necessary assistance if your question is not related to the task.
*/

// let vlSpec = {
//   data: {
//     values: carData,
//   },
//   // Your code modification starts here ...
//   mark: "",
//   transform: [{}],
//   encoding: {
//     x: {},
//     y: {},
//   },
//   // Your code modification ends here ...
//   width: 400,
//   height: 200,
// };

let vlSpec = {
  data: {
    values: carData,
  },
  transform: [{
    aggregate: [{ op: "count", as: "Number of Cars", field: "Origin" }],
    groupby: ["Origin"]
  }],
  mark: "bar",
  encoding: {
    x: { field: "Origin", type: "nominal" },
    y: { field: "Number of Cars", type: "quantitative" }
  },
  width: 400,
  height: 200,
}

vegaEmbed("#VegaLite-T1", vlSpec);
