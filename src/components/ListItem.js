import React from 'react';

function ListItem({ items }) {
  console.log("Items:", items);

  return (
    <div>
      <h2>List Items</h2>
      <div style={{ height: '250px', width: '35%', margin: 'auto', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
        <ul>
          {Array.isArray(items) && items.length > 0 ? (
            items.map((item) => (
              <li key={item.id}>
                {item.name} - Quantity: {item.quantity}
              </li>
            ))
          ) : (
            <p>No items available</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ListItem;
