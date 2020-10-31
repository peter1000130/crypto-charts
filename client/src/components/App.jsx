import React from 'react';
import Chart from 'chart.js';
import _ from 'underscore';
import { GraphCanvas } from './StyledComponents.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state= {};
  } 

  componentDidMount() {
    const { data } = this.props;
    const { bpi } = data;
  
    const context = document.getElementById('bitcoin');

    const dateLabels = [];
    const dataValues = [];

    _.each(bpi, (value, key) => {
      dateLabels.push(key);
      dataValues.push(value)
    })

    console.log(dateLabels)
  
    const bitcoin = new Chart(context, {
      type: 'line',
      data: {
        labels: dateLabels,
        datasets: [{
          label: "Bitcoin Price (USD)",
          labels: dateLabels,
          data: dataValues,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
        }]
      }
      
    })
  }

  render() {
    return (
      <div>
        <h1>
          Bitcoin Pricing Index
        </h1>
        <GraphCanvas id="bitcoin" width="300px" height="300px">
        </GraphCanvas>
        powered by CoinDesk
      </div>
    )
  }
}

export default App;
