import React from 'react';
import { Chart } from 'react-charts';

const data = [
    {
        label: '2023 Sales',
        data: [
            { primary: new Date('2023-01-01'), secondary: 500 },
            { primary: new Date('2023-02-01'), secondary: 1200 },
            { primary: new Date('2023-03-01'), secondary: 100 },
            { primary: new Date('2023-04-01'), secondary: 1100 },
            { primary: new Date('2023-05-01'), secondary: 1500 },
            { primary: new Date('2023-06-01'), secondary: 2000 },
            { primary: new Date('2023-07-01'), secondary: 1600 },
            { primary: new Date('2023-08-01'), secondary: 1200 },
            { primary: new Date('2023-09-01'), secondary: 900 },
            { primary: new Date('2023-10-01'), secondary: 2500 },
            { primary: new Date('2023-11-01'), secondary: 1000 },
            { primary: new Date('2023-12-01'), secondary: 2900 },
        ],
    },
    {
        label: '2023 Purchases',
        data: [
            { primary: new Date('2023-01-01'), secondary: 1200 },
            { primary: new Date('2023-02-01'), secondary: 2200 },
            { primary: new Date('2023-03-01'), secondary: 1400 },
            { primary: new Date('2023-04-01'), secondary: 1100 },
            { primary: new Date('2023-05-01'), secondary: 1500 },
            { primary: new Date('2023-06-01'), secondary: 1000 },
            { primary: new Date('2023-07-01'), secondary: 1900 },
            { primary: new Date('2023-08-01'), secondary: 2900 },
            { primary: new Date('2023-09-01'), secondary: 1300 },
            { primary: new Date('2023-10-01'), secondary: 1000 },
            { primary: new Date('2023-11-01'), secondary: 2400 },
            { primary: new Date('2023-12-01'), secondary: 200 },
        ],
    },
    {
        label: '2022 Purchases',
        data: [
            { primary: new Date('2023-01-01'), secondary: 1200 },
            { primary: new Date('2023-02-01'), secondary: 200 },
            { primary: new Date('2023-03-01'), secondary: 1400 },
            { primary: new Date('2023-04-01'), secondary: 300 },
            { primary: new Date('2023-05-01'), secondary: 1600 },
            { primary: new Date('2023-06-01'), secondary: 1100 },
            { primary: new Date('2023-07-01'), secondary: 1600 },
            { primary: new Date('2023-08-01'), secondary: 2800 },
            { primary: new Date('2023-09-01'), secondary: 1900 },
            { primary: new Date('2023-10-01'), secondary: 1100 },
            { primary: new Date('2023-11-01'), secondary: 200 },
            { primary: new Date('2023-12-01'), secondary: 2000 },
        ],
    },
    {
        label: '2022 Sales',
        data: [
            { primary: new Date('2023-01-01'), secondary: 100 },
            { primary: new Date('2023-02-01'), secondary: 2000 },
            { primary: new Date('2023-03-01'), secondary: 1400 },
            { primary: new Date('2023-04-01'), secondary: 3000 },
            { primary: new Date('2023-05-01'), secondary: 190 },
            { primary: new Date('2023-06-01'), secondary: 1200 },
            { primary: new Date('2023-07-01'), secondary: 1900 },
            { primary: new Date('2023-08-01'), secondary: 200 },
            { primary: new Date('2023-09-01'), secondary: 1000 },
            { primary: new Date('2023-10-01'), secondary: 500 },
            { primary: new Date('2023-11-01'), secondary: 1800 },
            { primary: new Date('2023-12-01'), secondary: 2000 },
        ],
    },
];

const primaryAxis = {
    getValue: datum => datum.primary,
    scaleType: 'time',
    formatters: {
        scale: (value) => {
            const date = new Date(value);
            return `${date.getMonth() + 1}/${date.getFullYear()}`}
    },
};

const secondaryAxes = [
    { getValue: datum => datum.secondary, elementType: 'line' },
];

export default function BarChart() {
    return (
        <div style={{ width: '600px', height: '400px' }}>
            <Chart options={{
                data,
                primaryAxis,
                secondaryAxes,
            }} />
        </div>
    );
}