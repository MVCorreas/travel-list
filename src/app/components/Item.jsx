import { useState } from "react";

export default function Item({ item, onDeleteItem }) {
  const [checked, setChecked] = useState(false);
  
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
