import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';

//fetch the data from the api
import axios from 'axios';
import config from './config';


const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`)
    .then((resp) => {
      return {
        initialMarkup: ReactDOMServer.renderToString(<App initialContests={resp.data.contests}/>),
        initialData: resp.data
      };
    })
    .catch(function (error) {
      console.log(error);
    });

export default serverRender;
