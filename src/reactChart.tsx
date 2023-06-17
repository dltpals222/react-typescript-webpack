import {ChartCanvas, Chart, CandlestickSeriesProps, XAxis, YAxis} from 'react-financial-charts'
import * as React from 'react'

const financialChart = () => {
  interface stockDate {
    no : number,
    open : number,
    high : number,
    low : number,
    close : number,
    volume : number,
    day : Date,
  }

  const [chartDate, setChartDate] = React.useState<stockDate[]>([])
  
  return (
    <>
      <h1>파이낸셜 차트</h1>
      <ChartCanvas data={chartDate} width={800} height={400} ratio={1} seriesName={''} xScale={scaleTime} >
        <Chart id={1} yExtents={(d)=>[d.high, d.low]}>

        </Chart>
      </ChartCanvas>
    </>
  )
}