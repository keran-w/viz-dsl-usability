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
  mark: "arc",
  transform: [
    {
      aggregate: [
        {
          op: "count",
          field: "Origin",
          as: "totalOccurances",
        },
      ],
      groupby: ["Origin"],
    },
  ],
  encoding: {
    theta: {
      field: "totalOccurances",
      type: "quantitative",
    },
    color: {
      field: "Origin",
      type: "nominal",
    },
  },
  width: 200,
  height: 200,
};

vegaEmbed("#VegaLite-T2", vlSpec);
