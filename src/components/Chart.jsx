import React from 'react';
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'


const Chart = ({PriceHistoryData, Coin}) => {
    
    const TimeStamps = []
    const PriceHistory = []

    for (let i=0; i<PriceHistoryData.length; i++){
        PriceHistory.push(PriceHistoryData[i].price)
    }

    for (let i=0; i < PriceHistoryData.length; i++){
            TimeStamps.push(new Date((PriceHistoryData[i].timestamp) * 1000).toLocaleDateString())              
    }

    const myData = {
        labels: TimeStamps.reverse(),
        datasets:[
            {
                label: `${Coin.name}`,
                data: PriceHistory,
                backgroundColor: '#1e9b67',
                borderColor: '#1e9b67',
                borderWidth: 2,
                
            }
        ]
    }

    const options = {
        legend:{
            reverse: false
        },  
        scales: {
            yAxes: [
                {
                ticks: {
                    beginAtZero: true,
                },
                },
            ],
            xAxes: [
                {
                ticks: {
                    reverse: true,
                    position: 'left'
                },
                },
            ],
            },
            responsive: true,
            radius: .1
        };


    

    return (
        <div>
            <Line data={myData} options={options}/>
        </div>
    )
}

export default Chart;
