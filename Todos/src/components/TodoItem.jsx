import { useState } from 'react';

const TodoItem = ({ itemProp, handleChange, delTodo }) => {
    const [editing, setEditing] = useState(false);
    const handleEditing = () => {
        setEditing(true);
      };
      let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  };
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };
    return (
        <li>
            <div style={viewMode}>
            <input 
            type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)} />
        <button onClick={handleEditing}>Edit</button>
            <button 
            onClick={() => delTodo(itemProp.id)}>Remove</button>
            {itemProp.title}
            </div>
            <input
      type="text"
      value={itemProp.title}
      style={editMode}
      onChange={(e) => setUpdate(e.target.value, itemProp.id)}
      onKeyDown={handleUpdatedDone}
    />
        </li>
    )
}

export default TodoItem