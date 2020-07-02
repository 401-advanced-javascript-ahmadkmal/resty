import React from 'react';



// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...

import Form from '../form/form.js';
import Results from  '../results/results';
import HomeHistory from '../homeHistory'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      count: 0,
      selectedId:''
    };
  }
  handleForm = (results) => {
    // this will be called from the Form component on Submit
    console.log('hi from app', results);
    console.log('hi from app======>e', results.e);
    this.setState({results: results.e||{Header:results.header,count:results.data.count,results: results.data}  });
  };
  handleHistory = (selectedId) => {
    console.log(' home click on rest api ----->',selectedId);
    this.setState({selectedId})
  }
  render() {
    return (
      <React.Fragment>
        
        <Form handler={this.handleForm} selectedId={this.state.selectedId}/>
        <Results results={this.state.results}/>
        <HomeHistory handler={this.handleHistory} />
        
      </React.Fragment>
    );
  }
}

export default App;
