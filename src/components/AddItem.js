// src/components/AddItem.js
import React, { useState } from 'react';

function AddItem({ onAddItem }) {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddItem = () => {
    console.log("Adding item:", { itemName, quantity });

    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/warehouse/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: itemName, quantity }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Item added successfully:', data);
        onAddItem(); // Trigger the onAddItem function to update the list
      })
      .catch((error) => {
        console.error('Error adding item:', error);
        // Handle the error, display a message, or perform other actions as needed
      });

    // Reset form fields
    setItemName('');
    setQuantity('');
  };

  return (
    <div>
      <h2>Add Item</h2>
      <input type="text" placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
      <input type="text" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

export default AddItem;
