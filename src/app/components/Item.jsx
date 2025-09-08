import { useState } from "react";

export default function Item({ item }) {
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
    </li>
  );
}
