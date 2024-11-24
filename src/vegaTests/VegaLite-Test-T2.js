import { getCarData } from "../data/index.js";
const carData = await getCarData();

/*
* Task 2: Create a chart that effectively convey the "right" data insight
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
  - Show the proportion of cars from different origins

* To finish this task, please replace the skeleton code with your own code from Task 1.
* Then, modify your code to align with the target specification.

* You can use the following references to help you.:
  - https://vega.github.io/vega-lite/docs/aggregate.html
  - https://vega.github.io/vega-lite/docs/mark.html
  - https://vega.github.io/vega-lite/docs/encoding.html

* While doing the task, please think aloud about your actions and the reasons behind them. We will not be interfering with your work, 
  but we will provide necessary assistance if your question is not related to the task.
*/

let vlSpec = {
  data: {
    values: carData,
  },
  transform: [{
    aggregate: [{ op: "count", as: "Number of Cars", field: "Origin" }],
    groupby: ["Origin"]
  }],
  mark: "arc",
  // encoding: {
  //   x: { field: "Origin", type: "nominal" },
  //   y: { field: "Number of Cars", type: "quantitative" }
  // },
  "encoding": {
    "color": {"field": "Origin", "type": "nominal"},
    "theta": {"field": "Number of Cars", "type": "quantitative"}
  },
  width: 400,
  height: 200,
}

vegaEmbed("#VegaLite-T2", vlSpec);
