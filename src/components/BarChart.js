import React from 'react';
import { Chart } from 'react-charts';

const data = [
    {
        label: '2023 Sales',
        data: [
            { primary: 0, secondary: 500 },
            { primary: 1, secondary: 1200 },
            { primary: 2, secondary: 700 },
            { primary: 3, secondary: 800 },
            { primary: 4, secondary: 100 },
            { primary: 5, secondary: 2000 },
            { primary: 6, secondary: 1500 },
            { primary: 7, secondary: 2500 },
            { primary: 8, secondary: 1900 },
            { primary: 9, secondary: 200 },
            { primary: 10, secondary: 2400 },
            { primary: 11, secondary: 290 },
        ],

    },
    {
        label: '2023 Purchases',
        data: [
            {primary: 0, secondary: 300},
            {primary: 1, secondary: 800},
            {primary: 2, secondary: 600},
            {primary: 3, secondary: 700},
            {primary: 4, secondary: 1000},
            {primary: 5, secondary: 150},
            {primary: 6, secondary: 1200},
            {primary: 7, secondary: 2000},
            {primary: 8, secondary: 1700},
            {primary: 9, secondary: 1800},
            {primary: 10, secondary: 2000},
            {primary: 11, secondary: 2500},
        ],
    },
];

const primaryAxis = {
    getValue: datum => datum.primary,
    scaleType: 'band',
    formatters: {
        scale: value => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][value],
    },
};

const secondaryAxes = [
    { getValue: datum => datum.secondary, elementType: 'bar' },
];

export default function BarChart() {
    return (
        <div style={{ width: '600px', height: '400px',backgroundColor:'#333' }}>
            <Chart options={{
                data,
                primaryAxis,
                secondaryAxes,
                dark : true,
            }} />
        </div>
    );
}