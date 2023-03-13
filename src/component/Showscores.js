import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

let data = {
    labels: labels,
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
        },
    ],
};

export default function ShowScores({ scores }) {


    //to do : find a name 
    function test(timestamp) {
        const date = new Date(timestamp)
        return (date.getMonth() + 1) + '/' + date.getDay() + '/' + date.getHours() + ':' + date.getMinutes()
    }
    data.datasets[0].data = scores.time
    return (<>


        <Line data={data} />
        <ul>
            {scores.map((score) => <li key={score.date}>{test(score.date)} | {score.time}</li>)}
        </ul>
    </>
    )
}