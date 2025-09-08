import { useState } from "react";

export default function Form({ items, setItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = { quantity, description, packed: false, id: Date.now() };
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  };

  return (
    <form className="add-form" onSubmit={handleAddItem}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {[...Array(10)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
