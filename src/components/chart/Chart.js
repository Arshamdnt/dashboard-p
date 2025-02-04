import React from 'react';
import "./Chart.css"
import {ResponsiveContainer,LineChart,Line,XAxis,CartesianGrid,Tooltip} from 'recharts'
import { useSelector } from 'react-redux';
const Chart = ({title,data,dataKey,grid}) => {

    const isDark = useSelector((state)=>state.theme.isDark)
    return (
        <div className={isDark ? 'dark-mode chart' : 'chart'}>
            <h3 className='chartTitle'>{title}</h3>
            <ResponsiveContainer width='100%' aspect={4}>
                <LineChart data={data}>
                    <XAxis  dataKey='name' stroke={isDark ? "rgb(255, 255, 255)" : "#5550bd"}/>
                    <Line type='monotone' dataKey={dataKey} stroke={isDark ? "rgb(217, 234, 125)" : "#5550bd"}/>
                    <Tooltip/>
                    {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='10'/>}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;
