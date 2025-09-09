export default function Item({ item, onDeleteItem, onPackItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onPackItem(item.id)}
      />
      <p>{item.quantity}</p>
      <p style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </p>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
