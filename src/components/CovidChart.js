import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class CustomizedYAxisTick extends PureComponent {
  render() {
    const {
      x, y, stroke, payload,
    } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} fontSize={15} textAnchor="end" fill="#666" >{payload.value}</text>
      </g>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const {
      x, y, stroke, payload,
    } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} fontSize={15} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
      </g>
    );
  }
}

export default function CovidChart (props) {
  return (
    <LineChart
      width={800}
      height={400}
      data={props.data}
      margin={{
        top: 10, right: 0, left: 10, bottom: 10,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" height={100} tick={<CustomizedAxisTick />}/>
      <YAxis tick={<CustomizedYAxisTick/>}/>
      <Tooltip />
      <Line connectNulls type="monotone" dataKey="active" stroke="#8884d8" fill="#8884d8" />
    </LineChart>
  )
}
