import React from 'react';

import ListItem from './list-item'


class History extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rest: JSON.parse(localStorage.getItem('history')),
        };
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
                            return <ListItem key={data.id} data={data} />;
                        })}
                    </ul>

                </aside>

            </>
        );
    }
}

export default History;
