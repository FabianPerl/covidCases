import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

class CustomizedYAxisTick extends PureComponent {
  render() {
    const {
      x, y, payload,
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
      x, y, payload,
    } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} fontSize={15} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
      </g>
    );
  }
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Date: ${label}`}</p>
        <p className="label">{`Active Cases: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

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
      <Tooltip content={CustomTooltip}/>
      <Line connectNulls type="monotone" dataKey="active" stroke="#3399ff" fill="#3399ff" />
    </LineChart>
  )
}
