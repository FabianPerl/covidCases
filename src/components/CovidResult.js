import React from 'react';
import getCasesFromCountry from '../util/CovidService';
import getPrognoseFromCountry from '../util/AzureService';
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

      let allValues = v.length;
      let day3 = v[allValues-3].active;
      let day2 = v[allValues-2].active;
      let day1 = v[allValues-1].active;

      getPrognoseFromCountry(day3, day2, day1).then(succ => {
        this.setState ( { prognose: succ.data })
      }).catch(error => {
        console.log(error.message)
      })
    }).catch(err => {
        this.setState( { error: err.message })
      }
    );
  }

  render () {
    let chartValue;
    if (this.state.error) {
      chartValue = <React.Fragment>ERROR {this.state.error}</React.Fragment>
    } else {
      chartValue = <CovidChart data={this.state.chartdata}/>
    }

    let prognose;
    if (this.state.prognose) {
      prognose = <React.Fragment>PROGNOSE: {this.state.prognose} new cases tomorrow</React.Fragment>
    } else {
      prognose = <React.Fragment/>
    }

    return (
      <div>
        <h1>covid19-cases for country <i>{ this.props.country }</i></h1>
        { chartValue }
        { prognose }
      </div>
    )

  }
}

export default CovidResult