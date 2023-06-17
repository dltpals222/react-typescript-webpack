import {ChartCanvas, Chart, XAxis, YAxis, CandlestickSeries} from 'react-financial-charts'
import * as React from 'react'
import {scaleTime} from "d3-scale"

const FinancialChart = () => {
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
  React.useEffect(() => {
    fetch('/api/chart')
    .then(response => response.json())
    .then(result => {
      console.log("fetch에서 받아온 정보",result)
      setChartDate(result)
    })
  },[])

  return (
    <>
      <h1>파이낸셜 차트</h1>
      <ChartCanvas data={chartDate} width={800} height={400} ratio={1} seriesName={'삼성차트'} xScale={scaleTime() } xAccessor={d => d.date} >
        <Chart id={1} yExtents={(d)=>[d.high, d.low]}>
          <XAxis />
          <YAxis />
          <CandlestickSeries />
        </Chart>
      </ChartCanvas>
    </>
  )
}

export default FinancialChart;