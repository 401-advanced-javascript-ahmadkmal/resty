import React from 'react';
 

const ListItem = (props) => {
  const handleClick = e =>{
    const id = e.target.id;
    props.handler({ id });
  }
  return (
    <li onClick={handleClick} id={props.data.id}>
      <p>{props.data.method}</p>
      <p>{props.data.url}</p>
      
    </li>
  );
};

export default ListItem;
