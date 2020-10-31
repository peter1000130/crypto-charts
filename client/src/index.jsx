import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import axios from 'axios';


const init = async function initializeApp() {
  const initialData = await axios.get('http://127.0.0.1:3000/bitcoin');
  console.log(initialData.data.bpi);

  ReactDOM.render(<App data={initialData.data}/>, document.getElementById('app'))
}

init();
