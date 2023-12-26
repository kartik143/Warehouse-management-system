// src/components/RemoveItem.js
import React, { useState } from 'react';

function RemoveItem({ onRemoveItem }) {
  const [itemName, setItemName] = useState('');

  const handleRemoveItem = () => {
    console.log("Removing item:", itemName);

    fetch(`http://localhost:8080/api/warehouse/remove/${itemName}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Item removed successfully:', data);
        onRemoveItem(); // Trigger the onRemoveItem function to update the list
      })
      .catch((error) => {
        console.error('Error removing item:', error);
        // Handle the error, display a message, or perform other actions as needed
      });

    // Reset form field
    setItemName('');
  };

  return (
    <div>
      <h2>Remove Item</h2>
      <input type="text" placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
      <button onClick={handleRemoveItem}>Remove Item</button>
    </div>
  );
}

export default RemoveItem;
