import React from 'react';

function Item(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{`${props.minWords} - ${props.maxWords} words`}</p>
      <button className="btn btn-primary" onClick={() => alert(`Order placed for ${props.title}`)}>
        Order
      </button>
    </div>
  );
}

export default Item;
