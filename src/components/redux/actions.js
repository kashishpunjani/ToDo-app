// actions.js

import { v4 as uuidv4 } from 'uuid';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_TASK = 'EDIT_TASK'; // New action type for editing task

export const addTask = (text) => ({
  type: ADD_TASK,
  payload: { id: uuidv4(), text, completed: false },
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: { id },
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id },
});

export const editTask = (id, text) => ({ // Action creator for editing task
  type: EDIT_TASK,
  payload: { id, text },
});
