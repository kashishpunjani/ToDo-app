// localStorageUtils.js

// Function to save tasks to local storage
export const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  
  // Function to retrieve tasks from local storage
  export const getTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  };
  