import React from 'react';
var faker = require('faker');
import './form.scss';
import { If, Then, Else } from '../if';
class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: 'get',
      request: {},
      active: false,
      body: ''
    };
    
  }
  componentWillReceiveProps(nextProps) {
    // if you want to do anything when the component update
    console.log('this.props.selectedId',this.props.selectedId)
    if(this.props.selectedId){
     
        let oldHistory = JSON.parse(localStorage.getItem('history'));
        console.log('oldHistory------------->',oldHistory)
        this.setState({ url:oldHistory[this.props.selectedId].url ,method:oldHistory[this.props.selectedId].method});
  }}
  activeModal = () => {
    switch (this.state.method) {
      case 'get':
        this.setState({ active: false });
        break;
      case 'delete':
        this.setState({ active: false });
        break;
      case 'put':
        this.setState({ active: true }); break;
      case 'post':
        this.setState({ active: true }); break;
      default:
        break;
    }


  };
  handleSubmit = async e => {
    e.preventDefault();

    if (this.state.url && this.state.method) {

      // Make an object that would be suitable for superagent
      let request = {
        url: this.state.url,
        method: this.state.method,
      };
      e.target.reset();
      try {
        const raw = await fetch(this.state.url, {
          method: this.state.method || 'GET',
          body: this.state.method == 'get' || this.state.method == 'delete' ? null : JSON.stringify(this.state.body),
          headers: {
            "Content-Type": "application/json"
          }
        });
        let header
        await raw.headers.forEach(value => {
          header = { 'Content-Type': value };
        });

        console.log(header);
        const data = await raw.json();
        console.log('from fetch ----->', data);
        // reduce((acc,cur)=>{},initValue)
        let oldHistory = JSON.parse(localStorage.getItem('history'))||{};
        console.log('old history----->',oldHistory);
        let id = await faker.random.uuid();
        console.log('id ----------->',id);
        oldHistory[id]={ method: this.state.method, url: this.state.url, header, result: data };
        // var local = await ({[id]:{ method: this.state.method, url: this.state.url, header, result: data }});
        console.log('local in form ----->',oldHistory)
        localStorage.setItem('history', JSON.stringify(oldHistory));
        // localStorage.setItem('myData', data);
        // // getter
        // localStorage.getItem('myData');
        // we want to send the results up to the App component
        this.props.handler({ data, header });
      } catch (e) {
        console.log('error in fetch----------->', e);
        
        this.props.handler({ e:e });
      }
      // Clear old settings
      let url = '';
      let method = '';

      this.setState({ request, url, method });


    }

    else {
      alert('missing information');
    }
  }

  handleChangeURL = e => {
    const url = e.target.value;
    this.setState({ url });

  };

  handleChangeMethod = async e => {
    const method = e.target.id;
    await this.setState({ method });
    this.activeModal();
  };
  handleChangeBody = e => {
    const body = e.target.value;
    this.setState({ body });

  };
  
  render() {
    
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={this.handleChangeURL} value={this.state.url}/>
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span className={this.state.method === 'get' ? 'active' : ''} id="get" onClick={this.handleChangeMethod}>GET</span>
            <span className={this.state.method === 'post' ? 'active' : ''} id="post" onClick={this.handleChangeMethod}>POST</span>
            <span className={this.state.method === 'put' ? 'active' : ''} id="put" onClick={this.handleChangeMethod}>PUT</span>
            <span className={this.state.method === 'delete' ? 'active' : ''} id="delete" onClick={this.handleChangeMethod}>DELETE</span>
          </label>
        </form>
        <If condition={this.state.active}>
          <Then>
            <div id="body"><textarea placeholder="Raw JSON Body" name="requestBody" spellCheck="false" onChange={this.handleChangeBody} >{this.state.body}</textarea></div>
          </Then>
          <Else>
            <div id="body"><textarea placeholder="Raw JSON Body" name="requestBody" spellCheck="false" disabled>{this.state.body}</textarea></div>
          </Else>
        </If>

        <section className="results">
          <span className="method">{this.state.request.method}</span>
          <span className="url">{this.state.request.url}</span>
        </section>
      </>
    );
  }
}

export default Form;
