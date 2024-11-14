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
  type: "pie",
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
  options: {},
};

const ctx = document.getElementById("chartjs-T2");

new Chart(ctx, Config);
