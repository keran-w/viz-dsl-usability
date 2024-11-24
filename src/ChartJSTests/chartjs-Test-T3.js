import { getCarData } from "../data/index.js";

const ctx = document.getElementById('chartjs-T3');
const carData = await getCarData();

/**
 * Task 3: Create a more expressive chart
 * Please be advised for all tasks, we will be using the latest version of Chart.js (4.4.6)
 * 
 * You will still be working the Cars dataset. The specification of Cars is as follows:
   {
      "Name":"ford ranger",
      "Miles_per_Gallon":28,
      "Cylinders":4,
      "Displacement":120,
      "Horsepower":79,
      "Weight_in_lbs":2625,
      "Acceleration":18.6,
      "Year":"1982-01-01",
      "Origin":"USA"
   }, ...

 * For the third task, you should modify a current chart that have the exact specification as the following:
 * https://drive.google.com/file/d/1q4Bvme59hzIY1cBGJHw5pAePeCTxs7tW (bottom-left chart)
    - Show categorization of cars by origin
    - Show the number of cylinders with the sizes of points
    - Show points using empty circles with different colors from color palette (Optional)
 
 * You can use the following references to help you.:
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    - https://www.chartjs.org/docs/latest/charts/scatter.html
    - https://www.chartjs.org/docs/latest/configuration/elements.html

 * While doing the task, please think aloud about your actions and the reasons behind them. We will not be interfering with your work, 
   but we will provide necessary assistance if your question is not related to the task.
 */

/* color palette */
const colors = ["#48bbb5", "#fd8f48", "#fb4e7a"];


/* Your code modification starts here ... */
const dataRes = {
    datasets: [
        {
            label: "All cars",
            data: carData.map((car) => ({
                x: car.Horsepower,
                y: car.Miles_per_Gallon,
            })),
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
/* Your code modification ends here ... */

new Chart(ctx, config);
