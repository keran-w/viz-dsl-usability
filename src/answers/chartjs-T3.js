import { getCarData } from "../data/index.js";

const ctx = document.getElementById('chartjs-T3');
const carData = await getCarData();
const colors = ["#48bbb5", "#fd8f48", "#fb4e7a"];

const USACars = carData.filter((car) => car.Origin === "USA");
const JapanCars = carData.filter((car) => car.Origin === "Japan");
const EuropeCars = carData.filter((car) => car.Origin === "Europe");

const dataRes = {
    datasets: [
        {
            label: "USA",
            data: USACars.map((car) => ({
                x: car.Horsepower,
                y: car.Miles_per_Gallon,
            })),
            pointRadius: USACars.map((car) => car.Cylinders),
            borderColor: colors[0],
            backgroundColor: "rgba(0, 0, 0, 0)",
        },
        {
            label: "Japan",
            data: JapanCars.map((car) => ({
                x: car.Horsepower,
                y: car.Miles_per_Gallon,
            })),
            pointRadius: JapanCars.map((car) => car.Cylinders),
            borderColor: colors[1],
            backgroundColor: "rgba(0, 0, 0, 0)",
        },
        {
            label: "Europe",
            data: EuropeCars.map((car) => ({
                x: car.Horsepower,
                y: car.Miles_per_Gallon,
            })),
            pointRadius: EuropeCars.map((car) => car.Cylinders),
            borderColor: colors[2],
            backgroundColor: "rgba(0, 0, 0, 0)",
        },
    ],
};

const config = {
    type: "scatter",
    data: dataRes,
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Horsepower",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Miles per Gallon (MPG)",
                },
            },

        },
    },
};

new Chart(ctx, config);
