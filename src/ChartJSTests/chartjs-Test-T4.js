import { getCarData } from "../data/index.js";

const ctx = document.getElementById('chartjs-T4');
const carData = await getCarData();

/* color palette */
const colors = ["#48bbb5", "#fd8f48", "#fb4e7a"];

// Process the data to group by year and calculate averages
const yearData = {};
carData.forEach(car => {
    const year = new Date(car.Year).getFullYear();
    if (!yearData[year]) {
        yearData[year] = {
            totalMilesPerGallon: 0,
            totalHorsepower: 0,
            count: 0
        };
    }
    yearData[year].totalMilesPerGallon += car.Miles_per_Gallon || 0;
    yearData[year].totalHorsepower += car.Horsepower || 0;
    yearData[year].count += 1;
});

// Prepare data for the chart
const years = Object.keys(yearData).sort((a, b) => a - b);
const avgMilesPerGallon = years.map(year => yearData[year].totalMilesPerGallon / yearData[year].count);
const avgHorsepower = years.map(year => yearData[year].totalHorsepower / yearData[year].count);

// Chart.js configuration
const config = {
    type: "line",
    data: {
        labels: years,
        datasets: [
            {
                label: "Average Miles per Gallon",
                data: avgMilesPerGallon,
                borderColor: colors[0],
                backgroundColor: colors[0],
                fill: false
            },
            {
                label: "Average Horsepower",
                data: avgHorsepower,
                borderColor: colors[1],
                backgroundColor: colors[1],
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Temporal Dynamics of Car Data'
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Year'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Value'
                }
            }
        }
    }
};

new Chart(ctx, config);
