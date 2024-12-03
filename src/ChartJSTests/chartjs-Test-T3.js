// import { getCarData } from "../data/index.js";

// const ctx = document.getElementById('chartjs-T3');
// const carData = await getCarData();

// /* Color palette for the groups */
// const colors = ["#48bbb5", "#fd8f48", "#fb4e7a"];

// /* Group data by origin */
// const groupedData = {
//     USA: carData.filter(car => car.Origin === "USA").map(car => ({
//         x: car.Horsepower,
//         y: car.Miles_per_Gallon,
//     })),
//     Japan: carData.filter(car => car.Origin === "Japan").map(car => ({
//         x: car.Horsepower,
//         y: car.Miles_per_Gallon,
//     })),
//     Europe: carData.filter(car => car.Origin === "Europe").map(car => ({
//         x: car.Horsepower,
//         y: car.Miles_per_Gallon,
//     })),
// };
// /* Configure datasets with labels and hollow circles */
// const dataRes = {
//     datasets: [
//         {
//             label: "USA",
//             data: groupedData.USA,
//             backgroundColor: "transparent", // Transparent fill color for hollow circles
//             borderColor: colors[0], // Border color
//             borderWidth: 1, // Thickness of the border
//             pointStyle: "circle", // Hollow circle
//             pointRadius: 5,
//             pointHoverRadius: 8,
//         },
//         {
//             label: "Japan",
//             data: groupedData.Japan,
//             backgroundColor: "transparent", // Transparent fill color for hollow circles
//             borderColor: colors[1], // Border color
//             borderWidth: 1, // Thickness of the border
//             pointStyle: "circle", // Hollow circle
//             pointRadius: 5,
//             pointHoverRadius: 8,
//         },
//         {
//             label: "Europe",
//             data: groupedData.Europe,
//             backgroundColor: "transparent", // Transparent fill color for hollow circles
//             borderColor: colors[2], // Border color
//             borderWidth: 1, // Thickness of the border
//             pointStyle: "circle", // Hollow circle
//             pointRadius: 5,
//             pointHoverRadius: 8,
//         },
//     ],
// };


// // /* Chart configuration */
// // const config = {
// //     type: "scatter",
// //     data: dataRes,
// //     options: {
// //         responsive: true,
// //         plugins: {
// //             legend: {
// //                 position: "top",
// //                 labels: {
// //                     usePointStyle: true,
// //                     padding: 20,
// //                 },
// //             },
// //             tooltip: {
// //                 callbacks: {
// //                     label: (context) => {
// //                         const { x, y } = context.raw;
// //                         return `Horsepower: ${x}, MPG: ${y}`;
// //                     },
// //                 },
// //             },
// //         },
// //         scales: {
// //             x: {
// //                 title: {
// //                     display: true,
// //                     text: "Horsepower",
// //                     font: {
// //                         size: 14,
// //                     },
// //                 },
// //             },
// //             y: {
// //                 title: {
// //                     display: true,
// //                     text: "Miles per Gallon (MPG)",
// //                     font: {
// //                         size: 14,
// //                     },
// //                 },
// //             },
// //         },
// //     },
// // };

// /* Chart configuration */
// const config = {
//     type: "scatter",
//     data: dataRes,
//     options: {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: "top",
//                 labels: {
//                     usePointStyle: false, // Use rectangle instead of point style
//                     boxWidth: 40, // Width of the rectangle
//                     boxHeight: 10, // Height of the rectangle
//                     padding: 20, // Spacing between legend items
//                 },
//             },
//             tooltip: {
//                 callbacks: {
//                     label: (context) => {
//                         const { x, y } = context.raw;
//                         return `Horsepower: ${x}, MPG: ${y}`;
//                     },
//                 },
//             },
//         },
//         scales: {
//             x: {
//                 title: {
//                     display: true,
//                     text: "Horsepower",
//                     font: {
//                         size: 14,
//                     },
//                 },
//             },
//             y: {
//                 title: {
//                     display: true,
//                     text: "Miles per Gallon (MPG)",
//                     font: {
//                         size: 14,
//                     },
//                 },
//             },
//         },
//     },
// };


// /* Render the chart */
// new Chart(ctx, config);


import { getCarData } from "../data/index.js";

const ctx = document.getElementById('chartjs-T3');
const carData = await getCarData();

/* color palette */
const colors = {
    USA: "#48bbb5",
    Japan: "#fd8f48",
    Europe: "#fb4e7a",
};

/* Your code modification starts here ... */
const dataRes = {
    datasets: [
        {
            label: "USA",
            data: carData
                .filter((car) => car.Origin === "USA")
                .map((car) => ({
                    x: car.Horsepower,
                    y: car.Miles_per_Gallon,
                    r: car.Cylinders * 1, // Scale point size with Cylinders
                })),
            backgroundColor: "transparent", // Empty circle
            borderColor: colors.USA,
            borderWidth: 1,
        },
        {
            label: "Japan",
            data: carData
                .filter((car) => car.Origin === "Japan")
                .map((car) => ({
                    x: car.Horsepower,
                    y: car.Miles_per_Gallon,
                    r: car.Cylinders * 1, // Scale point size with Cylinders
                })),
            backgroundColor: "transparent", // Empty circle
            borderColor: colors.Japan,
            borderWidth: 1,
        },
        {
            label: "Europe",
            data: carData
                .filter((car) => car.Origin === "Europe")
                .map((car) => ({
                    x: car.Horsepower,
                    y: car.Miles_per_Gallon,
                    r: car.Cylinders * 1, // Scale point size with Cylinders
                })),
            backgroundColor: "transparent", // Empty circle
            borderColor: colors.Europe,
            borderWidth: 1,
        },
    ],
};

const config = {
    type: "bubble", // Bubble chart for varying sizes
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
        plugins: {
            legend: {
                display: true,
                position: "top",
            },
        },
    },
};
/* Your code modification ends here ... */

new Chart(ctx, config);
