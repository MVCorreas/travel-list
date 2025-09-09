export default function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);

  if (!totalItems)
    return (
      <footer className="stats">
        <em>Start adding some items 📝</em>
      </footer>
    );

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You've got everything! Ready to go ✈️"
          : ` You have ${totalItems} items on your list, and you already packed ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
