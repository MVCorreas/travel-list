export default function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select>
        {[...Array(10)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </div>
  );
}
