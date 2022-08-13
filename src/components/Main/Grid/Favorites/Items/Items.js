import React from 'react';
import './Items.scss';
import Item from './Item/Item';

function Items() {
  return (
    <div className="items">
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
    </div>
  );
}

export default Items;