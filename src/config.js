import { getCarData } from "./data/index.js";

/**
 * Example car data:
    [
        {
            "Name":"chevrolet chevelle malibu",
            "Miles_per_Gallon":18,
            "Cylinders":8,
            "Displacement":307,
            "Horsepower":130,
            "Weight_in_lbs":3504,
            "Acceleration":12,
            "Year":"1970-01-01",
            "Origin":"USA"
        },
        ...
    ]
*/

const carData = await getCarData();
const originCount = carData.reduce((acc, car) => {
    acc[car.Origin] = (acc[car.Origin] || 0) + 1;
    return acc;
}, {});

const labels = Object.keys(originCount);
const dataValues = Object.values(originCount);

const backgroundColors = ["#48bbb5", "#fd8f48", "#fb4e7a"];

const taskTwoConfig = {
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
                        labelString: "Origin",
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

const taskOneConfig = JSON.parse(JSON.stringify(taskTwoConfig));
taskOneConfig.type = "pie";
taskOneConfig.options = {};


const USACars = carData.filter(car => car.Origin === "USA");
const JapanCars = carData.filter(car => car.Origin === "Japan");
const EuropeCars = carData.filter(car => car.Origin === "Europe");

const dataOri = {
    datasets: [
        {
            data: carData.map(car => ({
                x: car.Horsepower,
                y: car.Miles_per_Gallon,
            })),
            borderColor: backgroundColors[0],
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }
    ],
};

const dataRes = {
    datasets: [
        {
            label: 'USA',
            data: USACars.map(car => ({
                x: car.Horsepower,
                y: car.Miles_per_Gallon,
            })),
            pointRadius: USACars.map(car => car.Cylinders),
            borderColor: backgroundColors[0],
            backgroundColor: 'rgba(0, 0, 0, 0)'
        },
        {
            label: 'Japan',
            data: JapanCars.map(car => ({
                x: car.Horsepower,
                y: car.Miles_per_Gallon,
            })),
            pointRadius: JapanCars.map(car => car.Cylinders),
            borderColor: backgroundColors[1],
            backgroundColor: 'rgba(0, 0, 0, 0)'
        },
        {
            label: 'Europe',
            data: EuropeCars.map(car => ({
                x: car.Horsepower,
                y: car.Miles_per_Gallon,
            })),
            pointRadius: EuropeCars.map(car => car.Cylinders),
            borderColor: backgroundColors[2],
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }
    ]
};

const taskThreeConfig = {
    type: 'scatter',
    data: dataOri,
    // data: dataRes,
    options: {
        legend: {
            display: false,
        },
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
    }
};


export default taskThreeConfig;
export { taskOneConfig, taskTwoConfig, taskThreeConfig };
