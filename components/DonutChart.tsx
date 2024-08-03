"use client"
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJS , ArcElement , Tooltip , Legend} from "chart.js";

ChartJS.register(ArcElement,Tooltip,Legend)
// here trying the data for the graph
const DonutChart = ({accounts}:DoughnutChartProps) => {
    const data = {
        datasets:[{
            label:'Banks',
            data:[1257,546,6969],
            backgroundColor : ['#FFC100','#FF8A08','#C40C0C']
        }],
        labels:['Bank1','Bank2','Bank3']

    }
  return (
    <Doughnut
    options={
        {
            cutout:'60%',
            plugins:{
                legend:{
                    display:false
            }
        }
    }}
    data={data} />
  )
}

export default DonutChart