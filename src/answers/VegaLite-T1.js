import { getCarData } from "../data/index.js";
const carData = await getCarData();

// Documentation Needed:
// https://vega.github.io/vega-lite/docs/aggregate.html
// https://vega.github.io/vega-lite/docs/mark.html
// https://vega.github.io/vega-lite/docs/encoding.html#position

// console.log(carData)
let vlSpec = {
  data: {
    // url: "src/data/cars.json",
    values: carData,
  },
  mark: "bar",
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
    x: { field: "Origin", type: "nominal", title: "Country of Origin"
     },
    y: { field: "totalOccurances", type: "quantitative", title: "Number of Cars" },
  },
  width: 400,
  height: 200,
};

vegaEmbed("#VegaLite-T1", vlSpec);
