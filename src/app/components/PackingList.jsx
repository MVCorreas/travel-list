import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onPackItem,
}) {
  const [sortBy, setSortBy] = useState("input");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "description") {
      return a.description.localeCompare(b.description);
    }
    if (sortBy === "packed") {
      return Number(a.packed) - Number(b.packed);
    }
    return 0;
  });

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item, index) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onPackItem={onPackItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button className="actions">CLEAR LIST</button>
      </div>
    </div>
  );
}
