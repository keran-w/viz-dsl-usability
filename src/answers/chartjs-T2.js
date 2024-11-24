import { getCarData } from "../data/index.js";

const ctx = document.getElementById('chartjs-T2');
const carData = await getCarData();
const colors = ["#48bbb5", "#fd8f48", "#fb4e7a"];

const originCount = carData.reduce((acc, car) => {
    acc[car.Origin] = (acc[car.Origin] || 0) + 1;
    return acc;
}, {});

const labels = Object.keys(originCount);
const dataValues = Object.values(originCount);

const config = {
    type: "pie",
    data: {
        labels: labels,
        datasets: [
            {
                data: dataValues,
                backgroundColor: colors,
            },
        ],
    },
};

new Chart(ctx, config);
