import React from 'react';
import "./Home.css"
import Feature from '../../components/feature/Feature';
import Chart from '../../components/chart/Chart';
import {xAxisData} from '../../datas'
import WidgetSm from '../../components/widgetSm/widgetSm';
import WidgetLg from '../../components/WidgetLg/WidgetLg';
export default function Home() {
  return (
    <div className="home">
            <Feature/>
            <Chart  title='فروش ماهانه' grid data={xAxisData} dataKey="sale" />
            <div className='homeWidgets'>
              <WidgetSm/>
              {/* <WidgetLg/> */}
            </div>
    </div>
  )
}
