import React, { ReactNode, useState } from 'react'
import Loader from '../Loader/Loader'
import { Line } from "react-chartjs-2";

type GraphProps = {
    title: string
    userDataTokenName: string | undefined
    OCEANCol: number[] | undefined
    DTCol: number[] | undefined
}

export default function Graph({
    title,
    userDataTokenName,
    OCEANCol,
    DTCol
}: GraphProps) {
    const [loadingGraph, setLoadingGraph] = useState<boolean>(false)
    const [chartData, setChartData] = useState<any>()

    useEffect(() => {
        setLoadingGraph(true)
        setChartData({
            labels: OCEANCol,
            datasets: [
              {
                label: `AMM Curve for ${userDataTokenName}`,
                data: DTCol,
                backgroundColor: ["rgba(233, 124, 124, 0.5)"],
                borderColor: "rgb(93, 93, 93)",
                borderWidth: 4,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
              },
            ]
          });
        setLoadingGraph(false)
    }, [])

    return (
        <>
            {loadingGraph ? (
                <Loader message={"Loading your graph..."}/>
            ) : (
            <Line
              data={chartData}
              options={{
                responsive: true,
                title: { text: "unknown", display: false },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10,
                        beginAtZero: true
                      },
                      gridLines: {
                        display: true,
                      },
                      scaleLabel: {
                        display: true,
                        labelString: "Count",
                        fontColor: '#FFFFFF'
                      }
                    }
                  ],
                  xAxes: [
                    {
                      gridLines: {
                        display: true,
                      },
                      ticks: {
                        display: false,

                      },
                      scaleLabel: {
                        display: true,
                        labelString: `Time (YY-MM-DD)`,
                        fontColor: 'black',
                      },
                    }
                  ]
                },
                legend: {
                  labels: {
                    fontColor: 'black'
                  }
                }
              }}
              />
            )}
        </>
    )
}