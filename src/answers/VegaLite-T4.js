import { getCarData } from "../data/index.js";
const carData = await getCarData();

// Documentation Needed:
// https://vega.github.io/vega-lite/docs/mark.html

// console.log(carData)
let vlSpec = {
  data: {
    values: carData,
  },
  transform: [
    {
      aggregate: [
        {
          op: "average",
          field: "Miles_per_Gallon",
          as: "AverageMPG",
        },
        {
          op: "average",
          field: "Horsepower",
          as: "AverageHorsepower",
        },
      ],
      groupby: ["Origin", "Year"],
    },
  ],
  layer: [
    {
      mark: "line",
      encoding: {
        x: { field: "Year", type: "temporal", title: "Year" },
        y: {
          field: "AverageMPG",
          type: "quantitative",
          title: "Miles per Gallon (MPG)",
        },
        color: {
          field: "Origin",
          type: "nominal",
          title: "Origin",
        },
      },
    },
    {
      mark: "circle",
      encoding: {
        x: { field: "Year", type: "temporal", title: "Year" },
        y: {
          field: "AverageMPG",
          type: "quantitative",
          title: "Miles per Gallon (MPG)",
        },
        color: {
          field: "Origin",
          type: "nominal",
          title: "Origin",
        },
        fillOpacity: {
          field: "AverageHorsepower",
          type: "quantitative",
        },
        size: {
          field: "AverageHorsepower",
          type: "quantitative",
          title: "Average Horsepower",
        },
      },
    },
  ],

  width: 400,
  height: 200,
};

vegaEmbed("#VegaLite-T4", vlSpec);
