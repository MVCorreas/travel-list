import Item from "./Item";

export default function PackingList({items, setItems}) {

    const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    console.log('deleted item with id', id, items);
  };
  return (
    <div className="list">
      <ul>
        {items.map((item, index) => (
          <Item key={index} item={item} onDeleteItem={handleDeleteItem} />
        ))}
      </ul>
      <div className="actions">
        <select>
          <option value="SORT BY INPUT ORDER">SORT BY INPUT ORDER</option>
          <option value="SORT BY ALPHABETICAL ORDER">
            SORT BY ALPHABETICAL ORDER
          </option>
        </select>
        <button className="actions" >CLEAR LIST</button>
      </div>
    </div>
  );
}
