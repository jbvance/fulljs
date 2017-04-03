import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import axios from 'axios'

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: []
  };

  componentDidMount(){
    let contests = {};
    //Get data from api via Ajax
    axios.get('/api/contests')
    .then((resp) => {
      this.setState({
        contests: resp.data.contests
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }

  componentWillUnmount(){

  }

  render () {
    return (
      <div className="App">
        <Header message={ this.state.pageHeader} />
        <div>
          {this.state.contests.map((contest) =>
              <ContestPreview key={contest.id} contest={contest} />
          )}

        </div>
      </div>
    );
  }
}

export default App;
