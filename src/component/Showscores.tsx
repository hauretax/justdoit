import React from "react";
import { Line } from "react-chartjs-2";
import { arrayObjectToData } from "../utils/chartJsHandler";
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

Chart.register(CategoryScale);

type AppProps = {
  scores: any;
}


interface Score {
  date: string;
  time: number;
}

type key1 = 'date'
type key2 = 'time'



export default function ShowScores({ scores }: AppProps): JSX.Element {
  if (!scores)
    return (<></>)
  return (
    <>
      <Line data={arrayObjectToData(scores, 'date', 'time')} />
      {/* <ul>
        {scores.map((score: any) => <li key={score.date} > {test(score.date)} | {score.time} </li>)}
      </ul> */}
    </>
  );
}

export type { Score, key1, key2 }