import Item from "./Item";

export default function PackingList({ items, setItems, onDeleteItem }) {
  const handlePackItem = (id, packed) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed } : item
      )
    );
    console.log("item packed", id, items);
    
  };


  return (
    <div className="list">
      <ul>
        {items.map((item, index) => (
          <Item key={index} item={item} onDeleteItem={onDeleteItem} onPackItem={handlePackItem} />
        ))}
      </ul>
      <div className="actions">
        <select>
          <option value="SORT BY INPUT ORDER">SORT BY INPUT ORDER</option>
          <option value="SORT BY ALPHABETICAL ORDER">
            SORT BY ALPHABETICAL ORDER
          </option>
        </select>
        <button className="actions">CLEAR LIST</button>
      </div>
    </div>
  );
}
