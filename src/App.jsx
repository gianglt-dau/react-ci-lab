import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    const trimmed = task.trim();
    if (!trimmed) return;
    setItems([...items, trimmed]);
    setTask("");
  };

  return (
    <div style={{ maxWidth: 480, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>React CI Lab</h1>
      <p>Nhập việc cần làm và bấm Thêm.</p>

      <div style={{ display: "flex", gap: 8 }}>
        <input
          aria-label="task-input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="VD: Học CI/CD"
          style={{ flex: 1, padding: 8 }}
        />
        <button onClick={handleAdd}>Thêm</button>
      </div>

      <ul style={{ marginTop: 20 }}>
        {items.map((it, idx) => (
          <li key={idx}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
