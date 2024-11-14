import { getCarData } from "../data/index.js";
const carData = await getCarData();
const backgroundColors = ["#48bbb5", "#fd8f48", "#fb4e7a"];

// Your code start here

const USACars = carData.filter((car) => car.Origin === "USA");
const JapanCars = carData.filter((car) => car.Origin === "Japan");
const EuropeCars = carData.filter((car) => car.Origin === "Europe");

const dataOri = {
  datasets: [
    {
      data: carData.map((car) => ({
        x: car.Horsepower,
        y: car.Miles_per_Gallon,
      })),
      borderColor: backgroundColors[0],
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  ],
};

const dataRes = {
  datasets: [
    {
      label: "USA",
      data: USACars.map((car) => ({
        x: car.Horsepower,
        y: car.Miles_per_Gallon,
      })),
      pointRadius: USACars.map((car) => car.Cylinders),
      borderColor: backgroundColors[0],
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    {
      label: "Japan",
      data: JapanCars.map((car) => ({
        x: car.Horsepower,
        y: car.Miles_per_Gallon,
      })),
      pointRadius: JapanCars.map((car) => car.Cylinders),
      borderColor: backgroundColors[1],
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    {
      label: "Europe",
      data: EuropeCars.map((car) => ({
        x: car.Horsepower,
        y: car.Miles_per_Gallon,
      })),
      pointRadius: EuropeCars.map((car) => car.Cylinders),
      borderColor: backgroundColors[2],
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  ],
};

const Config = {
  type: "scatter",
  // data: dataOri,
  data: dataRes,
  options: {
    // legend: {
    //   display: false,
    // },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Horsepower",
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Miles per Gallon (MPG)",
          },
        },
      ],
    },
  },
};

const ctx = document.getElementById("chartjs-T3");

new Chart(ctx, Config);
