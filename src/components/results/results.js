import React from 'react';
import ReactJson from 'react-json-view';
// import './form.scss';
function People(props) {
    return (
        <>
          <section className="results">
            {props.results}
          </section>
        </>
      );
    }

class Results extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        request: {},
      };
    }
    render() {
      console.log('inside results', this.props.results)
        return (
          <>
             
             <section className="results">
             <ReactJson src={this.props.results} />
             {/* <JSONPretty id="json-pretty" data={this.props.results}></JSONPretty> */}
             {/* <pre>
                 {JSON.stringify(this.props.results, undefined, 2)}
                 JSON.stringify(data)
              </pre> */}
             </section>
         </>
        );
      }
}
export default Results;