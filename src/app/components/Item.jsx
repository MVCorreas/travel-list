import { useState } from "react";

export default function Item({ item, onDeleteItem, onPackItem }) {
  const [checked, setChecked] = useState(false);

  // const handlePackItem = () => {
  //   onPackItem(item.id);
  // };
  
  return (
    <li>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <p>{item.quantity}</p>
      <p>{item.description}</p>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
