import React from 'react';

import './form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      request: {},
    };
  }
  
  handleSubmit = async e => {
    e.preventDefault();

    if ( this.state.url && this.state.method ) {

      // Make an object that would be suitable for superagent
      let request = {
        url: this.state.url,
        method: this.state.method,
      };
      e.target.reset();
      try {
        const raw = await fetch(this.state.url,{
          method: "GET",
          body: JSON.stringify(),
          headers: {
            "Content-Type": "application/json"
          }});
        console.log(raw.headers);
        const data = await raw.json();
        console.log(data);
        // reduce((acc,cur)=>{},initValue)
       
        // we want to send the results up to the App component
        this.props.handler(data);
      } catch (e) {
        console.log('error in fetch',e);
      }
      // Clear old settings
      let url = '';
      let method = '';

      this.setState({request, url, method});
      

    }

    else {
      alert('missing information');
    }
  }

  handleChangeURL = e => {
    const url = e.target.value;
    this.setState({url});
  };

  handleChangeMethod = e => {
    const method = e.target.id;
    this.setState({ method });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={this.handleChangeURL} />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span className={this.state.method === 'get' ? 'active' : ''} id="get" onClick={this.handleChangeMethod}>GET</span>
            <span className={this.state.method === 'post' ? 'active' : ''} id="post" onClick={this.handleChangeMethod}>POST</span>
            <span className={this.state.method === 'put' ? 'active' : ''} id="put" onClick={this.handleChangeMethod}>PUT</span>
            <span className={this.state.method === 'delete' ? 'active' : ''} id="delete" onClick={this.handleChangeMethod}>DELETE</span>
          </label>
        </form>
        <section className="results">
          <span className="method">{this.state.request.method}</span>
          <span className="url">{this.state.request.url}</span>
        </section>
      </>
    );
  }
}

export default Form;
