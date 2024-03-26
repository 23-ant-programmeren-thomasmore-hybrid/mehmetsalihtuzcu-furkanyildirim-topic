"use client"
import AreaChart from '@/components/AreaChart';
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";


export default function Home() {
    return (
        <div style={{margin: 90}}>
            <div >
                <h1 style={{marginBottom: 30}}>Area Chart </h1>
                <AreaChart/>
            </div>

            <div style={{marginTop: 90}}>
                <h1 style={{marginBottom: 30}}>Bar Chart</h1>
                <BarChart/>
            </div>

            <div style={{marginTop: 90}}>
                <h1 style={{marginBottom: 30}}>Linear Chart</h1>
                <LineChart/>
            </div>
        </div>
    );
}