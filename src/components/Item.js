import React from 'react';

function Item(props) {
  return (
    <div className="item">
      <i className={`fas ${props.icon} fa-2x item__icon`}> </i>
      <h2 className="item__title">{props.title}</h2>
      <p className="item__subtitle text-muted">{props.subtitle}</p>
      <button className="item__button" onClick={() => alert(`Order placed for ${props.title}`)}>
        Order
      </button>
    </div>
  );
}

export default Item;
