import React from 'react';
import './forms.scss';
var method = 'get'
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { words: '',url: '',method:'' };
  }
  handleChange = (e) => {
    const url = e.target.value;
    // you are NOT ALLOWED TO CHANGE THE STATE DIRECTLY
    // this.state.words = '';
    // this.setState = update the state + fire the render method
    console.log(e.target.value);
    this.setState({ url });
  };
  handleClick = (e) => {
    const words = this.state.url;
    this.setState({ words ,method});
  };
  handleMethod = (e) =>{
     method = e.target.value;
    console.log("method from select",method,e.target.value);
   
  }

  render() {
    return (
      <main className="main">
        <div>
          <p>URL :</p>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Go</button>
        </div>
        <form onClick={this.handleMethod}>
          <input type="radio" id="get" name="method" value="get" defaultChecked/>
          <label htmlFor="get">Get</label>
          <input type="radio" id="post" name="method" value="post"/>
          <label htmlFor="post">Post</label>
          <input type="radio" id="put" name="method" value="put"/>
          <label htmlFor="put">Put</label>
          
          <input type="radio" id="delete" name="method" value="delete"/>
          <label htmlFor="delete">Delete</label>
        </form>
        <div id="result">
        <p>{this.state.method} {this.state.words}</p>
        </div>
      </main>
    );
  }
}
export default Main;