import React from 'react';
import getCasesFromCountry from '../util/CovidService';
import CovidChart from './CovidChart';


class CovidResult extends React.Component {

  constructor (props) {
      super(props);
      this.state = { chartdata: [] };
  }

  formatDate(date) {
    let dateFormatted = new Date(date);
    return dateFormatted.toLocaleDateString('en-US');
  }

  componentDidMount() {
    getCasesFromCountry(this.props.country).then(succ => {
      let v = succ.data.map(entry => {
        return {
          name: this.formatDate(entry.Date), active: entry.Active 
        }
      })

      this.setState( {chartdata: v })
    }).catch(err => console.log(err));
  }

  render () {
    let chartValue;
    if (this.state.chartdata.length <= 0) {
      chartValue = <React.Fragment/>
    } else {
      chartValue = <CovidChart data={this.state.chartdata}/>
    }

    return (
      <div>
        <h1>covid19-cases for country <i>{ this.props.country }</i></h1>
        { chartValue }
      </div>
    )

  }
}

export default CovidResult