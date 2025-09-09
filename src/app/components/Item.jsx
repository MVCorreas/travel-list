export default function Item({ item, onDeleteItem, onPackItem }) {

  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={(e) => onPackItem(item.id, e.target.packed)}
      />
      <p>{item.quantity}</p>
      <p style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </p>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
