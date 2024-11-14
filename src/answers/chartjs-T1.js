import { getCarData } from "../data/index.js";
const carData = await getCarData();
const backgroundColors = ["#48bbb5", "#fd8f48", "#fb4e7a"];

// Your code start here
const originCount = carData.reduce((acc, car) => {
  acc[car.Origin] = (acc[car.Origin] || 0) + 1;
  return acc;
}, {});

const labels = Object.keys(originCount);
const dataValues = Object.values(originCount);

const Config = {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Number of Cars",
        data: dataValues,
        backgroundColor: backgroundColors,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Country of Origin",
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Number of Cars",
          },
        },
      ],
    },
  },
};

const ctx = document.getElementById("chartjs-T1");

new Chart(ctx, Config);
