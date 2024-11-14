import { getCarData } from "../data/index.js";
const carData = await getCarData();

// Documentation Needed:
// https://vega.github.io/vega-lite/docs/mark.html

// console.log(carData)
let vlSpec = {
  data: {
    // url: "src/data/cars.json",
    values: carData,
  },
  mark: "point",
  encoding: {
    x: { field: "Horsepower", type: "quantitative", title: "Horsepower" },
    y: {
      field: "Miles_per_Gallon",
      type: "quantitative",
      title: "Miles per Gallon (MPG)",
    },
    color: {
      field: "Origin",
      type: "nominal",
      title: "Origin",
    },
    size: {
      field: "Cylinders",
      type: "quantitative",
    },
  },
  width: 400,
  height: 200,
};

vegaEmbed("#VegaLite-T3", vlSpec);
