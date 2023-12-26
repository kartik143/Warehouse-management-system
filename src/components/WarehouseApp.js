// src/components/WarehouseApp.js
import React, { useState, useEffect } from 'react';
import AddItem from './AddItem';
import RemoveItem from './RemoveItem';
import ListItem from './ListItem';

function WarehouseApp() {
  const [items, setItems] = useState([]);

  // Function to handle adding an item
  const handleAddItem = () => {
    fetchItemsFromBackend();
  };

  // Function to handle removing an item
  const handleRemoveItem = () => {
    fetchItemsFromBackend();
  };

  // Fetch items from the backend when the component mounts
  useEffect(() => {
    fetchItemsFromBackend();
  }, []);

  // Function to fetch items from the backend and update the state
  const fetchItemsFromBackend = () => {
    fetch('http://localhost:8080/api/warehouse/items')
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  };

  return (
    <div>
      <AddItem onAddItem={handleAddItem} />
      <RemoveItem onRemoveItem={handleRemoveItem} />
      <ListItem items={items} />
    </div>
  );
}

export default WarehouseApp;
