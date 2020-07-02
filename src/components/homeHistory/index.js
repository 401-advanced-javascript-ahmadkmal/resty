import React from 'react';

import ListItem from './list-item'
class HomeHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rest: JSON.parse(localStorage.getItem('history')),
        };
    }

    handleRest = (result) =>{
        console.log('click on rest api ----->',result);
        this.props.handler(result.id);
    }



    render() {
        console.log('homeHistory----->', this.state.rest)
        let arr = []
        
        for (const [key, value] of Object.entries(this.state.rest)) {
            value['id']=key;
           arr.push(value);
           
        }
        console.log('homeHistory arr----->', arr)
        return (
            <>
                <aside>

                    <ul>
                        {arr.map((data,index) => {
                            return <ListItem key={data.id} data={data} handler={this.handleRest} />;
                        })}
                    </ul>

                </aside>

            </>
        );
    }
}

export default HomeHistory;
