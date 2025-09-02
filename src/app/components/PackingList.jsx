export default function PackingList() {
  return (
    <div className="list">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
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
