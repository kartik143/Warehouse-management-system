// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';
import RemoveItem from './components/RemoveItem';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch('/api/warehouse/items')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  const handleAddItem = (item) => {
    fetch('/api/warehouse/items/add', {  // Fix the endpoint path
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then(response => response.json())
      .then(data => setItems(data));
  };

  const handleRemoveItem = (itemName) => {
    fetch(`/api/warehouse/items/remove?itemName=${itemName}`, {  // Fix the endpoint path
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => setItems(data));
  };

  return (
    <div className="App">
      <h1 style={{ textDecoration: 'underline', fontFamily: 'DotumChe', color: 'DarkGreen' }}>
      Warehouse Management System
</h1>

      <AddItem onAddItem={handleAddItem} />
      <ListItem items={items} />
      <RemoveItem onRemoveItem={handleRemoveItem} />
    </div>
  );
}

export default App;
