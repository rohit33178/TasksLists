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
      <h1>Project Management Tools</h1>
      <form>
        <input
          type="text"
          placeholder="Enter words"
          style={{ fontSize: '1rem' }}
          value={word}
          onChange={(e) => setWord((preword) => (preword = e.target.value))}
        />
        <button type="button" onClick={handleAddWords}>
          Add
        </button>
      </form>
      <hr />
      <div>
        {lists?.map((item) => (
          <div style={{ display: 'flex'}} key={item.id}>
            <span style={{ fontSize: '1.5rem' }} >
              {item.word}
            </span>
            <span
              style={{ cursor: "pointer", marginLeft: '10px', color: '#f00', fontSize: '1.5rem' }}
              onClick={() => handleDelete(item.id)}
            >
              x
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
