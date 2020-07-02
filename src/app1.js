import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form/form.js';
import Results from  './components/results/results'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      count: 0,
    };
  }
  handleForm = (results) => {
    // this will be called from the Form component on Submit
    console.log('hi from app', results);
    this.setState({results: {Header:results.header,results: results.data} ,count:results.count });
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form handler={this.handleForm}/>
        <Results results={this.state.results}/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
