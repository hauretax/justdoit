import { ChartData } from "chart.js";
import { Score, key1 as k1SSc, key2 as K2SSc } from "../component/Showscores";

// to do : trouver solution pour liee les types sans doute avec des T
type arrObj = Array<Score>;
type key1 = k1SSc
type key2 = K2SSc

function arrayObjectToData(Arrobj: arrObj, key1: key1, key2: key2): ChartData<'line'> {


    let data: ChartData<'line'> = {
        labels: Arrobj.map((el) => {
            const date = new Date(el[key1])
            return date.getHours() + ':' + date.getMinutes() + '  ' + date.getDay() + '/' + (date.getMonth() + 1)
        }),
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: Arrobj.map(el => el[key2]),
                tension: 0.5
            },
        ],
    }
    return data
}


export { arrayObjectToData }