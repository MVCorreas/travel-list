import { useState } from "react";
export default function Form({ items, setItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = { quantity, description, packed: false, id: Date.now() };
    console.log('new item', newItem);
    setItems([...items, newItem]);
    
    console.log('items', items);
  };

  return (
    <div className="add-form" >
      <h3>What do you need for your 😍 trip?</h3>
      <select>
        {[...Array(10)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
}
