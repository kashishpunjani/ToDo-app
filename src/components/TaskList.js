import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from './redux/actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editText, setEditText] = useState({ id: null, text: '' });

  const handleEdit = (id, text) => {
    setEditText({ id, text });
  };

  const handleSaveEdit = (id) => {
    dispatch(editTask(id, editText.text));
    setEditText({ id: null, text: '' });
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}> {/* Ensure each <li> has a unique key */}
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch(toggleTask(task.id))}
          />
          {editText.id === task.id ? (
            <>
              <input
                type="text"
                value={editText.text}
                onChange={(e) => setEditText({ ...editText, text: e.target.value })}
              />
              <button onClick={() => handleSaveEdit(task.id)}>Save</button>
            </>
          ) : (
            <>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
              <button onClick={() => handleEdit(task.id, task.text)}>Edit</button>
              <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
