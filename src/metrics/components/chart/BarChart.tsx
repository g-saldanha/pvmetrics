import React, { Suspense } from 'react';
import { Chart } from 'primereact/chart';

interface BarchartProps {
    now: number[];
    last: number[];
    labels: string[];
    totais: Metrics.Totais;
    year: any;
}

export default function BarChart(props: Readonly<BarchartProps>) {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    const data = {
        labels: props.labels,
        datasets: [
            {
                label: props.year.code - 1,
                backgroundColor: 'grey',
                borderColor: 'grey',
                data: props.last
            },
            {
                label: props.year.code,
                backgroundColor: 'black',
                borderColor: 'black',
                data: props.now
            }
        ]
    };
    const options = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                title: {
                    display: true,
                    text: `Média por culto ${Math.round(props.totais.total / props.totais.cultos)}`
                },
                labels: {
                    fontColor: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
    // @ts-ignore
    return (
        <Suspense>
            <div className="card">
                <Chart type="bar" data={data} options={options} />
            </div>
        </Suspense>
    );
}
