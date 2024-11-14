import { getCarData } from "../data/index.js";
const carData = await getCarData();

/*
* Task 3: Create a more expressive chart
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

* For the third task, you should modify a current chart that have the exact specification as the following:
* <REPLACE THIS WITH URL!!!!!!!>
  - Show categorizaton of cars by origin
  - Show the number of cylinders with the sizes of points


* You can use the following references to help you.:
  - https://vega.github.io/vega-lite/docs/encoding.html

* While doing the task, please think aloud about your actions and the reasons behind them. We will not be interfering with your work, 
  but we will provide necessary assistance if your question is not related to the task.
*/



let vlSpec = {
  data: {
    values: carData,
  },
  // Your code modification starts here ...
  mark: "point",
  encoding: {
    x: { field: "Horsepower", type: "quantitative", title: "Horsepower" },
    y: {
      field: "Miles_per_Gallon",
      type: "quantitative",
      title: "Miles per Gallon (MPG)",
    },
  },
  // Your code modification ends here ...
  width: 400,
  height: 200,
};

vegaEmbed("#VegaLite-T3", vlSpec);
