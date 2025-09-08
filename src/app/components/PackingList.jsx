import Item from "./Item";

export default function PackingList({ items, setItems }) {
  // const handlePackItem = (id) => {
  //   setItems((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === id ? { ...item, packed: !item.packed } : item
  //     )
  //   );
  // };
  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="list">
      <ul>
        {items.map((item, index) => (
          <Item key={index} item={item} onDeleteItem={handleDeleteItem} onPackItem={handlePackItem} />
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
