import Item from "./Item";

export default function PackingList() {
  return (
    <div className="list">
      {/* <ul>
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ul> */}
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
