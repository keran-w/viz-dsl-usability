import { getCarData } from "../data/index.js";

const ctx = document.getElementById('chartjs-T4');
const carData = await getCarData();

/**
 * Task 4: Explore the temporal dynamics!
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

 * You are free to choose what type of visualization you want to create, and the style you want to present your insight.
 * However, your exploration should follow the following constraints:
    - You should use the Year field to explore the temporal dynamics of the dataset.
    - You should use at least 2 different variables and show how it changes over time.

 * You can use the following references to help you:
    - https://www.chartjs.org/docs/latest/charts/

 * While doing the task, please think aloud about your actions and the reasons behind them. We will not be interfering with your work, 
   but we will provide necessary assistance if your question is not related to the task.
 */

/* color palette */
const colors = ["#48bbb5", "#fd8f48", "#fb4e7a"];

/* Your code modification starts here ... */
const config = {
    type: "",
    data: {},
    options: {},
};
/* Your code modification ends here ... */

new Chart(ctx, config);
