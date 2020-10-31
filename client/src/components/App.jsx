import React from 'react';
import Chart from 'chart.js';
import _ from 'underscore';

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
  
    const bitcoin = new Chart(context, {
      type: 'line',
      datasets: [{
        labels: dateLabels,
        data: dataValues,
      }]
      
    })
  }

  render() {
    return (
      <div>
        This is a dynamic react app
        <canvas id="bitcoin" width="500" height="500">
  
        </canvas>
      </div>
    )
  }
}

export default App;
