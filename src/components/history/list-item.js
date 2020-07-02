import React from 'react';
import ReactJson from 'react-json-view'

const ListItem = (props) => {
  return (
    <li>
      <p>{props.data.method}</p>
      <p>{props.data.url}</p>
      <ReactJson src={props.data.result} />
    </li>
  );
};

export default ListItem;
