import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [lists, setLists] = useState([{ id: 1, word: 'hello world' }]);
  const [word, setWord] = useState("");
  function handleAddWords(e) {
    e.preventDefault();
    let id = lists.length + 1;
    if (word) {
      setLists((lists) => [...lists, { id, word }]);
      setWord('');
    }
  }
  function handleDelete(id) {
    setLists(lists.filter((item) => item.id !== id));
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <form>
        <input
          type="text"
          placeholder="Enter words"
          value={word}
          onChange={(e) => setWord((preword) => (preword = e.target.value))}
        />
        <button type="button" onClick={handleAddWords}>
          Add
        </button>
      </form>
      <hr />
      <ul>
        {lists?.map((item) => (
          <div style={{ display: 'flex', alignItems: "5px" }} key={item.id}>
            <li style={{ listStyle: 'none' }} >
              {item.word}
            </li>
            <button

              style={{ marginLeft: '5px', background: "#000", color: "#fff", borderRadius: "50px", border: "0px", cursor: "pointer" }}
              onClick={() => handleDelete(item.id)}
            >
              x
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
